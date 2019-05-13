(function($) {
    $(document).ready(function() {
        //alert('hello');
        $("#txt_gacode").val('');
        $("#txt_gacode").val('<!-- Global site tag (gtag.js) - Google Analytics --><script async src="https://www.googletagmanager.com/gtag/js?id=UA-125421018-1"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "UA-125421018-1");</script>');

        $("#txt_Robots").val('index, follow');
        $("#txt_Author").val('VIMHANS | Vidyasagar Institute of Mental Health, Neuro and Allied Sciences');

        //ddl_type
        $("#ddl_type").change(function() {
            //Education.aspx
            var id = '';
            if ($(this).val() == "Education") {
                //id = BindMaxIDData('Education');
                $("#txt_href").val('Education.aspx');
                $("#txt_CanonicalLink").val('http://www.vimhans.com/events/education.aspx?id=');
            }
            else if ($(this).val() == "Event") {
                //id = BindMaxIDData('Event');
                $("#txt_href").val('event-details.aspx');
                $("#txt_CanonicalLink").val('http://www.vimhans.com/events/event-details.aspx?id=');
            }
            else {
                //id = BindMaxIDData('Event');
                $("#txt_href").val('event-details.aspx');
                $("#txt_CanonicalLink").val('http://www.vimhans.com/events/event-details.aspx?id=');
            }

            //alert(id);

        });
        BindEventDetails(); //btn_reset
        $("#btn_reset").click(function() {
            clear();
        });
        $("#btn_primary").click(function() {
            //alert(response.d);
            debugger;
            var from = $('#txt_from').val();
            var to = $('#txt_to').val();
            var type = $('#ddl_type').val();
            var headline = $('#txt_headline').val();
            var href = $('#txt_href').val();
            var description = $('#txt_desc').val();
            var robot = $('#txt_Robots').val();
            var author = $('#txt_Author').val();
            var canonical_link = $('#txt_CanonicalLink').val();
            var page_inpkeywords = $('#txt_PageImpKey').val();
            var page_des = $('#Txt_PageDes').val();
            var ga_code = $('#txt_gacode').val();
            var active_upto = $('#txt_active_upto').val();

            if ($("#txtTitle").val() == "") {
                $("#txtTitle").focus();
                $("#txtTitle").css('border-color', 'red');
                $("#divErrorMsg").css("display", "block");
                $("#spnerrormsg").text("please enter Title !");
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $(window).scrollTop(0, 0);
                return false;

            }
            else {
                $("#txtTitle").css('border-color', '#ccc').css("border-width", "thin").css("border-size", "1px").css("border-style", "solid");
            }


            if ($("#txt_Robots").val() == "") {
                $("#txt_Robots").focus();
                $("#txt_Robots").css('border-color', 'red');
                $("#divErrorMsg").css("display", "block");
                $("#spnerrormsg").text("please enter ROBOTS !");
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $(window).scrollTop(0, 0);
                return false;

            }
            else {
                $("#txt_Robots").css('border-color', '#ccc').css("border-width", "thin").css("border-size", "1px").css("border-style", "solid");
            }

            if ($("#txt_CanonicalLink").val() == "") {
                $("#txt_CanonicalLink").focus();
                $("#txt_CanonicalLink").css('border-color', 'red');
                $("#divErrorMsg").css("display", "block");
                $("#spnerrormsg").text("please enter Canonical Link !");
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $(window).scrollTop(0, 0);
                return false;

            }
            else {
                $("#txt_CanonicalLink").css('border-color', '#ccc').css("border-width", "thin").css("border-size", "1px").css("border-style", "solid");
            }

            if ($("#txt_PageImpKey").val() == "") {
                $("#txt_PageImpKey").focus();
                $("#txt_PageImpKey").css('border-color', 'red');
                $("#divErrorMsg").css("display", "block");
                $("#spnerrormsg").text("please enter PageImp Key!");
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $(window).scrollTop(0, 0);
                return false;

            }
            else {
                $("#txt_PageImpKey").css('border-color', '#ccc').css("border-width", "thin").css("border-size", "1px").css("border-style", "solid");
            }

            if ($("#txt_gacode").val() == "") {
                $("#txt_gacode").focus();
                $("#txt_gacode").css('border-color', 'red');

                $("#divErrorMsg").css("display", "block");
                $("#spnerrormsg").text("please enter Ga code!");
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $(window).scrollTop(0, 0);

                return false;

            }
            else {
                $("#txt_gacode").css('border-color', '#ccc').css("border-width", "thin").css("border-size", "1px").css("border-style", "solid");
            }
            if ($("#Txt_PageDes").val() == "") {
                $("#Txt_PageDes").focus();
                $("#Txt_PageDes").css('border-color', 'red');

                $("#divErrorMsg").css("display", "block");
                $("#spnerrormsg").text("please enter Page Description !");
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $(window).scrollTop(0, 0);

                return false;

            }
            else {
                $("#Txt_PageDes").css('border-color', '#ccc').css("border-width", "thin").css("border-size", "1px").css("border-style", "solid");
            }

            if ($("#txt_headline").val() == "") {
                $("#txt_headline").focus();
                $("#txt_headline").css('border-color', 'red');

                $("#divErrorMsg").css("display", "block");
                $("#spnerrormsg").text("please enter Headline !");
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $(window).scrollTop(0, 0);
                return false;

            }
            else {
                $("#txt_headline").css('border-color', '#ccc').css("border-width", "thin").css("border-size", "1px").css("border-style", "solid");
            }

            if ($("#ddl_type").val() == "0") {
                $("#ddl_type").focus();
                $("#ddl_type").css('border-color', 'red');

                $("#divErrorMsg").css("display", "block");
                $("#spnerrormsg").text("please select Type !");
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $(window).scrollTop(0, 0);

                return false;

            }
            else {
                $("#ddl_type").css('border-color', '#ccc').css("border-width", "thin").css("border-size", "1px").css("border-style", "solid");
            }


            if ($("#txt_href").val() == "") {
                $("#txt_href").focus();
                $("#txt_href").css('border-color', 'red');

                $("#divErrorMsg").css("display", "block");
                $("#spnerrormsg").text("please enter HREF !");
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $(window).scrollTop(0, 0);

                return false;

            }
            else {
                $("#txt_href").css('border-color', '#ccc').css("border-width", "thin").css("border-size", "1px").css("border-style", "solid");
            }

            if ($("#txt_desc").val() == "") {
                $("#txt_desc").focus();
                $("#txt_desc").css('border-color', 'red');

                $("#divErrorMsg").css("display", "block");
                $("#spnerrormsg").text("please enter Description !");
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $(window).scrollTop(0, 0);

                return false;

            }
            else {
                $("#txt_desc").css('border-color', '#ccc').css("border-width", "thin").css("border-size", "1px").css("border-style", "solid");
            }


            var status_bit = $('#ddl_status').val();
            if (status_bit == "Active") {
                var status = 'A';
            }
            else {
                var status = 'D';
            }

            var _IstxtTypeval = 0;
            if ($("#txtType").prop('checked')) {
                _IstxtTypeval = 1;
            }
            else {
                _IstxtTypeval = 0;
            }
            // debugger;


            $.ajax
({
    type: 'POST',
    url: 'EventMaster.aspx/SaveContentData',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    cache: false,
    async: false,
    data: "{'FROM':'" + from + "','TO':'" + to + "','TYPE':'" + type + "','HEADLINE':'" + headline + "','HREF':'" + href + "','DESCRIPTION':'" + description + "','WEBSITE_AUTHOR':'" + author + "','CANONICAL_LINK':'" + canonical_link + "','PAGE_IMP_KEYWORDS':'" + page_inpkeywords + "','PAGE_DESCRIPTION':'" + page_des + "','WEB_ROBOTS':'" + robot + "','STATUS':'" + status + "','IS_URL':'" + _IstxtTypeval + "','GA_CODE':'12','ACTIVE_UPTO':'" + active_upto + "','PAGE_TITLE':'" + $("#txtTitle").val() + "'}",
    beforeSend: function() {
    },
    success: function(response) {
        //alert('Data Saved Succesfully');
        $("#divalertSuccess").css("display", "block");
        $("#strngSuccess").text("Record Save Successfully !");
        $("#divalertSuccess").delay(3200).fadeOut(300);
        $(window).scrollTop(0, 0);
        BindEventDetails();

        clear();
    },
    failure: function(response) {
        alert('Failed during Saving record');
    },
    error: function(response) {
        alert('Error during Saving record ');
    }

}); //ajax ends

        }); //btn ends

        $("#btnUpdate").click(function() {
            //alert('hello');
            //alert(response.d);//txtTitle
            debugger;
            var from = $('#txt_from').val();
            var to = $('#txt_to').val();
            var type = $('#ddl_type').val();
            var headline = $('#txt_headline').val();
            var href = $('#txt_href').val();
            var description = $('#txt_desc').val();
            var robot = $('#txt_Robots').val();
            var author = $('#txt_Author').val();
            var canonical_link = $('#txt_CanonicalLink').val();
            var page_inpkeywords = $('#txt_PageImpKey').val();
            var page_des = $('#Txt_PageDes').val();
            var ga_code = $('#txt_gacode').val();
            var active_upto = $('#txt_active_upto').val();

            if ($("#txtTitle").val() == "") {
                $("#txtTitle").focus();
                $("#txtTitle").css('border-color', 'red');
                $("#divErrorMsg").css("display", "block");
                $("#spnerrormsg").text("please enter Title !");
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $(window).scrollTop(0, 0);
                return false;

            }
            else {
                $("#txtTitle").css('border-color', '#ccc').css("border-width", "thin").css("border-size", "1px").css("border-style", "solid");
            }


            if ($("#txt_Robots").val() == "") {
                $("#txt_Robots").focus();
                $("#txt_Robots").css('border-color', 'red');
                $("#divErrorMsg").css("display", "block");
                $("#spnerrormsg").text("please enter ROBOTS !");
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $(window).scrollTop(0, 0);
                return false;

            }
            else {
                $("#txt_Robots").css('border-color', '#ccc').css("border-width", "thin").css("border-size", "1px").css("border-style", "solid");
            }

            if ($("#txt_CanonicalLink").val() == "") {
                $("#txt_CanonicalLink").focus();
                $("#txt_CanonicalLink").css('border-color', 'red');
                $("#divErrorMsg").css("display", "block");
                $("#spnerrormsg").text("please enter Canonical Link !");
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $(window).scrollTop(0, 0);
                return false;

            }
            else {
                $("#txt_CanonicalLink").css('border-color', '#ccc').css("border-width", "thin").css("border-size", "1px").css("border-style", "solid");
            }

            if ($("#txt_PageImpKey").val() == "") {
                $("#txt_PageImpKey").focus();
                $("#txt_PageImpKey").css('border-color', 'red');
                $("#divErrorMsg").css("display", "block");
                $("#spnerrormsg").text("please enter PageImp Key!");
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $(window).scrollTop(0, 0);
                return false;

            }
            else {
                $("#txt_PageImpKey").css('border-color', '#ccc').css("border-width", "thin").css("border-size", "1px").css("border-style", "solid");
            }

            if ($("#txt_gacode").val() == "") {
                $("#txt_gacode").focus();
                $("#txt_gacode").css('border-color', 'red');

                $("#divErrorMsg").css("display", "block");
                $("#spnerrormsg").text("please enter Ga code!");
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $(window).scrollTop(0, 0);

                return false;

            }
            else {
                $("#txt_gacode").css('border-color', '#ccc').css("border-width", "thin").css("border-size", "1px").css("border-style", "solid");
            }
            if ($("#Txt_PageDes").val() == "") {
                $("#Txt_PageDes").focus();
                $("#Txt_PageDes").css('border-color', 'red');

                $("#divErrorMsg").css("display", "block");
                $("#spnerrormsg").text("please enter Page Description !");
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $(window).scrollTop(0, 0);

                return false;

            }
            else {
                $("#Txt_PageDes").css('border-color', '#ccc').css("border-width", "thin").css("border-size", "1px").css("border-style", "solid");
            }

            if ($("#txt_headline").val() == "") {
                $("#txt_headline").focus();
                $("#txt_headline").css('border-color', 'red');

                $("#divErrorMsg").css("display", "block");
                $("#spnerrormsg").text("please enter Headline !");
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $(window).scrollTop(0, 0);
                return false;

            }
            else {
                $("#txt_headline").css('border-color', '#ccc').css("border-width", "thin").css("border-size", "1px").css("border-style", "solid");
            }

            if ($("#ddl_type").val() == "0") {
                $("#ddl_type").focus();
                $("#ddl_type").css('border-color', 'red');

                $("#divErrorMsg").css("display", "block");
                $("#spnerrormsg").text("please select Type !");
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $(window).scrollTop(0, 0);

                return false;

            }
            else {
                $("#ddl_type").css('border-color', '#ccc').css("border-width", "thin").css("border-size", "1px").css("border-style", "solid");
            }


            if ($("#txt_href").val() == "") {
                $("#txt_href").focus();
                $("#txt_href").css('border-color', 'red');

                $("#divErrorMsg").css("display", "block");
                $("#spnerrormsg").text("please enter HREF !");
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $(window).scrollTop(0, 0);

                return false;

            }
            else {
                $("#txt_href").css('border-color', '#ccc').css("border-width", "thin").css("border-size", "1px").css("border-style", "solid");
            }

            if ($("#txt_desc").val() == "") {
                $("#txt_desc").focus();
                $("#txt_desc").css('border-color', 'red');

                $("#divErrorMsg").css("display", "block");
                $("#spnerrormsg").text("please enter Description !");
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $(window).scrollTop(0, 0);

                return false;

            }
            else {
                $("#txt_desc").css('border-color', '#ccc').css("border-width", "thin").css("border-size", "1px").css("border-style", "solid");
            }


            var status_bit = $('#ddl_status').val();
            if (status_bit == "Active") {
                var status = 'A';
            }
            else {
                var status = 'D';
            }

            var _IstxtTypeval = 0;
            if ($("#txtType").prop('checked')) {
                _IstxtTypeval = 1;
            }
            else {
                _IstxtTypeval = 0;
            }

            // debugger;


            $.ajax
({
    type: 'POST',
    url: 'EventMaster.aspx/UpdateContentData',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    cache: false,
    async: false,
    data: "{'FROM':'" + from + "','TO':'" + to + "','TYPE':'" + type + "','HEADLINE':'" + headline + "','HREF':'" + href + "','DESCRIPTION':'" + description + "','WEBSITE_AUTHOR':'" + author + "','CANONICAL_LINK':'" + canonical_link + "','PAGE_IMP_KEYWORDS':'" + page_inpkeywords + "','PAGE_DESCRIPTION':'" + page_des + "','WEB_ROBOTS':'" + robot + "','STATUS':'" + status + "','IS_URL':'" + _IstxtTypeval + "','GA_CODE':'" + ga_code + "','ACTIVE_UPTO':'" + active_upto + "','HEADLINE_ID':'" + $("#hdncode").val() + "','PAGE_TITLE':'" + $("#txtTitle").val() + "'}",
    beforeSend: function() {
    },
    success: function(response) {
        $("#divalertSuccess").css("display", "block");
        $("#strngSuccess").text("Record Updated Successfully !");
        $("#divalertSuccess").delay(3200).fadeOut(300);
        $(window).scrollTop(0, 0);
        BindEventDetails();
        clear();
    },
    failure: function(response) {
        alert('Failed during Updating record');
    },
    error: function(response) {
        alert('Error during Updating record ');
    }

}); //ajax ends

        }); //btn ends

    }); //READY FUNCTION END

    clear = function() {//txtTitle
        $('#txt_from').val('');
        $('#txtTitle').val('');
        $('#txt_to').val('');
        $('#txt_active_upto').val('');
        $('#txtType').val('0');
        $('#ddl_type').val('0');
        $('#txt_headline').val('');
        $('#txt_href').val('');
        $('#txt_desc').val('');
        $('#ddl_status').val('0');
        $('#txt_Robots').val('');
        $('#btnUpdate').css('display', 'none');
        $('#btn_primary').css('display', '');
        $('#txt_CanonicalLink').val('');
        $('#txt_PageImpKey').val('');
        $('#Txt_PageDes').val('');
        $('#txt_gacode').val('');

    } //clear end

    function getUrlVars() {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }
    BindMaxIDData = function(_type) {
 
        var _maxID = ''
        $.ajax
        ({
            type: 'POST',
            url: 'EventMaster.aspx/GetMaxID',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            cache: false,
            async: false,
            data: "",
            beforeSend: function() {
            },
            success: function(response) {
                //alert(response.d);
                if (_type == "Education") {
                    $("#txt_CanonicalLink").val('http://www.vimhans.com/events/education.aspx?id=' + response.d);
                }
                else {
                    $("#txt_CanonicalLink").val('http://www.vimhans.com/events/event-details.aspx?id=' + response.d);
                }

            },
            failure: function(response) {
                alert('Failed during Binding Max record');
            },
            error: function(response) {
                alert('Error during Binding Max record ');
            }

        }); //ajax ends
        //return _maxID;

    }

   

    BindEventDetails = function() {
        //  alert('HELLO');

        debugger;

        $.ajax({
            type: 'POST',
            url: 'EventMaster.aspx/GetEventDetails',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            cache: false,
            async: false,
            data: "",
            beforeSend: function() {
            },
            success: function(response) {
                //alert(response.d);
                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);

                var items = xml.find("Table");

                var table = $('<table id="tblEventMaster" style="font-family:Calibri;font-size:12px;" class="table table-bordered table-hover" ></table>');

                var row = '';

                var count = 0;
                var ctr = 1;

                $.each(items, function(index) {


                    if (parseInt(count) == 0) {
                        var rowheader = '<thead style="font-size:12px;"><tr>';
                        rowheader += '<th style="">Sr.no</th>';
                        rowheader += '<th>Valid From</th>';
                        rowheader += '<th>Valid To</th>';
                        rowheader += '<th>Active Upto</th>';
                        rowheader += '<th>Type</th>';
                        rowheader += '<th>Headline</th>';
                        rowheader += '<th>Action</th>';


                        rowheader += '</tr></thead>';

                        table.append(rowheader);
                    }
                    //var _newId = count++;

                    var rowcol = '';
                    rowcol += '<tbody style="font-size:13px;"><tr>';

                    rowcol += '<td>' + ctr + '</td>';
                    rowcol += '<td>' + $(this).find("VALID_FROM").text() + '</td>';
                    rowcol += '<td>' + $(this).find("VALID_TO").text() + '</td>';
                    rowcol += '<td>' + $(this).find("ACTIVE_UPTO").text() + '</td>';
                    rowcol += '<td>' + $(this).find("TYPE").text() + '</td>';
                    rowcol += '<td>' + $(this).find("HEADLINE").text() + '</td>';


                    rowcol += '<td style="width:110px;white-space:nowrap;"><button type="button" id="btnEditEvent" onclick="EditRecord(' + $(this).find("HEADLINE_ID").text() + ')" class="btn btn-info" style="font-family: Calibri; font-size: 12px;"><i class="fa fa-edit" aria-hidden="true"></i></button>&nbsp;&nbsp;<button type="button" id="btnDeleteEvent" onclick="DeleteRecord(' + $(this).find("HEADLINE_ID").text() + ')" class="btn btn-danger" style="font-family: Calibri; font-size: 12px;"><i class="fa fa-trash fa-lg" aria-hidden="true"></i></button></td>';

                    rowcol += '</tr></tbody>';


                    table.append(rowcol);
                    ctr++;
                    count += 1;

                }); //each end here 
                //}
                if (parseInt(count) == 0) {
                    var rowcol = '';
                    rowcol += '<tbody><tr><td colspan="7" style="font-weight:bold;"><i class="fa fa-exclamation-triangle" style="font-size:24px;color:red;"></i>&nbsp;&nbsp;No records found !</td></tr>';
                    table.append(rowcol);
                    $('#divAttachmentEventMasterDetails').html(table);
                }
                else {
                    $('#divAttachmentEventMasterDetails').html(table);
                    var _table = $('#divAttachmentEventMasterDetails table'); //                        
                    bind_filterevent(_table);
                    paginateIt(_table, 10);
                    visibility_paging(_table);

                }

            },
            failure: function(response) {
                alert('Bind Failed');
            },
            error: function(response) {
                alert('Bind Error');
            }
        }); //ajax end
    } //end here

    //edit function

    EditRecord = function(_code) {

        debugger;
        $("#btn_primary").css("display", "none");
        $("#btnUpdate").css("display", "");
        $("#hdncode").val(_code);

        //alert(_code);
        $.ajax({
            type: 'POST',
            url: 'EventMaster.aspx/GetEditEvent',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            cache: false,
            async: false,
            data: "{'HEADLINE_ID':'" + _code + "'}",
            beforeSend: function() {
            },
            success: function(response) {
                //alert(response.d);
                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);

                var items = xml.find("Table");
                //var table = '<table id="tblBrand" style="font-family:Calibri;" class="table table-bordered table-hover" ></table>';
                var row = '';

                var count = 0;

                $.each(items, function(index) {
                    //alert($(this).find("TYPE").text());txtTitle
                    $("#txtTitle").val($(this).find("WEB_TITLE").text());
                    $("#txt_Robots").val($(this).find("WEB_ROBOTS").text());
                    $("#txt_Author").val($(this).find("WEBSITE_AUTHOR").text());
                    $("#txt_CanonicalLink").val($(this).find("CANONICAL_LINK").text());
                    $("#txt_PageImpKey").val($(this).find("PAGE_IMP_KEYWORDS").text());
                    $("#txt_gacode").val($(this).find("GA_CODE").text());
                    $("#txt_to").val($(this).find("VALID_TO").text());

                    $("#txt_active_upto").val($(this).find("ACTIVE_UPTO").text());

                    $("#ddl_type").val($(this).find("TYPE").text());
                    $("#txt_headline").val($(this).find("HEADLINE").text());
                    $("#txt_from").val($(this).find("VALID_FROM").text());
                    $("#txt_href").val($(this).find("HREF").text());
                    $("#txtType").val($(this).find("IS_URL").text());
                    $("#txt_desc").val($(this).find("DESCRIPTION").text());
                    $("#ddl_status").val($(this).find("STATUS").text());
                    $("#Txt_PageDes").val($(this).find("PAGE_DESCRIPTION").text());








                });

            },
            failure: function(response) {
                alert('Bind Failed');
            },
            error: function(response) {
                alert('Bind Error');
            }
        });
    }

    DeleteRecord21251 = function(_code) {
        debugger;
        //alert(_code);
        $("#hdncode").val(_code);
        $("#myModalforEventMasterDetails").modal({
            show: true,
            width: '740px' //probably not needed
            //probably not needed 
        });
    }
    //btnDelete
    // $("#btnDeleteEvent").click(function() {
    DeleteRecord = function(_code) {
        debugger;
        $.ajax({
            type: 'POST',
            url: 'EventMaster.aspx/GetEventDelete',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            cache: false,
            async: false,
            data: "{'HEADLINE_ID':'" + _code + "'}",
            beforeSend: function() {
            },
            success: function(response) {
                //alert(response.d);                    
                $("#divalertSuccess").css("display", "block");
                $("#strngSuccess").text("Record deleted Successfully !");
                $("#divalertSuccess").delay(3200).fadeOut(300);
                $("#txt_from").val('');
                BindEventDetails();
                $(window).scrollTop(0, 0);
                $("#btnReset").trigger('click');

            },
            failure: function(response) {
                alert('Supplier Delete Failed');
            },
            error: function(response) {
                alert('Supplier Delete Error');
            }
        });
    }
    // });



})(jQuery);




