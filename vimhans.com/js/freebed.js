


(function ($) {
   $(document).ready(function(){
   //alert('dd');
       BindFreeBed();
       BindAvailableBed('Critical');
       
       $("#ddlCritical").on('change',function(){
       
            var _type=$("#ddlCritical").val();
            
            BindAvailableBed(_type);
            
        
       });


$("#btnDishargeDelete").click(function(){
	//alert('Please enter Remarks !');
//        var _txtRemarks=$("#txtRemarks").val();
        
            var _txtRemarks = $("#txtRemarks").val();
            var _txtDischarge = $("#ddl_Discharge").val();
            var _txtReason = $("#ddl_Reason").val();
            var _txtDischargeDate = $("#txt_dischargedate").val();
            var _txtDischargeTime = $("#txt_dischargeTime").val();
         
         if ($("#ddl_Discharge").val()=="0")
         {   
             $("#ddl_Discharge").focus();
             $("#ddl_Discharge").css('border-color','red');
             alert('Please select Discharge type !');
             return false;
          
          }
          else
          {
             $("#ddl_Discharge").css('border-color','#ccc').css("border-width","thin").css("border-size","1px").css("border-style","solid");
          }
          if ($("#ddl_Reason").val()=="0")
         {   
             $("#ddl_Reason").focus();
             $("#ddl_Reason").css('border-color','red');
             alert('Please select Reason for Discharge !');
             return false;
          
          }
          else
          {
             $("#ddl_Reason").css('border-color','#ccc').css("border-width","thin").css("border-size","1px").css("border-style","solid");
          }
          if ($("#txt_dischargedate").val()=="")
         {   
             $("#txt_dischargedate").focus();
             $("#txt_dischargedate").css('border-color','red');
             alert('Please enter Discharge date !');
             return false;
          
          }
          else
          {
             $("#txt_dischargedate").css('border-color','#ccc').css("border-width","thin").css("border-size","1px").css("border-style","solid");
          }
             
         if ($("#txtRemarks").val()=="")
         {   
             $("#txtRemarks").focus();
             $("#txtRemarks").css('border-color','red');
             alert('Please enter Remarks !');
             return false;
          
          }
          else
          {
             $("#txtRemarks").css('border-color','#ccc').css("border-width","thin").css("border-size","1px").css("border-style","solid");
          }
          
        if(_txtRemarks=="")
        {
            alert('Please enter Remarks !');
            $("#txtRemarks").focus();
            return false;
        }
        else
        {
            $.ajax({
                type: 'POST',
                url: 'FREEBED.aspx/UpdateDischarge',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                cache: false,
                async: false,
                //data: "{'ID':'" + $("#hdncode").val() + "','REMARKS':'" + _txtRemarks + "'}",
                data: "{'ID':'" + $("#hdncode").val() + "','REMARKS':'" + _txtRemarks + "','DISCHARGE_TYPE':'" + _txtDischarge + "','DISCHARGE_REASON':'" + _txtReason + "','DISCHARGE_TIME':'" + _txtDischargeTime + "','DISCHARGE_DATE':'" + _txtDischargeDate + "'}",
                beforeSend: function () {
                },
                success: function (response) {
                //alert(response.d);     
                BindFreeBed();               
                       alert('Discharge Updated Successfully !');
                       $("#txtRemarks").val('');
                       
                       $("#btnCloseManufacturer").trigger('click');

                },
                failure: function (response) {
                    alert('Discharge Save Failed');
                },
                error: function (response) {
                    alert('Discharge Save Error');
                }
            });
            
        }

});

var headline_id = getUrlVars()["id"];


$("#btnReset").click(function()
{
 clear();
});
            $("#btn_savedetails").click(function()
            {
            //alert('hello');
            

            //var patient = $('#hdncode').val();
            var available_bed = '0';
            
            var gender = $('#ddlGender').val();
            //var available_bed = $('#ddlAvailable').val();
            var critical_noncritical = $('#ddlCritical').val();
            var diagnosis_detail = $('#Txt_Diagnosis').val();
            var referred_from = $('#ddl_RefeerredFrom').val();
            var admit_under_dept = $('#Txt_AdmitUnderDept').val();
            var admit_under_unit = $('#Txt_AdmitUnderUnit').val();
            var name = $('#Txt_Name').val();
            var relation = $('#Txt_Relation').val();
            var mobile_no = $('#Txt_MobileNo').val();
            var phone_no = $('#Txt_PhoneNo').val();
            var patient_name = $('#txtPatient_name').val();
            var patient_age = $('#txtPatient_age').val();
            var patient_ad_no = $("#txtAdmissionNo").val();
            var icd_detail = $("#txt_icd").val();
            var patient_ad_no = $("#txtAdmissionNo").val();
            var _dateofadmission = $("#txtDateofAdmission").val();
            //var doc_upload = $("#txtFileName1").val();
            
             if ($("#txtAdmissionNo").val()=="")
         {   
             $("#txtAdmissionNo").focus();
             $("#txtAdmissionNo").css('border-color','red');
             return false;
          
          }
          else
          {
             $("#txtAdmissionNo").css('border-color','#ccc').css("border-width","thin").css("border-size","1px").css("border-style","solid");
          }
             if ($("#txtPatient_name").val()=="")
         {   
             $("#txtPatient_name").focus();
             $("#txtPatient_name").css('border-color','red');
             //alert('Please enter Patient Name !');
             return false;
          
          }
          else
          {
             $("#txtPatient_name").css('border-color','#ccc').css("border-width","thin").css("border-size","1px").css("border-style","solid");
          }
          
          if ($("#txtPatient_age").val()=="")
         {   
             $("#txtPatient_age").focus();
             $("#txtPatient_age").css('border-color','red');
             return false;
          
          }
          else
          {
             $("#txtPatient_age").css('border-color','#ccc').css("border-width","thin").css("border-size","1px").css("border-style","solid");
          }
          
         if ($("#txtDateofAdmission").val()=="")
         {   
             $("#txtDateofAdmission").focus();
             $("#txtDateofAdmission").css('border-color','red');
             return false;
          
          }
          else
          {
             $("#txtDateofAdmission").css('border-color','#ccc').css("border-width","thin").css("border-size","1px").css("border-style","solid");
          }
          
         
          
        if($("#Txt_Diagnosis").val()=="")
         {                 
             $("#Txt_Diagnosis").focus();
             $("#Txt_Diagnosis").css('border-color','red');
              return false;
         }
         else
         {
            $("#Txt_Diagnosis").css('border-color','#ccc').css("border-width","thin").css("border-size","1px").css("border-style","solid");
         }
         
         if($("#ddl_RefeerredFrom").val()=="")
         {                 
             $("#ddl_RefeerredFrom").focus();
             $("#ddl_RefeerredFrom").css('border-color','red');
              return false;
         }
         else
         {
            $("#ddl_RefeerredFrom").css('border-color','#ccc').css("border-width","thin").css("border-size","1px").css("border-style","solid");
         }
         
         if ($("#Txt_AdmitUnderDept").val()=="")
         {   
             $("#Txt_AdmitUnderDept").focus();
             $("#Txt_AdmitUnderDept").css('border-color','red');
             return false;
          
          }
          else
          {
             $("#Txt_AdmitUnderDept").css('border-color','#ccc').css("border-width","thin").css("border-size","1px").css("border-style","solid");
           }
           
         if ($("#Txt_AdmitUnderUnit").val()=="")
         {   
             $("#Txt_AdmitUnderUnit").focus();
             $("#Txt_AdmitUnderUnit").css('border-color','red');
             return false;
          
          }
          else
          {
             $("#Txt_AdmitUnderUnit").css('border-color','#ccc').css("border-width","thin").css("border-size","1px").css("border-style","solid");
          }
         
         if ($("#Txt_Name").val()=="")
         {   
             $("#Txt_Name").focus();
             $("#Txt_Name").css('border-color','red');
             return false;
          
          }
          else
          {
             $("#Txt_Name").css('border-color','#ccc').css("border-width","thin").css("border-size","1px").css("border-style","solid");
          }
           
       
           if ($("#Txt_Relation").val()=="")
         {   
             $("#Txt_Relation").focus();
             $("#Txt_Relation").css('border-color','red');
             return false;
          
          }
          else
          {
             $("#Txt_Name").css('border-color','#ccc').css("border-width","thin").css("border-size","1px").css("border-style","solid");
          }
          
          if ($("#Txt_MobileNo").val()=="")
         {   
             $("#Txt_MobileNo").focus();
             $("#Txt_MobileNo").css('border-color','red');
             return false;
          
          }
          else
          {
             $("#Txt_MobileNo").css('border-color','#ccc').css("border-width","thin").css("border-size","1px").css("border-style","solid");
          }
          

         
//          if ($("#txtFileName1").val()=="")
//         {   
//             //$("#spnerrormsg").text("Please enter Document Name !");            
//             //$("#grdDocumentDetail").delay(3200).fadeOut(300);
//             $("#txtFileName1").focus();
//             $("#txtFileName1").css('border-color','red');
//            
//             return false;
//          
//          }
//          else
//          {
//             $("#txtFileName1").css('border-color','#ccc').css("border-width","thin").css("border-size","1px").css("border-style","solid");
//          }
           

//debugger;
var _available=$("#lblBalance").text();

if(parseInt(_available)>0)
{

$.ajax
({
    type: 'POST',
    url:'freebed.aspx/SaveContentData',
    contentType:'application/json; charset=utf-8',
    dataType:'json',
    cache:false,
    async:false,
    
    data: "{'GENDER':'" + gender + "','AVAILABLE_BED':'" + available_bed + "','CRITICAL_NONCRITICAL':'" + critical_noncritical + "','DIAGNOSIS_DETAIL':'" + diagnosis_detail + "','REFERRED_FROM':'" + referred_from + "','ADMIT_UNDER_DEPT':'" + admit_under_dept + "','ADMIT_UNDER_UNIT':'" + admit_under_unit + "','NAME':'" + name + "','RELATION':'" + relation + "','MOBILE_NO':'" + mobile_no + "','PHONE_NO':'" + phone_no + "','PATIENT_NAME':'" + patient_name + "','PATIENT_AGE':'" + patient_age + "','ADMISSION_NO':'" + patient_ad_no + "','ICD_NO':'" + icd_detail + "','DATE_OF_ADMISSION':'" + _dateofadmission + "'}",
    beforeSend: function(){
    },
    success:function(response) {   
    alert('Data Saved Succesfully');
    clear();
    },
    failure:function(response){    
    alert('Failed during Saving record');
    },
    error:function(response){
      alert('Error during Saving record ');
    }

});//ajax ends
}
else
{
    $("#divErrorMsg").css("display", "block");
    $("#spnerrormsg").text("You do not have balance sheet !");            
    $("#divErrorMsg").delay(3200).fadeOut(300);   
    return false;
}//if check end here 
});//btn ends
});//ready end here 



    //BIND START HERE
    
 BindFreeBed = function() {
    //alert('HELLO');
    
   // debugger;

        $.ajax({
            type: 'POST',
            url: 'freebed.aspx/GetFreeBedDetails',
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
                var table = $('<table id="tblFreebed" style="font-family:Calibri;font-size:12px;" class="table table-bordered table-hover" ></table>');             
                var row = '';
                var count = 0;
                var ctr = 1;
                //strHTML+='<br/><div class="row"><div class="col-md-3"><div class="thumbnail resource-result_detail" id="Div5"><div class="search_therapist"><div class="photo" style=" height: 190px; -webkit-box-shadow: -2px 0px 9px 0px rgba(0,0,0,0.53);box-shadow: -2px 0px 9px 0px rgba(0,0,0,0.53);"><img id="blah" class="img-thumbnail" style="margin-left: 7px; margin-right: 3px;margin-top: 3px; margin-bottom: 2px; max-height: 184px;" src="image/avatar2.jpg"alt="your image" /></div></div><div class="form-group"><input id="txt_name1" type="text" value="'+$(this).find("NAME").text()+'" name="name" class="form-control" placeholder="Name" /></div><div class="form-group"><input id="txt_speciality1" type="text" name="name" class="form-control" value="'+$(this).find("SPECIALTY").text()+'" placeholder="Speciality" /></div><div class="form-group"><input id="txt_qualification1" type="text" name="name" class="form-control" placeholder="Qualification" value="'+$(this).find("QUALIFICATION").text()+'" /></div></div><div class="action-buttons"><a class="btn btn-primary" role="button" style="width:100%" href="doctorprofile.aspx"  >View Complete Profile</a><br /><br/><a class="btn btn-primary" role="button" style="width:70%" href="">Make an appointment</a><a class="btn btn-primary" role="button" style="width:30%" href="#">Query</a></div></div></div>';
               //strHTML+='<div class="col-sm-8">Available :- <label id="lblAvailable" style="font-weight:bold;color:Blue;">10</label>&nbsp;&nbsp;'+$(this).find("NAME").text()+'Allotted :- <label id="lblAlloted" style="font-weight:bold;color:Red;">1</label>&nbsp;&nbsp;'+$(this).find("NAME").text()+'Balance :- <label id="lblBalance" style="font-weight:bold;color:Green">9</label>'+$(this).find("NAME").text()+' </div>';
                $.each(items, function(index) {
                    debugger;
                    //if (parseInt(items.length) > 0) {
                    if (parseInt(count) == 0) {

                       var rowheader = '<thead style="font-size:12px;"><tr>';
                     
                        rowheader += '<th style="">Sr.no</th>';
                        //rowheader += '<th style="">Patient Id</th>';
                        // rowheader += '<th>Patient Name</th>';
                        rowheader += '<th>Name</th>';
                        rowheader += '<th>Age</th>';
                        rowheader += '<th>Admission Date</th>';
                        rowheader += '<th>ICD NO</th>';
                        rowheader += '<th>ADMISSION NO</th>';
                        rowheader += '<th style="">Gender</th>';
                        //rowheader += '<th style="">Available Bed</th>';
                        rowheader += '<th style="">Critical/Non Critical</th>';
                        rowheader += '<th style="">Alloted</th>';
                        rowheader += '<th style="">Balance</th>';                        
                        rowheader += '<th style="">Diagnosis Details</th>';
                        rowheader += '<th style="">Referred From</th>';
                        rowheader += '<th style="">Admit Under Dept</th>';
                        rowheader += '<th style="">Admit Under Unit</th>';
                        rowheader += '<th style="">Attendent Name</th>';
                        rowheader += '<th style="">Attendent Relation</th>';
                        rowheader += '<th style="">Attendent Mobile Number</th>';
                        rowheader += '<th style="">Attendent Phone Number</th>';
                        //rowheader += '<th style="">Status</th>';
                        rowheader += '<th>Action</th>';

                        rowheader += '</tr></thead>';
                        //rowheader += '</tr>';
                        table.append(rowheader);
                    }



                    var rowcol = '';
                    rowcol += '<tbody style="font-size:13px;"><tr>';
                    //rowcol += '<tr>';

                    // rowcol += '<td>' + $(this).find("ID").text() + '</td>';
                    // rowcol += '<td style="width:70px;"><input type="hidden" id="hdncode" class="form_control hdncode" value="' + $(this).find("PATIENT_ID").text() + '">' + $(this).find("SI_NO").text() + '</td>';
                    rowcol += '<td>' + ctr + '</td>';

                    //rowcol += '<td>' + $(this).find("PATIENT_ID").text() + '</td>';
                    rowcol += '<td>' + $(this).find("PATIENT_NAME").text() + '</td>';
                    rowcol += '<td>' + $(this).find("PATIENT_AGE").text() + '</td>'; 
                    rowcol += '<td>' + $(this).find("DATE_OF_ADMISSION").text() + '</td>'; 
                    rowcol += '<td>' + $(this).find("ICD_NO").text() + '</td>';
                    rowcol += '<td>' + $(this).find("ADMISSION_NO").text() + '</td>';
                    rowcol += '<td>' + $(this).find("GENDER").text() + '</td>';
                    //rowcol += '<td>' + $(this).find("AVAILABLE_BED").text() + '</td>';
                    rowcol += '<td>' + $(this).find("CRITICAL_NONCRITICAL").text() + '</td>';
                    rowcol += '<td style="color:red;font-weight:bold;" align="right">' + $(this).find("TOTAL_ALLOTED_CRITICAL").text() + '</td>';
                    rowcol += '<td style="color:green;font-weight:bold;"align="right">' + $(this).find("TOTAL_BALANCE_CRITICAL").text() + '</td>';
                    
                    rowcol += '<td>' + $(this).find("DIAGNOSIS_DETAIL").text() + '</td>';
                    rowcol += '<td>' + $(this).find("REFERRED_FROM").text() + '</td>';
                    rowcol += '<td>' + $(this).find("ADMIT_UNDER_DEPT").text() + '</td>';
                    rowcol += '<td>' + $(this).find("ADMIT_UNDER_UNIT").text() + '</td>';
                    rowcol += '<td>' + $(this).find("NAME").text() + '</td>';
                    rowcol += '<td>' + $(this).find("RELATION").text() + '</td>';
                    rowcol += '<td>' + $(this).find("MOBILE_NO").text() + '</td>';
                    rowcol += '<td>' + $(this).find("PHONE_NO").text() + '</td>';
                    //rowcol += '<td>' + $(this).find("STATUS").text() + '</td>';

                    // rowcol += '<td></td>';
                    rowcol += '<td style="width:250px;white-space:nowrap" align="center"><br/><button type="button" id="btnDischarge" onclick="Discharge(' + $(this).find("ID").text() + ')" class="btn btn-danger" data-toggle="tooltip" title="Discharge" style="font-family: Calibri; font-size: 12px;"><i class="fa fa-check fa-lg" aria-hidden="true"></i></button>&nbsp;<button type="button" data-toggle="tooltip" title="Delete Record" id="btnDelete" onclick="DeleteRecord(' + $(this).find("ID").text() + ')" class="btn btn-danger" style="font-family: Calibri; font-size: 12px;"><i class="fa fa-trash fa-lg" aria-hidden="true"></i></button></td>';
                    rowcol += '</tr></tbody>';
                  
                    table.append(rowcol);

                    count += 1;
                    ctr++;

                });
                
                
                if (parseInt(count) == 0) {
                    var rowcol = '';
                    rowcol += '<tbody><tr><td colspan="7" style="font-weight:bold;"><i class="fa fa-exclamation-triangle" style="font-size:24px;color:red;"></i>&nbsp;&nbsp;No records found !</td></tr>';
                    table.append(rowcol);
                    $('#divAlreadyFreeBed').html(table);
                }
                else {
                    $('#divAlreadyFreeBed').html(table);
                    var _table = $('#divAlreadyFreeBed table');//                        
                       bind_filterevent(_table);
                       paginateIt(_table,10);
                       visibility_paging(_table);
                }

            },
            failure: function(response) {
                alert('Bind Failed');
            },
            error: function(response) {
                alert('Bind Error');
            }
        });
    }

//bind function end here
DeleteRecord=function(_id)
{

     $.ajax({
                type: 'POST',
                url: 'FREEBED.aspx/DeleteDischarge',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                cache: false,
                async: false,
                data: "{'ID':'" + _id + "'}",
                beforeSend: function () {
                },
                success: function (response) {
                //alert(response.d);                    
                       alert('Record Deleted Successfully !');
                       $("#txtRemarks").val('');
                       BindFreeBed();
                       $("#btnCloseManufacturer").trigger('click');

                },
                failure: function (response) {
                    alert('Country Save Failed');
                },
                error: function (response) {
                    alert('Country Save Error');
                }
            });
}

BindAvailableBed = function(_type) {
    //alert('HELLO');
    
 //debugger;

        $.ajax({
            type: 'POST',
            url: 'freebed.aspx/GetFreeBedavailableDetails',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            cache: false,
            async: false,
            data: "{'TYPE':'" + _type + "'}",
            beforeSend: function() {
            },
            success: function(response) {
                //alert(response.d);
                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);
                var items = xml.find("Table");
                var row = '';
                var count = 0;
                var ctr = 1;
             $.each(items, function(index) {

                        if(_type=='Critical')
                        {
                            //alert($(this).find('TOTAL_AVAILABLE_CRITICAL').text());
                            $("#lblAvailable").text($(this).find('TOTAL_AVAILABLE_CRITICAL').text());
                            $("#lblAlloted").text($(this).find('TOTAL_ALLOTED_CRITICAL').text());
                            $("#lblBalance").text($(this).find('TOTAL_BALANCE_CRITICAL').text());
                        }
                        else
                        {
                            $("#lblAvailable").text($(this).find('TOTAL_AVAILABLE_NONCRITICAL').text());
                            $("#lblAlloted").text($(this).find('TOTAL_ALLOTED_NONCRITICAL').text());
                            $("#lblBalance").text($(this).find('TOTAL_BALANCE_NONCRITICAL').text());
                            
                        }
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
    
Discharge=function(_id){

//alert(_id);
$("#hdncode").val(_id);
//alert($("#hdncode").val());
debugger;
$("#myModalforDeleteCountry").modal({
                show: true,
                width: '1250px' //probably not needed
            });      

}
clear=function()
{
        $('#ddlGender').val('Male');
        //$('#ddlAvailable').val('Critical(without ventilator)');
        //$('#ddlAvailable').val('Critical(without ventilator)');
        //$('#ddlCritical').val('0');
        $('#Txt_Diagnosis').val('');
        $('#Txt_AdmitUnderDept').val('');
        $('#Txt_AdmitUnderUnit').val('');
        $('#Txt_Name').val('');
        //$('#Txt_Relation').val('0');
        $('#Txt_MobileNo').val('');
        $('#Txt_PhoneNo').val('');
        $('#txtAdmissionNo').val('');
        $('#txtPatient_name').val('');
        $('#txtPatient_age').val('');
        $('#txtDateofAdmission').val('');
        $('#txt_icd').val('');
         $('#File1').val('');
        
       // $('#txtDateofAdmission').val('');
}


function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

DeleteRowDocument = function(_trid) {
        if (_trid == 1) {
            $("#btnDeleteDocument").css("disabled", "disabled");
        }

        else {
            var _deltrId = "#Td" + _trid;

            $(_deltrId).remove().delay(3200).fadeOut(300);
        }
    }
    AddRowDocument = function(_trid) {
        var _btnAdd = "#btnPlusDocument" + _trid;
        var _newTrid = parseInt(_trid) + 1;
        // $(_btnAdd).css('display','none');
        var Ftrid = "<tr id='Td" + _newTrid + "'><td><input type='text' class='form-control clsFileName' id='txtFileName" + _newTrid + "' placeholder='File Name'  /></td>\
           <td><a href='#' id='a" + _newTrid + "' target='_blank' class='documentLink'></a><input type='file' class='btn btn-primary FileUpload' id='File" + _newTrid + "' /></td>\
           <td><button type='button' id='btnDeleteDocument' onclick='DeleteRowDocument(" + _newTrid + ")' class='btn btn-danger'><i class='fa fa-trash fa-lg' aria-hidden='true'></i></button>&nbsp;\
            <button type='button' id='btnPlusDocument" + _newTrid + "' onclick='AddRowDocument(" + _newTrid + ");' class='btn btn-primary btnclsPlusDocument'><i class='fa fa-plus ' aria-hidden='true'></i></button></td></tr>";
        $(".tblDocumentUpload tbody").append(Ftrid);
    }
})(jQuery);