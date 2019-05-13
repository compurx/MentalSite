
(function ($) {

      $(document).ready(function(){
    // alert('HELLO');
        BindddlTitle();
        BindddlRelation();
        BindddlOccupation();
        BindddlCountry();
        BindddlReligion();//divPersonalHistory
        var _winwidth=$("#divContainer").innerWidth()-50;
        $("#divScrollN").css('width',_winwidth);
        $("#divFamilyHistory").html("<table class='table table-bordered table-hover' style='font-size: 12px;' id='tblFamilyHistory'><thead><tr><th class='style3'>Diseases</th><th class='style3'>Disease Type</th><th class='style3'>Relation</th><th class='style3'>Age</th><th class='style3'>Group</th><th class='style3'>Remark</th><th class='style3'>Action</th></tr></thead><tbody><tr><td class='style3'><select id='ddlFamilyDisease1' class='form-control' style='font-size: 12px;width:250px;'><option value='0'>--Select--</option></select></td><td class='style3'><select id='ddlFamilyDiseaseType1' class='form-control' style='font-size: 12px;'><option value='0'>--Select--</option></select></td><td class='style3'><select id='ddlFamilyRelation1' class='form-control' style='font-size: 12px;'><option value='0'>--Select--</option></select></td><td class='style3'><input type='text' id='txtFamilyAge1' maxlength='50' class='form-control' /></td><td class='style3'><select id='ddlFamilyGroup1' class='form-control' style='font-size: 12px;'><option value='0'>--Select--</option></select></td><td class='style3'><textarea name='txtFamilyRemark' id='txtFamilyRemark1' class='form-control' style='width:200px;' cols='30'></textarea></td><td class='style3'>&nbsp;<button type='button' id='btnAddDiseases' onclick='AddFamilyHistory()' class='btn btn-primary'style='font-family: Calibri; font-size: 12px; height: 30px;'><i class='fa fa-plus' aria-hidden='true'></i></button><button type='button' id='btnDeleteDiseases' onclick='DeleteFamilyHistory()' class='btn btn-danger'style='font-family: Calibri; font-size: 12px; height: 30px;'><i class='fa fa-trash fa-lg' aria-hidden='true'></i></button></td></tr></tbody></table>");
        $("#divPastHistory").html("<table class='table table-bordered table-hover' style='font-size: 12px;' id='tblPastHistory'><thead><tr><th class='style3'>Disease</th><th class='style3'>Disease Type</th><th class='style3'>Unit</th><th class='style3'>Age</th><th class='style3'>Group</th><th class='style3'>Remark</th><th class='style3'>Action</th></tr></thead><tbody><tr><td class='style3'><select id='ddlDisease' class='form-control' style='font-size: 12px;width:250px;'><option value='0'>--Select--</option></select></td><td class='style3'><select id='ddlDiseaseType' class='form-control' style='font-size: 12px;'><option value='0'>--Select--</option></select></td><td class='style3'><select id='ddlPastUnit1' class='form-control' style='font-size: 12px;'><option value='Days'>Days</option><option value='Week'>Week</option><option value='Month'>Month</option><option value='Year'>Year</option></select></td><td class='style3'><input type='txtPastAge1' id='txtPastAge1' maxlength='50' class='form-control' /></td><td class='style3'><select id='ddlPastGroup1' class='form-control' style='font-size: 12px;'><option value='0'>--Select--</option></select></td><td class='style3'><textarea name='txtPastRemark' id='txtPastRemark1' class='form-control' style='width:200px;' cols='30'></textarea></td><td class='style3'>&nbsp;<button type='button' id='btnAddDisease' onclick='AddPastHistory()' class='btn btn-primary'style='font-family: Calibri; font-size: 12px; height: 30px;'><i class='fa fa-plus' aria-hidden='true'></i></button><button type='button' id='btnDeleteDisease' onclick='DeletePastHistory()' class='btn btn-danger'style='font-family: Calibri; font-size: 12px; height: 30px;'><i class='fa fa-trash fa-lg' aria-hidden='true'></i></button></td></tr></tbody></table>");
        $("#divPersonalHistory").html("<table class='table table-bordered table-hover' style='font-size: 12px;' id='tblPersonalHistory'><thead><tr><th>Habit</th><th>Since</th><th>Unit</th><th>Remark</th><th>Action</th></tr></thead><tbody><tr><td class='style3'><select id='ddlHabit' class='form-control' style='font-size: 12px;width:250px;'><option value='0'>--Select--</option></select></td><td class='style3'><input type='text' id='txtSince' maxlength='50' class='form-control' /></td><td class='style3'><select id='ddlUnit' class='form-control' style='font-size: 12px;'><option value='Days'>Days</option><option value='Week'>Week</option><option value='Month'>Month</option><option value='Year'>Year</option></select></td><td class='style3'><textarea name='txtPastRemark' id='txtPastRemark1' class='form-control' style='width:200px;' cols='30'></textarea></td><td class='style3'>&nbsp;<button type='button' id='btnAddHabit' onclick='AddPersonalHistory()' class='btn btn-primary'style='font-family: Calibri; font-size: 12px; height: 30px;'><i class='fa fa-plus' aria-hidden='true'></i></button>&nbsp;&nbsp;<button type='button' id='btnDeleteHabit' onclick='DeletePersonalHistory()' class='btn btn-danger'style='font-family: Calibri; font-size: 12px; height: 30px;'><i class='fa fa-trash fa-lg' aria-hidden='true'></i></button></td></tr></tbody></table>");
        $("#divAllergy").html("<table class='table table-bordered table-hover' id='tblAllergy' style='width:100%;font-size: 12px;'><thead><tr><th>Allergy</th><th class='style3'>Allergy Type</th><th class='style3'>Since</th><th class='style3'>Unit</th><th class='style3'>Remark</th><th class='style3'>Action</th></tr></thead><tbody><tr id='trAllergy1'><td class='style3'><select id='ddlAllergy' class='form-control' placeholder='Allergy' style='width:200px;font-size: 12px'><option value='0'>--Select--</option></select></td><td class='style3'><input type='text' id='txtAllergyType' readonly='readonly'  class='form-control' /></td><td class='style3'><input type='text' id='txtSince'  class='form-control' /></td><td class='style3'><select id='ddlUnit' class='form-control' style='font-size: 12px'><option value='Days'>Days</option><option value='Week'>Week</option><option value='Month'>Month</option><option value='Year'>Year</option></select></td><td class='style3'><textarea name='txtRemark' id='txtRemark1' class='form-control' style='width:200px;' cols='30'></textarea></td><td class='style3'>&nbsp;<button type='button' id='btnAddAllergy1' onclick='AddAllergy(1)' class='btn btn-primary'style='font-family: Calibri; font-size: 12px; height: 30px;'><i class='fa fa-plus' aria-hidden='true'></i></button>&nbsp;&nbsp;<button type='button' id='btnDeleteAllergy' onclick='DeleteAllergy(1)' class='btn btn-danger'style='font-family: Calibri; font-size: 12px; height: 30px;'><i class='fa fa-trash fa-lg' aria-hidden='true'></i></button></td></tr></tbody></table>");
        $("#ddlState").on('change',function(){ 
            BindCity($("#ddlState").val());
        });
         $("#ddlCity").on('change',function(){ 
            BindPincode($("#ddlCity").val());
        });
        $("#ddlCountry").on('change',function(){ 
       
            $("#ddlState").empty();
            //debugger;
                var country_typ_code =  $("#ddlCountry").val();
                $.ajax({  
                type: 'POST',
                url: 'PatientRegistration.aspx/GetState',
                async: false,
                cache: false,
                data: "{'COUNTRY_CODE':'" +country_typ_code+ "'}",
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                beforeSend: function () {
                    // before_loading($('#ddlAppraisalCycle'));
                },
                success: function (response) {
                    //alert(response.d);
                    var xmlDoc = $.parseXML(response.d);
                    var xml = $(xmlDoc);
                    var items = xml.find("Table");
                     $("#ddlState").append($("<option></option>").val("0").html("-- Select State --"));
                    $.each(items, function (index) {
                   
                        $("#ddlState").append($("<option></option>").val($(this).find("STATE_CODE").text()).html($(this).find("STATE_NAME").text()));
                    });
                },
                failure: function (response) {
                    //alert(response.d);
                    alert('Loading Failed');
                    // after_loading();
                },
                error: function (response) {
                    //alert(response.d);
                    alert('Error');
                    // after_loading();
                }

            });//POST END HERE 
         
        });//CHANGE END HERE 
        $("#divAllergy").removeAttr("style");
        //$("#divAllergy").addAttr("style");
        $("#divAllergy").css("height","250px;");
        $("#btnSave").click(function(){
        
            var _title=$("#ddlTitle").val();
            var _fname=$("#txtFname").val();
            var _mName=$("#txtMiddleName").val();
            var _lName=$("#txtLname").val();
            var _gender=$("#ddlGender").val();
            var _occupation=$("#ddlOccupation").val();
            var _ftitle=$("#ddlTitle1").val();
            var _fatherName=$("#txtFatherName").val();
            var _guardianName=$("#txtGuardianName").val();
            var _relation=$("#ddlRelation").val();
            var _dob=$("#txtdob").val();
            var _ddAge=$("#txtAgeDD").val();
            var _mmAge=$("#txtAgeMM").val();
            var _yyAge=$("#txtAgeYY").val();
            var _maritalStatus=$("#ddlMaritalStatus").val();
            var _pCategory=$("#ddlPatientCategory").val();
            var _aadharNo=$("#txtAadharNo").val();
            

                
        });//Save end here 
    });
    
    
/////----Bind Title----/////
    DeleteAllergy=function(_trid)
    {
        //tblAllergy
        var _ctr=0;
         $('#tblAllergy tr').not(':first').each(function () {
            _ctr++;
         });
                  
         if(parseInt(_ctr)!=1)
         {
            var _newtrId="#trAllergy"+_trid;   
            $(_newtrId).remove().delay(3200).fadeOut(300);
         }
         else
         {
                $("#divErrorMsg").css("display", "block");
                $("#spnerrormsg").text("You can not delete all row from Table !");            
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $(window).scrollTop(0,0);
                return false;
         }
    }
    AddAllergy=function(_trid)
    {
        //debugger;
           //alert(_trid);//btnPlusServicef  
           //var _prevTrid=parseInt(_trid)-1;
           var _btnAdd="#btnAddAllergy"+_trid;
           $(_btnAdd).css('display','none');
           var _newTrid=parseInt(_trid)+1;// _trid++;
           //alert(_newTrid);
           var Ftrid = "<tr id='trAllergy"+_newTrid+"'><td style='align:center;'><select id='ddlAllergy"+_newTrid+"' class='form-control' placeholder='Allergy' style='font-size: 12px;width:200px;'><option value='0'>--Select--</option></select></td><td style='align:center;'><input type='text' id='txtAllergyType"+_newTrid+"' class='form-control' /></td><td><input type='text' id='txtSince"+_newTrid+"'  class='form-control' /></td><td><select id='ddlUnit"+_newTrid+"' class='form-control' style='font-size: 12px'><option value='0'>--Select--</option></select></td><td><textarea name='txtRemark' id='txtRemark' class='form-control' style='width:200px;' cols='30'></textarea></td><td><button type='button' id='btnAddAllergy"+_newTrid+"' onclick='AddAllergy("+_newTrid+")' class='btn btn-primary' style='font-family: Calibri; font-size: 12px; height: 30px;'><i class='fa fa-plus' aria-hidden='true'></i></button>&nbsp;&nbsp;<button type='button' id='btnDeleteAllergy' onclick='DeleteAllergy("+_newTrid+")' class='btn btn-danger' style='font-family: Calibri; font-size: 12px; height: 30px;'><i class='fa fa-trash fa-lg' aria-hidden='true'></i></button></td></tr>";
           $("#tblAllergy tbody").append(Ftrid);
             //var ftrId=1;     
    }
    BindCity=function(_state_id)
    {
        var _state_code =  $("#ddlState").val();
        $("#ddlCity").empty();
         $.ajax({  
                type: 'POST',
                url: 'PatientRegistration.aspx/GetCity',
                async: false,
                cache: false,
                data: "{'STATE_CODE':'" +_state_code+ "'}",
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                beforeSend: function () {
                    // before_loading($('#ddlAppraisalCycle'));
                },
                success: function (response) {
                
                    var xmlDoc = $.parseXML(response.d);
                    var xml = $(xmlDoc);
                    var items = xml.find("Table");
                     $("#ddlCity").append($("<option></option>").val("0").html("-- Select City --"));
                    $.each(items, function (index) {
                   
                        $("#ddlCity").append($("<option></option>").val($(this).find("CODE").text()).html($(this).find("NAME").text()));
                    });
                },
                failure: function (response) {
                    //alert(response.d);
                    alert('Loading Failed');
                    // after_loading();
                },
                error: function (response) {
                    //alert(response.d);
                    alert('Error');
                    // after_loading();
                }

            });//POST END HERE 
        
    }
    BindPincode=function(_city_id)
    {
               var _city_id =  $("#ddlCity").val();
               $("#txtPincode").val('');
                $.ajax({  
                type: 'POST',
                url: 'PatientRegistration.aspx/GetPincode',
                async: false,
                cache: false,
                data: "{'CITY_CODE':'" +_city_id+ "'}",
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                beforeSend: function () {
                    // before_loading($('#ddlAppraisalCycle'));
                },
                success: function (response) {
                    
                    var xmlDoc = $.parseXML(response.d);
                    var xml = $(xmlDoc);
                    var items = xml.find("Table");
                    //$("#ddlCity").append($("<option></option>").val("0").html("-- Select City --"));
                    $.each(items, function (index) {
                        $("#txtPincode").val($(this).find("PINCODE").text());
                        //$("#ddlCity").append($("<option></option>").val($(this).find("CODE").text()).html($(this).find("NAME").text()));
                    });
                },
                failure: function (response) {
                    //alert(response.d);
                    alert('Loading Failed');
                    // after_loading();
                },
                error: function (response) {
                    //alert(response.d);
                    alert('Error');
                    // after_loading();
                }

            });//POST END HERE 
        
    }
    BindddlTitle = function () {
             //  alert('HELLO');
            $("#ddlTitle").empty("");
            /* Post Data Start */
            $.ajax({
                type: 'POST',
                url: 'PatientRegistration.aspx/GetTitle',
                async: false,
                cache: true,
                data: "",
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                beforeSend: function () {
                    // before_loading($('#ddlAppraisalCycle'));
                },
                success: function (response) {
                //alert(response.d);
                    var xmlDoc = $.parseXML(response.d);
                    var xml = $(xmlDoc);
                    var items = xml.find("Table");
                     $("#ddlTitle").append($("<option></option>").val("0").html("-- Select Title --"));
                     $("#ddlTitle1").append($("<option></option>").val("0").html("-- Select Title --"));
                    $.each(items, function (index) {
                        $("#ddlTitle").append($("<option></option>").val($(this).find("CODE").text()).html($(this).find("NAME").text()));
                        $("#ddlTitle1").append($("<option></option>").val($(this).find("CODE").text()).html($(this).find("NAME").text()));
                    });
                },
                failure: function (response) {
                    //alert(response.d);
                    alert('Loading Failed');
                    // after_loading();
                },
                error: function (response) {
                    //alert(response.d);
                    alert('Error');
                    // after_loading();
                }

            });
            
          }         
          
          
          
         
///////----Bind Relation-----/////         
        
        BindddlRelation = function () {
               //alert('HELLO');
            $("#ddlRelation").empty("");
            /* Post Data Start */
            $.ajax({
                type: 'POST',
                url: 'PatientRegistration.aspx/GetRelation',
                async: false,
                cache: true,
                data: "",
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                beforeSend: function () {
                    // before_loading($('#ddlAppraisalCycle'));
                },
                success: function (response) {
                //alert(response.d);
                    var xmlDoc = $.parseXML(response.d);
                    var xml = $(xmlDoc);
                    var items = xml.find("Table");
                     $("#ddlRelation").append($("<option></option>").val("0").html("-- Select Relation --"));
                     $("#ddlRelation1").append($("<option></option>").val("0").html("-- Select Relation --"));
                    $.each(items, function (index) {
                        $("#ddlRelation").append($("<option></option>").val($(this).find("CODE").text()).html($(this).find("NAME").text()));
                         $("#ddlRelation1").append($("<option></option>").val($(this).find("CODE").text()).html($(this).find("NAME").text()));
                    });
                },
                failure: function (response) {
                    //alert(response.d);
                    alert('Loading Failed');
                    // after_loading();
                },
                error: function (response) {
                    //alert(response.d);
                    alert('Error');
                    // after_loading();
                }

            });
       }
       
       


///////-----Bind Occupation-----///////

          BindddlOccupation = function () {
               //alert('HELLO');
            $("#ddlOccupation").empty("");
            /* Post Data Start */
            $.ajax({
                type: 'POST',
                url: 'PatientRegistration.aspx/GetOccupation',
                async: false,
                cache: true,
                data: "",
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                beforeSend: function () {
                    // before_loading($('#ddlAppraisalCycle'));
                },
                success: function (response) {
                //alert(response.d);
                    var xmlDoc = $.parseXML(response.d);
                    var xml = $(xmlDoc);
                    var items = xml.find("Table");
                     $("#ddlOccupation").append($("<option></option>").val("0").html("-- Select Occupation --"));
                     
                    $.each(items, function (index) {
                        $("#ddlOccupation").append($("<option></option>").val($(this).find("CODE").text()).html($(this).find("NAME").text()));
                       
                    });
                },
                failure: function (response) {
                    //alert(response.d);
                    alert('Loading Failed');
                    // after_loading();
                },
                error: function (response) {
                    //alert(response.d);
                    alert('Error');
                    // after_loading();
                }

            });
            
          }                         
              
 ///////------Bind Country------//////
 
 
  
        
        
 
              BindddlCountry = function () {
             //  alert('HELLO');
            $("#ddlCountry").empty("");
            /* Post Data Start */
            $.ajax({
                type: 'POST',
                url: 'PatientRegistration.aspx/GetCountry',
                async: false,
                cache: true,
                data: "",
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                beforeSend: function () {
                    // before_loading($('#ddlAppraisalCycle'));
                },
                success: function (response) {
                //alert(response.d);
                    var xmlDoc = $.parseXML(response.d);
                    var xml = $(xmlDoc);
                    var items = xml.find("Table");
                    $("#ddlCountry").append($("<option></option>").val("0").html("-- Select Country --"));
                    $.each(items, function (index) {
                    $("#ddlCountry").append($("<option></option>").val($(this).find("CODE").text()).html($(this).find("NAME").text()));
                    });
                },
                failure: function (response) {
                    //alert(response.d);
                    alert('Loading Failed');
                    // after_loading();
                },
                error: function (response) {
                    //alert(response.d);
                    alert('Error');
                    // after_loading();
                }

            });
            }
              
              
 //////------Bind Religion-----//////
      
      BindddlReligion = function () {
             //  alert('HELLO');
            $("#ddlReligion").empty("");
            /* Post Data Start */
            $.ajax({
                type: 'POST',
                url: 'PatientRegistration.aspx/GetReligion',
                async: false,
                cache: true,
                data: "",
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                beforeSend: function () {
                    // before_loading($('#ddlAppraisalCycle'));
                },
                success: function (response) {
                //alert(response.d);
                    var xmlDoc = $.parseXML(response.d);
                    var xml = $(xmlDoc);
                    var items = xml.find("Table");
                     $("#ddlReligion").append($("<option></option>").val("0").html("-- Select Religion --"));
                    $.each(items, function (index) {
                        $("#ddlReligion").append($("<option></option>").val($(this).find("CODE").text()).html($(this).find("NAME").text()));
                    });
                },
                failure: function (response) {
                    //alert(response.d);
                    alert('Loading Failed');
                    // after_loading();
                },
                error: function (response) {
                    //alert(response.d);
                    alert('Error');
                    // after_loading();
                }

            });
            }

})(jQuery);
