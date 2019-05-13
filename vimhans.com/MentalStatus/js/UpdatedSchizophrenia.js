(function($) {
    $(document).ready(function() {
        alert("hello");
        BindPresentatingSymptoms();

    }); //end bind function


    BindPresentatingSymptoms = function() {
       
        alert("PS");
        // $("#hdncode").val(_code);

        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/BindSymptoms',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            cache: false,
            async: false,
            data: "",


            success: function(response) {
                //alert(response.d);
                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);

                var items = xml.find("Table");
                var table = $('<table id="tbldivBindSymptoms' + $(this).find("CODE").text() + '" style="font-family:Calibri;" class="table table-bordered table-hover mt-2" ></table>');
                var row = '';
                var count = 0;
                $.each(items, function(index) {
                    if (parseInt(count) == 0) {
                        var rowheader = '<thead><tr>';
                        rowheader += '<th>S.No</th>';
                        rowheader += '<th>Question</th>';
                        rowheader += '<th>Result</th>';
                        rowheader += '<th>Remarks</th>';

                        rowheader += '</tr></thead>';
                        table.append(rowheader);
                    }
                    var rowcol = '';
                    rowcol += '<tbody><tr>';


                    rowcol += '<td><span class="txtNameSymptoms" id="txtNameSymptoms' + $(this).find("CODE").text() + '">' + $(this).find("S_NO").text() + '</span></td>';
                   
                    rowcol += '<td><span class="txtNameSymptoms" id="txtNameSymptoms' + $(this).find("CODE").text() + '">' + $(this).find("NAME").text() + '</span></td>';
                    rowcol += '<td><div class="radio"><i class="fa fa-circle-thin" id="rdbYES6239" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> YES &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="rdbNo6239" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> NO</div></td>';
                    rowcol += '<td><input type="text" class="form-control txtNameSymptoms"  id="txtNameSymptoms"/></td>';
//                    rowcol += '<td><input type="hidden" id="hdnQuestionGroupCode" class="hdnQuestionGroupCode" value="' + $(this).find("CODE").text() + '" /><input type="hidden" id="txtCodeSymptoms" class="txtCodeSymptoms" value="' + $(this).find("NAME").text() + '" /></td>';
//                    rowcol += '<td style="display:none;"><input type="text" style="margin-top: 17px;" disabled class="form-control txtNameSymptoms"  id="txtNameSymptoms" value="' + $(this).find("NAME").text() + '" /></td>';

                    table.append(rowcol);
                    count += 1;
                }); //each end here
                $("#Presenting_symptoms").html(table);
                var _table = $('#Presenting_symptoms table'); //                        
                bind_filterevent(_table);
                paginateIt(_table, 10);
                visibility_paging(_table);


            },
            failure: function(response) {
                alert('Failed during fetching record');
            },
            error: function(response) {
                alert('Error during fetching record ');
            }

        }); //post data end here

    } //function end here......



})(jQuery);      //end main js