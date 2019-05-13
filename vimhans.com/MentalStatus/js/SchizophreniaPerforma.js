(function($) {
    $(document).ready(function() {
        //alert('hello Schizophrenia');
        BindPerformaQuestion();
        BindICDName();
        BindFamilyDynamicsPerformaOption();
        BindManagementPlan();
        BindSymptomsPerformaOption();
        BindPerformaPastHistory();
        BindPerformaTreatmentHistory();
        BindPerformaFamilyHistory();
        BindPersonalHistoryPerformaOption();
        BindPhysicalExaminationPerformaOption1();
        BindDoctorMaster();
        BindPersonalHistory();
        BindPersonalHistory1();
        BindPersonalHistory2();
        BindPersonalHistory3();
        BindCurrentDate();





        //var _winwidth = $("#divContainer").innerWidth() - 100;
        //var _winwidth1 = $(".divMainRow").innerWidth() - 20;
       // $("#divScrollN").css('width', _winwidth1);


        //CHECK-BOX

        $("#btnPrintPdf").click(function() {
            //  alert("come");
            var _urlval = document.location.origin + "/Vimhans.com/AdminPanel/MentalStatus/Report/SynReport.aspx?CARDNO=" + $("#txtCode").val();
            //alert(_urlval);
            window.location = _urlval;
        });


        $("#btnSearchPatientRecordReset").click(function() {
            //alert('hello');
            $("#txtCode").val('');
            $('#txtUHID').val('');
            $('#txtOPDNO').val('');
            $('#txtIPDNO').val('');
            $('#txtCasulty').val('');
            $('#txtName').val('');

        });


        $("#chkSleep").click(function() {
            if ($("#chkSleep").attr('class') == "fa fa-square-o") {
                $("#chkSleep").removeClass('fa fa-square-o');
                $("#chkSleep").addClass('fa fa-check-square-o');
            }
            else {
                $("#chkSleep").removeClass('fa fa-check-square-o');
                $("#chkSleep").addClass('fa fa-square-o');
            }

        }); //CHECK CLICK END HERE 
        $("#chkAppetite").click(function() {
            if ($("#chkAppetite").attr('class') == "fa fa-square-o") {
                $("#chkAppetite").removeClass('fa fa-square-o');
                $("#chkAppetite").addClass('fa fa-check-square-o');
            }
            else {
                $("#chkAppetite").removeClass('fa fa-check-square-o');
                $("#chkAppetite").addClass('fa fa-square-o');
            }

        }); //CHECK CLICK END HERE 
        $("#chkInterests").click(function() {
            if ($("#chkInterests").attr('class') == "fa fa-square-o") {
                $("#chkInterests").removeClass('fa fa-square-o');
                $("#chkInterests").addClass('fa fa-check-square-o');
            }
            else {
                $("#chkInterests").removeClass('fa fa-check-square-o');
                $("#chkInterests").addClass('fa fa-square-o');
            }

        }); //CHECK CLICK END HERE 
        $("#chkIntimacy").click(function() {
            if ($("#chkIntimacy").attr('class') == "fa fa-square-o") {
                $("#chkIntimacy").removeClass('fa fa-square-o');
                $("#chkIntimacy").addClass('fa fa-check-square-o');
            }
            else {
                $("#chkIntimacy").removeClass('fa fa-check-square-o');
                $("#chkIntimacy").addClass('fa fa-square-o');
            }

        }); //CHECK CLICK END HERE 
        $("#chkSocial_Life").click(function() {
            if ($("#chkSocial_Life").attr('class') == "fa fa-square-o") {
                $("#chkSocial_Life").removeClass('fa fa-square-o');
                $("#chkSocial_Life").addClass('fa fa-check-square-o');
            }
            else {
                $("#chkSocial_Life").removeClass('fa fa-check-square-o');
                $("#chkSocial_Life").addClass('fa fa-square-o');
            }

        }); //CHECK CLICK END HERE 
        $("#chkFinances").click(function() {
            if ($("#chkFinances").attr('class') == "fa fa-square-o") {
                $("#chkFinances").removeClass('fa fa-square-o');
                $("#chkFinances").addClass('fa fa-check-square-o');
            }
            else {
                $("#chkFinances").removeClass('fa fa-check-square-o');
                $("#chkFinances").addClass('fa fa-square-o');
            }
        }); //CHECK CLICK END HERE




        $("#chkFromBirth").click(function() {
            if ($("#chkFromBirth").attr('class') == "fa fa-square-o") {
                $("#chkFromBirth").removeClass('fa fa-square-o');
                $("#chkFromBirth").addClass('fa fa-check-square-o');
            }
            else {
                $("#chkFromBirth").removeClass('fa fa-check-square-o');
                $("#chkFromBirth").addClass('fa fa-square-o');
            }
        }); //CHECK CLICK END HERE

        $("#txtAgeYY").keydown(function(e) {
            // Allow: backspace, delete, tab, escape, enter and .
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
            // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });
        $("#txtAgeMM").keydown(function(e) {
            // Allow: backspace, delete, tab, escape, enter and .
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
            // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });
        $("#txtAgeDD").keydown(function(e) {
            // Allow: backspace, delete, tab, escape, enter and .
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
            // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });
        $("#txtAgegroup").keydown(function(e) {
            // Allow: backspace, delete, tab, escape, enter and .
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
            // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });
        $("#txtMaritalStatus").keydown(function(e) {
            // Allow: backspace, delete, tab, escape, enter and .
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
            // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });
        $("#txtReligion").keydown(function(e) {
            // Allow: backspace, delete, tab, escape, enter and .
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
            // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });
        $(".txtSince").keydown(function(e) {
            // Allow: backspace, delete, tab, escape, enter and .
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
            // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });
        $("#txtUHID1").keydown(function(e) {
            // Allow: backspace, delete, tab, escape, enter and .
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
            // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                // let it happen, don't do anything
                return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });




        //SAVE START HERE

        $("#btnSaveSchizophreniaPerforma").click(function() {
            debugger;



            if ($("#ddlDoctor").val() == "0") {
                $("#divErrorMsg").css("display", "block");

                $("#spnerrormsg").text("please select Doctor Name!");
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $("#ddlDoctor").focus();
                $(window).scrollTop(0, 0);
                $("#ddlDoctor").css('border-color', 'red');
                return false;
            }

            if ($("#txtDate").val() == "") {
                $("#divErrorMsg").css("display", "block");

                $("#spnerrormsg").text("Please Select Date");
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $("#txtDate").focus();
                $(window).scrollTop(0, 0);
                $("#txtDate").css('border-color', 'red');
                return false;
            }


            $("#FileUpload1").css('border-color', '#ccc').css("border-width", "thin").css("border-size", "1px").css("border-style", "solid");


            var _isValidateMentalStatus = 0;
            var XmlRequest_MentalStatus = "<DATASET>";
            $('.tbldivQuestionOption tr ').not(':first').each(function() {
                //debugger;
                var _questionlevel = $(this).find('.hdnQuestionlevel').val();
                var _QuestionGroupCode = $(this).find('.txtL1_CODE').val();

                var _Questioncode = $(this).find('.hdnQuestionCode').val();

                var _ResultType = $(this).find('.hdnResultTypeMental_status').val();


                var _txt_questionname = $(this).find('.txtGridQuestionNameMantal_status').val();
                var _txt_result_type = $(this).find('.txtGridResult_typeMantal_status').val();
                var _txt_result;
                if (parseInt(_ResultType) == 5) {
                    _txt_result = $(this).find(".txtGridResult_typeMantal_status5").val();
                }
                else if (parseInt(_ResultType) == 2) {

                    if ($("#btnYesGrv" + trid).val() == "Yes") {
                        _txt_result = "1";
                    }
                    else if ($("#btnYesGrv" + trid).val() == "No") {
                        _txt_result = "0";

                    }
                }
                else if (parseInt(_ResultType) == 3) {
                    if ($("#btnPositiveGrv" + trid).val() == "Positive") {
                        _txt_result = "1";
                    }
                    else if ($("#btnPositiveGrv" + trid).val() == "Negative") {
                        _txt_result = "0";
                    }
                }
                else if (parseInt(_ResultType) == 4) {
                    _txt_result = $(this).find(".txtGridResult_typeMantal_status").val();
                }




                var _txt_Remarks = $(this).find('.txtGridRemarksMantal_status').val();
                var chkPrintMentalStatus = $(this).find('input:checkbox[id="chkMentalStatus"]');
                var _IsPrintMSval = 0;
                if ((chkPrintMentalStatus).is(':checked')) {
                    _IsPrintMSval = 1;
                }
                else {
                    _IsPrintMSval = 0;
                }


                _isValidateMentalStatus++;
                //alert(_txt_Remarks);
                if (_txt_Remarks != undefined) {

                    XmlRequest_MentalStatus += "<RECORD><GROUP_CODE>" + _QuestionGroupCode + "</GROUP_CODE>";
                    XmlRequest_MentalStatus += "<QUESTION_CODE>" + _Questioncode + "</QUESTION_CODE>";
                    XmlRequest_MentalStatus += "<QUESTION_NAME>" + _txt_questionname + "</QUESTION_NAME>";
                    XmlRequest_MentalStatus += "<RESULT_TYPE>" + _ResultType + "</RESULT_TYPE>";
                    XmlRequest_MentalStatus += "<RESULT>" + _txt_result + "</RESULT>";
                    XmlRequest_MentalStatus += "<REMARKS>" + _txt_Remarks + "</REMARKS>";
                    XmlRequest_MentalStatus += "<PRINT>" + _IsPrintMSval + "</PRINT>";
                    XmlRequest_MentalStatus += "<QUESTION_LEVEL>" + _questionlevel + "</QUESTION_LEVEL></RECORD>";
                }
            });



            XmlRequest_MentalStatus += "</DATASET>";
            // alert(XmlRequest_MentalStatus);
            //TAB1 XML END HERE


            //TAB2 XML START HERE


            var _isValidateProvisionalDiagnosis = 0;
            var XmlRequest_ProvisionalDiagnosis = "<DATASET>";


            $('.tblProvisionalDiagnosis tr ').not(':first').each(function() {
                // alert(_IsFromBirthval);
                //debugger;

                var _ICDCodeProvisionalDiagnosis = $(this).find('.txtCodeProvisionalDiagnosis').val();
                var _DiseaseNameProvisionalDiagnosis = $(this).find('.ddlDiseaseName').val();
                var _ICDNameProvisionalDiagnosis = $(this).find('.txtNameProvisionalDiagnosis').val();
                var _SinceProvisionalDiagnosis = $(this).find('.txtSince').val();
                var _UnitProvisionalDiagnosis = $(this).find('.ddlUnit').val();
                var chkitemFromBirth = $(this).find('input:checkbox[name="chkProvisional"]');
                var _RemarksProvisionalDiagnosis = $(this).find('.txt_ProvisionalRemarks').val();
                var _CurrentStatusProvisionalDiagnosis = $(this).find('.txt_ProvisionalCurrentStatus').val();
                var _StartDateProvisionalDiagnosis = $(this).find('.txt_ProvisionalStartDate').val();
                var _EndDateProvisionalDiagnosis = $(this).find('.txt_ProvisionalEndDate ').val();

                var _IsFromBirthval = 0;
                if ((chkitemFromBirth).is(':checked')) {
                    _IsFromBirthval = 1;
                }
                else {
                    _IsFromBirthval = 0;
                }
                var chkitemFollows = $(this).find('input:checkbox[name="chk_ProvisionalFollowUp"]');
                var _IsFollowsval = 0;
                if ((chkitemFollows).is(':checked')) {
                    _IsFollowsval = 1;
                }
                else {
                    _IsFollowsval = 0;
                }
                //validation
                _isValidateProvisionalDiagnosis++;
                //if (_DiseaseNameProvisionalDiagnosis != "0") {
                XmlRequest_ProvisionalDiagnosis += "<RECORD><ICODE>" + _ICDCodeProvisionalDiagnosis + "</ICODE>";
                XmlRequest_ProvisionalDiagnosis += "<DISEASECODE>" + _DiseaseNameProvisionalDiagnosis + "</DISEASECODE>";

                XmlRequest_ProvisionalDiagnosis += "<SINCE>" + _SinceProvisionalDiagnosis + "</SINCE>";
                XmlRequest_ProvisionalDiagnosis += "<UNITCODE>" + _UnitProvisionalDiagnosis + "</UNITCODE>";
                XmlRequest_ProvisionalDiagnosis += "<FROMBIRTH>" + _IsFromBirthval + "</FROMBIRTH>";
                XmlRequest_ProvisionalDiagnosis += "<REMARKS>" + _RemarksProvisionalDiagnosis + "</REMARKS>";
                XmlRequest_ProvisionalDiagnosis += "<CURRENTSTATUS>" + _CurrentStatusProvisionalDiagnosis + "</CURRENTSTATUS>";
                XmlRequest_ProvisionalDiagnosis += "<STARTDATE>" + _StartDateProvisionalDiagnosis + "</STARTDATE>";
                XmlRequest_ProvisionalDiagnosis += "<ENDDATE>" + _EndDateProvisionalDiagnosis + "</ENDDATE>";
                XmlRequest_ProvisionalDiagnosis += "<FOLLOWUP>" + _IsFollowsval + "</FOLLOWUP></RECORD>";

                //}

            });



            XmlRequest_ProvisionalDiagnosis += "</DATASET>";
            //alert(XmlRequest_ProvisionalDiagnosis);



            //TAB4 START HERE
            var _isValidateFamilyDynamics = 0;
            var XmlRequest_FamilyDynamics = "<DATASET>";


            $('.tbldivQuestionOptionFamilyDynamics tr ').not(':first').each(function() {


                var _questionlevelFamilyDynamics = $(this).find('.hdnQuestionlevelFamilyDynamics').val();
                var _QuestionCodeFamilyDynamics = $(this).find('.hdnFamilyDynamicsQuestionCode').val();
                var _QuestionGroupCode = $(this).find('.hdnFamilyQuestionGroupCode').val();
                var _QuestionNameFamilyDynamics = $(this).find('.txtNameFamilyDynamics').val();
                var _ResultTypeFamilyDynamics = $(this).find('.txtFamilyDynamicsTypeFour').val();
                var _ResultType = $(this).find('.hdnResultType1').val();

                var _Result = $(this).find('.ddlFamilydynamics').val();
                if (parseInt(_ResultType) == 5) {
                    _Result = $(this).find(".ddlFamilydynamics").val();
                }
                else if (parseInt(_ResultType) == 2) {

                    if ($(this).find(".btnYesGrv").val() == "Yes") {
                        _Result = "1";
                    }
                    else if ($(this).find(".btnYesGrv").val() == "No") {
                        _Result = "0";

                    }
                }
                else if (parseInt(_ResultType) == 3) {
                    if ($(this).find(".btnPositiveGrv").val() == "Positive") {
                        _Result = "1";
                    }
                    else if ($(this).find(".btnPositiveGrv").val() == "Negative") {
                        _Result = "0";
                    }
                }
                else if (parseInt(_ResultType) == 4) {
                    _Result = $(this).find(".txtFamilyDynamicsTypeFour").val();
                }

                var _RemarksFamilyDynamics = $(this).find('.txtRemarksFamilyDynamics').val();
                var chkPrintFD = $(this).find('input:checkbox[id="chkFamilyDynamics"]');
                var _IsPrintFDval = 0;
                if ((chkPrintFD).is(':checked')) {
                    _IsPrintFDval = 1;
                }
                else {
                    _IsPrintFDval = 0;
                }



                _isValidateFamilyDynamics++;


                XmlRequest_FamilyDynamics += "<RECORD><QUESTION_CODE>" + _QuestionCodeFamilyDynamics + "</QUESTION_CODE>";
                XmlRequest_FamilyDynamics += "<QUESTION_GROUP_CODE>" + _QuestionGroupCode + "</QUESTION_GROUP_CODE>";
                XmlRequest_FamilyDynamics += "<QUESTION_NAME>" + _QuestionNameFamilyDynamics + "</QUESTION_NAME>";
                XmlRequest_FamilyDynamics += "<RESULT_TYPE>" + _ResultType + "</RESULT_TYPE>";
                XmlRequest_FamilyDynamics += "<RESULT>" + _Result + "</RESULT>";
                XmlRequest_FamilyDynamics += "<REMARKS>" + _RemarksFamilyDynamics + "</REMARKS>";
                XmlRequest_FamilyDynamics += "<Print>" + _IsPrintFDval + "</Print>";
                XmlRequest_FamilyDynamics += "<QUESTION_LEVEL>" + _questionlevelFamilyDynamics + "</QUESTION_LEVEL></RECORD>";




            });

            XmlRequest_FamilyDynamics += "</DATASET>";
            // alert(XmlRequest_FamilyDynamics);


            //TAB4 END HERE

            //TAB5 START HERE
            var _isValidateManagementPlan = 0;
            var XmlRequest_ManagementPlan = "<DATASET>";


            $('.tbldivQuestionOptionManagementPlan tr ').not(':first').each(function() {
                //debugger;
                var _questionlevelManagementPlan = $(this).find('.hdnQuestionlevelManagementPlan').val();
                var _QuestionGroupCode = $(this).find('.txtQuestionGroupcodeManagementPlan').val();
                var _QuestionCodeManagementPlan = $(this).find('.txtQuestioncodeManagementPlan').val();
                var _QuestionNameManagementPlan = $(this).find('.gridNameManagementPlan').val();
                var _ResultType = $(this).find('.hdnResultTypeMP').val();


                var _txt_result = $(this).find(".txtManagementPlanResult").val();
                if (parseInt(_ResultType) == 5) {
                    _txt_result = $(this).find(".txtManagementPlanResult").val();
                }
                else if (parseInt(_ResultType) == 2) {

                    if ($("#btnYesGrv" + trid).val() == "Yes") {
                        _txt_result = "1";
                    }
                    else if ($("#btnYesGrv" + trid).val() == "No") {
                        _txt_result = "0";

                    }
                }
                else if (parseInt(_ResultType) == 3) {
                    if ($("#btnPositiveGrv" + trid).val() == "Positive") {
                        _txt_result = "1";
                    }
                    else if ($("#btnPositiveGrv" + trid).val() == "Negative") {
                        _txt_result = "0";
                    }
                }
                else if (parseInt(_ResultType) == 4) {
                    _txt_result = $(this).find(".txtManagementPlanTypeFour").val();
                }
                var _RemarksManagementPlan = $(this).find('.Remarksmanagementplan').val();
                var chkPrintMP = $(this).find('input:checkbox[id="chkManagementPlan"]');
                if ((chkPrintMP).is(':checked')) {
                    _IsPrintMPval = 1;
                }
                else {
                    _IsPrintMPval = 0;
                }

                _isValidateManagementPlan++;



                if (_ResultType != undefined) {

                    XmlRequest_ManagementPlan += "<RECORD><GROUP_CODE>" + _QuestionGroupCode + "</GROUP_CODE>";
                    XmlRequest_ManagementPlan += "<QUESTION_CODE>" + _QuestionCodeManagementPlan + "</QUESTION_CODE>";
                    XmlRequest_ManagementPlan += "<QUESTION_NAME>" + _QuestionNameManagementPlan + "</QUESTION_NAME>";
                    XmlRequest_ManagementPlan += "<RESULT_TYPE>" + _ResultType + "</RESULT_TYPE>";
                    XmlRequest_ManagementPlan += "<RESULT>" + _txt_result + "</RESULT>";
                    XmlRequest_ManagementPlan += "<REMARKS>" + _RemarksManagementPlan + "</REMARKS>";
                    XmlRequest_ManagementPlan += "<PRINT>" + _IsPrintMPval + "</PRINT>";
                    XmlRequest_ManagementPlan += "<QUESTION_LEVEL>" + _questionlevelManagementPlan + "</QUESTION_LEVEL></RECORD>";

                }


            });
            XmlRequest_ManagementPlan += "</DATASET>";
            // alert(XmlRequest_ManagementPlan);


            //TAB5 END HERE



            //TAB7 START HERE
            var _isValidateSymptoms = 0;
            var XmlRequest_Symptoms = "<DATASET>";


            $('#tbldivBindSymptoms tr ').not(':first').each(function() {
                //debugger;
                var _questionlevelSymptoms = $(this).find('.hdnQuestionlevelSymptoms').val();
                var _QuestionCodeSymptoms = $(this).find('.txtCodeSymptoms').val();
                var _QuestionGroupCodeSymptoms = $(this).find('.hdnQuestionGroupCode').val();


                var _QuestionNameSymptoms = $(this).find('.txtNameSymptoms').val();
                var _ResultTypeSymptoms = $(this).find('.btnYesSymptomsGrv').val();
                var _ResultType = $(this).find('.hdnResultTypeSymptoms').val();
                var _txt_result = $(this).find('.ddldivSymptoms').val();
                if (parseInt(_ResultType) == 5) {
                    _txt_result = $(this).find(".ddldivSymptoms").val();
                }
                else if (parseInt(_ResultType) == 2) {

                    if ($(this).find(".btnYesSymptomsGrv").val() == "Yes") {
                        _txt_result = "1";
                    }
                    else if ($(this).find(".btnYesSymptomsGrv").val() == "No") {
                        _txt_result = "0";

                    }
                }
                else if (parseInt(_ResultType) == 3) {

                    if ($(this).find(".btnPositiveBindSymptomsGrv").val() == "Positive") {
                        _txt_result = "1";
                    }
                    else if ($(this).find(".btnPositiveBindSymptomsGrv").val() == "Negative") {
                        _txt_result = "0";
                    }
                }
                else if (parseInt(_ResultType) == 4) {
                    _txt_result = $(this).find(".txtresultTypeBindSymptoms").val();
                }
                var _RemarksSymptoms = $(this).find('.txtSymptomsRemarks').val();
                var chkPrintSymptoms = $(this).find('input:checkbox[id="chkSymptoms"]');
                if ((chkPrintSymptoms).is(':checked')) {
                    _IsPrintSymptomsval = 1;
                }
                else {
                    _IsPrintSymptomsval = 0;
                }


                _isValidateSymptoms++;

                XmlRequest_Symptoms += "<RECORD><QUESTION_CODE>" + _QuestionCodeSymptoms + "</QUESTION_CODE>";
                XmlRequest_Symptoms += "<QUESTION_GROUP_CODE>" + _QuestionGroupCodeSymptoms + "</QUESTION_GROUP_CODE>";
                XmlRequest_Symptoms += "<QUESTION_NAME>" + _QuestionNameSymptoms + "</QUESTION_NAME>";
                XmlRequest_Symptoms += "<RESULT_TYPE>" + _ResultType + "</RESULT_TYPE>";
                XmlRequest_Symptoms += "<RESULT>" + _txt_result + "</RESULT>";
                XmlRequest_Symptoms += "<REMARKS>" + _RemarksSymptoms + "</REMARKS>";
                XmlRequest_Symptoms += "<PRINT>" + _IsPrintSymptomsval + "</PRINT>";
                XmlRequest_Symptoms += "<QUESTION_LEVEL>" + _questionlevelSymptoms + "</QUESTION_LEVEL></RECORD>";



            });
            XmlRequest_Symptoms += "</DATASET>";
            //alert(XmlRequest_Symptoms);


            //TAB7 END HERE

            //TAB8 START HERE
            var _isValidatePastHistory = 0;
            var XmlRequest_PastHistory = "<DATASET>";


            $('#tbldivPastHistory tr ').not(':first').each(function() {
                //debugger;
                var _questionlevelPastHistory = $(this).find('.hdnQuestionlevelPastHistory').val();
                var _QuestionPastHistoryGroupCode = $(this).find('.hdnPastHistoryGroupCode').val();
                var _QuestionCodePastHistory = $(this).find('.txtCodePastHistory').val();
                var _QuestionNamePastHistory = $(this).find('.txtNamePastHistory').val();

                var _ResultType = $(this).find('.hdnResultTypePastHistory').val();


                if (parseInt(_ResultType) == 5) {
                    _ResultPastHistory = $(this).find(".ddlPastHistory").val();
                }
                else if (parseInt(_ResultType) == 2) {

                    if ($(this).find(".btnPastYesGrv").val() == "Yes") {
                        _ResultPastHistory = "1";
                    }
                    else if ($(this).find(".btnPastYesGrv").val() == "No") {
                        _ResultPastHistory = "0";

                    }
                }
                else if (parseInt(_ResultType) == 3) {
                    if ($(this).find(".btnPastPositiveGrv").val() == "Positive") {
                        _ResultPastHistory = "1";
                    }
                    else if ($(this).find(".btnPastPositiveGrv").val() == "Negative") {
                        _ResultPastHistory = "0";
                    }
                }
                else if (parseInt(_ResultType) == 4) {
                    _ResultPastHistory = $(this).find(".txtresultTypePastHistory").val();
                }
                var _RemarksPastHistory = $(this).find('.txtPastHistoryRemarks').val();
                var chkPrintPH = $(this).find('input:checkbox[id="chkPastHistory"]');
                if ((chkPrintPH).is(':checked')) {
                    _IsPrinPHval = 1;
                }
                else {
                    _IsPrinPHval = 0;
                }


                _isValidatePastHistory++;

                XmlRequest_PastHistory += "<RECORD><GROUP_CODE>" + _QuestionPastHistoryGroupCode + "</GROUP_CODE>";
                XmlRequest_PastHistory += "<QUESTION_CODE>" + _QuestionCodePastHistory + "</QUESTION_CODE>";
                XmlRequest_PastHistory += "<QUESTION_CODE>" + _QuestionNamePastHistory + "</QUESTION_CODE>";
                XmlRequest_PastHistory += "<RESULT_TYPE>" + _ResultType + "</RESULT_TYPE>";
                XmlRequest_PastHistory += "<RESULT>" + _ResultPastHistory + "</RESULT>";
                XmlRequest_PastHistory += "<REMARKS>" + _RemarksPastHistory + "</REMARKS>";
                XmlRequest_PastHistory += "<PRINT>" + _IsPrinPHval + "</PRINT>";
                XmlRequest_PastHistory += "<QUESTION_LEVEL>" + _questionlevelPastHistory + "</QUESTION_LEVEL></RECORD>";


            });
            XmlRequest_PastHistory += "</DATASET>";
            //alert(XmlRequest_PastHistory);


            //TAB8 END HERE

            //TAB9 START HERE
            var _isValidateTreatmentHistory = 0;
            var XmlRequest_TreatmentHistory = "<DATASET>";


            $('#tbldivTreatmentHistory tr ').not(':first').each(function() {
                //debugger;


                var _questionlevelTreatmentHistory = $(this).find('.hdnQuestionlevelTreatmentHistory').val();
                var _QuestiontTreatmentGroupCode = $(this).find('.hdnTreatmentHistoryGroupCode').val();
                var _QuestionCodeTreatmentHistory = $(this).find('.txtCodeTreatmentHistory').val();
                var _QuestionNameTreatmentHistory = $(this).find('.txtNameTreatmentHistory').val();
                var _ResultTypeTreatmentHistory = $(this).find('.hdnResultTypeTH').val();

                var _ResultType = $(this).find('.hdnResultTypeTH').val();
                var _ResultTreatmentHistory = $(this).find('.ddlTreatmentHistory').val();

                if (parseInt(_ResultType) == 5) {
                    _ResultTreatmentHistory = $(this).find(".ddlTreatmentHistory").val();
                }
                else if (parseInt(_ResultType) == 2) {

                    if ($(this).find(".btnYesTreatmentGrv").val() == "Yes") {
                        _ResultTreatmentHistory = "1";
                    }
                    else if ($(this).find(".btnYesTreatmentGrv").val() == "No") {
                        _ResultTreatmentHistory = "0";

                    }
                }
                else if (parseInt(_ResultType) == 3) {

                    if ($(this).find(".btnPositiveTreatmentGrv").val() == "Positive") {
                        _ResultTreatmentHistory = "1";
                    }
                    else if ($(this).find(".btnPositiveTreatmentGrv").val() == "Negative") {
                        _ResultTreatmentHistory = "0";
                    }
                }
                else if (parseInt(_ResultType) == 4) {
                    _ResultTreatmentHistory = $(this).find(".txtresultTypeTreatmentHistory").val();
                }
                var _RemarksTreatmentHistory = $(this).find('.txtTreatmentHistoryRemarks').val();
                var chkPrintTH = $(this).find('input:checkbox[id="chkTreatmentHistory"]');
                if ((chkPrintTH).is(':checked')) {
                    _IsPrintTHval = 1;
                }
                else {
                    _IsPrintTHval = 0;
                }



                _isValidateTreatmentHistory++;


                XmlRequest_TreatmentHistory += "<RECORD><GROUP_CODE>" + _QuestiontTreatmentGroupCode + "</GROUP_CODE>";
                XmlRequest_TreatmentHistory += "<QUESTION_CODE>" + _QuestionCodeTreatmentHistory + "</QUESTION_CODE>";
                XmlRequest_TreatmentHistory += "<QUESTION_NAME>" + _QuestionNameTreatmentHistory + "</QUESTION_NAME>";
                XmlRequest_TreatmentHistory += "<RESULT_TYPE>" + _ResultType + "</RESULT_TYPE>";
                XmlRequest_TreatmentHistory += "<RESULT>" + _ResultTreatmentHistory + "</RESULT>";
                XmlRequest_TreatmentHistory += "<REMARKS>" + _RemarksTreatmentHistory + "</REMARKS>";
                XmlRequest_TreatmentHistory += "<PRINT>" + _IsPrintTHval + "</PRINT>";
                XmlRequest_TreatmentHistory += "<QUESTION_LEVEL>" + _questionlevelTreatmentHistory + "</QUESTION_LEVEL></RECORD>";

            });
            XmlRequest_TreatmentHistory += "</DATASET>";
            //alert(XmlRequest_TreatmentHistory);


            //TAB9 END HERE

            //TAB10 START HERE
            var _isValidateFamilyHistory = 0;
            var XmlRequest_FamilyHistory = "<DATASET>";


            $('#tbldivFamilyHistory tr ').not(':first').each(function() {
                // debugger;


                var _questionlevelFamilyHistory = $(this).find('.hdnQuestionlevelFamilyHistory').val();
                var _QuestionFamilyHistoryGroupCode = $(this).find('.hdnFamilyHistoryGroupCode').val();
                var _QuestionCodeFamilytHistory = $(this).find('.txtCodeFamilyHistory').val();
                var _QuestionFamilyHistory = $(this).find('.txtNameFamilyHistory').val();
                var _ResultTypeFamilyHistory = $(this).find('.hdnResultTypeFH').val();

                var _ResultType = $(this).find('.hdnResultTypeFH').val();
                var _ResultFamilyHistory = $(this).find('.ddlFamilytHistory').val();

                if (parseInt(_ResultType) == 5) {
                    _ResultFamilyHistory = $(this).find(".ddlFamilytHistory").val();
                }
                else if (parseInt(_ResultTypeFamilyHistory) == 2) {

                    if ($(this).find(".btnYesFamilyHistoryGrv").val() == "Yes") {
                        _ResultFamilyHistory = "1";
                    }
                    else if ($(this).find(".btnYesFamilyHistoryGrv").val() == "No") {
                        _ResultFamilyHistory = "0";

                    }
                }
                else if (parseInt(_ResultType) == 3) {

                    if ($(this).find(".btnPositiveFamilyHistoryGrv").val() == "Positive") {
                        _ResultFamilyHistory = "1";
                    }
                    else if ($(this).find(".btnPositiveFamilyHistoryGrv").val() == "Negative") {
                        _ResultFamilyHistory = "0";
                    }
                }
                else if (parseInt(_ResultType) == 4) {
                    _ResultFamilyHistory = $(this).find(".txtresultTypeFamilyHistory").val();
                }
                var _RemarksFamilyHistory = $(this).find('.txtFamilytHistoryRemarks').val();
                var chkPrintFH = $(this).find('input:checkbox[id="chkFamilyHistory"]');
                if ((chkPrintFH).is(':checked')) {
                    _IsPrintFHval = 1;
                }
                else {
                    _IsPrintFHval = 0;
                }




                _isValidateFamilyHistory++;

                XmlRequest_FamilyHistory += "<RECORD><GROUP_CODE>" + _QuestionFamilyHistoryGroupCode + "</GROUP_CODE>";
                XmlRequest_FamilyHistory += "<QUESTION_CODE>" + _QuestionCodeFamilytHistory + "</QUESTION_CODE>";
                XmlRequest_FamilyHistory += "<QUESTION_NAME>" + _QuestionFamilyHistory + "</QUESTION_NAME>";
                XmlRequest_FamilyHistory += "<RESULT_TYPE>" + _ResultType + "</RESULT_TYPE>";
                XmlRequest_FamilyHistory += "<RESULT>" + _ResultFamilyHistory + "</RESULT>";
                XmlRequest_FamilyHistory += "<REMARKS>" + _RemarksFamilyHistory + "</REMARKS>";
                XmlRequest_FamilyHistory += "<print>" + _IsPrintFHval + "</print>";
                XmlRequest_FamilyHistory += "<QUESTION_LEVEL>" + _questionlevelFamilyHistory + "</QUESTION_LEVEL></RECORD>";


            });
            XmlRequest_FamilyHistory += "</DATASET>";
            // alert(XmlRequest_FamilyHistory);


            //TAB10 END HERE

            //TAB11 START HERE
            var _isValidatePersonalHistory = 0;
            var XmlRequest_PersonalHistory = "<DATASET>";
            $('#tbldivPersonalHistory tr ').not(':first').each(function() {


                var _questionlevelPersonalHistory = $(this).find('.hdnQuestionlevelPersonalHistory').val();
                var _QuestionPersonalHistoryGroupCode = $(this).find('.hdnQuestioncodePersonalHistoryGroupCode').val();
                var _QuestionCodePersonalHistory = $(this).find('.txtCodePersonalHistory').val();
                var _QuestionNmaePersonalHistory = $(this).find('.txtPersonalHistory').val();
                var _ResultTypePersonalHistory = $(this).find('.ddlPersonalHistory').val();
                var _ResultPersonalHistory = $(this).find('.ddlPersonalHistory').val();
                var _ResultType = $(this).find('.hdnResultTypePersonalHistory').val();
                if (parseInt(_ResultType) == 5) {
                    _ResultPersonalHistory = $(this).find(".ddlPersonalHistory").val();
                }
                else if (parseInt(_ResultType) == 2) {

                    if ($(this).find(".btnYesPersonalHistoryGrv").val() == "Yes") {

                        _ResultPersonalHistory = "1";
                    }
                    else if ($(this).find(".btnYesPersonalHistoryGrv").val() == "No") {
                        _ResultPersonalHistory = "0";

                    }
                }
                else if (parseInt(_ResultType) == 3) {

                    if ($(this).find(".btnPositivePersonalHistoryGrv").val() == "Positive") {
                        _ResultPersonalHistory = "1";
                    }
                    else if ($(this).find(".btnPositivePersonalHistoryGrv").val() == "Negative") {
                        _ResultPersonalHistory = "0";
                    }
                }
                else if (parseInt(_ResultType) == 4) {
                    _ResultPersonalHistory = $(this).find(".txtresultTypePersonalHistory").val();
                }
                var _RemarksPersonalHistory = $(this).find('.txtPersonalHistoryRemarks').val();
                var chkPrintPH = $(this).find('input:checkbox[id="chkPersonalHistory"]');
                if ((chkPrintPH).is(':checked')) {
                    _IsPrintPHval = 1;
                }
                else {
                    _IsPrintPHval = 0;
                }

                _isValidatePersonalHistory++;

                _QuestionPersonalHistoryGroupCode
                XmlRequest_PersonalHistory += "<RECORD><GROUP_CODE>" + _QuestionPersonalHistoryGroupCode + "</GROUP_CODE>";
                XmlRequest_PersonalHistory += "<QUESTION_CODE>" + _QuestionCodePersonalHistory + "</QUESTION_CODE>";
                XmlRequest_PersonalHistory += "<QUESTION_NAME>" + _QuestionNmaePersonalHistory + "</QUESTION_NAME>";
                XmlRequest_PersonalHistory += "<RESULT_TYPE>" + _ResultType + "</RESULT_TYPE>";
                XmlRequest_PersonalHistory += "<RESULT>" + _ResultPersonalHistory + "</RESULT>";
                XmlRequest_PersonalHistory += "<REMARKS>" + _RemarksPersonalHistory + "</REMARKS>";
                XmlRequest_PersonalHistory += "<PRINT>" + _IsPrintPHval + "</PRINT>";
                XmlRequest_PersonalHistory += "<QUESTION_LEVEL>" + _questionlevelPersonalHistory + "</QUESTION_LEVEL></RECORD>";

            });
            XmlRequest_PersonalHistory += "</DATASET>";


            //alert(XmlRequest_PersonalHistory);


            //            //TAB11 END HERE

            //TAB12 START HERE
            var _isValidatePhysicalExamination = 0;
            var XmlRequest_PhysicalExamination = "<DATASET>";


            $('#tbldivPhysicalExamination tr ').not(':first').each(function() {
                //debugger;
                var _questionlevelPhysicalExamination = $(this).find('.hdnQuestionlevelPhysicalExamination').val();
                var _QuestionPhysicalExaminationGroupCode = $(this).find('.hdnQuestioncodePhysicalExaminationGroupCode').val();
                var _QuestionCodePhysicalExamination = $(this).find('.txtCodePhysicalExamination').val();
                var _QuestionNamePhysicalExamination = $(this).find('.txtNamePhysicalExamination').val();
                var _ResultTypePhysicalExamination = $(this).find('.txtresultTypePhysicalExamination').val();
                var _ResultPhysicalExamination = $(this).find('.ddlPhysicalExamination').val();
                var _ResultType = $(this).find('.hdnResultTypePE1').val();
                if (parseInt(_ResultType) == 5) {
                    _ResultPhysicalExamination = $(this).find(".ddlPhysicalExamination").val();
                }
                else if (parseInt(_ResultType) == 2) {

                    if ($(this).find(".btnYesPhysicalExaminationGrv").val() == "Yes") {
                        _ResultPhysicalExamination = "1";
                    }
                    else if ($(this).find(".btnYesPhysicalExaminationGrv").val() == "No") {
                        _ResultPhysicalExamination = "0";

                    }
                }
                else if (parseInt(_ResultType) == 3) {

                    if ($(this).find(".btnPositivePhysicalExaminationGrv").val() == "Positive") {
                        _ResultPhysicalExamination = "1";
                    }
                    else if ($(this).find(".btnPositivePhysicalExaminationGrv").val() == "Negative") {
                        _ResultPhysicalExamination = "0";
                    }
                }
                else if (parseInt(_ResultType) == 4) {
                    _ResultPhysicalExamination = $(this).find(".txtresultTypePhysicalExamination").val();
                }
                var _RemarksPhysicalExamination = $(this).find('.txtPhysicalExaminationRemarks').val();
                var chkPrintPE = $(this).find('input:checkbox[id="chkPhysicalExamination"]');
                if ((chkPrintPE).is(':checked')) {
                    _IsPrintPEval = 1;
                }
                else {
                    _IsPrintPEval = 0;
                }


                _isValidatePhysicalExamination++;

                XmlRequest_PhysicalExamination += "<RECORD><GROUP_CODE>" + _QuestionPhysicalExaminationGroupCode + "</GROUP_CODE>";
                XmlRequest_PhysicalExamination += "<QUESTION_CODE>" + _QuestionCodePhysicalExamination + "</QUESTION_CODE>";
                XmlRequest_PhysicalExamination += "<QUESTION_NAME>" + _QuestionNamePhysicalExamination + "</QUESTION_NAME>";
                XmlRequest_PhysicalExamination += "<RESULT_TYPE>" + _ResultType + "</RESULT_TYPE>";
                XmlRequest_PhysicalExamination += "<RESULT>" + _ResultPhysicalExamination + "</RESULT>";
                XmlRequest_PhysicalExamination += "<REMARKS>" + _RemarksPhysicalExamination + "</REMARKS>";
                XmlRequest_PhysicalExamination += "<PRINT>" + _IsPrintPEval + "</PRINT>";
                XmlRequest_PhysicalExamination += "<QUESTION_LEVEL>" + _questionlevelPhysicalExamination + "</QUESTION_LEVEL></RECORD>";


            });
            XmlRequest_PhysicalExamination += "</DATASET>";
            //alert(XmlRequest_PhysicalExamination);
            //TAB12 END HERE


            if ($("#chkSleep").attr('class') == "fa fa-check-square-o") {
                _IsSleep = 1;
            }

            var _IsSleep = 0;
            var _IsAppetite = 0;
            var _IsInterests = 0;
            var _IsIntimacy = 0;
            var _IsSocial_Life = 0;
            var _IsFinances = 0;
            if ($("#chkSleep").attr('class') == "fa fa-check-square-o") {
                _IsSleep = 1;
            }
            if ($("#chkAppetite").attr('class') == "fa fa-check-square-o") {
                _IsAppetite = 1;
            }
            if ($("#chkInterests").attr('class') == "fa fa-check-square-o") {
                _IsInterests = 1;
            }
            if ($("#chkIntimacy").attr('class') == "fa fa-check-square-o") {
                _IsIntimacy = 1;
            }
            if ($("#chkSocial_Life").attr('class') == "fa fa-check-square-o") {
                _IsSocial_Life = 1;
            }
            if ($("#chkFinances").attr('class') == "fa fa-check-square-o") {
                _IsFinances = 1;
            }


            if ($("#btnYesIdentifiedProblems").text().trim() == "YES") {

                _IsyesNoval = 'FALSE';
            }
            else {
                _IsyesNoval = 'TRUE';
            }
            $("#FileUpload1").css('border-color', '#ccc').css("border-width", "thin").css("border-size", "1px").css("border-style", "solid");



            $.ajax({
                type: 'POST',
                url: 'SchizophreniaPerforma.aspx/SaveSchizophrenia',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                cache: false,
                async: false,

                data: "{'CODE':'" + $("#txtUHID1").val() + "','NAME':'" + $("#txtName1").val() + "','AGEYEAR':'" + $("#txtAgeYY").val() + "','AGEMONTH':'" + $("#txtAgeMM").val() + "','AGEDAY':'" + $("#txtAgeDD").val() + "','GENDER':'" + $("#txtGender").val() + "','ADDRESS':'" + $("#txtAddress").val() + "','DOCTOR':'" + $("#ddlDoctor").val() + "','STATUS':'" + $("#ddlStatus").val() + "','DATE':'" + $("#txtDate").val() + "','TIME':'" + $("#txtTime").val() + "','NOTES':'" + $("#txtNotes").val() + "','CAREGIVER_NAME':'" + $("#txtCareName").val() + "','CAREGIVER_DOB':'" + $("#txtCareDOB").val() + "','CAREGIVER_GENDER':'" + $("#txtCareGender").val() + "','CAREGIVER_AGEGROUP':'" + $("#txtAgegroup").val() + "','CAREGIVER_TRAINED':'" + $("#txtTrained").val() + "','CAREGIVER_MARTALSTATUS':'" + $("#txtMaritalStatus").val() + "','CAREGIVER_EDUCATION':'" + $("#txtEducation").val() + "','CAREGIVER_OCCUPATION':'" + $("#txtOccupation").val() + "','CAREGIVER_RELIGION':'" + $("#txtReligion").val() + "','EXPLAINYES':'" + _IsyesNoval + "','EXPLAINNO':'" + $("#txtIdentifiedProblems").val() + "','RESULT':'" + $("#txtIdentifiedProblems1").val() + "','CHK_SLEEP':'" + _IsSleep + "','CHK_APPETITE':'" + _IsAppetite + "','CHK_INTERESTES':'" + _IsInterests + "','CHK_INTIMACY':'" + _IsIntimacy + "','CHK_SOCIALLIFE':'" + _IsSocial_Life + "','CHK_FINANCES':'" + _IsFinances + "','HEIGHT':'" + $("#txtHT").val() + "','WEIGHT':'" + $("#txtWT").val() + "','BLOOD_GROUP':'" + $("#txtBloodGroup").val() + "','APGAR':'" + $("#txtApgarScore").val() + "','GROWTH':'" + $("#txtGrowth").val() + "','WAIST':'" + $("#txtWaist").val() + "','OBESITY':'" + $("#txtObesity").val() + "','XMLREQUEST_MENTALSTATUS':'" + XmlRequest_MentalStatus + "','XMLREQUEST_FAMILYDYNAMICS':'" + XmlRequest_FamilyDynamics + "','XMLREQUEST_MANAGEMENTPLAN':'" + XmlRequest_ManagementPlan + "','XMLREQUEST_SYMPTOMS':'" + XmlRequest_Symptoms + "','XMLREQUEST_PASTHISTORY':'" + XmlRequest_PastHistory + "','XMLREQUEST_TREATMENTHISTORY':'" + XmlRequest_TreatmentHistory + "','XMLREQUEST_FAMILYHISTORY':'" + XmlRequest_FamilyHistory + "','XMLREQUEST_PERSONALHISTORY':'" + XmlRequest_PersonalHistory + "','XMLREQUEST_PHYSICALEXAMINATION':'" + XmlRequest_PhysicalExamination + "','XMLREQUEST_PROVISIONAL_DIAGNOSIS':'" + XmlRequest_ProvisionalDiagnosis + "'}",


                beforeSend: function() {
                },
                success: function(response) {


                    if (parseInt(response.d) > 0) {


                        FileUploadFunction(response.d);
                        DocumentSaveFunction(response.d);
                        $("#divalertSuccess").css("display", "block");
                        $("#strngSuccess").text("Schezophrenia Save Successfully !");
                        $("#divalertSuccess").delay(3200).fadeOut(300);
                        $("#txtUHID1").val('');
                        $(window).scrollTop(0, 0);

                        $("#btnRefreshSchizophreniaPerforma").trigger('click');
                        $("#btnReset").trigger('click');


                    }
                    //change here
                    else {
                        $("#divErrorMsg").css("display", "block");
                        $("#spnerrormsg").text("Record already exists !");
                        $("#divErrorMsg").delay(3200).fadeOut(300);
                    }

                },
                failure: function(response) {
                    alert('Schezophrenia Save Failed');
                },
                error: function(response) {
                    alert('Schezophrenia Save Error');
                }
            });
            // }       
        });


        //UPDATE START HERE


        $("#btnSaveEditSchizophreniaPerforma").click(function() {
            //alert('HELLO');
            // debugger;
            $("#btnSaveEditSchizophreniaPerforma").css("display", "inline-block");
            $("#btnSaveSchizophreniaPerforma").css("display", "none");

            var _isValidateMentalStatus = 0;
            var XmlRequest_MentalStatus = "<DATASET>";
            $('.tbldivQuestionOption tr ').not(':first').each(function() {

                //debugger;
                var _questionlevel = $(this).find('.hdnQuestionlevel').val();
                var _QuestionGroupCode = $(this).find('.txtL1_CODE').val();
                var _Questioncode = $(this).find('.hdnQuestionCode').val();

                var _ResultType = $(this).find('.hdnResultTypeMental_status').val();


                var _txt_questionname = $(this).find('.txtGridQuestionNameMantal_status').val();
                var _txt_result_type = $(this).find('.txtGridResult_typeMantal_status').val();
                var _txt_result; //$(this).find('.txtGridResult_typeMantal_status').val();
                if (parseInt(_ResultType) == 5) {
                    _txt_result = $(this).find(".txtGridResult_typeMantal_status5").val();
                }
                else if (parseInt(_ResultType) == 2) {

                    if ($("#btnYesGrv" + trid).val() == "Yes") {
                        _txt_result = "1";
                    }
                    else if ($("#btnYesGrv" + trid).val() == "No") {
                        _txt_result = "0";

                    }
                }
                else if (parseInt(_ResultType) == 3) {
                    if ($("#btnPositiveGrv" + trid).val() == "Positive") {
                        _txt_result = "1";
                    }
                    else if ($("#btnPositiveGrv" + trid).val() == "Negative") {
                        _txt_result = "0";
                    }
                }
                else if (parseInt(_ResultType) == 4) {
                    _txt_result = $(this).find(".txtGridResult_typeMantal_status").val();
                }




                var _txt_Remarks = $(this).find('.txtGridRemarksMantal_status').val();
                var chkPrintMentalStatus = $(this).find('input:checkbox[id="chkMentalStatus"]');
                var _IsPrintMSval = 0;
                if ((chkPrintMentalStatus).is(':checked')) {
                    _IsPrintMSval = 1;
                }
                else {
                    _IsPrintMSval = 0;
                }
                _isValidateMentalStatus++;

                if (_txt_Remarks != undefined) {

                    XmlRequest_MentalStatus += "<RECORD><GROUP_CODE>" + _QuestionGroupCode + "</GROUP_CODE>";
                    XmlRequest_MentalStatus += "<QUESTION_CODE>" + _Questioncode + "</QUESTION_CODE>";
                    XmlRequest_MentalStatus += "<QUESTION_NAME>" + _txt_questionname + "</QUESTION_NAME>";
                    XmlRequest_MentalStatus += "<RESULT_TYPE>" + _ResultType + "</RESULT_TYPE>";
                    XmlRequest_MentalStatus += "<RESULT>" + _txt_result + "</RESULT>";
                    XmlRequest_MentalStatus += "<REMARKS>" + _txt_Remarks + "</REMARKS>";
                    XmlRequest_MentalStatus += "<PRINT>" + _IsPrintMSval + "</PRINT>";
                    XmlRequest_MentalStatus += "<QUESTION_LEVEL>" + _questionlevel + "</QUESTION_LEVEL></RECORD>";
                }
            });



            XmlRequest_MentalStatus += "</DATASET>";
            //alert(XmlRequest_MentalStatus);
            //TAB1 XML END HERE


            //TAB2 XML START HERE


            var _isValidateProvisionalDiagnosis = 0;
            var XmlRequest_ProvisionalDiagnosis = "<DATASET>";


            $('#tblProvisionalDiagnosis tr ').not(':first').each(function() {
                // alert(_IsFromBirthval);
                //debugger;
                var _ICDCodeProvisionalDiagnosis = $(this).find('.txtCodeProvisionalDiagnosis').val();
                var _DiseaseNameProvisionalDiagnosis = $(this).find('.ddlDiseaseName').val();
                var _ICDNameProvisionalDiagnosis = $(this).find('.txtNameProvisionalDiagnosis').val();
                var _SinceProvisionalDiagnosis = $(this).find('.txtSince').val();
                var _UnitProvisionalDiagnosis = $(this).find('.ddlUnit').val();
                var chkitemFromBirth = $(this).find('input:checkbox[name="chkProvisional"]');
                var _RemarksProvisionalDiagnosis = $(this).find('.txt_ProvisionalRemarks').val();
                var _CurrentStatusProvisionalDiagnosis = $(this).find('.txt_ProvisionalCurrentStatus').val();
                var _StartDateProvisionalDiagnosis = $(this).find('.txt_ProvisionalStartDate').val();
                var _EndDateProvisionalDiagnosis = $(this).find('.txt_ProvisionalEndDate ').val();

                var _IsFromBirthval = 0;
                if ((chkitemFromBirth).is(':checked')) {
                    _IsFromBirthval = 1;
                }
                else {
                    _IsFromBirthval = 0;
                }
                var chkitemFollows = $(this).find('input:checkbox[name="chk_ProvisionalFollowUp"]');
                var _IsFollowsval = 0;
                if ((chkitemFollows).is(':checked')) {
                    _IsFollowsval = 1;
                }
                else {
                    _IsFollowsval = 0;
                }
                //validation
                _isValidateProvisionalDiagnosis++;

                XmlRequest_ProvisionalDiagnosis += "<RECORD><ICODE>" + _ICDCodeProvisionalDiagnosis + "</ICODE>";
                XmlRequest_ProvisionalDiagnosis += "<DISEASECODE>" + _DiseaseNameProvisionalDiagnosis + "</DISEASECODE>";
                XmlRequest_ProvisionalDiagnosis += "<SINCE>" + _SinceProvisionalDiagnosis + "</SINCE>";
                XmlRequest_ProvisionalDiagnosis += "<UNITCODE>" + _UnitProvisionalDiagnosis + "</UNITCODE>";
                XmlRequest_ProvisionalDiagnosis += "<FROMBIRTH>" + _IsFromBirthval + "</FROMBIRTH>";
                XmlRequest_ProvisionalDiagnosis += "<REMARKS>" + _RemarksProvisionalDiagnosis + "</REMARKS>";
                XmlRequest_ProvisionalDiagnosis += "<CURRENTSTATUS>" + _CurrentStatusProvisionalDiagnosis + "</CURRENTSTATUS>";
                XmlRequest_ProvisionalDiagnosis += "<STARTDATE>" + _StartDateProvisionalDiagnosis + "</STARTDATE>";
                XmlRequest_ProvisionalDiagnosis += "<ENDDATE>" + _EndDateProvisionalDiagnosis + "</ENDDATE>";
                XmlRequest_ProvisionalDiagnosis += "<FOLLOWUP>" + _IsFollowsval + "</FOLLOWUP></RECORD>";



            });



            XmlRequest_ProvisionalDiagnosis += "</DATASET>";
            //alert(XmlRequest_ProvisionalDiagnosis);


            //TAB4 START HERE
            var _isValidateFamilyDynamics = 0;
            var XmlRequest_FamilyDynamics = "<DATASET>";


            $('.tbldivQuestionOptionFamilyDynamics tr ').not(':first').each(function() {

                var _questionlevelFamilyDynamics = $(this).find('.hdnQuestionlevelFamilyDynamics').val();
                var _QuestionCodeFamilyDynamics = $(this).find('.hdnFamilyDynamicsQuestionCode').val();
                var _QuestionGroupCode = $(this).find('.hdnFamilyQuestionGroupCode').val();
                var _QuestionNameFamilyDynamics = $(this).find('.txtNameFamilyDynamics').val();
                var _ResultTypeFamilyDynamics = $(this).find('.txtFamilyDynamicsTypeFour').val();
                var _ResultType = $(this).find('.hdnResultType1').val();

                var _Result = $(this).find('.ddlFamilydynamics').val();
                if (parseInt(_ResultType) == 5) {
                    _Result = $(this).find(".ddlFamilydynamics").val();
                }
                else if (parseInt(_ResultType) == 2) {

                    if ($(this).find(".btnYesGrv").val() == "Yes") {
                        _Result = "1";
                    }
                    else if ($(this).find(".btnYesGrv").val() == "No") {
                        _Result = "0";

                    }
                }
                else if (parseInt(_ResultType) == 3) {
                    if ($(this).find(".btnPositiveGrv").val() == "Positive") {
                        _Result = "1";
                    }
                    else if ($(this).find(".btnPositiveGrv").val() == "Negative") {
                        _Result = "0";
                    }
                }
                else if (parseInt(_ResultType) == 4) {
                    _Result = $(this).find(".txtFamilyDynamicsTypeFour").val();
                }

                var _RemarksFamilyDynamics = $(this).find('.txtRemarksFamilyDynamics').val();
                var chkPrintFD = $(this).find('input:checkbox[id="chkFamilyDynamics"]');
                var _IsPrintFDval = 0;
                if ((chkPrintFD).is(':checked')) {
                    _IsPrintFDval = 1;
                }
                else {
                    _IsPrintFDval = 0;
                }


                _isValidateFamilyDynamics++;


                XmlRequest_FamilyDynamics += "<RECORD><QUESTION_CODE>" + _QuestionCodeFamilyDynamics + "</QUESTION_CODE>";
                XmlRequest_FamilyDynamics += "<QUESTION_GROUP_CODE>" + _QuestionGroupCode + "</QUESTION_GROUP_CODE>";
                XmlRequest_FamilyDynamics += "<QUESTION_NAME>" + _QuestionNameFamilyDynamics + "</QUESTION_NAME>";
                XmlRequest_FamilyDynamics += "<RESULT_TYPE>" + _ResultType + "</RESULT_TYPE>";
                XmlRequest_FamilyDynamics += "<RESULT>" + _Result + "</RESULT>";
                XmlRequest_FamilyDynamics += "<REMARKS>" + _RemarksFamilyDynamics + "</REMARKS>";
                XmlRequest_FamilyDynamics += "<Print>" + _IsPrintFDval + "</Print>";
                XmlRequest_FamilyDynamics += "<QUESTION_LEVEL>" + _questionlevelFamilyDynamics + "</QUESTION_LEVEL></RECORD>";




            });

            XmlRequest_FamilyDynamics += "</DATASET>";


            // alert(XmlRequest_FamilyDynamics);


            //TAB4 END HERE

            //TAB5 START HERE
            var _isValidateManagementPlan = 0;
            var XmlRequest_ManagementPlan = "<DATASET>";


            $('.tbldivQuestionOptionManagementPlan tr ').not(':first').each(function() {
                //debugger;
                var _questionlevelManagementPlan = $(this).find('.hdnQuestionlevelManagementPlan').val();
                var _QuestionGroupCode = $(this).find('.txtQuestionGroupcodeManagementPlan').val();
                var _QuestionCodeManagementPlan = $(this).find('.txtQuestioncodeManagementPlan').val();
                var _QuestionNameManagementPlan = $(this).find('.gridNameManagementPlan').val();
                var _ResultType = $(this).find('.hdnResultTypeMP').val();


                var _txt_result = $(this).find(".txtManagementPlanResult").val();
                if (parseInt(_ResultType) == 5) {
                    _txt_result = $(this).find(".txtManagementPlanResult").val();
                }
                else if (parseInt(_ResultType) == 2) {

                    if ($("#btnYesGrv" + trid).val() == "Yes") {
                        _txt_result = "1";
                    }
                    else if ($("#btnYesGrv" + trid).val() == "No") {
                        _txt_result = "0";

                    }
                }
                else if (parseInt(_ResultType) == 3) {
                    if ($("#btnPositiveGrv" + trid).val() == "Positive") {
                        _txt_result = "1";
                    }
                    else if ($("#btnPositiveGrv" + trid).val() == "Negative") {
                        _txt_result = "0";
                    }
                }
                else if (parseInt(_ResultType) == 4) {
                    _txt_result = $(this).find(".txtManagementPlanTypeFour").val();
                }
                var _RemarksManagementPlan = $(this).find('.Remarksmanagementplan').val();
                var chkPrintMP = $(this).find('input:checkbox[id="chkManagementPlan"]');
                if ((chkPrintMP).is(':checked')) {
                    _IsPrintMPval = 1;
                }
                else {
                    _IsPrintMPval = 0;
                }



                _isValidateManagementPlan++;

                if (_ResultType != undefined) {

                    XmlRequest_ManagementPlan += "<RECORD><GROUP_CODE>" + _QuestionGroupCode + "</GROUP_CODE>";
                    XmlRequest_ManagementPlan += "<QUESTION_CODE>" + _QuestionCodeManagementPlan + "</QUESTION_CODE>";
                    XmlRequest_ManagementPlan += "<QUESTION_NAME>" + _QuestionNameManagementPlan + "</QUESTION_NAME>";
                    XmlRequest_ManagementPlan += "<RESULT_TYPE>" + _ResultType + "</RESULT_TYPE>";
                    XmlRequest_ManagementPlan += "<RESULT>" + _txt_result + "</RESULT>";
                    XmlRequest_ManagementPlan += "<REMARKS>" + _RemarksManagementPlan + "</REMARKS>";
                    XmlRequest_ManagementPlan += "<PRINT>" + _IsPrintMPval + "</PRINT>";
                    XmlRequest_ManagementPlan += "<QUESTION_LEVEL>" + _questionlevelManagementPlan + "</QUESTION_LEVEL></RECORD>";

                }

            });
            XmlRequest_ManagementPlan += "</DATASET>";


            //alert(XmlRequest_ManagementPlan);



            //TAB7 START HERE
            var _isValidateSymptoms = 0;
            var XmlRequest_Symptoms = "<DATASET>";


            $('#tbldivBindSymptoms tr ').not(':first').each(function() {
                //debugger;
                var _questionlevelSymptoms = $(this).find('.hdnQuestionlevelSymptoms').val();
                var _QuestionCodeSymptoms = $(this).find('.txtCodeSymptoms').val();
                var _QuestionGroupCodeSymptoms = $(this).find('.hdnQuestionGroupCode').val();


                var _QuestionNameSymptoms = $(this).find('.txtNameSymptoms').val();
                var _ResultTypeSymptoms = $(this).find('.btnYesSymptomsGrv').val();
                var _ResultType = $(this).find('.hdnResultTypeSymptoms').val();
                var _txt_result = $(this).find('.ddldivSymptoms').val();
                if (parseInt(_ResultType) == 5) {
                    _txt_result = $(this).find(".ddldivSymptoms").val();
                }
                else if (parseInt(_ResultType) == 2) {

                    if ($(this).find(".btnYesSymptomsGrv").val() == "Yes") {
                        _txt_result = "1";
                    }
                    else if ($(this).find(".btnYesSymptomsGrv").val() == "No") {
                        _txt_result = "0";

                    }
                }
                else if (parseInt(_ResultType) == 3) {

                    if ($(this).find(".btnPositiveBindSymptomsGrv").val() == "Positive") {
                        _txt_result = "1";
                    }
                    else if ($(this).find(".btnPositiveBindSymptomsGrv").val() == "Negative") {
                        _txt_result = "0";
                    }
                }
                else if (parseInt(_ResultType) == 4) {
                    _txt_result = $(this).find(".txtresultTypeBindSymptoms").val();
                }
                var _RemarksSymptoms = $(this).find('.txtSymptomsRemarks').val();
                var chkPrintSymptoms = $(this).find('input:checkbox[id="chkSymptoms"]');
                if ((chkPrintSymptoms).is(':checked')) {
                    _IsPrintSymptomsval = 1;
                }
                else {
                    _IsPrintSymptomsval = 0;
                }

                _isValidateSymptoms++;

                XmlRequest_Symptoms += "<RECORD><QUESTION_CODE>" + _QuestionCodeSymptoms + "</QUESTION_CODE>";
                XmlRequest_Symptoms += "<QUESTION_GROUP_CODE>" + _QuestionGroupCodeSymptoms + "</QUESTION_GROUP_CODE>";
                XmlRequest_Symptoms += "<QUESTION_NAME>" + _QuestionNameSymptoms + "</QUESTION_NAME>";
                XmlRequest_Symptoms += "<RESULT_TYPE>" + _ResultType + "</RESULT_TYPE>";
                XmlRequest_Symptoms += "<RESULT>" + _txt_result + "</RESULT>";
                XmlRequest_Symptoms += "<REMARKS>" + _RemarksSymptoms + "</REMARKS>";
                XmlRequest_Symptoms += "<PRINT>" + _IsPrintSymptomsval + "</PRINT>";
                XmlRequest_Symptoms += "<QUESTION_LEVEL>" + _questionlevelSymptoms + "</QUESTION_LEVEL></RECORD>";


            });
            XmlRequest_Symptoms += "</DATASET>";
            //alert(XmlRequest_Symptoms);


            //TAB7 END HERE

            //TAB8 START HERE
            var _isValidatePastHistory = 0;
            var XmlRequest_PastHistory = "<DATASET>";


            $('#tbldivPastHistory tr ').not(':first').each(function() {
                //debugger;
                var _questionlevelPastHistory = $(this).find('.hdnQuestionlevelPastHistory').val();
                var _QuestionPastHistoryGroupCode = $(this).find('.hdnPastHistoryGroupCode').val();
                var _QuestionCodePastHistory = $(this).find('.txtCodePastHistory').val();
                var _QuestionNamePastHistory = $(this).find('.txtNamePastHistory').val();

                var _ResultType = $(this).find('.hdnResultTypePastHistory').val();


                if (parseInt(_ResultType) == 5) {
                    _ResultPastHistory = $(this).find(".ddlPastHistory").val();
                }
                else if (parseInt(_ResultType) == 2) {

                    if ($(this).find(".btnPastYesGrv").val() == "Yes") {
                        _ResultPastHistory = "1";
                    }
                    else if ($(this).find(".btnPastYesGrv").val() == "No") {
                        _ResultPastHistory = "0";

                    }
                }
                else if (parseInt(_ResultType) == 3) {
                    if ($(this).find(".btnPastPositiveGrv").val() == "Positive") {
                        _ResultPastHistory = "1";
                    }
                    else if ($(this).find(".btnPastPositiveGrv").val() == "Negative") {
                        _ResultPastHistory = "0";
                    }
                }
                else if (parseInt(_ResultType) == 4) {
                    _ResultPastHistory = $(this).find(".txtresultTypePastHistory").val();
                }
                var _RemarksPastHistory = $(this).find('.txtPastHistoryRemarks').val();
                var chkPrintPH = $(this).find('input:checkbox[id="chkPastHistory"]');
                if ((chkPrintPH).is(':checked')) {
                    _IsPrinPHval = 1;
                }
                else {
                    _IsPrinPHval = 0;
                }



                _isValidatePastHistory++;

                XmlRequest_PastHistory += "<RECORD><GROUP_CODE>" + _QuestionPastHistoryGroupCode + "</GROUP_CODE>";
                XmlRequest_PastHistory += "<QUESTION_CODE>" + _QuestionCodePastHistory + "</QUESTION_CODE>";
                XmlRequest_PastHistory += "<QUESTION_CODE>" + _QuestionNamePastHistory + "</QUESTION_CODE>";
                XmlRequest_PastHistory += "<RESULT_TYPE>" + _ResultType + "</RESULT_TYPE>";
                XmlRequest_PastHistory += "<RESULT>" + _ResultPastHistory + "</RESULT>";
                XmlRequest_PastHistory += "<REMARKS>" + _RemarksPastHistory + "</REMARKS>";
                XmlRequest_PastHistory += "<PRINT>" + _IsPrinPHval + "</PRINT>";
                XmlRequest_PastHistory += "<QUESTION_LEVEL>" + _questionlevelPastHistory + "</QUESTION_LEVEL></RECORD>";


            });
            XmlRequest_PastHistory += "</DATASET>";
            //alert(XmlRequest_PastHistory);


            //TAB8 END HERE

            //TAB9 START HERE
            var _isValidateTreatmentHistory = 0;
            var XmlRequest_TreatmentHistory = "<DATASET>";


            $('#tbldivTreatmentHistory tr ').not(':first').each(function() {
                //debugger;

                var _questionlevelTreatmentHistory = $(this).find('.hdnQuestionlevelTreatmentHistory').val();
                var _QuestiontTreatmentGroupCode = $(this).find('.hdnTreatmentHistoryGroupCode').val();
                var _QuestionCodeTreatmentHistory = $(this).find('.txtCodeTreatmentHistory').val();
                var _QuestionNameTreatmentHistory = $(this).find('.txtNameTreatmentHistory').val();
                var _ResultTypeTreatmentHistory = $(this).find('.hdnResultTypeTH').val();

                var _ResultType = $(this).find('.hdnResultTypeTH').val();
                var _ResultTreatmentHistory = $(this).find('.ddlTreatmentHistory').val();

                if (parseInt(_ResultType) == 5) {
                    _ResultTreatmentHistory = $(this).find(".ddlTreatmentHistory").val();
                }
                else if (parseInt(_ResultType) == 2) {

                    if ($(this).find(".btnYesTreatmentGrv").val() == "Yes") {
                        _ResultTreatmentHistory = "1";
                    }
                    else if ($(this).find(".btnYesTreatmentGrv").val() == "No") {
                        _ResultTreatmentHistory = "0";

                    }
                }
                else if (parseInt(_ResultType) == 3) {

                    if ($(this).find(".btnPositiveTreatmentGrv").val() == "Positive") {
                        _ResultTreatmentHistory = "1";
                    }
                    else if ($(this).find(".btnPositiveTreatmentGrv").val() == "Negative") {
                        _ResultTreatmentHistory = "0";
                    }
                }
                else if (parseInt(_ResultType) == 4) {
                    _ResultTreatmentHistory = $(this).find(".txtresultTypeTreatmentHistory").val();
                }
                var _RemarksTreatmentHistory = $(this).find('.txtTreatmentHistoryRemarks').val();
                var chkPrintTH = $(this).find('input:checkbox[id="chkTreatmentHistory"]');
                if ((chkPrintTH).is(':checked')) {
                    _IsPrintTHval = 1;
                }
                else {
                    _IsPrintTHval = 0;
                }


                _isValidateTreatmentHistory++;


                XmlRequest_TreatmentHistory += "<RECORD><GROUP_CODE>" + _QuestiontTreatmentGroupCode + "</GROUP_CODE>";
                XmlRequest_TreatmentHistory += "<QUESTION_CODE>" + _QuestionCodeTreatmentHistory + "</QUESTION_CODE>";
                XmlRequest_TreatmentHistory += "<QUESTION_NAME>" + _QuestionNameTreatmentHistory + "</QUESTION_NAME>";
                XmlRequest_TreatmentHistory += "<RESULT_TYPE>" + _ResultType + "</RESULT_TYPE>";
                XmlRequest_TreatmentHistory += "<RESULT>" + _ResultTreatmentHistory + "</RESULT>";
                XmlRequest_TreatmentHistory += "<REMARKS>" + _RemarksTreatmentHistory + "</REMARKS>";
                XmlRequest_TreatmentHistory += "<PRINT>" + _IsPrintTHval + "</PRINT>";
                XmlRequest_TreatmentHistory += "<QUESTION_LEVEL>" + _questionlevelTreatmentHistory + "</QUESTION_LEVEL></RECORD>";

            });
            XmlRequest_TreatmentHistory += "</DATASET>";
            //alert(XmlRequest_TreatmentHistory);


            //TAB9 END HERE

            //TAB10 START HERE
            var _isValidateFamilyHistory = 0;
            var XmlRequest_FamilyHistory = "<DATASET>";


            $('#tbldivFamilyHistory tr ').not(':first').each(function() {
                // debugger;


                var _questionlevelFamilyHistory = $(this).find('.hdnQuestionlevelFamilyHistory').val();
                var _QuestionFamilyHistoryGroupCode = $(this).find('.hdnFamilyHistoryGroupCode').val();
                var _QuestionCodeFamilytHistory = $(this).find('.txtCodeFamilyHistory').val();
                var _QuestionFamilyHistory = $(this).find('.txtNameFamilyHistory').val();
                var _ResultTypeFamilyHistory = $(this).find('.hdnResultTypeFH').val();

                var _ResultType = $(this).find('.hdnResultTypeFH').val();
                var _ResultFamilyHistory = $(this).find('.ddlFamilytHistory').val();

                if (parseInt(_ResultType) == 5) {
                    _ResultFamilyHistory = $(this).find(".ddlFamilytHistory").val();
                }
                else if (parseInt(_ResultTypeFamilyHistory) == 2) {

                    if ($(this).find(".btnYesFamilyHistoryGrv").val() == "Yes") {
                        _ResultFamilyHistory = "1";
                    }
                    else if ($(this).find(".btnYesFamilyHistoryGrv").val() == "No") {
                        _ResultFamilyHistory = "0";

                    }
                }
                else if (parseInt(_ResultType) == 3) {

                    if ($(this).find(".btnPositiveFamilyHistoryGrv").val() == "Positive") {
                        _ResultFamilyHistory = "1";
                    }
                    else if ($(this).find(".btnPositiveFamilyHistoryGrv").val() == "Negative") {
                        _ResultFamilyHistory = "0";
                    }
                }
                else if (parseInt(_ResultType) == 4) {
                    _ResultFamilyHistory = $(this).find(".txtresultTypeFamilyHistory").val();
                }
                var _RemarksFamilyHistory = $(this).find('.txtFamilytHistoryRemarks').val();
                var chkPrintFH = $(this).find('input:checkbox[id="chkFamilyHistory"]');
                if ((chkPrintFH).is(':checked')) {
                    _IsPrintFHval = 1;
                }
                else {
                    _IsPrintFHval = 0;
                }


                _isValidateFamilyHistory++;


                XmlRequest_FamilyHistory += "<RECORD><GROUP_CODE>" + _QuestionFamilyHistoryGroupCode + "</GROUP_CODE>";
                XmlRequest_FamilyHistory += "<QUESTION_CODE>" + _QuestionCodeFamilytHistory + "</QUESTION_CODE>";
                XmlRequest_FamilyHistory += "<QUESTION_NAME>" + _QuestionFamilyHistory + "</QUESTION_NAME>";
                XmlRequest_FamilyHistory += "<RESULT_TYPE>" + _ResultType + "</RESULT_TYPE>";
                XmlRequest_FamilyHistory += "<RESULT>" + _ResultFamilyHistory + "</RESULT>";
                XmlRequest_FamilyHistory += "<REMARKS>" + _RemarksFamilyHistory + "</REMARKS>";
                XmlRequest_FamilyHistory += "<print>" + _IsPrintFHval + "</print>";
                XmlRequest_FamilyHistory += "<QUESTION_LEVEL>" + _questionlevelFamilyHistory + "</QUESTION_LEVEL></RECORD>";


            });
            XmlRequest_FamilyHistory += "</DATASET>";
            //alert(XmlRequest_FamilyHistory);


            //TAB10 END HERE

            //TAB11 START HERE
            var _isValidatePersonalHistory = 0;
            var XmlRequest_PersonalHistory = "<DATASET>";
            $('#tbldivPersonalHistory tr ').not(':first').each(function() {
                var _questionlevelPersonalHistory = $(this).find('.hdnQuestionlevelPersonalHistory').val();
                var _QuestionPersonalHistoryGroupCode = $(this).find('.hdnQuestioncodePersonalHistoryGroupCode').val();
                var _QuestionCodePersonalHistory = $(this).find('.txtCodePersonalHistory').val();
                var _QuestionNmaePersonalHistory = $(this).find('.txtPersonalHistory').val();
                var _ResultTypePersonalHistory = $(this).find('.ddlPersonalHistory').val();
                var _ResultPersonalHistory = $(this).find('.ddlPersonalHistory').val();
                var _ResultType = $(this).find('.hdnResultTypePersonalHistory').val();
                if (parseInt(_ResultType) == 5) {
                    _ResultPersonalHistory = $(this).find(".ddlPersonalHistory").val();
                }
                else if (parseInt(_ResultType) == 2) {

                    if ($(this).find(".btnYesPersonalHistoryGrv").val() == "Yes") {

                        _ResultPersonalHistory = "1";
                    }
                    else if ($(this).find(".btnYesPersonalHistoryGrv").val() == "No") {
                        _ResultPersonalHistory = "0";

                    }
                }
                else if (parseInt(_ResultType) == 3) {

                    if ($(this).find(".btnPositivePersonalHistoryGrv").val() == "Positive") {
                        _ResultPersonalHistory = "1";
                    }
                    else if ($(this).find(".btnPositivePersonalHistoryGrv").val() == "Negative") {
                        _ResultPersonalHistory = "0";
                    }
                }
                else if (parseInt(_ResultType) == 4) {
                    _ResultPersonalHistory = $(this).find(".txtresultTypePersonalHistory").val();
                }
                var _RemarksPersonalHistory = $(this).find('.txtPersonalHistoryRemarks').val();
                var chkPrintPH = $(this).find('input:checkbox[id="chkPersonalHistory"]');
                if ((chkPrintPH).is(':checked')) {
                    _IsPrintPHval = 1;
                }
                else {
                    _IsPrintPHval = 0;
                }



                _isValidatePersonalHistory++;

                _QuestionPersonalHistoryGroupCode
                XmlRequest_PersonalHistory += "<RECORD><GROUP_CODE>" + _QuestionPersonalHistoryGroupCode + "</GROUP_CODE>";
                XmlRequest_PersonalHistory += "<QUESTION_CODE>" + _QuestionCodePersonalHistory + "</QUESTION_CODE>";
                XmlRequest_PersonalHistory += "<QUESTION_NAME>" + _QuestionNmaePersonalHistory + "</QUESTION_NAME>";
                XmlRequest_PersonalHistory += "<RESULT_TYPE>" + _ResultType + "</RESULT_TYPE>";
                XmlRequest_PersonalHistory += "<RESULT>" + _ResultPersonalHistory + "</RESULT>";
                XmlRequest_PersonalHistory += "<REMARKS>" + _RemarksPersonalHistory + "</REMARKS>";
                XmlRequest_PersonalHistory += "<PRINT>" + _IsPrintPHval + "</PRINT>";
                XmlRequest_PersonalHistory += "<QUESTION_LEVEL>" + _questionlevelPersonalHistory + "</QUESTION_LEVEL></RECORD>";

            });
            XmlRequest_PersonalHistory += "</DATASET>";




            //TAB12 START HERE
            var _isValidatePhysicalExamination = 0;
            var XmlRequest_PhysicalExamination = "<DATASET>";


            $('#tbldivPhysicalExamination tr ').not(':first').each(function() {
                //debugger;
                var _questionlevelPhysicalExamination = $(this).find('.hdnQuestionlevelPhysicalExamination').val();
                var _QuestionPhysicalExaminationGroupCode = $(this).find('.hdnQuestioncodePhysicalExaminationGroupCode').val();
                var _QuestionCodePhysicalExamination = $(this).find('.txtCodePhysicalExamination').val();
                var _QuestionNamePhysicalExamination = $(this).find('.txtNamePhysicalExamination').val();
                var _ResultTypePhysicalExamination = $(this).find('.txtresultTypePhysicalExamination').val();
                var _ResultPhysicalExamination = $(this).find('.ddlPhysicalExamination').val();
                var _ResultType = $(this).find('.hdnResultTypePE1').val();
                if (parseInt(_ResultType) == 5) {
                    _ResultPhysicalExamination = $(this).find(".ddlPhysicalExamination").val();
                }
                else if (parseInt(_ResultType) == 2) {

                    if ($(this).find(".btnYesPhysicalExaminationGrv").val() == "Yes") {
                        _ResultPhysicalExamination = "1";
                    }
                    else if ($(this).find(".btnYesPhysicalExaminationGrv").val() == "No") {
                        _ResultPhysicalExamination = "0";

                    }
                }
                else if (parseInt(_ResultType) == 3) {

                    if ($(this).find(".btnPositivePhysicalExaminationGrv").val() == "Positive") {
                        _ResultPhysicalExamination = "1";
                    }
                    else if ($(this).find(".btnPositivePhysicalExaminationGrv").val() == "Negative") {
                        _ResultPhysicalExamination = "0";
                    }
                }
                else if (parseInt(_ResultType) == 4) {
                    _ResultPhysicalExamination = $(this).find(".txtresultTypePhysicalExamination").val();
                }
                var _RemarksPhysicalExamination = $(this).find('.txtPhysicalExaminationRemarks').val();
                var chkPrintPE = $(this).find('input:checkbox[id="chkPhysicalExamination"]');
                if ((chkPrintPE).is(':checked')) {
                    _IsPrintPEval = 1;
                }
                else {
                    _IsPrintPEval = 0;
                }


                _isValidatePhysicalExamination++;

                XmlRequest_PhysicalExamination += "<RECORD><GROUP_CODE>" + _QuestionPhysicalExaminationGroupCode + "</GROUP_CODE>";
                XmlRequest_PhysicalExamination += "<QUESTION_CODE>" + _QuestionCodePhysicalExamination + "</QUESTION_CODE>";
                XmlRequest_PhysicalExamination += "<QUESTION_NAME>" + _QuestionNamePhysicalExamination + "</QUESTION_NAME>";
                XmlRequest_PhysicalExamination += "<RESULT_TYPE>" + _ResultType + "</RESULT_TYPE>";
                XmlRequest_PhysicalExamination += "<RESULT>" + _ResultPhysicalExamination + "</RESULT>";
                XmlRequest_PhysicalExamination += "<REMARKS>" + _RemarksPhysicalExamination + "</REMARKS>";
                XmlRequest_PhysicalExamination += "<PRINT>" + _IsPrintPEval + "</PRINT>";
                XmlRequest_PhysicalExamination += "<QUESTION_LEVEL>" + _questionlevelPhysicalExamination + "</QUESTION_LEVEL></RECORD>";

            });
            XmlRequest_PhysicalExamination += "</DATASET>";
            //TAB12 END HERE
            var _IsSleep = 0;
            var _IsAppetite = 0;
            var _IsInterests = 0;
            var _IsIntimacy = 0;
            var _IsSocial_Life = 0;
            var _IsFinances = 0;
            if ($("#chkSleep").attr('class') == "fa fa-check-square-o") {
                _IsSleep = 1;
            }
            if ($("#chkAppetite").attr('class') == "fa fa-check-square-o") {
                _IsAppetite = 1;
            }
            if ($("#chkInterests").attr('class') == "fa fa-check-square-o") {
                _IsInterests = 1;
            }
            if ($("#chkIntimacy").attr('class') == "fa fa-check-square-o") {
                _IsIntimacy = 1;
            }
            if ($("#chkSocial_Life").attr('class') == "fa fa-check-square-o") {
                _IsSocial_Life = 1;
            }
            if ($("#chkFinances").attr('class') == "fa fa-check-square-o") {
                _IsFinances = 1;
            }


            $.ajax({
                type: 'POST',
                url: 'SchizophreniaPerforma.aspx/UpdateSchizophrenia',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                cache: false,
                async: false,

                data: "{'CODE':'" + $("#txtCode").val() + "','UHID':'" + $("#txtUHID1").val() + "','NAME':'" + $("#txtName1").val() + "','AGEYEAR':'" + $("#txtAgeYY").val() + "','AGEMONTH':'" + $("#txtAgeMM").val() + "','AGEDAY':'" + $("#txtAgeDD").val() + "','GENDER':'" + $("#txtGender").val() + "','ADDRESS':'" + $("#txtAddress").val() + "','DOCTOR':'" + $("#ddlDoctor").val() + "','STATUS':'" + $("#ddlStatus").val() + "','DATE':'" + $("#txtDate").val() + "','TIME':'" + $("#txtTime").val() + "','NOTES':'" + $("#txtNotes").val() + "','CAREGIVER_NAME':'" + $("#txtCareName").val() + "','CAREGIVER_DOB':'" + $("#txtCareDOB").val() + "','CAREGIVER_GENDER':'" + $("#txtCareGender").val() + "','CAREGIVER_AGEGROUP':'" + $("#txtAgegroup").val() + "','CAREGIVER_TRAINED':'" + $("#txtTrained").val() + "','CAREGIVER_MARTALSTATUS':'" + $("#txtMaritalStatus").val() + "','CAREGIVER_EDUCATION':'" + $("#txtEducation").val() + "','CAREGIVER_OCCUPATION':'" + $("#txtOccupation").val() + "','CAREGIVER_RELIGION':'" + $("#txtReligion").val() + "','EXPLAINYES':'" + $("#btnYesIdentifiedProblems").val() + "','EXPLAINNO':'" + $("#txtIdentifiedProblems").val() + "','RESULT':'" + $("#txtIdentifiedProblems1").val() + "','CHK_SLEEP':'" + _IsSleep + "','CHK_APPETITE':'" + _IsAppetite + "','CHK_INTERESTES':'" + _IsInterests + "','CHK_INTIMACY':'" + _IsIntimacy + "','CHK_SOCIALLIFE':'" + _IsSocial_Life + "','CHK_FINANCES':'" + _IsFinances + "','HEIGHT':'" + $("#txtHT").val() + "','WEIGHT':'" + $("#txtWT").val() + "','BLOOD_GROUP':'" + $("#txtBloodGroup").val() + "','APGAR':'" + $("#txtApgarScore").val() + "','GROWTH':'" + $("#txtGrowth").val() + "','WAIST':'" + $("#txtWaist").val() + "','OBESITY':'" + $("#txtObesity").val() + "','XMLREQUEST_MENTALSTATUS':'" + XmlRequest_MentalStatus + "','XMLREQUEST_FAMILYDYNAMICS':'" + XmlRequest_FamilyDynamics + "','XMLREQUEST_MANAGEMENTPLAN':'" + XmlRequest_ManagementPlan + "','XMLREQUEST_SYMPTOMS':'" + XmlRequest_Symptoms + "','XMLREQUEST_PASTHISTORY':'" + XmlRequest_PastHistory + "','XMLREQUEST_TREATMENTHISTORY':'" + XmlRequest_TreatmentHistory + "','XMLREQUEST_FAMILYHISTORY':'" + XmlRequest_FamilyHistory + "','XMLREQUEST_PERSONALHISTORY':'" + XmlRequest_PersonalHistory + "','XMLREQUEST_PHYSICALEXAMINATION':'" + XmlRequest_PhysicalExamination + "','XMLREQUEST_PROVISIONAL_DIAGNOSIS':'" + XmlRequest_ProvisionalDiagnosis + "'}",


                beforeSend: function() {
                },
                success: function(response) {



                    if (parseInt(response.d) > 0) {
                        FileUploadFunction(response.d);
                        UpdateDocuments(response.d);
                        $("#divalertSuccess").css("display", "block");
                        $("#strngSuccess").text("Schezophrenia Update Successfully !");
                        $("#divalertSuccess").delay(3200).fadeOut(300);
                        $("#txtUHID1").val('');
                        $(window).scrollTop(0, 0);

                        $("#btnRefreshSchizophreniaPerforma").trigger('click');
                        $("#btnReset").trigger('click');
                    }
                    //change here
                    else {
                        $("#divErrorMsg").css("display", "block");
                        $("#spnerrormsg").text("Record already exists !");
                        $("#divErrorMsg").delay(3200).fadeOut(300);
                    }

                },
                failure: function(response) {
                    alert('Schezophrenia Update Failed');
                },
                error: function(response) {
                    alert('Schezophrenia Update Error');
                }
            });
            // }
        });


        //start pop here
        //1
        $("#Mental_Status").click(function() {
            $("#myModelForMental_statusMaximize").modal({
                show: true,
                width: '740px' //probably not needed

            }); //modal code end here
            $("#TxtGridRemarksMantal_status").val($(".txtGridRemarksMantal_status").val());




        }); //button click end here
        //2    
        $("#Dynamics_Family").click(function() {

            $("#myModelForFamily_dynamics").modal({
                show: true,
                width: '740px' //probably not needed

            }); //modal code end here

            $("#TxtFamilyDynamicsTypeFour").val($("#txtRemarksFamilyDynamics").val());




        }); //button click end here
        //3
        $("#Management_Plan").click(function() {


            $("#myModelForManagemen_Plan").modal({
                show: true,
                width: '740px' //probably not needed

            }); //modal code end here
            $("#TxtRemarksmanagementplan").val($(".Remarksmanagementplan").val());




        }); //button click end here

        //4
        $("#Symptoms").click(function() {
            $("#myModelForSymptoms").modal({
                show: true,
                width: '740px' //probably not needed

            }); //modal code end here
            // $(".txtSymptomsRemarks").val($("#TxtSymptomsRemarks").val());
            $("#TxtSymptomsRemarks").val($(".txtSymptomsRemarks").val());




        }); //button click end here

        //5
        $("#Past_History").click(function() {


            $("#myModelForPastHistory").modal({
                show: true,
                width: '740px' //probably not needed

            }); //modal code end here
            //  $(".txtPastHistoryRemarks").val($("#TxtPastHistoryRemarks").val());
            $("#TxtPastHistoryRemarks").val($(".txtPastHistoryRemarks").val());




        }); //button click end here
        //6

        $("#Treatment_History").click(function() {


            $("#myModelForTreatmentHistory").modal({
                show: true,
                width: '740px' //probably not needed

            }); //modal code end here
            //$(".txtTreatmentHistoryRemarks").val($("#TxtTreatmentHistoryRemarks").val());
            $("#TxtTreatmentHistoryRemarks").val($(".txtTreatmentHistoryRemarks").val());




        }); //button click end here
        //7
        $("#Family_History").click(function() {

            $("#myModelForFamilyHistory").modal({
                show: true,
                width: '740px' //probably not needed

            }); //modal code end here
            //  $(".txtFamilytHistoryRemarks").val($("#TxtFamilytHistoryRemarks").val());
            $("#TxtFamilytHistoryRemarks").val($(".txtFamilytHistoryRemarks").val());





        }); //button click end here
        //8
        $("#Personal_history").click(function() {


            $("#myModelForPersonalHistory").modal({
                show: true,
                width: '740px' //probably not needed
                //probably not needed
            }); //modal code end here

            $("#TxtPersonalHistoryRemarks").val($(".txtPersonalHistoryRemarks").val());




        }); //button click end here

        //9
        $("#Physical_Examination").click(function() {
            var _NOTES = $("#TxtNotes").val();

            $("#myModelForPhysicalExamination").modal({
                show: true,
                width: '740px' //probably not needed

            }); //modal code end here

            $("#TxtPhysicalExaminationRemarks").val($(".txtPhysicalExaminationRemarks").val());




        }); //button click end here

        //EDIT(SEARCH) END HERE
        $("#btnPerforma_search").click(function() {
            //alert("hello");
            debugger;

            $.ajax({
                type: 'POST',
                url: 'SchizophreniaPerforma.aspx/SearchAllRecord_Schizopjhrenia',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                cache: false,
                async: false,
                data: "{'SEARCH_UHID':'" + $("#txtUHID").val() + "','SEARCH_OPD':'" + $("#txtOPDNO").val() + "','SEARCH_IPD':'" + $("#txtIPDNO").val() + "','SEARCH_CASUALTY':'" + $("#txtCasualty").val() + "','SEARCH_NAME':'" + $("#txtName").val() + "'}",

                beforeSend: function() {
                },
                success: function(response) {
                    //alert(response.d);
                    $("#tblPerforma_list").css('display', 'none');
                    var xmlDoc = $.parseXML(response.d);
                    var xml = $(xmlDoc);
                    var items = xml.find("Table");
                    var table = $('<table id="tblPerforma_list" style="font-family:Calibri;" class="table table-bordered table-hover" ></table>');

                    var row = '';
                    var count = 0;
                    $.each(items, function(index) {

                        if (parseInt(count) == 0) {
                            var rowheader = '<thead><tr style="font-size:14px;">';


                            rowheader += '<th>UHID</th>';
                            rowheader += '<th>Name</th>';
                            rowheader += '<th>Gender</th>';
                            rowheader += '<th>Age</th>';
                            rowheader += '<th>Action</th>';
                            rowheader += '</tr></thead>';
                            //rowheader += '</tr>';

                            table.append(rowheader);
                        }

                        var rowcol = '';
                        rowcol += '<tbody><tr>';
                        //rowcol += '<tr>';

                        rowcol += '<td>' + $(this).find("CODE").text() + '</td>';
                        rowcol += '<td>' + $(this).find("NAME").text() + '</td>';
                        rowcol += '<td>' + $(this).find("GENDER").text() + '</td>';
                        rowcol += '<td>' + $(this).find("AGEYEAR").text() + '</td>';
                        rowcol += '<td><button type="button" id="btnSchizophreniaRecord" onclick="SelectSchizophreniaRecord(' + $(this).find("CODE").text() + ')" class="btn btn-info" style="font-family: Calibri; font-size: 12px;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></td>';
                        rowcol += '</tr></tbody>';


                        table.append(rowcol);

                        count += 1;
                    }); //each end here 
                    //}
                    if (parseInt(count) == 0) {
                        var rowcol = '';
                        rowcol += '<tbody><tr><td colspan="7" style="font-weight:bold;"><i class="fa fa-exclamation-triangle" style="font-size:24px;color:red;"></i>&nbsp;&nbsp;No matching record found !</td></tr>';
                        table.append(rowcol);
                        $('#searchPerforma_record').html(table);
                    }
                    else {
                        $('#searchPerforma_record').html(table);
                        var _table = $('#searchPerforma_record table');
                        bind_filterevent(_table);
                        paginateIt(_table, 2);
                        visibility_paging(_table);
                    }

                },
                failure: function(response) {
                    alert('Schizophrenia Search Bind Failed');
                },
                error: function(response) {
                    alert('Schizophrenia Search Bind Error');
                }
            });
            // }
        });



        //EDIT(SEARCH) END HERE
        $("#btnModSearch").click(function() {
            //alert("hello");
            debugger;



            $.ajax({
                type: 'POST',
                url: 'SchizophreniaPerforma.aspx/Search_PatientRecord',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                cache: false,
                async: false,
                data: "{'VIMHANSID':'" + $("#txtOldIdno").val() + "'}",

                beforeSend: function() {
                },
                success: function(response) {
                    //alert(response.d);
                    $("#tblItem").css('display', 'none');
                    var xmlDoc = $.parseXML(response.d);
                    var xml = $(xmlDoc);
                    var items = xml.find("Table");
                    var table = $('<table id="tblItem" style="font-family:Calibri;" class="table table-bordered table-hover" ></table>');
                    //var table = '<table id="tblBrand" style="font-family:Calibri;" class="table table-bordered table-hover" ></table>';
                    var row = '';
                    var count = 0;
                    $.each(items, function(index) {
                        //if (parseInt(items.length) > 0) {
                        if (parseInt(count) == 0) {
                            var rowheader = '<thead><tr style="font-size:14px;">';

                            rowheader += '<th>Vimhans Id</th>';
                            rowheader += '<th>UHID</th>';
                            rowheader += '<th>Name</th>';
                            rowheader += '<th>Gender</th>';
                            rowheader += '<th>Action</th>';
                            rowheader += '</tr></thead>';


                            table.append(rowheader);
                        }

                        var rowcol = '';
                        rowcol += '<tbody><tr>';
                        //rowcol += '<tr>';
                        rowcol += '<td>' + $(this).find("VIMHANSID").text() + '</td>';
                        rowcol += '<td>' + $(this).find("UHID").text() + '</td>';
                        rowcol += '<td>' + $(this).find("NAME").text() + '</td>';
                        rowcol += '<td>' + $(this).find("GENDER").text() + '</td>';
                        rowcol += '<td><button type="button" id="btnSchizophreniaUhid" onclick="SelectSchizophreniaRecord(' + $(this).find("UHID").text() + ')" class="btn btn-info" style="font-family: Calibri; font-size: 12px;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></td>';
                        rowcol += '</tr></tbody>';


                        table.append(rowcol);

                        count += 1;
                    }); //each end here 
                    //}
                    if (parseInt(count) == 0) {
                        var rowcol = '';
                        rowcol += '<tbody><tr><td colspan="7" style="font-weight:bold;"><i class="fa fa-exclamation-triangle" style="font-size:24px;color:red;"></i>&nbsp;&nbsp;No matching record found !</td></tr>';
                        table.append(rowcol);
                        $('#divSearchBind').html(table);
                    }
                    else {
                        $('#divSearchBind').html(table);
                        var _table = $('#divSearchBind table');
                        bind_filterevent(_table);
                        paginateIt(_table, 6);
                        visibility_paging(_table);
                    }

                },
                failure: function(response) {
                    alert('Schizophrenia Search Bind Failed');
                },
                error: function(response) {
                    alert('Schizophrenia Search Bind Error');
                }
            });
            // }
        });

        //EDIT(SEARCH) END HERE
        $("#btnPerformaCode").click(function() {
            //alert("hello");
            debugger;

            $.ajax({
                type: 'POST',
                url: 'SchizophreniaPerforma.aspx/Search_PerformaCode',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                cache: false,
                async: false,
                data: "",

                beforeSend: function() {
                },
                success: function(response) {
                    //alert(response.d);
                    $("#tblPERFORMA_CODE").css('display', 'none');
                    var xmlDoc = $.parseXML(response.d);
                    var xml = $(xmlDoc);
                    var items = xml.find("Table");
                    var table = $('<table id="tblPERFORMA_CODE" style="font-family:Calibri;" class="table table-bordered table-hover" ></table>');

                    var row = '';
                    var count = 0;
                    $.each(items, function(index) {
                        //if (parseInt(items.length) > 0) {
                        if (parseInt(count) == 0) {
                            var rowheader = '<thead><tr style="font-size:14px;">';

                            rowheader += '<th>Performa Code</th>';
                            rowheader += '<th>PatientUHID</th>';
                            rowheader += '<th>Name</th>';
                            rowheader += '<th>Gender</th>';
                            rowheader += '<th>Address</th>';
                            // rowheader += '<th>Action</th>';
                            rowheader += '</tr></thead>';
                            //rowheader += '</tr>';

                            table.append(rowheader);
                        }

                        var rowcol = '';
                        rowcol += '<tbody><tr>';
                        //rowcol += '<tr>';
                        rowcol += '<td>' + $(this).find("CODE").text() + '</td>';
                        rowcol += '<td>' + $(this).find("UHID").text() + '</td>';
                        rowcol += '<td>' + $(this).find("NAME").text() + '</td>';
                        rowcol += '<td>' + $(this).find("GENDER").text() + '</td>';
                        rowcol += '<td>' + $(this).find("ADDRESS").text() + '</td>';
                        // rowcol += '<td><button type="button" id="btnPerforma_code" onclick="SelectPerformaCode(' + $(this).find("CODE").text() + ')" class="btn btn-info" style="font-family: Calibri; font-size: 12px;"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></td>';
                        rowcol += '</tr></tbody>';


                        table.append(rowcol);

                        count += 1;
                    }); //each end here 
                    //}
                    if (parseInt(count) == 0) {
                        var rowcol = '';
                        rowcol += '<tbody><tr><td colspan="7" style="font-weight:bold;"><i class="fa fa-exclamation-triangle" style="font-size:24px;color:red;"></i>&nbsp;&nbsp;No matching record found !</td></tr>';
                        table.append(rowcol);
                        $('#DivPerforma_code').html(table);
                    }
                    else {
                        $('#DivPerforma_code').html(table);
                        var _table = $('#DivPerforma_code table');
                        bind_filterevent(_table);
                        paginateIt(_table, 3);
                        visibility_paging(_table);
                    }

                },
                failure: function(response) {
                    alert('Schizophrenia Search Bind Failed');
                },
                error: function(response) {
                    alert('Schizophrenia Search Bind Error');
                }
            });
            // }
        });





        $("#btnPhysicalExaminationRefresh").click(function() {
            $('.txtresultTypePhysicalExamination').val('');
            $('.txtPhysicalExaminationRemarks').val('');
        });

        $("#btnPersonalHistoryRefresh").click(function() {
            $('.txtPersonalHistoryRemarks').val('');
            $('.ddlPersonalHistory').val('0');
        });

        $("#btnFamilyHistoryRefresh").click(function() {
            $('.txtFamilytHistoryRemarks').val('');

        });

        $("#btnTreatmentHistoryRefresh").click(function() {

            $('.txtTreatmentHistoryRemarks').val('');
        });

        $("#btnPastHistoryRefresh").click(function() {

            $('.txtPastHistoryRemarks').val('');
        });

        $("#btnSymptomsRefresh").click(function() {

            $('.txtSymptomsRemarks').val('');
        });

        $("#btnManagementPlanRefresh").click(function() {
            $('.Remarksmanagementplan').val('');
            $('.txtManagementPlanTypeFour').val('');
        });

        $("#btnFamilyDynamicsRefresh").click(function() {
            $('.txtRemarksFamilyDynamics').val('');
            $('.txtFamilyDynamicsTypeFour').val('');
        });

        $("#btnProvisionalDiagnosisRefresh").click(function() {
            $('.ddlDiseaseName').val('0');
            $('.txtSince').val('');
            $("#chkProvisional").prop("checked", false);

        });

        $("#btnProvisionalDiagnosisRefresh").click(function() {
            $('.ddlDiseaseName').val('0');
            $('.txtSince').val('');
            $("#chkProvisional").prop("checked", false);

        });

        $(".btnMentalStatusRefresh").click(function() {
            $('.txtGridResult_typeMantal_status5').val('');
            $('.txtGridRemarksMantal_status').val('');


        });



        //RESET END HERE
        $("#btnRefreshSchizophreniaPerforma").click(function() {
            $("#txtCode").val('');
            $('#txtUHID').val('');
            $('#txtOPDNO').val('');
            $('#txtIPDNO').val('');
            $('#txtCasulty').val('');
            $('#txtMobile').val('');
            $('#txtAdhaar').val('');
            $("#txtUHID1").val('');
            $("#txtUHID1").prop("disabled", false);
            $("#txtName").val('');
            $("#txtName1").val('');
            $("#txtName1").prop("disabled", false);
            $("#txtAgeYY").val('');
            $("#txtAgeMM").val('');
            $("#txtAgeDD").val('');
            $("#txtGender").val('');
            $("#txtGender").prop("disabled", false);
            $("#ddlDoctor").val('0');
            $("#txtAddress").val('');
            $("#ddlStatus").val('0');
            $("#txtNotes").val('');
            $("#txtHT").val('');
            $("#txtWT").val('');
            $("#txtBloodGroup").val('');
            $("#txtApgarScore").val('');
            $("#txtObesity").val('');
            $("#txtCareName").val('');
            $("#txtCareDOB").val('');
            $("#txtCareGender").val('');
            $("#txtAgegroup").val('');
            $("#txtTrained").val('');
            $("#txtMaritalStatus").val('0');
            $("#txtEducation").val('');
            $("#txtOccupation").val('0');
            $("#txtReligion").val('');
            $("#txtdob").val('');
            $("#chkSleep").attr('class', 'fa fa-square-o');
            $("#chkAppetite").attr('class', 'fa fa-square-o');
            $("#chkInterests").attr('class', 'fa fa-square-o');
            $("#chkIntimacy").attr('class', 'fa fa-square-o');
            $("#chkSocial_Life").attr('class', 'fa fa-square-o');
            $("#chkFinances").attr('class', 'fa fa-square-o');
            $("#txtIdentifiedProblems").val('');
            $("#txtIdentifiedProblems1").val('');
            $('.txtGridResult_typeMantal_status5').val('');
            $('.txtGridRemarksMantal_status').val('');
            $('.ddlDiseaseName').val('0');
            $('.txtSince').val('');
            $('.ddlUnit').val('0');
            $(".chkProvisional").prop("checked", false);

            $('.txtFamilyDynamicsTypeFour').val('');
            $('.txtRemarksFamilyDynamics').val('');

            $('.txtManagementPlanTypeFour').val('');
            $('.Remarksmanagementplan').val('');
            $('.txtSymptomsRemarks').val('');

            $('.txtPastHistoryRemarks').val('');
            $('.txtTreatmentHistoryRemarks').val('');

            $('.txtFamilytHistoryRemarks').val('');
            $('.ddlPersonalHistory').val('0');
            $('.txtPersonalHistoryRemarks').val('');
            $('.txtresultTypePhysicalExamination').val('');
            $('.txtPhysicalExaminationRemarks').val('');

            $("#chkMentalStatus").prop("checked", false);
            $("#chkProvisionalDiagnosis").prop("checked", false);
            $("#chkProvisional").prop("checked", false);
            $("#chkFamilyDynamics").prop("checked", false);
            $("#chkManagementPlan").prop("checked", false);
            $("#chkSymptoms").prop("checked", false);
            $("#chkPastHistory").prop("checked", false);
            $("#chkTreatmentHistory").prop("checked", false);
            $("#chkFamilyHistory").prop("checked", false);
            $("#chkPersonalHistory").prop("checked", false);
            $("#chkPhysicalExamination").prop("checked", false);
            $("#btnSaveSchizophreniaPerforma").css("display", "inline-block");
            $("#btnSaveEditSchizophreniaPerforma").css("display", "none");
            $('#FileUpload1').val('');
            $('.FileUpload').val('');
            $('.clsFileName').val('');
            $('#txtdob').val('');
            $("#blah").attr('src', 'Images/avatar2.jpg');
            $('#divProvisionalDiagnosis').html("<table class='table table-bordered table-hover tblProvisionalDiagnosis' style='display:' id='tblProvisionalDiagnosis'><thead style='font-size: 14px;'><tr><th style='white-space: nowrap'>ICD Code</th><th style='white-space: nowrap'>Disease Name</th><th style='white-space: nowrap'>ICD Name</th><th style='white-space: nowrap'>Since</th><th style='white-space: nowrap'>Unit</th><th style='white-space: nowrap'>From Birth</th><th style='white-space: nowrap'>Remarks</th><th style='white-space: nowrap'>Current Status</th><th style='white-space: nowrap'>Start Date</th><th style='white-space: nowrap'>End Date</th><th>Follow Up</th><th style='white-space: nowrap'>Action</th></tr></thead><tbody><tr style='height: 40px;' id='tr1'><td><select class='form-control txtCodeProvisionalDiagnosis' style='width: 100px;' id='txtCodeProvisionalDiagnosis'><option value='0'>--Select--</option></select></td><td><select class='form-control ddlDiseaseName' style='width: 300px;' id='ddlDiseaseName'><option value='0'>--Select--</select></td><td><select class='form-control txtNameProvisionalDiagnosis' style='width: 300px;' id='txtNameProvisionalDiagnosis'><option value='0'>--Select--</option></select></td><td><input type='text' class='form-control txtSince' style='width: 80px;'id='txtSince'/></td><td><select class='form-control ddlUnit' style=' width: 150px;'id='ddlUnit'><option value='0'>Select Unit</option></select></td><td><input type='checkbox' class='form-control chkProvisional'  id='chkProvisional'/></td><td><input type='text' class='form-control txt_ProvisionalRemarks' style='width: 150px;'id='txt_ProvisionalRemarks'/></td><td><select class='form-control txt_ProvisionalCurrentStatus' style='width: 150px;'id='txt_ProvisionalCurrentStatus'><option value='0'>--Select--</option><option value='1'>Cured</option><option value='2'>Ongoing</option><option value='3'>Partially Treated</option><option value='4'>Improved</option></select></td><td><input type='text' class='form-control txt_ProvisionalStartDate' style='width: 150px;'id='txt_ProvisionalStartDate'/></td><td><input type='text' class='form-control txt_ProvisionalEndDate' style='width: 150px;'id='txt_ProvisionalEndDate'/></td><td><input type='checkbox' class='form-control chk_ProvisionalFollowUp'id='chk_ProvisionalFollowUp' name='chk_ProvisionalFollowUp' /></td><td style='white-space: nowrap; width: 100px;'><button type='button' id='btnPlus_Provisional' style='' onclick='AddRowDocument_Provisional(1);'class='btn btn-primary'><i class='fa fa-plus' aria-hidden='true'></i></button></td></tr></tbody></table>");
            BindICDCODE();
            BindUnitRecord();
            BindDiseases();

            $(window).scrollTop(0, 0);
        });

        //HEADER RESET
        $("#btnReset").click(function() {
            $('#txtUHID').val('');
            $('#txtOPDNO').val('');
            $('#txtIPDNO').val('');
            $('#txtCasultyNO').val('');
            $('#txtMobile').val('');
            $('#txtAdhaar').val('');
            $('#txtName').val('');

        });
        //GRID RESET START HERE


        $("#btnAddRecord").click(function() {
            $("#myModalAddNewPatient").modal({
                show: true,
                width: '740px' //probably not needed

            }); //modal code end here
        });

        $("#txtdob").change(function() {
            //alert("The text has been changed.");
            if ($("#txtdob").val() != "") {
                CalculateAge();
            }
        });

        //SAVE NEW PATIENT
        $("#btnSaveNewPatient").click(function() {
            //alert('hello');
            debugger;
            if ($("#txtNewNamePop").val() == "") {
                //$("#txtname").css('border-color','#ccc').css("border-width","thin").css("border-size","1px").css("border-style","solid");
                $("#divErrorMsg").css("display", "block");
                $("#spnerrormsg").text("Please enter Name !");
                $("#txtNewNamePop").focus();
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $("#txtNewNamePop").css('border-color', 'red');
                $(window).scrollTop(0, 0);
                return false;
            }
            else if ($("#ddlNewGenderPop").val() == "0") {
                $("#ddlNewGenderPop").css('border-color', '#ccc').css("border-width", "thin").css("border-size", "1px").css("border-style", "solid");
                $("#divErrorMsg").css("display", "block");
                $("#spnerrormsg").text("Please enter Gender !");
                $("#ddlNewGenderPop").focus();
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $("#ddlNewGenderPop").css('border-color', 'red');
                $(window).scrollTop(0, 0);
                return false;
            }
            else if ($("#txtNewAgePop").val() == "") {
                $("#txtNewAgePop").css('border-color', '#ccc').css("border-width", "thin").css("border-size", "1px").css("border-style", "solid");
                $("#divErrorMsg").css("display", "block");
                $("#spnerrormsg").text("Please enter Age !");
                $("#txtNewAgePop").focus();
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $("#txtNewAgePop").css('border-color', 'red');
                $(window).scrollTop(0, 0);
                return false;
            }

            else if ($("#txtNewCreatedDatePop").val() == "") {
                $("#txtNewCreatedDatePop").css('border-color', '#ccc').css("border-width", "thin").css("border-size", "1px").css("border-style", "solid");
                $("#divErrorMsg").css("display", "block");
                $("#spnerrormsg").text("Please enter Age !");
                $("#txtNewCreatedDatePop").focus();
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $("#txtNewCreatedDatePop").css('border-color', 'red');
                $(window).scrollTop(0, 0);
                return false;
            }



            $("#txtNewNamePop").css('border-color', '#ccc').css("border-width", "thin").css("border-size", "1px").css("border-style", "solid");
            $("#ddlNewGenderPop").css('border-color', '#ccc').css("border-width", "thin").css("border-size", "1px").css("border-style", "solid");
            $("#txtNewAgePop").css('border-color', '#ccc').css("border-width", "thin").css("border-size", "1px").css("border-style", "solid");

            var _name = $("#txtNewNamePop").text();

            $.ajax({
                type: 'POST',
                url: 'SchizophreniaPerforma.aspx/SaveNewPatientRecord',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                cache: false,
                async: false,

                data: "{'NAME':'" + $("#txtNewNamePop").val() + "','GENDER':'" + $("#ddlNewGenderPop option:selected").val() + "','AGEYEAR':'" + $("#txtNewAgePop").val() + "','REGISTDATE':'" + $("#txtNewCreatedDatePop").val() + "'}",
                beforeSend: function() {
                },
                success: function(response) {
                    $("#divalertSuccess").css("display", "block");
                    $("#strngSuccess").text("Record Save Successfully !");
                    $("#divalertSuccess").delay(3200).fadeOut(300);
                    $("#btnCloseNewPatient").trigger('click');
                    $("#btnResetNewPatient").trigger('click');
                    $("#btnReset").trigger('click');




                },
                failure: function(response) {
                    alert('New Patient Record Saving Failed');
                },
                error: function(response) {
                    alert('New Patient Record Saving Error');
                }
            }); //AJAX END HERE
        });   //BTNSAVENEWPATIENT END

        //reset patient Record
        $("#btnResetPatientRecord").click(function() {
            $("#txtUHID").val('');
            $("#txtIPDNO").val('');


        });

        $("#btnSearchCode_PerformaCode").click(function() {

            if ($("#txtCode").val() == "") {
                $("#divErrorMsg").css("display", "block");
                $("#spnerrormsg").text("Please Enter Code !");
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $("#txtCode").focus();
                $("#txtCode").css('border-color', 'red');

                return false;
            }
            else {


                $.ajax({
                    type: 'POST',
                    url: 'SchizophreniaPerforma.aspx/SearchSchizophrenia',
                    contentType: 'application/json; charset=utf-8',
                    dataType: 'json',
                    cache: false,
                    async: false,
                    data: "{'CODE':'" + $("#txtCode").val() + "'}",
                    beforeSend: function() {

                    },
                    success: function(response) {
                        //alert(response.d);
                        var xmlDoc = $.parseXML(response.d);
                        var xml = $(xmlDoc);
                        var items = xml.find("Table");
                        var items1 = xml.find("Table1");
                        var count = 0;
                        $.each(items, function(index) {




                            // debugger;
                            if ($(this).find("CHK_SLEEP").text() == 'true') {


                                $("#chkSleep").attr('class', 'fa fa-check-square-o'); // == "fa fa-check-square-o";

                            }
                            else {

                                $("#chkSleep").attr('class', 'fa fa-square-o'); // == "fa fa-square-o";

                            }

                            if ($(this).find("CHK_APPETITE").text() == 'true') {

                                $("#chkAppetite").attr('class', 'fa fa-check-square-o'); // == "fa fa-check-square-o";

                            }
                            else {

                                $("#chkAppetite").attr('class', 'fa fa-square-o'); // == "fa fa-square-o";

                            }

                            if ($(this).find("CHK_INTERESTES").text() == 'true') {

                                $("#chkInterests").attr('class', 'fa fa-check-square-o'); // == "fa fa-check-square-o";

                            }
                            else {

                                $("#chkInterests").attr('class', 'fa fa-square-o'); // == "fa fa-square-o";

                            }
                            if ($(this).find("CHK_INTIMACY").text() == 'true') {
                                //alert('hello');
                                $("#chkIntimacy").attr('class', 'fa fa-check-square-o'); // == "fa fa-check-square-o";
                                // $("#chkSleep").attr('class') == "fa fa-square-o";
                            }
                            else {

                                $("#chkIntimacy").attr('class', 'fa fa-square-o'); // == "fa fa-square-o";

                            }
                            if ($(this).find("CHK_SOCIALLIFE").text() == 'true') {
                                //alert('hello');
                                $("#chkSocial_Life").attr('class', 'fa fa-check-square-o'); // == "fa fa-check-square-o";
                                // $("#chkSleep").attr('class') == "fa fa-square-o";
                            }
                            else {

                                $("#chkSocial_Life").attr('class', 'fa fa-square-o'); // == "fa fa-square-o";

                            }
                            if ($(this).find("CHK_FINANCES").text() == 'true') {

                                $("#chkFinances").attr('class', 'fa fa-check-square-o'); // == "fa fa-check-square-o";

                            }
                            else {

                                $("#chkFinances").attr('class', 'fa fa-square-o'); // == "fa fa-square-o";

                            }
                            debugger;


                            // alert($(this).find("DOCUMENT_URL").text());


                            $("#txtUHID1").val($(this).find("UHID").text());
                            $("#txtUHID1").prop("disabled", true);
                            $("#txtName1").val($(this).find("NAME").text());

                            $("#txtName1").prop("disabled", true);

                            $("#txtAgeYY").val($(this).find("AGEYEAR").text());
                            $("#txtAgeMM").val($(this).find("AGEMONTH").text());
                            $("#txtAgeDD").val($(this).find("AGEDAY").text());
                            $("#txtGender").val($(this).find("GENDER").text());
                            $("#txtGender").prop("disabled", true);
                            $("#ddlDoctor").val($(this).find("DOCTOR").text());
                            $("#txtAddress").val($(this).find("ADDRESS").text());
                            $("#ddlStatus").val($(this).find("STATUS").text());
                            $("#txtNotes").val($(this).find("NOTES").text());
                            $("#txtCareName").val($(this).find("CAREGIVER_NAME").text());
                            $("#txtCareDOB").val($(this).find("CAREGIVER_DOB").text());
                            $("#txtCareGender").val($(this).find("CAREGIVER_GENDER").text());
                            $("#txtAgegroup").val($(this).find("CAREGIVER_AGEGROUP").text());
                            $("#txtTrained").val($(this).find("CAREGIVER_TRAINED").text());
                            $("#txtMaritalStatus").val($(this).find("CAREGIVER_MARTALSTATUS").text());
                            $("#txtEducation").val($(this).find("CAREGIVER_EDUCATION").text());
                            $("#txtOccupation").val($(this).find("CAREGIVER_OCCUPATION").text());
                            $("#txtReligion").val($(this).find("CAREGIVER_RELIGION").text());
                            $("#btnYesIdentifiedProblems").val($(this).find("EXPLAINYES").text());
                            $("#txtIdentifiedProblems").val($(this).find("EXPLAINNO").text());
                            $("#txtIdentifiedProblems1").val($(this).find("RESULT").text());
                            $("#txtHT").val($(this).find("HEIGHT").text());
                            $("#txtWT").val($(this).find("WEIGHT").text());
                            $("#txtBloodGroup").val($(this).find("BLOODGROUP").text());
                            $("#txtApgarScore").val($(this).find("APGAR").text());
                            $("#txtObesity").val($(this).find("OBESITY").text());
                            $("#txtFileName1").val($(this).find("DOCUMENT_NAME").text());
                            $("#File1").val($(this).find("DOCUMENT_URL").text());
                            if ($(this).find("Img_url").text() != "")//max-width: 97px; max-height: 97px;
                            {
                                var _fImageURL = "Images/" + $(this).find("Img_url").text();
                                //alert(_fImageURL);
                                $("#blah").attr('src', _fImageURL).css('width', '185px').css('height', '184px');
                            }
                            else {
                                var _fImageURL = "Images/avatar2.jpg";
                                $("#blah").attr('src', _fImageURL);
                            }


                            $("#btnSaveEditSchizophreniaPerforma").css("display", "inline-block");
                            $("#btnSaveSchizophreniaPerforma").css("display", "none");
                            BindDocumentsDetails();
                            BindManagementPlanUpdate();
                            BindSymptomsPerformaOptionUpdate();
                            BindPerformaPastHistoryUpdate();
                            BindPerformaTreatmentHistoryUpdate();
                            BindPerformaFamilyHistoryUpdate();
                            BindPersonalHistoryPerformaOptionUpdate();
                            BindPhysicalExaminationPerformaOption1Update();
                            BindPerformaQuestionUpdate();
                            BindProvisionalDiagnosisPerformaOptionUpdate();
                            BindFamilyDynamicsPerformaOptionUpdate();

                            count += 1;


                        }); //each item end here
                        if (parseInt(count) == 0) {
                            //alert('if');
                            $("#divErrorMsg").css("display", "block");
                            $("#spnerrormsg").text("Record Not found Existing Table!");
                            $("#divErrorMsg").delay(3200).fadeOut(300);
                            $(window).scrollTop(0, 0);
                            $("#txtCode").css('border-color', 'red');
                        }

                    },
                    failure: function(response) {
                        alert('Schizophrenia Bind Failed');
                    },
                    error: function(response) {
                        alert('Schizophrenia Bind Error');
                    }
                })

            }
        });  //search end here

        $("#btnSaveImage").click(function() {

            if ($("#FileBrowser").val() == "") {
                $("#divErrorMsg").css("display", "block");

                $("#spnerrormsg").text("please Choose Image!");
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $("#FileBrowser").focus();
                //$(window).scrollTop(0, 0);
                $("#FileBrowser").css('border-color', 'red');
                return false;
            }

            if ($("#ddlSaveAs").val() == "0") {
                $("#divErrorMsg").css("display", "block");

                $("#spnerrormsg").text("please Select Format !");
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $("#ddlSaveAs").focus();
                //$(window).scrollTop(0, 0);
                $("#ddlSaveAs").css('border-color', 'red');
                return false;
            }
            //debugger;
            FileBrowserImage();
            ClearFunction();

            var fileUpload = $("#FileBrowser").val();
            //var files = fileUpload.files;

            var fname = fileUpload;

            $("#txtImagingList").append(fname);



        });

        $("#btnScan").click(function() {
            //alert("hello");
            $("#ModalScanImages").modal({
                show: true,
                width: '740px' //probably not needed

            }); //modal code end here
            BindImageLocation();
            $('#txtImagingList').val("");


        });

        $("#ddlDiseaseName").on('change', function() {
            debugger;
            var _code = $("#ddlDiseaseName").val();
            //alert(_code);
            $.ajax({
                type: 'POST',
                url: 'SchizophreniaPerforma.aspx/SearchICDDetails',
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                cache: false,
                async: false,
                data: "{'CODE':'" + _code + "'}",
                beforeSend: function() {
                },
                success: function(response) {
                    var xmlDoc = $.parseXML(response.d);
                    var xml = $(xmlDoc);
                    var items = xml.find("Table");
                    var row = '';
                    var count = 0;

                    $.each(items, function(index) {
                        $("#txtCodeProvisionalDiagnosis").val($(this).find("ICDCODE").text());
                        //$("#txtCodeProvisionalDiagnosis").prop("disabled", true);
                        $("#txtNameProvisionalDiagnosis").val($(this).find("ICDCODE").text());
                        //$("#txtNameProvisionalDiagnosis").prop("disabled", true);

                    });

                },
                failure: function(response) {
                    alert('Searching Failed');
                },
                error: function(response) {
                    alert('Searching Error');
                }
            }); //END HERE
        }); //END HERE

        $("#btnSearchCode").click(function() {


            $("#MyPerformaModel_code").modal({
                show: true,
                width: '740px' //probably not needed

            }); //modal code end here

            $("#btnPerformaCode").trigger('click');


        }); //button click end here
        $("#btnOldID").click(function() {
            if ($("#txtOldIdno").val() == "") {
                $("#divErrorMsg").css("display", "block");
                $("#spnerrormsg").text("Please enter Vimhans ID !");
                $("#txtOldIdno").focus();
                $("#divErrorMsg").delay(3200).fadeOut(300);
                $("#txtOldIdno").css('border-color', 'red');
                $(window).scrollTop(0, 0);
                return false;
            }


            $("#myModelForSampleCollection").modal({
                show: true,
                width: '740px' //probably not needed

            }); //modal code end here

            $("#btnModSearch").trigger('click');


        }); //button click end here
        $("#btnSearchPatientRecord_BYID").click(function() {
            var _UHID = $("#txtUHID").val();
            var _OPD_NO = $("#txtOPDNO").val();
            var _IPD_NO = $("#txtIPDNO").val();
            var _CASUALTY_NO = $("#txtCasualty").val();
            var _NAME = $("#txtName").val();
            $("#myPerformaModel").modal({
                show: true,
                width: '740px' //probably not needed

            }); //modal code end here

            $("#TxtUHID").val($("#txtUHID").val());
            $("#TxtOPD").val($("#txtOPDNO").val());
            $("#TxtIPD").val($("#txtIPDNO").val());
            $("#TxtCasualty").val($("#txtCasualty").val());
            $("#TxtName").val($("#txtName").val());
            $("#btnPerforma_search").trigger('click');


        }); //button click end here
        $("#Notesmaximize").click(function() {


            $("#myModelForNotesMaximize").modal({
                show: true,
                width: '740px' //probably not needed

            }); //modal code end here

            $("#TxtNotes").val($("#txtNotes").val());

        }); //button click end here

        $("#btnYesIdentifiedProblems").click(function() {


            if ($(this).text().trim() == "YES") {
                $("#btnYesIdentifiedProblems").text('NO');
                $("#txtIdentifiedProblems").prop("disabled", false);



            }
            else {
                $("#btnYesIdentifiedProblems").text('YES');
                $("#txtIdentifiedProblems").prop("disabled", true);

            }

        });
        $("#FileBrowser").on('change', function() {

            var countFiles = $(this)[0].files.length;

            var imgPath = $(this)[0].value;
            var extn = imgPath.substring(imgPath.lastIndexOf('.') + 1).toLowerCase();
            var image_holder = $("#divImageView");
            image_holder.empty();

            if (extn == "gif" || extn == "png" || extn == "jpg" || extn == "jpeg") {
                if (typeof (FileReader) != "undefined") {


                    for (var i = 0; i < countFiles; i++) {

                        var reader = new FileReader();
                        reader.onload = function(e) {
                            $("<img />", {
                                "src": e.target.result,
                                "class": "thumb-image"
                            }).appendTo(image_holder);
                        }

                        image_holder.show();
                        reader.readAsDataURL($(this)[0].files[i]);
                    }

                } else {
                    alert("This browser does not support FileReader.");
                }
            } else {
                alert("Pls select only images");
            }
        });






    }); //READY END HERE

    SelectSchizophreniaUhid = function(_uhid) {
        //alert(_uhid);
        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/SearchEditPatient_Record',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            cache: false,
            async: false,
            data: "{'CODE':'" + _uhid + "'}",
            beforeSend: function() {
            },
            success: function(response) {
                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);
                var items = xml.find("Table");
                var row = '';
                var count = 0;

                $("#txtUHID2").attr("disabled", "disabled");

                $.each(items, function(index) {
                    $("#txtUHID").val($(this).find("CODE").text());

                    $("#txtUHID1").val($(this).find("CODE").text());
                    $("#txtUHID1").prop("disabled", true);
                    $("#txtName1").val($(this).find("NAME").text());
                    $("#txtName1").prop("disabled", true);
                    $("#txtAgeYY").val($(this).find("AGEYEAR").text());
                    $("#txtAgeMM").val($(this).find("AGEMONTH").text());
                    $("#txtAgeDD").val($(this).find("AGEDAY").text());
                    $("#txtAgeDD").prop("disabled", true);
                    $("#txtAgeYY").prop("disabled", true);
                    $("#txtAgeMM").prop("disabled", true);
                    $("#txtGender").val($(this).find("GENDER").text());
                    $("#txtGender").prop("disabled", true);
                    $("#txtHT").val($(this).find("HEIGHT").text());
                    $("#txtWT").val($(this).find("WEIGHT").text());
                    $("#txtBloodGroup").val($(this).find("BLOODGROUP").text());
                    $("#txtApgarScore").val($(this).find("APGAR").text());
                    $("#txtObesity").val($(this).find("OBESITY").text());
                    $("#txtdob").val($(this).find("DOB").text());
                    $("#txtAddress").val($(this).find("ADDRESS_NAME").text());
                });
                $("#btnCloseSampleCollection").trigger('click');   //table loop end here 
            },
            failure: function(response) {
                alert('Searching Failed');
            },
            error: function(response) {
                alert('Searching Error');
            }
        });
    }  // SEARCH PATIENT THROUGH UHID ENDS HERE


    SelectSchizophreniaRecord = function(_id) {

        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/SearchEditPatient_Record',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            cache: false,
            async: false,
            data: "{'CODE':'" + _id + "'}",
            beforeSend: function() {
            },
            success: function(response) {
                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);
                var items = xml.find("Table");
                var row = '';
                var count = 0;

                $("#txtUHID2").attr("disabled", "disabled");

                $.each(items, function(index) {


                    $("#txtUHID1").val($(this).find("CODE").text());
                    $("#txtUHID1").prop("disabled", true);
                    $("#txtName1").val($(this).find("NAME").text());
                    $("#txtName1").prop("disabled", true);
                    $("#txtAgeYY").val($(this).find("AGEYEAR").text());
                    $("#txtAgeMM").val($(this).find("AGEMONTH").text());
                    $("#txtAgeDD").val($(this).find("AGEDAY").text());
                    $("#txtAgeDD").prop("disabled", true);
                    $("#txtAgeYY").prop("disabled", true);
                    $("#txtAgeMM").prop("disabled", true);
                    $("#txtGender").val($(this).find("GENDER").text());
                    $("#txtGender").prop("disabled", true);
                    $("#txtHT").val($(this).find("HEIGHT").text());
                    $("#txtWT").val($(this).find("WEIGHT").text());
                    $("#txtBloodGroup").val($(this).find("BLOODGROUP").text());
                    $("#txtApgarScore").val($(this).find("APGAR").text());
                    $("#txtObesity").val($(this).find("OBESITY").text());
                    $("#txtdob").val($(this).find("DOB").text());
                    $("#txtAddress").val($(this).find("ADDRESS_NAME").text());
                });
                $("#close").trigger('click');
                $("#myModelForSampleCollection").trigger('click');   //table loop end here 
            },
            failure: function(response) {
                alert('Searching Failed');
            },
            error: function(response) {
                alert('Searching Error');
            }
        });
    }  // SEARCH PATIENT THROUGH UHID ENDS HERE






    //UPDATE TAB1 START HERE
    BindPerformaQuestionOptionUpdate = function(_GROUPcode) {
        //alert('HELLO');


        var _code = $("#txtCode").val();

        var _result = $('#txtGridResult_typeMantal_status5 option:selected').text();

        var _strHTML = "";

        var divQuestion = "#divQuestion" + _GROUPcode;

        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/BindSchizophreniaQuestionPerformaDetailUpdated',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            cache: false,
            async: false,

            data: "{'CODE':'" + _GROUPcode + "','UPDATE_CODE':'" + _code + "'}",

            success: function(response) {


                //debugger;
                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);

                var items = xml.find("Table");
                var table = $('<table id="tbldivQuestionOption' + _GROUPcode + '" style="font-family:Calibri;" class="table table-bordered table-hover mt-2 tbldivQuestionOption" ></table>');
                _strHTML += '<table id="tbldivQuestionOption' + _GROUPcode + '" style="font-family:Calibri;" class="table table-bordered table-hover mt-2 tbldivQuestionOption" >';
                var row = '';
                var count = 0;
                $.each(items, function(index) {
                    if (parseInt(count) == 0) {
                        _strHTML += '<thead><tr><th>Question</th><th>Result</th><th>Remarks</th></tr></thead>';
                        var rowheader = '<thead><tr>';
                        rowheader += '<th>Question</th>';
                        rowheader += '<th>Result</th>';
                        rowheader += '<th>Remarks</th>';

                        rowheader += '</tr></thead>';
                        table.append(rowheader);
                    }


                    var rowcol = '';
                    _strHTML += '<tbody><tr>';

                    _strHTML += '<td style="display:none;"><input type="hidden" id="hdnResultTypeMental_status" class="hdnResultTypeMental_status" value="' + $(this).find("RESULT_TYPE").text() + '" /><input type="hidden" id="hdnQuestionCode" class="hdnQuestionCode" value="' + $(this).find("CODE").text() + '" /><input type="hidden" id="txtL1_CODE" class="txtL1_CODE" value="' + $(this).find("L1_CODE").text() + '" /></td>';

                    _strHTML += '<td style="display:none;"><input type="text" style="margin-top: 17px;" disabled class="form-control txtGridQuestionNameMantal_status"  id="txtGridQuestionNameMantal_status" value="' + $(this).find("QUESTION").text() + '" /></td>';
                    _strHTML += '<td style="padding-top:35px;"><span class="txtGridQuestionNameMantal_status" id="txtGridQuestionNameMantal_status' + $(this).find("CODE").text() + '">' + $(this).find("QUESTION").text() + '</span></td>';


                    _strHTML += '<td style="display:none;"><input type="hidden" style="margin-top: 17px;" class="form-control hdnQuestionlevel"  id="hdnQuestionlevel" value="' + $(this).find("QUESTION_LEVEL").text() + '" /></td>';



                    if ($(this).find("RESULT_TYPE").text() == '1') {

                        _strHTML += '<td><input type="text" class="form-control txtGridResult_typeMantal_status" id="txtGridResult_typeMantal_status" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '2') {

                        _strHTML += '<td><input type="button" id="btnYesGrv' + $(this).find("CODE").text() + '" class="buttonGrv btnYesGrv" style="width:100px;background-color:#3c8dbc;color:white;" onclick="ChangeTxtNo(' + $(this).find("CODE").text() + ')" value="Yes" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '3') {

                        _strHTML += '<td><input type="button" id="btnPositiveGrv' + $(this).find("CODE").text() + '" class="buttonGrv btnPositiveGrv" style="width:100px;background-color:#3c8dbc;color:white;" onclick="ChangeTxtNegative(' + $(this).find("CODE").text() + ')" value="Positive" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '4') {

                        _strHTML += '<td><input type="text" id="txtResultType4Mental"  class="form-control txtResultType4Mental"/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '5') {
                        if ($(this).find("RESULT").text() == "YES") {
                            _strHTML += '<td><select style="margin-top: 17px;" class="form-control txtGridResult_typeMantal_status5"  id="txtGridResult_typeMantal_status5" value="' + $(this).find("RESULT").text() + '" ><option value="' + $(this).find("RESULT").text() + '">' + $(this).find("RESULT").text() + '</option><option value="YES">YES</option><option value="NO">NO</option></td>';

                        }
                        else if ($(this).find("RESULT").text() == "NO") {
                            _strHTML += '<td><select style="margin-top: 17px;" class="form-control txtGridResult_typeMantal_status5"  id="txtGridResult_typeMantal_status5" value="' + $(this).find("RESULT").text() + '" ><option value="' + $(this).find("RESULT").text() + '">' + $(this).find("RESULT").text() + '</option><option value="YES">YES</option><option value="NO">NO</option></td>';

                        }
                        else {


                            _strHTML += '<td><select style="margin-top: 17px;" class="form-control txtGridResult_typeMantal_status5"  id="txtGridResult_typeMantal_status5" value="' + $(this).find("RESULT").text() + '" ><option value="0">--Select--</option><option value="YES">YES</option><option value="NO">NO</option></td>';
                        }

                    }
                    _strHTML += '<td><i style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Speech to text" class="fa fa-microphone"></i>&nbsp;&nbsp;<i  style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Ink to Text"  class="fa fa-pencil" aria-hidden="true"></i>&nbsp;&nbsp;<i data-toggle="tooltip" title="Maximize" style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" class="fa fa-window-maximize" aria-hidden="true"></i><input type="text" style="margin-top: 1px;" class="form-control txtGridRemarksMantal_status"  id="txtGridRemarksMantal_status" value="' + $(this).find("REMARKS").text() + '" /></td>';




                    count += 1;
                }); //each end here
                _strHTML += '</table>';


            },
            failure: function(response) {
                alert('Failed during fetching record');
            },
            error: function(response) {
                alert('Error during fetching record ');
            }

        }); //post data end here
        return _strHTML;


    } //function end here......

    //UPDATE TAB2 START HERE
    BindProvisionalDiagnosisPerformaOptionUpdate = function() {

        $("#divProvisionalDiagnosis").html('');
        var _code = $("#txtCode").val();

        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/GetICDNameUpdated',
            async: false,
            cache: true,
            data: "{'DOCVISITNO':'" + _code + "'}",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            beforeSend: function() {
            },
            success: function(response) {
                //alert(response.d);
                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);

                var items = xml.find("Table");
                var table = $('<table id="tblProvisionalDiagnosis" style="font-family:Calibri;" class="table table-bordered table-hover mt-2 tblProvisionalDiagnosis" ></table>');
                var row = '';
                var count = 0;
                var _trid = 1;
                $.each(items, function(index) {
                    if (parseInt(count) == 0) {
                        var rowheader = '<thead><tr>';
                        rowheader += '<th>ICD Code</th>';
                        rowheader += '<th>Disease Name</th>';
                        rowheader += '<th>ICD Name</th>';
                        rowheader += '<th>Since</th>';
                        rowheader += '<th>Unit</th>';
                        rowheader += '<th>From Birth</th>';
                        rowheader += '<th>Remarks</th>';
                        rowheader += '<th>Current Status</th>';
                        rowheader += '<th>Start Date</th>';
                        rowheader += '<th>End Date</th>';
                        rowheader += '<th>Follow UP</th>';
                        //rowheader += '<th>Action</th>';
                        rowheader += '</tr></thead>';
                        table.append(rowheader);
                    }
                    var rowcol = '';

                    rowcol += '<tbody><tr>';
                    rowcol += '<td><select class="form-control txtCodeProvisionalDiagnosis"  id="txtCodeProvisionalDiagnosis' + _trid + '"  style="width:100px;" value="' + $(this).find("PROVISIONAL_CODE").text() + '"><option value="' + $(this).find("PROVISIONAL_CODE").text() + '">' + $(this).find("PROVISIONAL_CODE").text() + '</option></select></td>';



                    rowcol += '<td><select onchange="myFunction_disease(' + _trid + ')" id="ddlDiseaseName' + _trid + '" class="form-control ddlDiseaseName" style="width:300px;" value="' + $(this).find("DISEASE_CODE").text() + '"><option value="' + $(this).find("DISEASE_CODE").text() + '">' + $(this).find("DISEASE_NAME").text() + '</option></select></td>';


                    rowcol += '<td><select class="form-control txtNameProvisionalDiagnosis"  id="txtNameProvisionalDiagnosis' + _trid + '"  style="width:300px;" value="' + $(this).find("PROVISIONAL_CODE").text() + '"><option value="' + $(this).find("PROVISIONAL_CODE").text() + '">' + $(this).find("PROVISIONAL_NAME").text() + '</option></select></td>';


                    rowcol += '<td><input type="text" class="form-control txtSince" style="width:80px;" id="txtSince" style="width:150px;" value="' + $(this).find("SINCE").text() + '" ></td>';
                    rowcol += '<td><select style="width:150px;" id="ddlUnit" class="form-control ddlUnit" value="' + $(this).find("UNIT_CODE").text() + '"><option value="' + $(this).find("UNIT_CODE").text() + '" style="width:150px;">' + $(this).find("UNIT_NAME").text() + '</option></select></td>';

                    if ($(this).find("FROMBIRTH").text() == "true") {


                        rowcol += '<td><input type="checkbox"  checked="true" id="chkProvisional" name="chkProvisional" class="from-control chkProvisional" value="' + $(this).find("FROMBIRTH").text() + '"/></td>';
                    }
                    else {

                        rowcol += '<td><input type="checkbox"  id="chkProvisional" name="chkProvisional" class="from-control chkProvisional" value="' + $(this).find("FROMBIRTH").text() + '"/></td>';
                    }
                    rowcol += '<td><input type="text" id="txt_ProvisionalRemarks" class="form-control txt_ProvisionalRemarks" style="width:150px;" value="' + $(this).find("REMARKS").text() + '"></td>';
                    if ($(this).find("CURRENTSTATUS").text() == "1") {

                        rowcol += '<td><select id="txt_ProvisionalCurrentStatus" class="form-control txt_ProvisionalCurrentStatus" style="width:150px;"><option value="1">Cured</option><option value="2">Ongoing</option><option value="3">Partially Treated</option><option value="4">Improved</option></select></td>';
                    }
                    else if ($(this).find("CURRENTSTATUS").text() == "2") {

                        rowcol += '<td><select id="txt_ProvisionalCurrentStatus" class="form-control txt_ProvisionalCurrentStatus" style="width:150px;"><option value="2">Ongoing</option><option value="3">Partially Treated</option><option value="4">Improved</option><option value="1">Cured</option></select></td>';
                    }
                    else if ($(this).find("CURRENTSTATUS").text() == "3") {

                        rowcol += '<td><select id="txt_ProvisionalCurrentStatus" class="form-control txt_ProvisionalCurrentStatus" style="width:150px;"><option value="3">Partially Treated</option><option value="4">Improved</option><option value="1">Cured</option><option value="2">Ongoing</option></select></td>';
                    }
                    else if ($(this).find("CURRENTSTATUS").text() == "4") {

                        rowcol += '<td><select id="txt_ProvisionalCurrentStatus" class="form-control txt_ProvisionalCurrentStatus" style="width:150px;"><option value="4">Improved</option><option value="1">Cured</option><option value="2">Ongoing</option><option value="3">Partially Treated</option></select></td>';
                    }
                    else {

                        rowcol += '<td><select id="txt_ProvisionalCurrentStatus" class="form-control txt_ProvisionalCurrentStatus" style="width:150px;"><option value="0">--Select--</option><option value="1">Cured</option><option value="2">Ongoing</option><option value="3">Partially Treated</option><option value="4">Improved</option></select></td>';
                    }

                    rowcol += '<td><input type="text" id="txt_ProvisionalStartDate" class="form-control txt_ProvisionalStartDate"  style="width:150px;" value="' + $(this).find("STARTDATE").text() + '"></td>';
                    rowcol += '<td><input type="text" id="txt_ProvisionalEndDate" class="form-control txt_ProvisionalEndDate" style="width:150px;" style="width:150px;" value="' + $(this).find("ENDDATE").text() + '"></td>';
                    if ($(this).find("FOLLOWUP").text() == "true") {

                        rowcol += '<td><input type="checkbox" checked="true" id="chk_ProvisionalFollowUp" name="chk_ProvisionalFollowUp" class="from-control chk_ProvisionalFollowUp" value="' + $(this).find("FOLLOWUP").text() + '"/></td>';
                    }
                    else {

                        rowcol += '<td><input type="checkbox"  id="chk_ProvisionalFollowUp" name="chk_ProvisionalFollowUp" class="from-control chk_ProvisionalFollowUp" value="' + $(this).find("FOLLOWUP").text() + '"/></td>';
                    }

                    //rowcol += '<td><button type="button" id="btnPlus_Provisional" onclick="AddRowDocument_Provisional(1);" class="btn btn-primary"><i class="fa fa-plus" aria-hidden="true"></i></button></td>';

                    table.append(rowcol);
                    count += 1;
                    _trid += 1;
                }); //each end here
                $("#divProvisionalDiagnosis").html(table);
                var _table = $('#divProvisionalDiagnosis table'); //                        
                bind_filterevent(_table);
                paginateIt(_table, 10);
                visibility_paging(_table);
                BindUnitRecord(1);
                BindDiseases(1);




            },
            failure: function(response) {
                alert('Bind Provisional Diganosis Failed');
            },
            error: function(response) {
                alert('Bind Provisional Diganosis Error');
            }
        });
    }  // BIND FUNCTION ENDING

    //    //TAB2 END HERE

    //UPDATE TAB3 START HERE


    BindFamilyDynamicsPerformaOptionUpdate = function() {
        //debugger;
        var _code = $("#txtCode").val();
        var divQuestion = "#divFamilyDynamics" + _code;
        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/BindQuestionFamilyDynamicsUpdated',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            cache: false,
            async: false,
            data: "{'CODE':'" + _code + "'}",

            success: function(response) {
                //alert(response.d);
                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);

                var items = xml.find("Table");
                var table = $('<table id="tbldivQuestionOptionFamilyDynamics' + _code + '" style="font-family:Calibri;" class="table table-bordered table-hover mt-2 tbldivQuestionOptionFamilyDynamics" ></table>');
                var row = '';
                var count = 0;
                $.each(items, function(index) {
                    if (parseInt(count) == 0) {
                        var rowheader = '<thead><tr>';
                        rowheader += '<th>Question</th>';
                        rowheader += '<th>Result</th>';
                        rowheader += '<th>Remarks</th>';

                        rowheader += '</tr></thead>';
                        table.append(rowheader);
                    }
                    var rowcol = '';

                    rowcol += '<tbody><tr>';

                    rowcol += '<td style="display:none;"><input type="hidden" style="margin-top: 17px;" class="form-control hdnQuestionlevelFamilyDynamics"  id="hdnQuestionlevelFamilyDynamics" value="' + $(this).find("QUESTION_LEVEL").text() + '" /></td>';
                    rowcol += '<td style="display:none;"><input type="hidden" id="hdnFamilyQuestionGroupCode" class="hdnFamilyQuestionGroupCode" value="' + $(this).find("Q_GROUP_CODE").text() + '" /><input type="hidden" id="hdnResultType1" class="hdnResultType1" value="' + $(this).find("RESULT_TYPE").text() + '" /><input type="hidden" id="txtCodeFamilyDynamics" class="hdnFamilyDynamicsQuestionCode" value="' + $(this).find("QUESTION").text() + '" /></td>';

                    rowcol += '<td style="display:none;"><input type="text" style="margin-top: 17px;" disabled class="form-control txtNameFamilyDynamics"  id="txtNameFamilyDynamics" value="' + $(this).find("NAME").text() + '" /></td>';
                    rowcol += '<td style="padding-top:35px;"><span class="txtNameFamilyDynamics" id="txtNameFamilyDynamics' + $(this).find("QUESTION").text() + '">' + $(this).find("NAME").text() + '</span></td>';

                    if ($(this).find("RESULT_TYPE").text() == '1') {
                        rowcol += '<td><input type="text" id="txtFamilyDynamicsTypeone' + $(this).find("QUESTION").text() + '" class="form-control txtFamilyDynamicsTypeone" style="margin-top: 17px;" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '2' && $(this).find("RESULT").text() == '') {
                        rowcol += '<td><input type="button" id="btnYesGrv' + $(this).find("QUESTION").text() + '" class="form-control btnYesGrv" style="background-color:#3c8dbc;color:white;margin-top: 17px;" onclick="ChangeTxtNo(' + $(this).find("QUESTION").text() + ')" value="Yes" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '2' && $(this).find("RESULT").text() == '1') {
                        rowcol += '<td><input type="button" id="btnYesGrv' + $(this).find("QUESTION").text() + '" class="form-control btnYesGrv" style="background-color:#3c8dbc;color:white;margin-top: 17px;" onclick="ChangeTxtNo(' + $(this).find("QUESTION").text() + ')" value="Yes" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '2' && $(this).find("RESULT").text() == '0') {
                        rowcol += '<td><input type="button" id="btnYesGrv' + $(this).find("QUESTION").text() + '" class="form-control btnYesGrv" style="background-color:#3c8dbc;color:white;margin-top: 17px;" onclick="ChangeTxtNo(' + $(this).find("QUESTION").text() + ')" value="No" /></td>';

                    }

                    else if ($(this).find("RESULT_TYPE").text() == '3') {
                        rowcol += '<td><input type="button" id="btnPositiveGrv' + $(this).find("QUESTION").text() + '" class="buttonGrv btnPositiveGrv" style="width:100px;background-color:#3c8dbc;color:white;" onclick="ChangeTxtNegative(' + $(this).find("QUESTION").text() + ')" value="Positive"  style="margin-top: 17px;" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '4') {
                        rowcol += '<td><input type="text" style="margin-top: 17px;" class="form-control txtFamilyDynamicsTypeFour"  id="txtFamilyDynamicsTypeFour" value="' + $(this).find("RESULT").text() + '" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '5') {
                        rowcol += '<td><select  style="margin-top: 17px;" id="ddlFamilydynamics' + $(this).find("QUESTION").text() + '" class="form-control ddlFamilydynamics"><option>--Select--</option></select></td>';

                    }



                    rowcol += '<td><i style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Speech to text" class="fa fa-microphone"></i>&nbsp;&nbsp;<i  style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Ink to Text"  class="fa fa-pencil" aria-hidden="true"></i>&nbsp;&nbsp;<i data-toggle="tooltip" title="Maximize" style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" class="fa fa-window-maximize" aria-hidden="true"></i><input type="text" style="" class="form-control txtRemarksFamilyDynamics"  id="txtRemarksFamilyDynamics" value="' + $(this).find("REMARKS").text() + '" /></td>';

                    table.append(rowcol);
                    count += 1;
                }); //each end here
                $("#divFamilyDynamics").html(table);
                var _table = $('#divFamilyDynamics table'); //                        
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
    }



    //MANAGEMENT PLAN START HERE
    BindManagementPlanPerformaOptionUpdate = function(_GROUPcode) {
        //debugger;
        var _code = $("#txtCode").val();
        var _QuestionCodeManagementPlan = $(this).find('#txtQuestioncodeManagementPlan').val();
        var _QuestionNameManagementPlan = $(this).find('.gridNameManagementPlan').val();
        var _ResultTypeManagementPlan = $(this).find('.txtManagementPlanTypeFour').val();
        var _ResultManagementPlan = $(this).find('.txtManagementPlanResult').val();
        var _RemarksManagementPlan = $(this).find('.Remarksmanagementplan').val();
        var chkPrintMP = $(this).find('input:checkbox[id="chkManagementPlan"]');
        if ((chkPrintMP).is(':checked')) {
            _IsPrintMPval = 1;
        }
        else {
            _IsPrintMPval = 0;
        }
        var _strHTML = "";

        var divQuestion = "#divQuestionManagementPlan" + _code;

        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/BindQuestionManagementPlanDetailUpdate',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            cache: false,
            async: false,
            data: "{'CODE':'" + _GROUPcode + "','UPDATE_CODE':'" + _code + "'}",

            success: function(response) {
                //alert(response.d);




                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);

                var items = xml.find("Table");
                var table = $('<table id="tbldivQuestionOptionManagementPlan' + _GROUPcode + '" style="font-family:Calibri;" class="table table-bordered table-hover mt-2 tbldivQuestionOptionManagementPlan" ></table>');
                _strHTML += '<table id="tbldivQuestionOptionManagementPlan' + _GROUPcode + '" style="font-family:Calibri;" class="table table-bordered table-hover mt-2 tbldivQuestionOptionManagementPlan" >';
                var row = '';
                var count = 0;
                $.each(items, function(index) {
                    if (parseInt(count) == 0) {
                        _strHTML += '<thead><tr><th>Question</th><th>Result</th><th>Remarks</th></tr></thead>';
                        var rowheader = '<thead><tr>';
                        rowheader += '<th>Question</th>';
                        rowheader += '<th>Result</th>';
                        rowheader += '<th>Remarks</th>';
                        rowheader += '</tr></thead>';
                        table.append(rowheader);
                    }
                    var rowcol = '';
                    _strHTML += '<tbody><tr>';
                    rowcol += '<tbody><tr>';

                    _strHTML += '<td style="display:none;"><input type="hidden" id="hdnResultTypeMP" class="hdnResultTypeMP" value="' + $(this).find("RESULT_TYPE").text() + '" /><input type="hidden" id="txtQuestionGroupcodeManagementPlan" class="txtQuestionGroupcodeManagementPlan" value="' + $(this).find("L1_CODE").text() + '" /></td>';

                    _strHTML += '<td style="display:none;"><input type="text" disabled class="form-control gridNameManagementPlan"  id="gridNameManagementPlan" value="' + $(this).find("QUESTION").text() + '" style="margin-top: 17px;" /></td>';
                    _strHTML += '<td style="padding-top:35px;"><span class="gridNameManagementPlan" id="gridNameManagementPlan' + $(this).find("CODE").text() + '">' + $(this).find("QUESTION").text() + '</span></td>';


                    _strHTML += '<td style="display:none;"><input type="text" disabled class="form-control txtQuestioncodeManagementPlan"  id="txtQuestioncodeManagementPlan" value="' + $(this).find("CODE").text() + '" /></td>';

                    _strHTML += '<td style="display:none;"><input type="hidden" style="margin-top: 17px;" class="form-control hdnQuestionlevelManagementPlan"  id="hdnQuestionlevelManagementPlan" value="' + $(this).find("QUESTION_LEVEL").text() + '" /></td>';


                    if ($(this).find("RESULT_TYPE").text() == '1') {

                        _strHTML += '<td><input type="text" class="form-control txtManagementPlanTypeone" id="txtManagementPlanTypeone" style="margin-top:17px"; /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '2') {

                        _strHTML += '<td><input type="button" id="btnYesGrv' + $(this).find("CODE").text() + '" class="form-control btnYesGrv" style="width:100px;background-color:#3c8dbc;color:white;" onclick="ChangeTxtNo(' + $(this).find("CODE").text() + ')" value="Yes"  style="margin-top:17px";/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '3') {

                        _strHTML += '<td><input type="button" id="btnPositiveGrv' + $(this).find("CODE").text() + '" class="buttonGrv btnPositiveGrv" style="width:100px;background-color:#3c8dbc;color:white;" onclick="ChangeTxtNegative(' + $(this).find("CODE").text() + ')" value="Positive"  style="margin-top:17px";/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '4') {

                        _strHTML += '<td><input type="text" style="margin-top: 17px;" class="form-control txtManagementPlanTypeFour"  id="txtManagementPlanTypeFour" value="' + $(this).find("RESULT").text() + '" /></td>';
                    }
                    else if ($(this).find("RESULT_TYPE").text() == '5') {

                        _strHTML += '<td><select class="form-control txtManagementPlanResult" style="margin-top:17px";><option value="0">--Select--</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></td>';

                    }
                    _strHTML += '<td><i style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Speech to text" class="fa fa-microphone"></i>&nbsp;&nbsp;<i  style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Ink to Text"  class="fa fa-pencil" aria-hidden="true"></i>&nbsp;&nbsp;<i data-toggle="tooltip" title="Maximize" style="color:black;font-size:12px;float:right; margin:3px;cursor:pointer;" class="fa fa-window-maximize" aria-hidden="true"></i><input type="text" style="margin-top: 1px;" class="form-control Remarksmanagementplan"  id="Remarksmanagementplan" value="' + $(this).find("REMARKS").text() + '" /></td>';



                    table.append(rowcol);
                    count += 1;
                }); //each end here
                _strHTML += '</table>';


            },
            failure: function(response) {
                alert('Failed during fetching record');
            },
            error: function(response) {
                alert('Error during fetching record ');
            }

        }); //post data end here
        return _strHTML;

    } //function end here......

    //MANAGENMENT END HERE




    //TAB5 START HERE

    BindSymptomsPerformaOptionUpdate = function() {
        var _code = $("#txtCode").val();
        var _QuestionCodeSymptoms = $(this).find('.txtCodeSymptoms').val();
        var _QuestionNameSymptoms = $(this).find('.txtNameSymptoms').val();
        var _ResultTypeSymptoms = $(this).find('.btnYesSymptomsGrv').val();
        var _ResultSymptoms = $(this).find('.ddldivSymptoms').val();
        var _RemarksSymptoms = $(this).find('.txtSymptomsRemarks').val();
        var chkPrintSymptoms = $(this).find('input:checkbox[id="chkSymptoms"]');
        if ((chkPrintSymptoms).is(':checked')) {
            _IsPrintSymptomsval = 1;
        }
        else {
            _IsPrintSymptomsval = 0;
        }


        //alert(_code);

        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/BindSymptomsUpdated',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            cache: false,
            async: false,

            data: "{'CODE':'" + _code + "'}",

            success: function(response) {
                //alert(response.d);
                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);

                var items = xml.find("Table");
                var table = $('<table id="tbldivBindSymptoms' + $(this).find("QUESTION_CODE").text() + '" style="font-family:Calibri;" class="table table-bordered table-hover mt-2" ></table>');
                var row = '';
                var count = 0;
                $.each(items, function(index) {
                    if (parseInt(count) == 0) {
                        var rowheader = '<thead><tr>';
                        rowheader += '<th>Question</th>';
                        rowheader += '<th>Result</th>';
                        rowheader += '<th>Remarks</th>';
                        rowheader += '</tr></thead>';
                        table.append(rowheader);
                    }
                    var rowcol = '';
                    rowcol += '<tbody><tr>';


                    rowcol += '<td style="display:none;"><input type="hidden" id="hdnResultTypeSymptoms" class="hdnResultTypeSymptoms" value="' + $(this).find("RESULT_TYPE").text() + '" /><input type="hidden" id="hdnQuestionGroupCode" class="hdnQuestionGroupCode" value="' + $(this).find("CODE").text() + '" /><input type="hidden" id="txtCodeSymptoms" class="txtCodeSymptoms" value="' + $(this).find("QUESTION_CODE").text() + '" /></td>';
                    rowcol += '<td style="display:none;"><input type="text" style="margin-top: 17px;" disabled class="form-control txtNameSymptoms"  id="txtNameSymptoms" value="' + $(this).find("NAME").text() + '" /></td>';
                    rowcol += '<td style="padding-top:35px; width:550px;"><span class="txtNameSymptoms" id="txtNameSymptoms' + $(this).find("QUESTION_CODE").text() + '">' + $(this).find("NAME").text() + '</span></td>';


                    rowcol += '<td style="display:none;"><input type="hidden" style="margin-top: 17px;" class="form-control hdnQuestionlevelSymptoms"  id="hdnQuestionlevelSymptoms" value="' + $(this).find("QUESTION_LEVEL").text() + '" /></td>';
                    if ($(this).find("RESULT_TYPE").text() == '1') {
                        rowcol += '<td><input type="text" id="txtresultTypeBindSymptoms' + $(this).find("QUESTION_CODE").text() + '" class="form-control txtresultTypeBindSymptoms"/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '2' && $(this).find("RESULT").text() == '') {
                        rowcol += '<td><input type="button" id="btnYesSymptomsGrv' + $(this).find("QUESTION_CODE").text() + '" class="form-control btnYesSymptomsGrv" style="background-color:#3c8dbc;color:white;margin-top: 22px;" onclick="ChangeSymptomsTxtNo(' + $(this).find("QUESTION_CODE").text() + ')" value="Yes" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '2' && $(this).find("RESULT").text() == '1') {
                        rowcol += '<td><input type="button" id="btnYesSymptomsGrv' + $(this).find("QUESTION_CODE").text() + '" class="form-control btnYesSymptomsGrv" style="background-color:#3c8dbc;color:white;margin-top: 22px;" onclick="ChangeSymptomsTxtNo(' + $(this).find("QUESTION_CODE").text() + ')" value="Yes" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '2' && $(this).find("RESULT").text() == '0') {
                        rowcol += '<td><input type="button" id="btnYesSymptomsGrv' + $(this).find("QUESTION_CODE").text() + '" class="form-control  btnYesSymptomsGrv" style="background-color:#3c8dbc;color:white;margin-top: 22px;" onclick="ChangeSymptomsTxtNo(' + $(this).find("QUESTION_CODE").text() + ')" value="No" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '3') {
                        rowcol += '<td><input type="button" id="btnPositiveBindSymptomsGrv' + $(this).find("QUESTION_CODE").text() + '" class="buttonGrv btnPositiveBindSymptomsGrv" style="width:100px;background-color:#3c8dbc;color:white;" onclick="ChangeSymptomsTxtNegative(' + $(this).find("QUESTION_CODE").text() + ')" value="Positive" +  $("#btnPositiveGrv").attr(value,"NO") +/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '4') {
                        rowcol += '<td><input type="text" id="txtresultTypeBindSymptoms' + $(this).find("QUESTION_CODE").text() + '" class="form-control txtresultTypeBindSymptoms"/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '5') {
                        rowcol += '<td><select id="ddldivSymptoms' + $(this).find("QUESTION_CODE").text() + '" class="form-control ddldivSymptoms"><option>--Select--</option></select></td>';

                    }
                    rowcol += '<td><i style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Speech to text" class="fa fa-microphone"></i>&nbsp;&nbsp;<i  style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Ink to Text"  class="fa fa-pencil" aria-hidden="true"></i>&nbsp;&nbsp;<i data-toggle="tooltip" title="Maximize" style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" class="fa fa-window-maximize" aria-hidden="true"></i><input type="text" style="margin-top: 1px;" class="form-control txtSymptomsRemarks"  id="txtSymptomsRemarks" value="' + $(this).find("REMARKS").text() + '" /></td>';


                    table.append(rowcol);
                    count += 1;
                }); //each end here
                $("#divSymptoms").html(table);
                var _table = $('#divSymptoms table'); //                        
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



    //TAB5 END HERE

    //TAB6 START HERE
    BindPerformaPastHistoryUpdate = function() {
        //alert(_code);
        var _code = $("#txtCode").val();
        var _QuestionCodePastHistory = $(this).find('.txtCodePastHistory').val();
        var _QuestionNamePastHistory = $(this).find('.txtNamePastHistory').val();
        var _ResultTypePastHistory = $(this).find('.btnYesGrv').val();
        var _ResultPastHistory = $(this).find('.ddlPastHistory').val();
        var _RemarksPastHistory = $(this).find('.txtPastHistoryRemarks').val();
        var chkPrintPH = $(this).find('input:checkbox[id="chkPastHistory"]');
        if ((chkPrintPH).is(':checked')) {
            _IsPrinPHval = 1;
        }
        else {
            _IsPrinPHval = 0;
        }


        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/BindPastHistoryUpdated',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            cache: false,
            async: false,
            //data: "",
            data: "{'CODE':'" + _code + "'}",

            success: function(response) {
                //alert(response.d);
                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);

                var items = xml.find("Table");
                var table = $('<table id="tbldivPastHistory' + $(this).find("CODE").text() + '" style="font-family:Calibri;" class="table table-bordered table-hover mt-2" ></table>');
                var row = '';
                var count = 0;
                $.each(items, function(index) {
                    if (parseInt(count) == 0) {
                        var rowheader = '<thead><tr>';
                        rowheader += '<th>Question</th>';
                        rowheader += '<th>Result</th>';
                        rowheader += '<th>Remarks</th>';

                        rowheader += '</tr></thead>';
                        table.append(rowheader);
                    }
                    var rowcol = '';
                    rowcol += '<tbody><tr>';

                    rowcol += '<td style="display:none;"><input type="hidden" style="margin-top: 17px;" class="form-control hdnQuestionlevelPastHistory"  id="hdnQuestionlevelPastHistory" value="' + $(this).find("QUESTION_LEVEL").text() + '" /></td>';
                    rowcol += '<td style="display:none;"><input type="hidden" class="form-control hdnPastHistoryGroupCode"  id="hdnPastHistoryGroupCode" value="' + $(this).find("CODE").text() + '" /></td>';
                    rowcol += '<td style="display:none;"><input type="hidden" id="hdnResultTypePastHistory" class="hdnResultTypePastHistory" value="' + $(this).find("RESULT_TYPE").text() + '" /><input type="hidden" id="txtCodePastHistory" class="txtCodePastHistory" value="' + $(this).find("CODE").text() + '" /></td>';

                    rowcol += '<td style="display:none;"><input type="text" style="margin-top: 17px;" disabled class="form-control txtNamePastHistory"  id="txtNamePastHistory" value="' + $(this).find("NAME").text() + '" /></td>';
                    rowcol += '<td style="padding-top:35px;"><span class="txtNamePastHistory" id="txtNamePastHistory' + $(this).find("CODE").text() + '">' + $(this).find("NAME").text() + '</span></td>';


                    if ($(this).find("RESULT_TYPE").text() == '1') {
                        rowcol += '<td><input type="text" id="txtresultTypePastHistory' + $(this).find("CODE").text() + '" class="form-control txtresultTypePastHistory"/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '2' && $(this).find("RESULT").text() == '') {
                        rowcol += '<td><input type="button" id="btnYesGrv' + $(this).find("CODE").text() + '" class="form-control btnPastYesGrv" style="background-color:#3c8dbc;color:white;margin-top: 22px;" onclick="ChangeTxtNo(' + $(this).find("CODE").text() + ')" value="Yes" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '2' && $(this).find("RESULT").text() == '1') {
                        rowcol += '<td><input type="button" id="btnYesGrv' + $(this).find("CODE").text() + '" class="form-control btnPastYesGrv" style="background-color:#3c8dbc;color:white;margin-top: 22px;" onclick="ChangeTxtNo(' + $(this).find("CODE").text() + ')" value="Yes" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '2' && $(this).find("RESULT").text() == '0') {
                        rowcol += '<td><input type="button" id="btnYesGrv' + $(this).find("CODE").text() + '" class="form-control btnPastYesGrv" style="background-color:#3c8dbc;color:white;margin-top: 22px;" onclick="ChangeTxtNo(' + $(this).find("CODE").text() + ')" value="No" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '3') {
                        rowcol += '<td><input type="button" id="btnPositiveGrv' + $(this).find("CODE").text() + '" class="buttonGrv btnPastPositiveGrv" style="width:100px;background-color:#3c8dbc;color:white;" onclick="ChangeTxtNegative(' + $(this).find("CODE").text() + ')" value="Positive" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '4') {
                        rowcol += '<td><input type="text" id="txtresultTypePastHistory' + $(this).find("CODE").text() + '" class="form-control"/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '5') {
                        rowcol += '<td><select id="ddlPastHistory' + $(this).find("CODE").text() + '" class="form-control ddlPastHistory"><option>--Select--</option></select></td>';

                    }



                    rowcol += '<td><i style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Speech to text" class="fa fa-microphone"></i>&nbsp;&nbsp;<i  style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Ink to Text"  class="fa fa-pencil" aria-hidden="true"></i>&nbsp;&nbsp;<i data-toggle="tooltip" title="Maximize" style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" class="fa fa-window-maximize" aria-hidden="true"></i><input type="text" style="margin-top: 1px;" class="form-control txtPastHistoryRemarks"  id="txtPastHistoryRemarks" value="' + $(this).find("REMARKS").text() + '" /></td>';


                    table.append(rowcol);
                    count += 1;
                }); //each end here
                $("#divPastHistory").html(table);
                //                var _table = $('#divPastHistory table'); //                        
                //                bind_filterevent(_table);
                //                paginateIt(_table, 10);
                //                visibility_paging(_table);


            },
            failure: function(response) {
                alert('Failed during fetching record');
            },
            error: function(response) {
                alert('Error during fetching record ');
            }

        }); //post data end here

    } //function end here......
    //TAB6 END HERE

    //TAB7 START HERE
    BindPerformaTreatmentHistoryUpdate = function() {
        var _code = $("#txtCode").val();
        //alert(_code);
        var _QuestionCodeTreatmentHistory = $(this).find('.txtCodeTreatmentHistory').val();
        var _QuestionNameTreatmentHistory = $(this).find('.txtNameTreatmentHistory').val();
        var _ResultTypeTreatmentHistory = $(this).find('.btnYesTreatmentGrv').val();
        var _ResultTreatmentHistory = $(this).find('.ddlTreatmentHistory').val();
        var _RemarksTreatmentHistory = $(this).find('.txtTreatmentHistoryRemarks').val();
        var chkPrintTH = $(this).find('input:checkbox[id="chkTreatmentHistory"]');
        if ((chkPrintTH).is(':checked')) {
            _IsPrintTHval = 1;
        }
        else {
            _IsPrintTHval = 0;
        }

        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/BindTreatmentHistoryUpdated',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            cache: false,
            async: false,
            data: "{'CODE':'" + _code + "'}",


            success: function(response) {
                //alert(response.d);
                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);

                var items = xml.find("Table");
                var table = $('<table id="tbldivTreatmentHistory' + $(this).find("CODE").text() + '" style="font-family:Calibri;" class="table table-bordered table-hover mt-2" ></table>');
                var row = '';
                var count = 0;
                $.each(items, function(index) {
                    if (parseInt(count) == 0) {
                        var rowheader = '<thead><tr>';
                        rowheader += '<th>Question</th>';
                        rowheader += '<th>Result</th>';
                        rowheader += '<th>Remarks</th>';

                        rowheader += '</tr></thead>';
                        table.append(rowheader);
                    }
                    var rowcol = '';
                    rowcol += '<tbody><tr>';

                    rowcol += '<td style="display:none;"><input type="hidden" style="margin-top: 17px;" class="form-control hdnQuestionlevelTreatmentHistory"  id="hdnQuestionlevelTreatmentHistory" value="' + $(this).find("QUESTION_LEVEL").text() + '" /></td>';
                    rowcol += '<td style="display:none;"><input type="hidden" id="hdnResultTypeTH" class="hdnResultTypeTH" value="' + $(this).find("RESULT_TYPE").text() + '" /><input type="hidden" id="txtCodeTreatmentHistory" class="txtCodeTreatmentHistory" value="' + $(this).find("CODE").text() + '" /></td>';
                    rowcol += '<td style="display:none;"><input type="hidden" class="form-control hdnTreatmentHistoryGroupCode"  id="hdnTreatmentHistoryGroupCode" value="' + $(this).find("CODE").text() + '" /></td>';


                    rowcol += '<td style="display:none;"><input type="text" style="margin-top: 17px;" disabled class="form-control txtNameTreatmentHistory"  id="txtNameTreatmentHistory" value="' + $(this).find("NAME").text() + '" /></td>';
                    rowcol += '<td style="padding-top:35px;"><span class="txtNameTreatmentHistory" id="txtNameTreatmentHistory' + $(this).find("CODE").text() + '">' + $(this).find("NAME").text() + '</span></td>';

                    if ($(this).find("RESULT_TYPE").text() == '1') {
                        rowcol += '<td><input type="text" id="txtresultTypeTreatmentHistory' + $(this).find("CODE").text() + '" class="form-control txtresultTypePastHistory"/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '2' && $(this).find("RESULT").text() == '') {
                        rowcol += '<td><input type="button" id="btnYesTreatmentGrv' + $(this).find("CODE").text() + '" class="form-control btnYesTreatmentGrv" style="background-color:#3c8dbc;color:white;margin-top: 22px;" onclick="ChangetreatmentTxtNo(' + $(this).find("CODE").text() + ')" value="Yes" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '2' && $(this).find("RESULT").text() == '1') {
                        rowcol += '<td><input type="button" id="btnYesTreatmentGrv' + $(this).find("CODE").text() + '" class="form-control btnYesTreatmentGrv" style="background-color:#3c8dbc;color:white;margin-top: 22px;" onclick="ChangetreatmentTxtNo(' + $(this).find("CODE").text() + ')" value="Yes" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '2' && $(this).find("RESULT").text() == '0') {
                        rowcol += '<td><input type="button" id="btnYesTreatmentGrv' + $(this).find("CODE").text() + '" class="form-control btnYesTreatmentGrv" style="background-color:#3c8dbc;color:white;margin-top: 22px;" onclick="ChangetreatmentTxtNo(' + $(this).find("CODE").text() + ')" value="No" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '3') {
                        rowcol += '<td><input type="button" id="btnPositiveTreatmentGrv' + $(this).find("CODE").text() + '" class="buttonGrv btnPositiveTreatmentGrv" style="width:100px;background-color:#3c8dbc;color:white;margin-top:22px;" onclick="ChangetreatmentTxtNegative(' + $(this).find("CODE").text() + ')" value="Positive" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '4') {
                        rowcol += '<td><input type="text" id="txtresultTypeTreatmentHistory' + $(this).find("CODE").text() + '" class="form-control txtresultTypeTreatmentHistory"/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '5') {
                        rowcol += '<td><select id="ddlTreatmentHistory' + $(this).find("CODE").text() + '" class="form-control ddlTreatmentHistory"><option>--Select--</option></select></td>';

                    }
                    rowcol += '<td><i style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Speech to text" class="fa fa-microphone"></i>&nbsp;&nbsp;<i  style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Ink to Text"  class="fa fa-pencil" aria-hidden="true"></i>&nbsp;&nbsp;<i data-toggle="tooltip" title="Maximize" style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" class="fa fa-window-maximize" aria-hidden="true"></i><input type="text" style="margin-top: 1px;" class="form-control txtTreatmentHistoryRemarks"  id="txtTreatmentHistoryRemarks" value="' + $(this).find("REMARKS").text() + '" /></td>';

                    table.append(rowcol);
                    count += 1;
                }); //each end here
                $("#divTreatmentHistory").html(table);
                //                var _table = $('#divTreatmentHistory table'); //                        
                //                bind_filterevent(_table);
                //                paginateIt(_table, 10);
                //                visibility_paging(_table);


            },
            failure: function(response) {
                alert('Failed during fetching record');
            },
            error: function(response) {
                alert('Error during fetching record ');
            }

        }); //post data end here

    } //function end here......


    //TAB7 END HERE


    //TAB8 START HERE
    BindPerformaFamilyHistoryUpdate = function() {
        //alert(_code);
        var _code = $("#txtCode").val();
        var _QuestionCodeFamilytHistory = $(this).find('.txtCodeFamilyHistory').val();
        var _QuestionFamilyHistory = $(this).find('.txtNameFamilyHistory').val();
        var _ResultTypeFamilyHistory = $(this).find('.btnYesFamilyHistoryGrv').val();
        var _ResultFamilyHistory = $(this).find('.ddlFamilytHistory').val();
        var _RemarksFamilyHistory = $(this).find('.txtFamilytHistoryRemarks').val();
        var chkPrintFH = $(this).find('input:checkbox[id="chkFamilyHistory"]');
        if ((chkPrintFH).is(':checked')) {
            _IsPrintFHval = 1;
        }
        else {
            _IsPrintFHval = 0;
        }

        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/BindFamilyHistoryUpdated',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            cache: false,
            async: false,
            //data: "",
            data: "{'CODE':'" + _code + "'}",

            success: function(response) {
                //alert(response.d);
                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);

                var items = xml.find("Table");
                var table = $('<table id="tbldivFamilyHistory' + $(this).find("CODE").text() + '" style="font-family:Calibri;" class="table table-bordered table-hover mt-2" ></table>');
                var row = '';
                var count = 0;
                $.each(items, function(index) {
                    if (parseInt(count) == 0) {
                        var rowheader = '<thead><tr>';
                        rowheader += '<th>Question</th>';
                        rowheader += '<th>Result</th>';
                        rowheader += '<th>Remarks</th>';

                        rowheader += '</tr></thead>';
                        table.append(rowheader);
                    }
                    var rowcol = '';
                    rowcol += '<tbody><tr>';

                    rowcol += '<td style="display:none;"><input type="hidden" style="margin-top: 17px;" class="form-control hdnQuestionlevelFamilyHistory"  id="hdnQuestionlevelFamilyHistory" value="' + $(this).find("QUESTION_LEVEL").text() + '" /></td>';
                    rowcol += '<td style="display:none;"><input type="hidden" id="hdnResultTypeFH" class="hdnResultTypeFH" value="' + $(this).find("RESULT_TYPE").text() + '" /><input type="hidden" id="txtCodeFamilyHistory" class="txtCodeFamilyHistory" value="' + $(this).find("QUESTIONCODE").text() + '" /></td>';
                    rowcol += '<td style="display:none;"><input type="hidden" class="form-control hdnFamilyHistoryGroupCode"  id="hdnFamilyHistoryGroupCode" value="' + $(this).find("CODE").text() + '" /></td>';


                    rowcol += '<td style="display:none;"><input type="text" style="margin-top: 17px;" disabled class="form-control txtNameFamilyHistory"  id="txtNameFamilyHistory" value="' + $(this).find("NAME").text() + '" /></td>';
                    rowcol += '<td style="padding-top:35px;"><span class="txtNameFamilyHistory" id="txtNameFamilyHistory' + $(this).find("QUESTIONCODE").text() + '">' + $(this).find("NAME").text() + '</span></td>';

                    if ($(this).find("RESULT_TYPE").text() == '1') {
                        rowcol += '<td><input type="text" id="txtresultTypePastHistory' + $(this).find("QUESTIONCODE").text() + '" class="form-control"/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '2' && $(this).find("RESULT").text() == '') {
                        rowcol += '<td><input type="button" id="btnYesFamilyHistoryGrv' + $(this).find("QUESTIONCODE").text() + '" class="form-control btnYesFamilyHistoryGrv" style="background-color:#3c8dbc;color:white;margin-top: 22px;" onclick="ChangeFamilyHistoryTxtNo(' + $(this).find("QUESTIONCODE").text() + ')" value="Yes" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '2' && $(this).find("RESULT").text() == '1') {
                        rowcol += '<td><input type="button" id="btnYesFamilyHistoryGrv' + $(this).find("QUESTIONCODE").text() + '" class="form-control btnYesFamilyHistoryGrv" style="background-color:#3c8dbc;color:white;margin-top: 22px;" onclick="ChangeFamilyHistoryTxtNo(' + $(this).find("QUESTIONCODE").text() + ')" value="Yes" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '2' && $(this).find("RESULT").text() == '0') {
                        rowcol += '<td><input type="button" id="btnYesFamilyHistoryGrv' + $(this).find("QUESTIONCODE").text() + '" class="form-control btnYesFamilyHistoryGrv" style="background-color:#3c8dbc;color:white;margin-top: 22px;" onclick="ChangeFamilyHistoryTxtNo(' + $(this).find("QUESTIONCODE").text() + ')" value="No" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '3') {
                        rowcol += '<td><input type="button" id="btnPositiveFamilyHistoryGrv' + $(this).find("QUESTIONCODE").text() + '" class="buttonGrv btnPositiveGrv" style="width:100px;background-color:#3c8dbc;color:white;" onclick="ChangePastHistoryTxtNegative(' + $(this).find("QUESTIONCODE").text() + ')" value="Positive" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '4') {
                        rowcol += '<td><input type="text" id="txtresultTypeFamilyHistory' + $(this).find("QUESTIONCODE").text() + '" class="form-control"/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '5') {
                        rowcol += '<td><select id="ddlFamilytHistory' + $(this).find("QUESTIONCODE").text() + '" class="form-control ddlFamilytHistory"><option>--Select--</option></select></td>';

                    }


                    rowcol += '<td><i style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Speech to text" class="fa fa-microphone"></i>&nbsp;&nbsp;<i  style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Ink to Text"  class="fa fa-pencil" aria-hidden="true"></i>&nbsp;&nbsp;<i data-toggle="tooltip" title="Maximize" style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" class="fa fa-window-maximize" aria-hidden="true"></i><input type="text" style="margin-top: 1px;" class="form-control txtFamilytHistoryRemarks"  id="txtFamilytHistoryRemarks" value="' + $(this).find("REMARKS").text() + '" /></td>';

                    table.append(rowcol);
                    count += 1;
                }); //each end here
                $("#divFamilyHistory").html(table);
                //                var _table = $('#divFamilyHistory table'); //                        
                //                bind_filterevent(_table);
                //                paginateIt(_table, 10);
                //                visibility_paging(_table);


            },
            failure: function(response) {
                alert('Failed during fetching record');
            },
            error: function(response) {
                alert('Error during fetching record ');
            }

        }); //post data end here

    } //function end here......

    //TAB8 END HERE


    //TAB9 START HERE
    BindPersonalHistoryPerformaOptionUpdate = function(_code) {
        //alert(_code);
        var _code = $("#txtCode").val();
        var _QuestionCodePersonalHistory = $(this).find('.txtCodePersonalHistory').val();
        var _QuestionNmaePersonalHistory = $(this).find('.txtPersonalHistory').val();
        var _ResultTypePersonalHistory = $(this).find('.ddlPersonalHistory').val();
        var _ResultPersonalHistory = $(this).find('.ddlResultPersonalHistory').val();
        var _RemarksPersonalHistory = $(this).find('.txtPersonalHistoryRemarks').val();
        var chkPrintPH = $(this).find('input:checkbox[id="chkPersonalHistory"]');
        if ((chkPrintPH).is(':checked')) {
            _IsPrintPHval = 1;
        }
        else {
            _IsPrintPHval = 0;
        }

        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/BindPersonalHistoryUpdated',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            cache: false,
            async: false,
            data: "{'CODE':'" + _code + "'}",


            success: function(response) {
                //alert(response.d);
                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);

                var items = xml.find("Table");
                var table = $('<table id="tbldivPersonalHistory' + $(this).find("CODE").text() + '" style="font-family:Calibri;" class="table table-bordered table-hover mt-2" ></table>');
                var row = '';
                var count = 0;
                var _Resultval = 74;
                $.each(items, function(index) {
                    if (parseInt(count) == 0) {
                        var rowheader = '<thead><tr>';
                        rowheader += '<th>Question</th>';
                        rowheader += '<th>Result</th>';
                        rowheader += '<th>Remarks</th>';

                        rowheader += '</tr></thead>';
                        table.append(rowheader);
                    }
                    var rowcol = '';
                    rowcol += '<tbody><tr>';

                    rowcol += '<td style="display:none;"><input type="hidden" style="margin-top: 17px;" class="form-control hdnQuestionlevelPersonalHistory"  id="hdnQuestionlevelPersonalHistory" value="' + $(this).find("QUESTION_LEVEL").text() + '" /></td>';
                    rowcol += '<td style="display:none;"><input type="hidden" class="form-control hdnQuestioncodePersonalHistoryGroupCode"  id="hdnQuestioncodePersonalHistoryGroupCode" value="' + $(this).find("CODE").text() + '" /></td>';
                    rowcol += '<td style="display:none;"><input type="hidden" id="hdnResultTypePersonalHistory" class="hdnResultTypePersonalHistory" value="' + $(this).find("RESULT_TYPE").text() + '" /><input type="hidden" id="txtCodePersonalHistory" class="txtCodePersonalHistory" value="' + $(this).find("CODE").text() + '" /></td>';

                    rowcol += '<td style="display:none;"><input type="text" style="margin-top: 17px;" disabled class="form-control txtPersonalHistory"  id="txtPersonalHistory" value="' + $(this).find("NAME").text() + '" /></td>';
                    rowcol += '<td style="padding-top:35px;"><span class="txtPersonalHistory" id="txtPersonalHistory' + $(this).find("CODE").text() + '">' + $(this).find("NAME").text() + '</span></td>';

                    if ($(this).find("RESULT_TYPE").text() == '1') {
                        rowcol += '<td><input type="text" id="txtresultTypePersonalHistory' + $(this).find("CODE").text() + '" class="form-control txtresultTypePersonalHistory"/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '2') {
                        rowcol += '<td><input type="button" id="btnYesPersonalHistoryGrv' + $(this).find("CODE").text() + '" class="buttonGrv btnYesPersonalHistoryGrv" style="width:100px;background-color:#3c8dbc;color:white;" onclick="ChangetreatmentTxtNo(' + $(this).find("CODE").text() + ')" value="Yes" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '3') {
                        rowcol += '<td><input type="button" id="btnPositivePersonalHistoryGrv' + $(this).find("CODE").text() + '" class="buttonGrv btnPositivePersonalHistoryGrv" style="width:100px;background-color:#3c8dbc;color:white;" onclick="ChangetreatmentTxtNegative(' + $(this).find("CODE").text() + ')" value="Positive" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '4') {
                        rowcol += '<td><input type="text" id="txtresultTypePersonalHistory' + $(this).find("CODE").text() + '" class="form-control txtresultTypePersonalHistory"/></td>';

                    }
                   
                      else if ($(this).find("RESULT_TYPE").text() == '5') {
                        if ($(this).find("RESULT").text() == '0') {


                            rowcol += '<td><select style="margin-top: 19px;" class="form-control ddlPersonalHistory"  id="ddlPersonalHistory" value="' + $(this).find("RESULT").text() + '" ><option value="0">Select Result</select></td>';


                        }
                        else {
                            rowcol += '<td><select style="margin-top: 19px;" class="form-control ddlPersonalHistory"  id="ddlPersonalHistory" value="' + $(this).find("RESULT").text() + '" ><option value="' + $(this).find("RESULT").text() + '">' + $(this).find("RESULT").text() + '</select></td>';


                        }
                    }
                    rowcol += '<td><i style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Speech to text" class="fa fa-microphone"></i>&nbsp;&nbsp;<i  style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Ink to Text"  class="fa fa-pencil" aria-hidden="true"></i>&nbsp;&nbsp;<i data-toggle="tooltip" title="Maximize" style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" class="fa fa-window-maximize" aria-hidden="true"></i><input type="text" style="margin-top: 1px;" class="form-control txtPersonalHistoryRemarks"  id="txtPersonalHistoryRemarks" value="' + $(this).find("REMARKS").text() + '" /></td>';

                    table.append(rowcol);
                    count += 1;
                    _Resultval += 1;



                }); //each end here
               

                $("#divPersonalHistory").html(table);

                //                var _table = $('#divPersonalHistory table'); //                        
                //                bind_filterevent(_table);
                //                paginateIt(_table, 10);
                //                visibility_paging(_table);




            },
            failure: function(response) {
                alert('Failed during fetching record');
            },
            error: function(response) {
                alert('Error during fetching record ');
            }

        }); //post data end here

    } //function end here......

    //TAB9 END HERE

    //TAB10 START HERE
    BindPhysicalExaminationPerformaOption1Update = function() {
        var _code = $("#txtCode").val();
        //alert(_code);

        var _QuestionPhysicalExaminationGroupCode = $(this).find('.hdnQuestioncodePhysicalExaminationGroupCode').val();
        var _QuestionCodePhysicalExamination = $(this).find('.txtCodePhysicalExamination').val();
        var _QuestionNamePhysicalExamination = $(this).find('.txtNamePhysicalExamination').val();
        var _ResultTypePhysicalExamination = $(this).find('.txtresultTypePhysicalExamination').val();
        var _ResultPhysicalExamination = $(this).find('.ddlPhysicalExamination').val();
        var _RemarksPhysicalExamination = $(this).find('.txtPhysicalExaminationRemarks').val();
        var chkPrintPE = $(this).find('input:checkbox[id="chkPhysicalExamination"]');
        if ((chkPrintPE).is(':checked')) {
            _IsPrintPEval = 1;
        }
        else {
            _IsPrintPEval = 0;
        }


        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/BindPhysicalExaminationUpdated',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            cache: false,
            async: false,
            data: "{'CODE':'" + _code + "'}",


            success: function(response) {
                //alert(response.d);
                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);

                var items = xml.find("Table");
                var table = $('<table id="tbldivPhysicalExamination' + $(this).find("CODE").text() + '" style="font-family:Calibri;" class="table table-bordered table-hover mt-2" ></table>');
                var row = '';
                var count = 0;
                $.each(items, function(index) {
                    if (parseInt(count) == 0) {
                        var rowheader = '<thead><tr>';
                        rowheader += '<th>Question</th>';
                        rowheader += '<th>Result</th>';
                        rowheader += '<th>Remarks</th>';

                        rowheader += '</tr></thead>';
                        table.append(rowheader);
                    }
                    var rowcol = '';
                    rowcol += '<tbody><tr>';


                    rowcol += '<td style="display:none;"><input type="hidden" class="form-control hdnQuestioncodePhysicalExaminationGroupCode"  id="hdnQuestioncodePhysicalExaminationGroupCode" value="' + $(this).find("CODE").text() + '" /></td>';
                    rowcol += '<td style="display:none;"><input type="hidden" id="hdnResultTypePE1" class="hdnResultTypePE1" value="' + $(this).find("RESULT_TYPE").text() + '" /><input type="hidden" id="txtCodePhysicalExamination" class="txtCodePhysicalExamination" value="' + $(this).find("QUESTION").text() + '" /></td>';

                    rowcol += '<td style="display:none;"><input type="text" style="margin-top: 17px;" disabled class="form-control txtNamePhysicalExamination"  id="txtNamePhysicalExamination" value="' + $(this).find("NAME").text() + '" /></td>';
                    rowcol += '<td style="padding-top:35px;"><span class="txtNamePhysicalExamination" id="txtNamePhysicalExamination' + $(this).find("QUESTION").text() + '">' + $(this).find("NAME").text() + '</span></td>';

                    rowcol += '<td style="display:none;"><input type="hidden" style="margin-top: 17px;" class="form-control hdnQuestionlevelPhysicalExamination"  id="hdnQuestionlevelPhysicalExamination" value="' + $(this).find("QUESTION_LEVEL").text() + '" /></td>';
                    if ($(this).find("RESULT_TYPE").text() == '1') {
                        rowcol += '<td><input type="text" style="margin-top: 17px;" id="txtresultTypePhysicalExamination' + $(this).find("CODE").text() + '" class="form-control txtresultTypePhysicalExamination"/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '2') {
                        rowcol += '<td><input type="button" id="btnYesPhysicalExaminationGrv' + $(this).find("CODE").text() + '" class="buttonGrv btnYesPhysicalExaminationGrv" style="width:100px;background-color:#3c8dbc;color:white;" onclick="ChangetreatmentTxtNo(' + $(this).find("CODE").text() + ')" value="Yes" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '3') {
                        rowcol += '<td><input type="button" id="btnPositivePhysicalExaminationGrv' + $(this).find("CODE").text() + '" class="buttonGrv btnPositivePhysicalExaminationGrv" style="width:100px;background-color:#3c8dbc;color:white;" onclick="ChangetreatmentTxtNegative(' + $(this).find("CODE").text() + ')" value="Positive" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '4') {

                        rowcol += '<td><input type="text" style="margin-top: 17px;" class="form-control txtresultTypePhysicalExamination"  id="txtresultTypePhysicalExamination" value="' + $(this).find("RESULT").text() + '" /></td>';
                    }
                    else if ($(this).find("RESULT_TYPE").text() == '5') {
                        rowcol += '<td><select id="ddlPhysicalExamination' + $(this).find("CODE").text() + '" class="form-control ddlPhysicalExamination"><option>--Select--</option></select></td>';

                    }
                    rowcol += '<td><i style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Speech to text" class="fa fa-microphone"></i>&nbsp;&nbsp;<i  style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Ink to Text"  class="fa fa-pencil" aria-hidden="true"></i>&nbsp;&nbsp;<i data-toggle="tooltip" title="Maximize" style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" class="fa fa-window-maximize" aria-hidden="true"></i><input type="text" style="margin-top: 1px;" class="form-control txtPhysicalExaminationRemarks"  id="txtPhysicalExaminationRemarks" value="' + $(this).find("REMARKS").text() + '" /></td>';

                    table.append(rowcol);
                    count += 1;
                }); //each end here
                $("#divPhysicalExamination").html(table);
                //                var _table = $('#divPhysicalExamination table'); //                        
                //                bind_filterevent(_table);
                //                paginateIt(_table, 10);
                //                visibility_paging(_table);


            },
            failure: function(response) {
                alert('Failed during fetching record');
            },
            error: function(response) {
                alert('Error during fetching record ');
            }

        }); //post data end here

    } //function end here......


    //TAB END HERE


    RestrictEntryNumeric = function(_code) {
        var txtDisc = "#txtDisc" + _code;


        $(txtIGST).keydown(function(e) {

            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||

                (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||

                (e.keyCode >= 35 && e.keyCode <= 40)) {

                return;
            }

            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
                e.preventDefault();
            }
        });
    }

    ChangeTxtNo = function(trid) {
        if ($("#btnYesGrv" + trid).val() == "Yes") {
            $("#btnYesGrv" + trid).val('No')
        }
        else if ($("#btnYesGrv" + trid).val() == "No") {
            $("#btnYesGrv" + trid).val('Yes')
        }

    }

    ChangeTxtNegative = function(trid) {
        if ($("#btnPositiveGrv" + trid).val() == "Positive") {
            $("#btnPositiveGrv" + trid).val('Negative')
        }
        else if ($("#btnPositiveGrv" + trid).val() == "Negative") {
            $("#btnPositiveGrv" + trid).val('Positive')
        }
    }
    ChangetreatmentTxtNegative = function(trid) {
        if ($("#btnPositiveTreatmentGrv" + trid).val() == "Positive") {
            $("#btnPositiveTreatmentGrv" + trid).val('Negative')
        }
        else if ($("#btnPositiveTreatmentGrv" + trid).val() == "Negative") {
            $("#btnPositiveTreatmentGrv" + trid).val('Positive')
        }
    }

    ChangetreatmentTxtNo = function(trid) {
        if ($("#btnYesTreatmentGrv" + trid).val() == "Yes") {
            $("#btnYesTreatmentGrv" + trid).val('No')
        }
        else if ($("#btnYesTreatmentGrv" + trid).val() == "No") {
            $("#btnYesTreatmentGrv" + trid).val('Yes')
        }
    }
    ChangetreatmentTxtNegative = function(trid) {
        if ($("#btnPositiveTreatmentGrv" + trid).val() == "Positive") {
            $("#btnPositiveTreatmentGrv" + trid).val('Negative')
        }
        else if ($("#btnPositiveTreatmentGrv" + trid).val() == "Negative") {
            $("#btnPositiveTreatmentGrv" + trid).val('Positive')
        }
    }
    ChangeSymptomsTxtNegative = function(trid) {
        if ($("#btnPositiveBindSymptomsGrv" + trid).val() == "Positive") {
            $("#btnPositiveBindSymptomsGrv" + trid).val('Negative')
        }
        else if ($("#btnPositiveBindSymptomsGrv" + trid).val() == "Negative") {
            $("#btnPositiveBindSymptomsGrv" + trid).val('Positive')
        }
    }
    ChangeFamilyHistoryTxtNo = function(trid) {
        if ($("#btnYesFamilyHistoryGrv" + trid).val() == "Yes") {
            $("#btnYesFamilyHistoryGrv" + trid).val('No')
        }
        else if ($("#btnYesFamilyHistoryGrv" + trid).val() == "No") {
            $("#btnYesFamilyHistoryGrv" + trid).val('Yes')
        }
    }


    ChangePastHistoryTxtNo = function(trid) {
        if ($("#btnYesPastHistoryGrv" + trid).val() == "Yes") {
            $("#btnYesPastHistoryGrv" + trid).val('No')
        }
        else if ($("#btnYesPastHistoryGrv" + trid).val() == "No") {
            $("#btnYesPastHistoryGrv" + trid).val('Yes')
        }
    }
    ChangeSymptomsTxtNo = function(trid) {
        if ($("#btnYesSymptomsGrv" + trid).val() == "Yes") {
            $("#btnYesSymptomsGrv" + trid).val('No')
        }
        else if ($("#btnYesSymptomsGrv" + trid).val() == "No") {
            $("#btnYesSymptomsGrv" + trid).val('Yes')
        }
    }

    ChangeFamilyDynamicsTxtNo = function(trid) {
        if ($("#btnYesFamilyDynamicsGrv" + trid).val() == "Yes") {
            $("#btnYesFamilyDynamicsGrv" + trid).val('No')
        }
        else if ($("#btnYesFamilyDynamicsGrv" + trid).val() == "No") {
            $("#btnYesFamilyDynamicsGrv" + trid).val('Yes')
        }
    }
    ChangeFamilyDynamics_updateTxtNo = function(trid) {
        if ($("#btnYesFamilyDynamicsUpdateGrv" + trid).val() == "Yes") {
            $("#btnYesFamilyDynamicsUpdateGrv" + trid).val('No')
        }
        else if ($("#btnYesFamilyDynamicsUpdateGrv" + trid).val() == "No") {
            $("#btnYesFamilyDynamicsUpdateGrv" + trid).val('Yes')
        }
    }

    //MANAGEMENT PLAN START HERE
    BindManagementPlanPerformaOption = function(_code) {
        // debugger;
        var _QuestionCodeManagementPlan = $(this).find('#txtQuestioncodeManagementPlan').val();
        var _QuestionNameManagementPlan = $(this).find('.gridNameManagementPlan').val();
        var _ResultTypeManagementPlan = $(this).find('.txtManagementPlanTypeFour').val();
        var _ResultManagementPlan = $(this).find('.txtManagementPlanResult').val();
        var _RemarksManagementPlan = $(this).find('.Remarksmanagementplan').val();
        var chkPrintMP = $(this).find('input:checkbox[id="chkManagementPlan"]');
        if ((chkPrintMP).is(':checked')) {
            _IsPrintMPval = 1;
        }
        else {
            _IsPrintMPval = 0;
        }
        var _strHTML = "";
        //alert(_code);
        var divQuestion = "#divQuestionManagementPlan" + _code;

        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/BindQuestionManagementPlanDetail',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            cache: false,
            async: false,
            data: "{'CODE':'" + _code + "'}",


            success: function(response) {
                //alert(response.d);




                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);

                var items = xml.find("Table");
                var table = $('<table id="tbldivQuestionOptionManagementPlan' + _code + '" style="font-family:Calibri;" class="table table-bordered table-hover mt-2 tbldivQuestionOptionManagementPlan" ></table>');
                _strHTML += '<table id="tbldivQuestionOptionManagementPlan' + _code + '" style="font-family:Calibri;" class="table table-bordered table-hover mt-2 tbldivQuestionOptionManagementPlan" >';
                var row = '';
                var count = 0;
                $.each(items, function(index) {
                    if (parseInt(count) == 0) {
                        _strHTML += '<thead><tr><th>Question</th><th>Result</th><th>Remarks</th></tr></thead>';
                        var rowheader = '<thead><tr>';
                        rowheader += '<th>Question</th>';
                        rowheader += '<th>Result</th>';
                        rowheader += '<th>Remarks</th>';

                        rowheader += '</tr></thead>';
                        table.append(rowheader);
                    }
                    var rowcol = '';
                    _strHTML += '<tbody><tr>';
                    rowcol += '<tbody><tr>';

                    _strHTML += '<td style="display:none;"><input type="hidden" id="hdnResultTypeMP" class="hdnResultTypeMP" value="' + $(this).find("RESULT_TYPE").text() + '" /><input type="hidden" id="txtQuestionGroupcodeManagementPlan" class="txtQuestionGroupcodeManagementPlan" value="' + $(this).find("L1_CODE").text() + '" /></td>';

                    _strHTML += '<td style="display:none;"><input type="text" disabled class="form-control gridNameManagementPlan"  id="gridNameManagementPlan" value="' + $(this).find("QUESTION").text() + '" style="margin-top: 17px;" /></td>';
                    _strHTML += '<td style="padding-top:35px;"><span class="gridNameManagementPlan" id="gridNameManagementPlan' + $(this).find("CODE").text() + '">' + $(this).find("QUESTION").text() + '</span></td>';

                    _strHTML += '<td style="display:none;"><input type="text" disabled class="form-control txtQuestioncodeManagementPlan"  id="txtQuestioncodeManagementPlan" value="' + $(this).find("CODE").text() + '" /></td>';

                    _strHTML += '<td style="display:none;"><input type="hidden" style="margin-top: 17px;" class="form-control hdnQuestionlevelManagementPlan"  id="hdnQuestionlevelManagementPlan" value="' + $(this).find("QUESTION_LEVEL").text() + '" /></td>';


                    if ($(this).find("RESULT_TYPE").text() == '1') {

                        _strHTML += '<td><input type="text" class="form-control txtManagementPlanTypeone" id="txtManagementPlanTypeone" style="margin-top:17px"; /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '2') {

                        _strHTML += '<td><input type="button" id="btnYesGrv' + $(this).find("CODE").text() + '" class="buttonGrv btnYesGrv" style="width:100px;background-color:#3c8dbc;color:white;" onclick="ChangeTxtNo(' + $(this).find("CODE").text() + ')" value="Yes"  style="margin-top:17px";/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '3') {

                        _strHTML += '<td><input type="button" id="btnPositiveGrv' + $(this).find("CODE").text() + '" class="buttonGrv btnPositiveGrv" style="width:100px;background-color:#3c8dbc;color:white;" onclick="ChangeTxtNegative(' + $(this).find("CODE").text() + ')" value="Positive"  style="margin-top:17px";/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '4') {

                        _strHTML += '<td><input type="text" id="txtManagementPlanTypeFour"  class="form-control txtManagementPlanTypeFour" style="margin-top:17px";/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '5') {

                        _strHTML += '<td><select class="form-control txtManagementPlanResult" style="margin-top:17px";><option value="0">--Select--</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></td>';

                    }


                    _strHTML += '<td><i style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Speech to text" class="fa fa-microphone"></i>&nbsp;&nbsp;<i  style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Ink to Text"  class="fa fa-pencil" aria-hidden="true"></i>&nbsp;&nbsp;<i data-toggle="tooltip" title="Maximize" style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" class="fa fa-window-maximize" aria-hidden="true"></i><textarea rows="4" class="form-control Remarksmanagementplan" style="height:35px" id="Remarksmanagementplan" style="height:35px" cols="50"></textarea></td>';


                    table.append(rowcol);
                    count += 1;
                }); //each end here
                _strHTML += '</table>';


            },
            failure: function(response) {
                alert('Failed during fetching record');
            },
            error: function(response) {
                alert('Error during fetching record ');
            }

        }); //post data end here
        return _strHTML;

    } //function end here......

    //MANAGENMENT END HERE




    BindManagementPlanPerformaOption1111 = function(_code) {
        var _QuestionCodeManagementPlan = $(this).find('#txtQuestioncodeManagementPlan').val();
        var _QuestionNameManagementPlan = $(this).find('.gridNameManagementPlan').val();
        var _ResultTypeManagementPlan = $(this).find('.txtManagementPlanTypeFour').val();
        var _ResultManagementPlan = $(this).find('.txtManagementPlanResult').val();
        var _RemarksManagementPlan = $(this).find('.Remarksmanagementplan').val();
        var chkPrintMP = $(this).find('input:checkbox[id="chkManagementPlan"]');
        if ((chkPrintMP).is(':checked')) {
            _IsPrintMPval = 1;
        }
        else {
            _IsPrintMPval = 0;
        }

        var _strHTML = "";
        //alert(_code);
        var divQuestion = "#divQuestionManagementPlan" + _code;
        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/BindQuestionManagementPlanDetail',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            cache: false,
            async: false,

            data: "{'CODE':'" + _code + "'}",

            success: function(response) {
                //alert(response.d);
                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);

                var items = xml.find("Table");
                var table = $('<table id="tbldivQuestionOptionManagementPlan' + _code + '" style="font-family:Calibri;" class="table table-bordered table-hover mt-2 tbldivQuestionOptionManagementPlan" ></table>');
                _strHTML += '<table id="divQuestionManagementPlan' + _code + '" style="font-family:Calibri;" class="table table-bordered table-hover mt-2 divQuestionManagementPlan" >';

                var row = '';
                var count = 0;
                $.each(items, function(index) {
                    if (parseInt(count) == 0) {
                        var rowheader = '<thead><tr>';
                        rowheader += '<th>Question</th>';
                        rowheader += '<th>Result</th>';
                        rowheader += '<th>Remarks</th>';

                        rowheader += '</tr></thead>';
                        table.append(rowheader);
                    }
                    var rowcol = '';

                    _strHTML += '<tbody><tr>';
                    rowcol += '<td style="display:none;"><input type="hidden" id="hdnResultTypeMP" class="hdnResultTypeMP" value="' + $(this).find("RESULT_TYPE").text() + '" /><input type="hidden" id="txtQuestionGroupcodeManagementPlan" class="txtQuestionGroupcodeManagementPlan" value="' + $(this).find("L1_CODE").text() + '" /></td>';
                    _strHTML += '<td style="display:none;"><input type="hidden" id="hdnResultTypeMP" class="hdnResultTypeMP" value="' + $(this).find("RESULT_TYPE").text() + '" /><input type="hidden" id="txtQuestionGroupcodeManagementPlan" class="txtQuestionGroupcodeManagementPlan" value="' + $(this).find("L1_CODE").text() + '" /></td>';

                    _strHTML += '<td ><input type="text" disabled class="form-control gridNameManagementPlan"  id="gridNameManagementPlan" value="' + $(this).find("QUESTION").text() + '" style="margin-top: 17px;" /></td>';



                    _strHTML += '<td style="display:none;"><input type="text" disabled class="form-control txtQuestioncodeManagementPlan"  id="txtQuestioncodeManagementPlan" value="' + $(this).find("CODE").text() + '" /></td>';


                    _strHTML += '<td style="display:none;"><input type="hidden" style="margin-top: 17px;" class="form-control hdnQuestionlevelManagementPlan"  id="hdnQuestionlevelManagementPlan" value="' + $(this).find("QUESTION_LEVEL").text() + '" /></td>';
                    if ($(this).find("RESULT_TYPE").text() == '1') {

                        _strHTML += '<td><input type="text" id="txtManagementPlanTypeone' + $(this).find("CODE").text() + '" class="form-control txtManagementPlanTypeone"/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '2') {

                        _strHTML += '<td><input type="button" id="btnYesGrv' + $(this).find("CODE").text() + '" class="buttonGrv btnYesGrv" style="width:100px;" onclick="ChangeTxtNo(' + $(this).find("CODE").text() + ')" value="Yes" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '3') {

                        _strHTML += '<td><input type="button" id="btnPositiveGrv' + $(this).find("CODE").text() + '" class="buttonGrv btnPositiveGrv" style="width:100px;" onclick="ChangeTxtNegative(' + $(this).find("CODE").text() + ')" value="Positive" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '4') {

                        _strHTML += '<td><input style="margin-top:17px;" type="text" id="txtManagementPlanTypeFour' + $(this).find("CODE").text() + '" class="form-control txtManagementPlanTypeFour"/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '5') {

                        _strHTML += '<td><select class="form-control txtManagementPlanResult"><option>--Select--</option></select></td>';

                    }


                    _strHTML += '<td><i style="color:black;font-size:12px;cursor:pointer;margin-left:342px;" data-toggle="tooltip" title="Speech to text" class="fa fa-microphone"></i>&nbsp;&nbsp;<i  style="color:black;font-size:12px;cursor:pointer;" data-toggle="tooltip" title="Ink to Text"  class="fa fa-pencil" aria-hidden="true"></i>&nbsp;&nbsp;<i data-toggle="tooltip" title="Maximize" style="color:black;font-size:12px;cursor:pointer;" class="fa fa-window-maximize" aria-hidden="true"></i><textarea rows="4" class="form-control Remarksmanagementplan" style="height:35px" cols="50"></textarea></td>';


                    _strHTML += '<td><button type="button" id="btnManagementPlanRefresh" class="btn btn-danger" style="font-family: Calibri; font-size: 12px; margin-top:17px;"><i class="fa fa-refresh" aria-hidden="true"></i></button><td><input type="checkbox" id="chkManagementPlan" style="margin-top:17px;"></td></td>';

                    table.append(rowcol);
                    count += 1;
                }); //each end here

                $("#divQuestionManagementPlan" + _code).html(table);
                var _table = $('#divQuestionManagementPlan' + _code + ' table'); //                        
                // bind_filterevent(_table);
                //  paginateIt(_table, 10);
                // visibility_paging(_table);

                _strHTML += '</table>';
            },
            failure: function(response) {
                alert('Failed during fetching record');
            },
            error: function(response) {
                alert('Error during fetching record ');
            }

        }); //post data end here
        return _strHTML;
    }


    //provisional end here
    BindFamilyDynamicsPerformaOption = function(_code) {
        //debugger;

        var _QuestionCodeFamilyDynamics = $(this).find('.txtCodeFamilyDynamics').val();
        var _QuestionNameFamilyDynamics = $(this).find('.txtNameFamilyDynamics').val();
        var _ResultTypeFamilyDynamics = $(this).find('.txtFamilyDynamicsTypeFour').val();

        var _ResultFamilyDynamics = $(this).find('.txtFamilyDynamicsResultFive').val();
        var _RemarksFamilyDynamics = $(this).find('.ddlFamilydynamics').val();
        var chkPrintFD = $(this).find('input:checkbox[id="chkFamilyDynamics"]');
        var _IsPrintFDval = 0;
        if ((chkPrintFD).is(':checked')) {
            _IsPrintFDval = 1;
        }
        else {
            _IsPrintFDval = 0;
        }



        var _ResultTypeFamilyDynamics = $(this).find('.txtFamilyDynamicsTypeFour').val();

        var _Result = $(this).find('.ddlFamilydynamics').val();

        $("#hdncode").val(_code);


        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/BindQuestionFamilyDynamics',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            cache: false,
            async: false,
            data: "{'CODE':'" + _code + "'}",


            success: function(response) {
                //alert(response.d);
                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);

                var items = xml.find("Table");
                var table = $('<table id="tbldivQuestionOptionFamilyDynamics' + _code + '" style="font-family:Calibri;" class="table table-bordered table-hover mt-2 tbldivQuestionOptionFamilyDynamics" ></table>');
                var row = '';
                var count = 0;
                $.each(items, function(index) {
                    if (parseInt(count) == 0) {
                        var rowheader = '<thead><tr>';
                        rowheader += '<th>Question</th>';
                        rowheader += '<th>Result</th>';
                        rowheader += '<th>Remarks</th>';

                        rowheader += '</tr></thead>';
                        table.append(rowheader);
                    }
                    var rowcol = '';
                    rowcol += '<tbody><tr>';

                    rowcol += '<td style="display:none;"><input type="hidden" style="margin-top: 17px;" class="form-control hdnQuestionlevelFamilyDynamics"  id="hdnQuestionlevelFamilyDynamics" value="' + $(this).find("QUESTION_LEVEL").text() + '" /></td>';
                    rowcol += '<td style="display:none;"><input type="hidden" id="hdnFamilyQuestionGroupCode" class="hdnFamilyQuestionGroupCode" value="' + $(this).find("Q_GROUP_CODE").text() + '" /><input type="hidden" id="hdnResultType1" class="hdnResultType1" value="' + $(this).find("RESULT_TYPE").text() + '" /><input type="hidden" id="txtCodeFamilyDynamics" class="hdnFamilyDynamicsQuestionCode" value="' + $(this).find("QUESTION").text() + '" /></td>';

                    rowcol += '<td style="display:none;"><input type="text" style="margin-top: 17px;" disabled class="form-control txtNameFamilyDynamics"  id="txtNameFamilyDynamics" value="' + $(this).find("NAME").text() + '" /></td>';
                    rowcol += '<td style="padding-top:35px;"><span class="txtNameFamilyDynamics" id="txtNameFamilyDynamics' + $(this).find("CODE").text() + '">' + $(this).find("NAME").text() + '</span></td>';


                    if ($(this).find("RESULT_TYPE").text() == '1') {
                        rowcol += '<td><input type="text" id="txtFamilyDynamicsTypeone' + $(this).find("QUESTION").text() + '" class="form-control txtFamilyDynamicsTypeone" style="margin-top: 17px;" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '2') {
                        rowcol += '<td><input type="button" id="btnYesGrv' + $(this).find("QUESTION").text() + '" class="form-control buttonGrv btnYesGrv" style="background-color:#3c8dbc;color:white;margin-top: 17px;" onclick="ChangeTxtNo(' + $(this).find("QUESTION").text() + ')" value="Yes" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '3') {
                        rowcol += '<td><input type="button" id="btnPositiveGrv' + $(this).find("QUESTION").text() + '" class="buttonGrv btnPositiveGrv" style="width:100px;background-color:#3c8dbc;color:white;" onclick="ChangeTxtNegative(' + $(this).find("QUESTION").text() + ')" value="Positive"  style="margin-top: 17px;" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '4') {
                        rowcol += '<td><input type="text" id="txtFamilyDynamicsTypeFour' + $(this).find("QUESTION").text() + '" class="form-control txtFamilyDynamicsTypeFour"  style="margin-top: 17px;"></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '5') {
                        rowcol += '<td><select  style="margin-top: 17px;" id="ddlFamilydynamics' + $(this).find("QUESTION").text() + '" class="form-control ddlFamilydynamics"><option>--Select--</option></select></td>';

                    }

                    rowcol += '<td><i style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Speech to text" class="fa fa-microphone"></i>&nbsp;&nbsp;<i  style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Ink to Text"  class="fa fa-pencil" aria-hidden="true"></i>&nbsp;&nbsp;<i data-toggle="tooltip" title="Maximize" style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" class="fa fa-window-maximize" aria-hidden="true"></i><textarea rows="4" class="form-control txtRemarksFamilyDynamics" id="txtRemarksFamilyDynamics" style="height:35px;" cols="50"></textarea></td>';


                    table.append(rowcol);
                    count += 1;
                }); //each end here
                $("#divFamilyDynamics").html(table);
                var _table = $('#divFamilyDynamics table'); //                        
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
    }
    BindPerformaQuestionOption = function(_code) {
        var _QuestionGroupCode = $(this).find('#txtL1_CODE').val();
        var _Questioncode = $(this).find('#txtGridQuestionCodeMantal_status').val();
        var _txt_questionname = $(this).find('.txtGridQuestionNameMantal_status').val();
        var _txt_result_type = $(this).find('.txtGridResult_typeMantal_status').val();
        var _txt_result = $(this).find('.txtGridResult_typeMantal_status').val();
        var _txt_Remarks = $(this).find('.txtGridRemarksMantal_status').val();
        var chkPrintMentalStatus = $(this).find('input:checkbox[id="chkMentalStatus"]');
        var _IsPrintMSval = 0;
        if ((chkPrintMentalStatus).is(':checked')) {
            _IsPrintMSval = 1;
        }
        else {
            _IsPrintMSval = 0;
        }
        var _strHTML = "";
        //alert(_code);
        var divQuestion = "#divQuestion" + _code;

        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/BindSchizophreniaQuestionPerformaDetail',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            cache: false,
            async: false,
            data: "{'CODE':'" + _code + "'}",


            success: function(response) {
                //alert(response.d);
                var _code = $(this).find('#txtL1_CODE').val();
                var _txt_questionname = $(this).find('.txtGridQuestionNameMantal_status').val();
                var _txt_result_type = $(this).find('.txtGridResult_typeMantal_status').val();
                var _txt_result = $(this).find('.txtGridResultMantal_status').val();



                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);

                var items = xml.find("Table");
                var table = $('<table id="tbldivQuestionOption' + _code + '" style="font-family:Calibri;" class="table table-bordered table-hover mt-2 tbldivQuestionOption" ></table>');
                _strHTML += '<table id="tbldivQuestionOption' + _code + '" style="font-family:Calibri;" class="table table-bordered table-hover mt-2 tbldivQuestionOption" >';
                var row = '';
                var count = 0;
                $.each(items, function(index) {
                    if (parseInt(count) == 0) {
                        _strHTML += '<thead><tr><th>Question</th><th>Result</th><th>Remarks</th></tr></thead>';
                        var rowheader = '<thead><tr>';
                        rowheader += '<th>Question</th>';
                        rowheader += '<th>Result</th>';
                        rowheader += '<th>Remarks</th>';

                        rowheader += '</tr></thead>';
                        table.append(rowheader);
                    }
                    var rowcol = '';
                    _strHTML += '<tbody><tr>';
                    rowcol += '<tbody><tr>';


                    _strHTML += '<td style="display:none;"><input type="hidden" id="hdnResultTypeMental_status" class="hdnResultTypeMental_status" value="' + $(this).find("RESULT_TYPE").text() + '" /><input type="hidden" id="hdnQuestionCode" class="hdnQuestionCode" value="' + $(this).find("CODE").text() + '" /><input type="hidden" id="txtL1_CODE" class="txtL1_CODE" value="' + $(this).find("L1_CODE").text() + '" /></td>';
                    rowcol += '<td>' + $(this).find("QUESTION").text() + '</td>';
                    _strHTML += '<td style="display:none;"><input type="text" style="margin-top: 17px;" disabled class="form-control txtGridQuestionNameMantal_status"  id="txtGridQuestionNameMantal_status" value="' + $(this).find("QUESTION").text() + '" /></td>';
                    _strHTML += '<td style="padding-top:35px;"><span class="txtGridQuestionNameMantal_status" id="txtGridQuestionNameMantal_status' + $(this).find("CODE").text() + '">' + $(this).find("QUESTION").text() + '</span></td>';

                    _strHTML += '<td style="display:none;"><input type="text" style="margin-top: 17px;" disabled class="form-control txtGridQuestionCodeMantal_status"  id="txtGridQuestionCodeMantal_status" value="' + $(this).find("QUESTION_CODE").text() + '" /></td>';


                    _strHTML += '<td style="display:none;"><input type="hidden" style="margin-top: 17px;" class="form-control hdnQuestionlevel"  id="hdnQuestionlevel" value="' + $(this).find("QUESTION_LEVEL").text() + '" /></td>';



                    if ($(this).find("RESULT_TYPE").text() == '1') {
                        rowcol += '<td><input type="text" class="form-control txtGridResult_typeMantal_status" id="txtGridResult_typeMantal_status" /></td>';
                        _strHTML += '<td><input type="text" class="form-control txtGridResult_typeMantal_status" id="txtGridResult_typeMantal_status" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '2') {
                        rowcol += '<td><input type="button" id="btnYesGrv' + $(this).find("CODE").text() + '" class="buttonGrv btnYesGrv" style="background-color:#3c8dbc;color:white;" onclick="ChangeTxtNo(' + $(this).find("CODE").text() + ')" value="Yes" /></td>';
                        _strHTML += '<td><input type="button" id="btnYesGrv' + $(this).find("CODE").text() + '" class="buttonGrv btnYesGrv" style="width:100px;background-color:#3c8dbc;color:white;" onclick="ChangeTxtNo(' + $(this).find("CODE").text() + ')" value="Yes" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '3') {
                        rowcol += '<td><input type="button" id="btnPositiveGrv' + $(this).find("CODE").text() + '" class="buttonGrv btnPositiveGrv" style="width:100px;background-color:#3c8dbc;color:white;" onclick="ChangeTxtNegative(' + $(this).find("CODE").text() + ')" value="Positive" /></td>';
                        _strHTML += '<td><input type="button" id="btnPositiveGrv' + $(this).find("CODE").text() + '" class="buttonGrv btnPositiveGrv" style="width:100px;background-color:#3c8dbc;color:white;" onclick="ChangeTxtNegative(' + $(this).find("CODE").text() + ')" value="Positive" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '4') {
                        rowcol += '<td><input type="text"   class="form-control"/></td>';
                        _strHTML += '<td><input type="text" id="txtResultType4Mental"  class="form-control txtResultType4Mental"/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '5') {
                        rowcol += '<td><select class="form-control txtGridResult_typeMantal_status" style="margin-top:17px";><option>--Select--<option value="0">--Select--</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></td>';
                        _strHTML += '<td><select class="form-control txtGridResult_typeMantal_status5" style="margin-top:17px";><option value="0">--Select--</option><option value="YES">YES</option><option value="NO">NO</option></td>';

                    }


                    _strHTML += '<td><i style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Speech to text" class="fa fa-microphone"></i>&nbsp;&nbsp;<i  style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Ink to Text"  class="fa fa-pencil" aria-hidden="true"></i>&nbsp;&nbsp;<i data-toggle="tooltip" title="Maximize" style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" class="fa fa-window-maximize" aria-hidden="true"></i><textarea rows="4" class="form-control txtGridRemarksMantal_status" style="height:35px" id="txtGridResultMantal_status" cols="50"></textarea></td>';

                    table.append(rowcol);
                    count += 1;
                }); //each end here
                _strHTML += '</table>';


            },
            failure: function(response) {
                alert('Failed during fetching record');
            },
            error: function(response) {
                alert('Error during fetching record ');
            }

        }); //post data end here
        return _strHTML;

    } //function end here......
    BindPerformaPastHistory = function() {
        //alert(_code);
        var _QuestionCodePastHistory = $(this).find('.txtCodePastHistory').val();
        var _QuestionNamePastHistory = $(this).find('.txtNamePastHistory').val();
        var _ResultTypePastHistory = $(this).find('.btnYesGrv').val();
        var _ResultPastHistory = $(this).find('.ddlPastHistory').val();
        var _RemarksPastHistory = $(this).find('.txtPastHistoryRemarks').val();
        var chkPrintPH = $(this).find('input:checkbox[id="chkPastHistory"]');
        if ((chkPrintPH).is(':checked')) {
            _IsPrinPHval = 1;
        }
        else {
            _IsPrinPHval = 0;
        }


        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/BindPastHistory',
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
                var table = $('<table id="tbldivPastHistory' + $(this).find("CODE").text() + '" style="font-family:Calibri;" class="table table-bordered table-hover mt-2" ></table>');
                var row = '';
                var count = 0;
                $.each(items, function(index) {
                    if (parseInt(count) == 0) {
                        var rowheader = '<thead><tr>';
                        rowheader += '<th>Question</th>';
                        rowheader += '<th>Result</th>';
                        rowheader += '<th>Remarks</th>';

                        rowheader += '</tr></thead>';
                        table.append(rowheader);
                    }
                    var _newId = count++;

                    var rowcol = '';
                    rowcol += '<tbody><tr>';

                    rowcol += '<td style="display:none;"><input type="hidden" style="margin-top: 17px;" class="form-control hdnQuestionlevelPastHistory"  id="hdnQuestionlevelPastHistory" value="' + $(this).find("QUESTION_LEVEL").text() + '" /></td>';
                    rowcol += '<td style="display:none;"><input type="hidden" class="form-control hdnPastHistoryGroupCode"  id="hdnPastHistoryGroupCode" value="' + $(this).find("CODE").text() + '" /></td>';
                    rowcol += '<td style="display:none;"><input type="hidden" id="hdnResultTypePastHistory" class="hdnResultTypePastHistory" value="' + $(this).find("RESULT_TYPE").text() + '" /><input type="hidden" id="txtCodePastHistory" class="txtCodePastHistory" value="' + $(this).find("CODE").text() + '" /></td>';

                    rowcol += '<td style="display:none;"><input type="text" style="margin-top: 17px;" disabled class="form-control txtNamePastHistory"  id="txtNamePastHistory" value="' + $(this).find("NAME").text() + '" /></td>';
                    rowcol += '<td style="padding-top:35px;"><span class="txtNamePastHistory" id="txtNamePastHistory' + $(this).find("CODE").text() + '">' + $(this).find("NAME").text() + '</span></td>';

                    if ($(this).find("RESULT_TYPE").text() == '1') {
                        rowcol += '<td><input type="text" id="txtresultTypePastHistory' + $(this).find("CODE").text() + '" class="form-control txtresultTypePastHistory"/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '2') {
                        rowcol += '<td><input type="button" id="btnYesGrv' + $(this).find("CODE").text() + '" class="form-control btnPastYesGrv" style="background-color:#3c8dbc;color:white;margin-top: 22px;" onclick="ChangeTxtNo(' + $(this).find("CODE").text() + ')" value="Yes" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '3') {
                        rowcol += '<td><input type="button" id="btnPositiveGrv' + $(this).find("CODE").text() + '" class="buttonGrv btnPastPositiveGrv" style="width:100px;background-color:#3c8dbc;color:white;" onclick="ChangeTxtNegative(' + $(this).find("CODE").text() + ')" value="Positive" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '4') {
                        rowcol += '<td><input type="text" id="txtresultTypePastHistory' + $(this).find("CODE").text() + '" class="form-control"/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '5') {
                        rowcol += '<td><select id="ddlPastHistory' + $(this).find("CODE").text() + '" class="form-control ddlPastHistory"><option>--Select--</option></select></td>';

                    }

                    rowcol += '<td><i style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Speech to text" class="fa fa-microphone"></i>&nbsp;&nbsp;<i  style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Ink to Text"  class="fa fa-pencil" aria-hidden="true"></i>&nbsp;&nbsp;<i data-toggle="tooltip" title="Maximize" style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" class="fa fa-window-maximize" aria-hidden="true"></i><textarea rows="4" class="form-control txtPastHistoryRemarks" id="txtPastHistoryRemarks' + $(this).find("CODE").text() + '" style="height:35px;" cols="50"></textarea></td>';


                    table.append(rowcol);
                    count += 1;
                }); //each end here
                $("#divPastHistory").html(table);
                //                var _table = $('#divPastHistory table'); //                        
                //                bind_filterevent(_table);
                //                paginateIt(_table, 10);
                //                visibility_paging(_table);


            },
            failure: function(response) {
                alert('Failed during fetching record');
            },
            error: function(response) {
                alert('Error during fetching record ');
            }

        }); //post data end here

    } //function end here......
    //add past history


    BindPerformaTreatmentHistory = function() {
        //alert(_code);
        var _QuestionCodeTreatmentHistory = $(this).find('.txtCodeTreatmentHistory').val();
        var _QuestionNameTreatmentHistory = $(this).find('.txtNameTreatmentHistory').val();
        var _ResultTypeTreatmentHistory = $(this).find('.btnYesTreatmentGrv').val();
        var _ResultTreatmentHistory = $(this).find('.ddlTreatmentHistory').val();
        var _RemarksTreatmentHistory = $(this).find('.txtTreatmentHistoryRemarks').val();
        var chkPrintTH = $(this).find('input:checkbox[id="chkTreatmentHistory"]');
        if ((chkPrintTH).is(':checked')) {
            _IsPrintTHval = 1;
        }
        else {
            _IsPrintTHval = 0;
        }

        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/BindTreatmentHistory',
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
                var table = $('<table id="tbldivTreatmentHistory' + $(this).find("CODE").text() + '" style="font-family:Calibri; margin-bottom:2px;" class="table table-bordered table-hover mt-2" ></table>');
                var row = '';
                var count = 0;
                $.each(items, function(index) {
                    if (parseInt(count) == 0) {
                        var rowheader = '<thead><tr>';
                        rowheader += '<th>Question</th>';
                        rowheader += '<th>Result</th>';
                        rowheader += '<th>Remarks</th>';

                        rowheader += '</tr></thead>';
                        table.append(rowheader);
                    }
                    var _newId1 = count++;
                    var rowcol = '';
                    rowcol += '<tbody><tr>';

                    rowcol += '<td style="display:none;"><input type="hidden" style="margin-top: 17px;" class="form-control hdnQuestionlevelTreatmentHistory"  id="hdnQuestionlevelTreatmentHistory" value="' + $(this).find("QUESTION_LEVEL").text() + '" /></td>';
                    rowcol += '<td style="display:none;"><input type="hidden" id="hdnResultTypeTH" class="hdnResultTypeTH" value="' + $(this).find("RESULT_TYPE").text() + '" /><input type="hidden" id="txtCodeTreatmentHistory" class="txtCodeTreatmentHistory" value="' + $(this).find("CODE").text() + '" /></td>';
                    rowcol += '<td style="display:none;"><input type="hidden" class="form-control hdnTreatmentHistoryGroupCode"  id="hdnTreatmentHistoryGroupCode" value="' + $(this).find("CODE").text() + '" /></td>';


                    rowcol += '<td style="display:none;"><input type="text" style="margin-top: 17px;" disabled class="form-control txtNameTreatmentHistory"  id="txtNameTreatmentHistory" value="' + $(this).find("NAME").text() + '" /></td>';
                    rowcol += '<td style="padding-top:35px;"><span class="txtNameTreatmentHistory" id="txtNameTreatmentHistory' + $(this).find("CODE").text() + '">' + $(this).find("NAME").text() + '</span></td>';

                    if ($(this).find("RESULT_TYPE").text() == '1') {
                        rowcol += '<td><input type="text" id="txtresultTypeTreatmentHistory' + $(this).find("CODE").text() + '" class="form-control txtresultTypePastHistory"/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '2') {
                        rowcol += '<td><input type="button" id="btnYesTreatmentGrv' + $(this).find("CODE").text() + '" class="form-control btnYesTreatmentGrv" style="background-color:#3c8dbc;color:white;margin-top: 22px;" onclick="ChangetreatmentTxtNo(' + $(this).find("CODE").text() + ')" value="Yes" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '3') {
                        rowcol += '<td><input type="button" id="btnPositiveTreatmentGrv' + $(this).find("CODE").text() + '" class="buttonGrv btnPositiveTreatmentGrv" style="background-color:#3c8dbc;color:white;margin-top:22px;" onclick="ChangetreatmentTxtNegative(' + $(this).find("CODE").text() + ')" value="Positive" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '4') {
                        rowcol += '<td><input type="text" id="txtresultTypeTreatmentHistory' + $(this).find("CODE").text() + '" class="form-control txtresultTypeTreatmentHistory"/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '5') {
                        rowcol += '<td><select id="ddlTreatmentHistory' + $(this).find("CODE").text() + '" class="form-control ddlTreatmentHistory"><option>--Select--</option></select></td>';

                    }

                    rowcol += '<td><i style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Speech to text" class="fa fa-microphone"></i>&nbsp;&nbsp;<i  style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Ink to Text"  class="fa fa-pencil" aria-hidden="true"></i>&nbsp;&nbsp;<i data-toggle="tooltip" title="Maximize" style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" class="fa fa-window-maximize" aria-hidden="true"></i><textarea rows="4" class="form-control txtTreatmentHistoryRemarks" id="txtTreatmentHistoryRemarks' + $(this).find("CODE").text() + '" style="height:35px;" cols="50"></textarea></td>';


                    table.append(rowcol);
                    count += 1;
                }); //each end here
                $("#divTreatmentHistory").html(table);
                //                var _table = $('#divTreatmentHistory table'); //                        
                //                bind_filterevent(_table);
                //                paginateIt(_table, 10);
                //                visibility_paging(_table);


            },
            failure: function(response) {
                alert('Failed during fetching record');
            },
            error: function(response) {
                alert('Error during fetching record ');
            }

        }); //post data end here

    } //function end here......


    BindPerformaFamilyHistory = function() {
        //alert("hello");

        var _QuestionCodeFamilytHistory = $(this).find('.txtCodeFamilyHistory').val();
        var _QuestionFamilyHistory = $(this).find('.txtNameFamilyHistory').val();
        var _ResultTypeFamilyHistory = $(this).find('.btnYesFamilyHistoryGrv').val();
        var _ResultFamilyHistory = $(this).find('.ddlFamilytHistory').val();
        var _RemarksFamilyHistory = $(this).find('.txtFamilytHistoryRemarks').val();
        var chkPrintFH = $(this).find('input:checkbox[id="chkFamilyHistory"]');
        if ((chkPrintFH).is(':checked')) {
            _IsPrintFHval = 1;
        }
        else {
            _IsPrintFHval = 0;
        }

        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/BindFamilyHistory',
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
                var table = $('<table id="tbldivFamilyHistory' + $(this).find("CODE").text() + '" style="font-family:Calibri; margin-bottom:2px;" class="table table-bordered table-hover mt-2" ></table>');
                var row = '';
                var count = 0;
                $.each(items, function(index) {
                    if (parseInt(count) == 0) {
                        var rowheader = '<thead><tr>';
                        rowheader += '<th>Question</th>';
                        rowheader += '<th>Result</th>';
                        rowheader += '<th>Remarks</th>';

                        rowheader += '</tr></thead>';
                        table.append(rowheader);
                    }
                    var _newId = count++;
                    var rowcol = ''; //_strHTML +='<input type="button" id="btnYesGrv'+trid+'" class="buttonGrv btnYesGrv" style="width:100px;" onclick="ChangeTxtNo('+trid+')" value="Yes" />';
                    rowcol += '<tbody><tr>';
                    //rowcol += '<td>' + $(this).find("NAME").text() + '</td>';
                    rowcol += '<td style="display:none;"><input type="hidden" style="margin-top: 17px;" class="form-control hdnQuestionlevelFamilyHistory"  id="hdnQuestionlevelFamilyHistory" value="' + $(this).find("QUESTION_LEVEL").text() + '" /></td>';
                    rowcol += '<td style="display:none;"><input type="hidden" id="hdnResultTypeFH" class="hdnResultTypeFH" value="' + $(this).find("RESULT_TYPE").text() + '" /><input type="hidden" id="txtCodeFamilyHistory" class="txtCodeFamilyHistory" value="' + $(this).find("QUESTIONCODE").text() + '" /></td>';
                    rowcol += '<td style="display:none;"><input type="hidden" class="form-control hdnFamilyHistoryGroupCode"  id="hdnFamilyHistoryGroupCode" value="' + $(this).find("CODE").text() + '" /></td>';

                    //rowcol += '<td style="display:none;"><input type="text" style="margin-top: 17px;" disabled class="form-control txtCodeFamilyHistory"  id="txtCodeFamilyHistory" value="' + $(this).find("QUESTION_CODE").text() + '" /></td>';
                    rowcol += '<td style="display:none;"><input type="text" style="margin-top: 17px;" disabled class="form-control txtNameFamilyHistory"  id="txtNameFamilyHistory" value="' + $(this).find("NAME").text() + '" /></td>';
                    rowcol += '<td style="padding-top:35px;"><span class="txtNameFamilyHistory" id="txtNameFamilyHistory' + $(this).find("CODE").text() + '">' + $(this).find("NAME").text() + '</span></td>';

                    if ($(this).find("RESULT_TYPE").text() == '1') {
                        rowcol += '<td><input type="text" id="txtresultTypeFamilyHistory' + $(this).find("QUESTIONCODE").text() + '" class="form-control txtresultTypeFamilyHistory"/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '2') {
                        rowcol += '<td><input type="button" id="btnYesFamilyHistoryGrv' + $(this).find("QUESTIONCODE").text() + '" class="form-control btnYesFamilyHistoryGrv" style="background-color:#3c8dbc;color:white;margin-top: 22px;" onclick="ChangeFamilyHistoryTxtNo(' + $(this).find("QUESTIONCODE").text() + ')" value="Yes" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '3') {
                        rowcol += '<td><input type="button" id="btnPositiveFamilyHistoryGrv' + $(this).find("QUESTIONCODE").text() + '" class="buttonGrv btnPositiveGrv" style="width:100px;background-color:#3c8dbc;color:white;" onclick="ChangePastHistoryTxtNegative(' + $(this).find("QUESTIONCODE").text() + ')" value="Positive" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '4') {
                        rowcol += '<td><input type="text" id="txtresultTypeFamilyHistory' + $(this).find("QUESTIONCODE").text() + '" class="form-control"/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '5') {
                        rowcol += '<td><select id="ddlFamilytHistory' + $(this).find("QUESTIONCODE").text() + '" class="form-control ddlFamilytHistory"><option>--Select--</option></select></td>';

                    }

                    rowcol += '<td><i style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Speech to text" class="fa fa-microphone"></i>&nbsp;&nbsp;<i  style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Ink to Text"  class="fa fa-pencil" aria-hidden="true"></i>&nbsp;&nbsp;<i data-toggle="tooltip" title="Maximize" style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" class="fa fa-window-maximize" aria-hidden="true"></i><textarea rows="4" class="form-control txtFamilytHistoryRemarks" id="txtFamilytHistoryRemarks' + $(this).find("QUESTIONCODE").text() + '" style="height:35px;" cols="50"></textarea></td>';
                    //  rowcol += '<td><button type="button" id="btnFamilyHistoryRefresh" class="btn btn-danger" style="font-family: Calibri; font-size: 12px; margin-top:17px;""><i class="fa fa-refresh" aria-hidden="true"></i></button>&nbsp;&nbsp;<button type="button" id="btnFamilyHistoryPlus" onclick="AddRecordFamilyHistory(' + $(this).find("CODE").text() + ')" class="btn btn-primary" style="font-family: Calibri; font-size: 12px; margin-top:17px;"><i class="fa fa-plus fa-lg" aria-hidden="true"></i></button><td><input type="checkbox" id="chkFamilyHistory" style="margin-top:17px;"></td></td>';
                    //rowcol += '<td><button type="button" id="btnFamilyHistoryRefresh" class="btn btn-danger" style="font-family: Calibri; font-size: 12px; margin-top:17px;""><i class="fa fa-refresh" aria-hidden="true"></i></button>&nbsp;&nbsp;<button type="button" id="btnFamilyHistoryPlus" onclick="AddRecordFamilyHistory(' + _newId + ')" class="btn btn-primary" style="font-family: Calibri; font-size: 12px; margin-top:17px;"><i class="fa fa-plus fa-lg" aria-hidden="true"></i></button></td>';
                    table.append(rowcol);
                    count += 1;
                }); //each end here
                $("#divFamilyHistory").html(table);
                //                var _table = $('#divFamilyHistory table'); //                        
                //                bind_filterevent(_table);
                //                paginateIt(_table, 10);
                //                visibility_paging(_table);


            },
            failure: function(response) {
                alert('Failed during fetching record');
            },
            error: function(response) {
                alert('Error during fetching record ');
            }

        }); //post data end here

    } //function end here......

    BindPersonalHistoryPerformaOption = function() {
        //alert(_code);
        var _QuestionCodePersonalHistory = $(this).find('.txtCodePersonalHistory').val();
        var _QuestionNmaePersonalHistory = $(this).find('.txtPersonalHistory').val();
        var _ResultTypePersonalHistory = $(this).find('.ddlPersonalHistory').val();
        var _ResultPersonalHistory = $(this).find('.ddlResultPersonalHistory').val();
        var _RemarksPersonalHistory = $(this).find('.txtPersonalHistoryRemarks').val();
        var chkPrintPH = $(this).find('input:checkbox[id="chkPersonalHistory"]');
        if ((chkPrintPH).is(':checked')) {
            _IsPrintPHval = 1;
        }
        else {
            _IsPrintPHval = 0;
        }

        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/BindPersonalHistory',
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
                var table = $('<table id="tbldivPersonalHistory' + $(this).find("CODE").text() + '" style="font-family:Calibri;" class="table table-bordered table-hover mt-2" ></table>');
                var row = '';
                var count = 0;
                $.each(items, function(index) {
                    if (parseInt(count) == 0) {
                        var rowheader = '<thead><tr>';
                        rowheader += '<th>Question</th>';
                        rowheader += '<th>Result</th>';
                        rowheader += '<th>Remarks</th>';
                        //rowheader += '<th>Action</th>';
                        //                        rowheader += '<th>Print</th>';
                        rowheader += '</tr></thead>';
                        table.append(rowheader);
                    }
                    var rowcol = '';
                    rowcol += '<tbody><tr>';

                    rowcol += '<td style="display:none;"><input type="hidden" style="margin-top: 17px;" class="form-control hdnQuestionlevelPersonalHistory"  id="hdnQuestionlevelPersonalHistory" value="' + $(this).find("QUESTION_LEVEL").text() + '" /></td>';
                    rowcol += '<td style="display:none;"><input type="hidden" class="form-control hdnQuestioncodePersonalHistoryGroupCode"  id="hdnQuestioncodePersonalHistoryGroupCode" value="' + $(this).find("CODE").text() + '" /></td>';
                    rowcol += '<td style="display:none;"><input type="hidden" id="hdnResultTypePersonalHistory" class="hdnResultTypePersonalHistory" value="' + $(this).find("RESULT_TYPE").text() + '" /><input type="hidden" id="txtCodePersonalHistory" class="txtCodePersonalHistory" value="' + $(this).find("CODE").text() + '" /></td>';

                    rowcol += '<td style="display:none;"><input type="text" style="margin-top: 17px;" disabled class="form-control txtPersonalHistory"  id="txtPersonalHistory" value="' + $(this).find("NAME").text() + '" /></td>';
                    rowcol += '<td style="padding-top:35px;"><span class="txtPersonalHistory" id="txtPersonalHistory' + $(this).find("CODE").text() + '">' + $(this).find("NAME").text() + '</span></td>';

                    if ($(this).find("RESULT_TYPE").text() == '1') {
                        rowcol += '<td><input type="text" id="txtresultTypePersonalHistory' + $(this).find("CODE").text() + '" class="form-control txtresultTypePersonalHistory"/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '2') {
                        rowcol += '<td><input type="button" id="btnYesPersonalHistoryGrv' + $(this).find("CODE").text() + '" class="buttonGrv btnYesPersonalHistoryGrv" style="width:100px;background-color:#3c8dbc;color:white;" onclick="ChangetreatmentTxtNo(' + $(this).find("CODE").text() + ')" value="Yes" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '3') {
                        rowcol += '<td><input type="button" id="btnPositivePersonalHistoryGrv' + $(this).find("CODE").text() + '" class="buttonGrv btnPositivePersonalHistoryGrv" style="width:100px;background-color:#3c8dbc;color:white;" onclick="ChangetreatmentTxtNegative(' + $(this).find("CODE").text() + ')" value="Positive" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '4') {
                        rowcol += '<td><input type="text" id="txtresultTypePersonalHistory' + $(this).find("CODE").text() + '" class="form-control txtresultTypePersonalHistory"/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '5') {

                        rowcol += '<td><select style="margin-top: 19px;" id="ddlPersonalHistory' + $(this).find("CODE").text() + '" class="form-control ddlPersonalHistory"></td>';

                    }

                    rowcol += '<td><i style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Speech to text" class="fa fa-microphone"></i>&nbsp;&nbsp;<i  style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Ink to Text"  class="fa fa-pencil" aria-hidden="true"></i>&nbsp;&nbsp;<i data-toggle="tooltip" title="Maximize" style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" class="fa fa-window-maximize" aria-hidden="true"></i><textarea rows="4" class="form-control txtPersonalHistoryRemarks" id="txtPersonalHistoryRemarks' + $(this).find("CODE").text() + '" style="height:35px;" cols="50"></textarea></td>';
                    // rowcol += '<td><button type="button" id="btnPersonalHistoryRefresh" class="btn btn-danger" style="font-family: Calibri; font-size: 12px; margin-top:17px;""><i class="fa fa-refresh" aria-hidden="true"></i></button></td>';
                    table.append(rowcol);
                    count += 1;
                }); //each end here
                $("#divPersonalHistory").html(table);
                //                var _table = $('#divPersonalHistory table'); //                        
                //                bind_filterevent(_table);
                //                paginateIt(_table, 10);
                //                visibility_paging(_table);


            },
            failure: function(response) {
                alert('Failed during fetching record');
            },
            error: function(response) {
                alert('Error during fetching record ');
            }

        }); //post data end here

    } //function end here......


    BindSymptomsPerformaOption = function() {
        var _QuestionCodeSymptoms = $(this).find('.txtCodeSymptoms').val();
        var _QuestionNameSymptoms = $(this).find('.txtNameSymptoms').val();
        var _ResultTypeSymptoms = $(this).find('.btnYesSymptomsGrv').val();
        var _ResultSymptoms = $(this).find('.ddldivSymptoms').val();
        var _RemarksSymptoms = $(this).find('.txtSymptomsRemarks').val();
        var chkPrintSymptoms = $(this).find('input:checkbox[id="chkSymptoms"]');
        if ((chkPrintSymptoms).is(':checked')) {
            _IsPrintSymptomsval = 1;
        }
        else {
            _IsPrintSymptomsval = 0;
        }


        //alert(_code);
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
                var table = $('<table id="tbldivBindSymptoms' + $(this).find("QUESTION_CODE").text() + '" style="font-family:Calibri;" class="table table-bordered table-hover mt-2" ></table>');
                var row = '';
                var count = 0;
                $.each(items, function(index) {
                    if (parseInt(count) == 0) {
                        var rowheader = '<thead><tr>';
                        rowheader += '<th>Question</th>';
                        rowheader += '<th>Result</th>';
                        rowheader += '<th>Remarks</th>';

                        rowheader += '</tr></thead>';
                        table.append(rowheader);
                    }
                    var rowcol = '';
                    rowcol += '<tbody><tr>';


                    rowcol += '<td style="display:none;"><input type="hidden" id="hdnResultTypeSymptoms" class="hdnResultTypeSymptoms" value="' + $(this).find("RESULT_TYPE").text() + '" /><input type="hidden" id="hdnQuestionGroupCode" class="hdnQuestionGroupCode" value="' + $(this).find("CODE").text() + '" /><input type="hidden" id="txtCodeSymptoms" class="txtCodeSymptoms" value="' + $(this).find("QUESTION_CODE").text() + '" /></td>';
                    rowcol += '<td style="display:none;"><input type="text" style="margin-top: 17px;" disabled class="form-control txtNameSymptoms"  id="txtNameSymptoms" value="' + $(this).find("NAME").text() + '" /></td>';
                    rowcol += '<td style="padding-top:35px; width:550px;"><span class="txtNameSymptoms" id="txtNameSymptoms' + $(this).find("CODE").text() + '">' + $(this).find("NAME").text() + '</span></td>';

                    rowcol += '<td style="display:none;"><input type="hidden" style="margin-top: 17px;" class="form-control hdnQuestionlevelSymptoms"  id="hdnQuestionlevelSymptoms" value="' + $(this).find("QUESTION_LEVEL").text() + '" /></td>';
                    if ($(this).find("RESULT_TYPE").text() == '1') {
                        rowcol += '<td ><input type="text" id="txtresultTypeBindSymptoms' + $(this).find("QUESTION_CODE").text() + '" class="form-control txtresultTypeBindSymptoms"/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '2') {
                        rowcol += '<td><input type="button" id="btnYesSymptomsGrv' + $(this).find("QUESTION_CODE").text() + '" class="form-control btnYesSymptomsGrv" style="background-color:#3c8dbc;color:white;margin-top: 22px;" onclick="ChangeSymptomsTxtNo(' + $(this).find("QUESTION_CODE").text() + ')" value="Yes" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '3') {
                        rowcol += '<td><input type="button" id="btnPositiveBindSymptomsGrv' + $(this).find("QUESTION_CODE").text() + '" class="form-control buttonGrv btnPositiveBindSymptomsGrv" style="background-color:#3c8dbc;color:white;" onclick="ChangeSymptomsTxtNegative(' + $(this).find("QUESTION_CODE").text() + ')" value="Positive" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '4') {
                        rowcol += '<td><input type="text" id="txtresultTypeBindSymptoms' + $(this).find("QUESTION_CODE").text() + '" class="form-control txtresultTypeBindSymptoms"/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '5') {
                        rowcol += '<td><select id="ddldivSymptoms' + $(this).find("QUESTION_CODE").text() + '" class="form-control ddldivSymptoms"><option>--Select--</option></select></td>';

                    }

                    rowcol += '<td><i style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Speech to text" class="fa fa-microphone"></i>&nbsp;&nbsp;<i  style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Ink to Text"  class="fa fa-pencil" aria-hidden="true"></i>&nbsp;&nbsp;<i data-toggle="tooltip" title="Maximize" style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" class="fa fa-window-maximize" aria-hidden="true"></i><textarea rows="4" class="form-control txtSymptomsRemarks" id="txtSymptomsRemarks' + $(this).find("QUESTION_CODE").text() + '" style="height:35px;" cols="50"></textarea></td>';

                    table.append(rowcol);
                    count += 1;
                }); //each end here
                $("#divSymptoms").html(table);
                var _table = $('#divSymptoms table'); //                        
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


    BindPhysicalExaminationPerformaOption1 = function() {
        //alert(_code);

        var _QuestionPhysicalExaminationGroupCode = $(this).find('.hdnQuestioncodePhysicalExaminationGroupCode').val();
        var _QuestionCodePhysicalExamination = $(this).find('.txtCodePhysicalExamination').val();
        var _QuestionNamePhysicalExamination = $(this).find('.txtNamePhysicalExamination').val();
        var _ResultTypePhysicalExamination = $(this).find('.txtresultTypePhysicalExamination').val();
        var _ResultPhysicalExamination = $(this).find('.ddlPhysicalExamination').val();
        var _RemarksPhysicalExamination = $(this).find('.txtPhysicalExaminationRemarks').val();
        var chkPrintPE = $(this).find('input:checkbox[id="chkPhysicalExamination"]');
        if ((chkPrintPE).is(':checked')) {
            _IsPrintPEval = 1;
        }
        else {
            _IsPrintPEval = 0;
        }


        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/BindPhysicalExamination',
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
                var table = $('<table id="tbldivPhysicalExamination' + $(this).find("CODE").text() + '" style="font-family:Calibri;" class="table table-bordered table-hover mt-2" ></table>');
                var row = '';
                var count = 0;
                $.each(items, function(index) {
                    if (parseInt(count) == 0) {
                        var rowheader = '<thead><tr>';
                        rowheader += '<th>Question</th>';
                        rowheader += '<th>Result</th>';
                        rowheader += '<th>Remarks</th>';

                        rowheader += '</tr></thead>';
                        table.append(rowheader);
                    }
                    var rowcol = '';
                    rowcol += '<tbody><tr>';


                    rowcol += '<td style="display:none;"><input type="hidden" class="form-control hdnQuestioncodePhysicalExaminationGroupCode"  id="hdnQuestioncodePhysicalExaminationGroupCode" value="' + $(this).find("CODE").text() + '" /></td>';
                    rowcol += '<td style="display:none;"><input type="hidden" id="hdnResultTypePE1" class="hdnResultTypePE1" value="' + $(this).find("RESULT_TYPE").text() + '" /><input type="hidden" id="txtCodePhysicalExamination" class="txtCodePhysicalExamination" value="' + $(this).find("QUESTION").text() + '" /></td>';

                    rowcol += '<td style="display:none;"><input type="text" style="margin-top: 17px;" disabled class="form-control txtNamePhysicalExamination"  id="txtNamePhysicalExamination" value="' + $(this).find("NAME").text() + '" /></td>';
                    rowcol += '<td style="padding-top:35px;"><span class="txtNamePhysicalExamination" id="txtNamePhysicalExamination' + $(this).find("CODE").text() + '">' + $(this).find("NAME").text() + '</span></td>';

                    rowcol += '<td style="display:none;"><input type="hidden" style="margin-top: 17px;" class="form-control hdnQuestionlevelPhysicalExamination"  id="hdnQuestionlevelPhysicalExamination" value="' + $(this).find("QUESTION_LEVEL").text() + '" /></td>';
                    if ($(this).find("RESULT_TYPE").text() == '1') {
                        rowcol += '<td><input type="text" style="margin-top: 17px;" id="txtresultTypePhysicalExamination' + $(this).find("CODE").text() + '" class="form-control txtresultTypePhysicalExamination"/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '2') {
                        rowcol += '<td><input type="button" id="btnYesPhysicalExaminationGrv' + $(this).find("CODE").text() + '" class="buttonGrv btnYesPhysicalExaminationGrv" style="width:100px;background-color:#3c8dbc;color:white;" onclick="ChangetreatmentTxtNo(' + $(this).find("CODE").text() + ')" value="Yes" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '3') {
                        rowcol += '<td><input type="button" id="btnPositivePhysicalExaminationGrv' + $(this).find("CODE").text() + '" class="buttonGrv btnPositivePhysicalExaminationGrv" style="width:100px;background-color:#3c8dbc;color:white;" onclick="ChangetreatmentTxtNegative(' + $(this).find("CODE").text() + ')" value="Positive" /></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '4') {
                        rowcol += '<td><input type="text" style="margin-top: 17px;" id="txtresultTypePhysicalExamination' + $(this).find("CODE").text() + '" class="form-control txtresultTypePhysicalExamination"/></td>';

                    }
                    else if ($(this).find("RESULT_TYPE").text() == '5') {
                        rowcol += '<td><select id="ddlPhysicalExamination' + $(this).find("CODE").text() + '" class="form-control ddlPhysicalExamination"><option>--Select--</option></select></td>';

                    }

                    rowcol += '<td><i style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Speech to text" class="fa fa-microphone"></i>&nbsp;&nbsp;<i  style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" data-toggle="tooltip" title="Ink to Text"  class="fa fa-pencil" aria-hidden="true"></i>&nbsp;&nbsp;<i data-toggle="tooltip" title="Maximize" style="color:black;font-size:12px;cursor:pointer;float:right; margin:3px;" class="fa fa-window-maximize" aria-hidden="true"></i><textarea rows="4" class="form-control txtPhysicalExaminationRemarks" id="txtPhysicalExaminationRemarks' + $(this).find("CODE").text() + '" style="height:35px; cols="50"></textarea></td>';

                    table.append(rowcol);
                    count += 1;
                }); //each end here
                $("#divPhysicalExamination").html(table);
                //                  var _table = $('#divPhysicalExamination table'); //                        
                //                  bind_filterevent(_table);
                //                  paginateIt(_table, 10);
                //                  visibility_paging(_table);


            },
            failure: function(response) {
                alert('Failed during fetching record');
            },
            error: function(response) {
                alert('Error during fetching record ');
            }

        }); //post data end here

    } //function end here......


    //start here bind performaquestion
    BindPerformaQuestion = function() {

        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/BindSchizophreniaQuestionPerforma',
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
                var strHTML = '<div id="accordion">';
                $.each(items, function(index) {
                    var _newHTMLVals = BindPerformaQuestionOption($(this).find("CODE").text());

                    strHTML += '<h5 style="font-weight: bold; font-size: 10px; overflow: auto" onclick="BindPerformaQuestionOption(' + $(this).find("CODE").text() + ')" >' + $(this).find("NAME").text() + '</h5><div id="divQuestion' + $(this).find("CODE").text() + '" style="max-height: 400px; overflow-y: auto">' + _newHTMLVals + '</div>';


                });
                strHTML += '</div>';

                $("#divSchizophreniaDetail").html(strHTML);


            },
            failure: function(response) {
                alert('Failed during fetching record');
            },
            error: function(response) {
                alert('Error during fetching record ');
            }

        }); //post data end here

    } //end here

    BindPerformaQuestionUpdate = function() {

        $("#divSchizophreniaDetail").html('');
        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/BindSchizophreniaQuestionPerforma',
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
                var strHTML = '<div id="accordion">';
                $.each(items, function(index) {
                    var _newHTMLVals = BindPerformaQuestionOptionUpdate($(this).find("CODE").text());

                    strHTML += '<h5 style="font-weight: bold; font-size: 10px; overflow: auto" onclick="BindPerformaQuestionOptionUpdate(' + $(this).find("CODE").text() + ')" >' + $(this).find("NAME").text() + '</h5><div id="divQuestion' + $(this).find("CODE").text() + '" style="max-height: 400px; overflow-y: auto">' + _newHTMLVals + '</div>';


                });
                strHTML += '</div>';

                $("#divSchizophreniaDetail").html(strHTML);
                var icons = {
                    header: "ui-icon-circle-arrow-e",
                    activeHeader: "ui-icon-circle-arrow-s"
                };

                $("#accordion").accordion({
                    collapsible: true,
                    icons: icons,
                    active: false
                });


            },
            failure: function(response) {
                alert('Failed during fetching record');
            },
            error: function(response) {
                alert('Error during fetching record ');
            }

        }); //post data end here

    } //end here





    BindManagementPlan = function() {

        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/BindQuestionManagementPlan',
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            cache: false,
            async: false,
            // data: "",

            success: function(response) {
                //alert(response.d);
                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);
                var items = xml.find("Table");
                var strHTML = '<div id="accordionManagementPlan">';
                $.each(items, function(index) {

                    var _newHTMLVals = BindManagementPlanPerformaOption($(this).find("CODE").text());

                    strHTML += '<h5 style="font-weight: bold; font-size: 10px; overflow: auto" onclick="BindManagementPlanPerformaOption(' + $(this).find("CODE").text() + ')" >' + $(this).find("QUESTION").text() + '</h5><div id="divQuestionManagementPlan' + $(this).find("CODE").text() + '" style="max-height: 400px;  overflow-y: auto">' + _newHTMLVals + '</div>';
                });
                strHTML += '</div>';

                $("#divManagementPlan").html(strHTML);
                var iconsMPLAN = {
                    header: "ui-icon-circle-arrow-e",
                    activeHeader: "ui-icon-circle-arrow-s"
                };
                $("#accordionManagementPlan").accordion({
                    collapsible: true,
                    icons: iconsMPLAN,
                    active: false
                });
                //alert(strHTML);
            },
            failure: function(response) {
                alert('Failed during fetching record');
            },
            error: function(response) {
                alert('Error during fetching record ');
            }

        }); //post data end here

    } //end here

    BindManagementPlanUpdate = function() {
        //alert('hello');
        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/BindQuestionManagementPlan',
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
                var strHTML = '<div id="accordionManagementPlan">';
                $.each(items, function(index) {

                    var _newHTMLVals = BindManagementPlanPerformaOptionUpdate($(this).find("CODE").text());

                    strHTML += '<h5 style="font-weight: bold; font-size: 10px; overflow: auto" onclick="BindManagementPlanPerformaOptionUpdate(' + $(this).find("CODE").text() + ')" >' + $(this).find("QUESTION").text() + '</h5><div id="divQuestionManagementPlan' + $(this).find("CODE").text() + '" style="max-height: 400px; overflow-y: auto">' + _newHTMLVals + '</div>';
                });
                strHTML += '</div>';

                $("#divManagementPlan").html(strHTML);
                var iconsMPLAN = {
                    header: "ui-icon-circle-arrow-e",
                    activeHeader: "ui-icon-circle-arrow-s"
                };
                $("#accordionManagementPlan").accordion({
                    collapsible: true,
                    icons: iconsMPLAN,
                    active: false
                });
                //alert(strHTML);
            },
            failure: function(response) {
                alert('Failed during fetching record');
            },
            error: function(response) {
                alert('Error during fetching record ');
            }

        }); //post data end here

    } //end herefdisease


    BindICDName = function() {
        //alert("hello");
        // $('#divProvisionalDiagnosis').html("<table class='table table-bordered table-hover tblProvisionalDiagnosis' style='display:' id='tblProvisionalDiagnosis'><thead style='font-size: 14px;'><tr><th style='white-space: nowrap'>ICD Code</th><th style='white-space: nowrap'>Disease Name</th><th style='white-space: nowrap'>ICD Name</th><th style='white-space: nowrap'>Since</th><th style='white-space: nowrap'>Unit</th><th style='white-space: nowrap'>From Birth</th><th style='white-space: nowrap'>Remarks</th><th style='white-space: nowrap'>Current Status</th><th style='white-space: nowrap'>Start Date</th><th style='white-space: nowrap'>End Date</th><th>Follow Up</th><th style='white-space: nowrap'>Action</th></tr></thead><tbody><tr style='height: 40px;' id='tr1'><td><input type='text' class='form-control txtCodeProvisionalDiagnosis' style='width: 100px;' id='txtCodeProvisionalDiagnosis'></td><td><select class='form-control ddlDiseaseName' style='width: 300px;' id='ddlDiseaseName'><option value='0'>--Select--</select></td><td><input type='text' class='form-control txtNameProvisionalDiagnosis' style='width: 300px;' id='txtNameProvisionalDiagnosis'></td><td><input type='text' class='form-control txtSince' style='width: 80px;'id='txtSince'/></td><td><select class='form-control ddlUnit' style=' width: 150px;'id='ddlUnit'><option value='0'>--Select--</option></select></td><td><input type='checkbox' class='form-control chkProvisional'  id='chkProvisional' name='chkProvisional'/></td><td><input type='text' class='form-control txt_ProvisionalRemarks' style='width: 150px;'id='txt_ProvisionalRemarks'/></td><td><select class='form-control txt_ProvisionalCurrentStatus' style='width: 150px;'id='txt_ProvisionalCurrentStatus'><option value='0'>--Select--</option><option value='1'>Cured</option><option value='2'>Ongoing</option><option value='3'>Partially Treated</option><option value='4'>Improved</option></select></td><td><input type='text' class='form-control txt_ProvisionalStartDate' style='width: 150px;'id='txt_ProvisionalStartDate'/></td><td><input type='text' class='form-control txt_ProvisionalEndDate' style='width: 150px;'id='txt_ProvisionalEndDate'/></td><td><input type='checkbox' class='form-control chk_ProvisionalFollowUp'id='chk_ProvisionalFollowUp' name='chk_ProvisionalFollowUp' /></td><td style='white-space: nowrap; width: 200px;'><button type='button' id='btnPlus_Provisional' style='' onclick='AddRowDocument_Provisional(1);'class='btn btn-primary'><i class='fa fa-plus' aria-hidden='true'></i></button>&nbsp;<button type='button' id='btnDelete_Provisional' onclick='DeleteRow_Provisional(1)' class='btn btn-danger'><i class='fa fa-trash fa-lg' aria-hidden='true'></i></button></td></tr></tbody></table>");
        $('#divProvisionalDiagnosis').html("<table class='table table-bordered table-hover tblProvisionalDiagnosis' style='display:' id='tblProvisionalDiagnosis'><thead style='font-size: 14px;'><tr><th style='white-space: nowrap'>ICD Code</th><th style='white-space: nowrap'>Disease Name</th><th style='white-space: nowrap'>ICD Name</th><th style='white-space: nowrap'>Since</th><th style='white-space: nowrap'>Unit</th><th style='white-space: nowrap'>From Birth</th><th style='white-space: nowrap'>Remarks</th><th style='white-space: nowrap'>Current Status</th><th style='white-space: nowrap'>Start Date</th><th style='white-space: nowrap'>End Date</th><th>Follow Up</th><th style='white-space: nowrap'>Action</th></tr></thead><tbody><tr style='height: 40px;' id='tr1'><td><select class='form-control txtCodeProvisionalDiagnosis' style='width: 100px;' id='txtCodeProvisionalDiagnosis'><option value='0'>--Select--</select></td><td><select class='form-control ddlDiseaseName' style='width: 300px;' id='ddlDiseaseName'><option value='0'>--Select--</select></td><td><select class='form-control txtNameProvisionalDiagnosis' style='width: 300px;' id='txtNameProvisionalDiagnosis'><option value='0'>--Select--</select></td><td><input type='text' class='form-control txtSince' style='width: 80px;'id='txtSince'/></td><td><select class='form-control ddlUnit' style=' width: 150px;'id='ddlUnit'><option value='0'>--Select--</option></select></td><td><input type='checkbox' class='form-control chkProvisional'  id='chkProvisional' name='chkProvisional'/></td><td><input type='text' class='form-control txt_ProvisionalRemarks' style='width: 150px;'id='txt_ProvisionalRemarks'/></td><td><select class='form-control txt_ProvisionalCurrentStatus' style='width: 150px;'id='txt_ProvisionalCurrentStatus'><option value='0'>--Select--</option><option value='1'>Cured</option><option value='2'>Ongoing</option><option value='3'>Partially Treated</option><option value='4'>Improved</option></select></td><td><input type='text' class='form-control txt_ProvisionalStartDate' style='width: 150px;'id='txt_ProvisionalStartDate'/></td><td><input type='text' class='form-control txt_ProvisionalEndDate' style='width: 150px;'id='txt_ProvisionalEndDate'/></td><td><input type='checkbox' class='form-control chk_ProvisionalFollowUp'id='chk_ProvisionalFollowUp' name='chk_ProvisionalFollowUp' /></td><td style='white-space: nowrap; width: 200px;'><button type='button' id='btnPlus_Provisional' style='' onclick='AddRowDocument_Provisional(1);'class='btn btn-primary'><i class='fa fa-plus' aria-hidden='true'></i></button>&nbsp;<button type='button' id='btnDelete_Provisional' onclick='DeleteRow_Provisional(1)' class='btn btn-danger'><i class='fa fa-trash fa-lg' aria-hidden='true'></i></button></td></tr></tbody></table>");
        BindICDCODE(1);
        BindUnitRecord(1);
        BindDiseases(1);


    }  // BIND FUNCTION ENDING

    BindDiseases = function() {
        //debugger;


        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/GetDiseaseMasterRecord',
            async: false,
            cache: true,
            data: "",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            beforeSend: function() {
            },
            success: function(response) {
                //alert(response.d);
                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);
                var items = xml.find("Table");
                var ctr = 1;
                $.each(items, function(index) {

                    $(".ddlDiseaseName").append($("<option></option>").val($(this).find("CODE").text()).html($(this).find("NAME").text()));

                    ctr++;

                });
            },
            failure: function(response) {
                alert('Loading Failed');
            },
            error: function(response) {
                alert('Error');
            }

        });

    } //END HERE

    BindICDCODE = function() {
        //debugger;


        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/GetICDCODERecord',
            async: false,
            cache: true,
            data: "",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            beforeSend: function() {
            },
            success: function(response) {
                //alert(response.d);
                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);
                var items = xml.find("Table");
                var ctr = 1;
                $.each(items, function(index) {

                    $(".txtCodeProvisionalDiagnosis").append($("<option ></option>").val($(this).find("ICDCode").text()).html($(this).find("ICDCode").text()));
                    $(".txtNameProvisionalDiagnosis").append($("<option></option>").val($(this).find("ICDCode").text()).html($(this).find("ICDName").text()));

                    ctr++;

                });
            },
            failure: function(response) {
                alert('Loading Failed');
            },
            error: function(response) {
                alert('Error');
            }

        });

    } //END HERE



    BindUnitRecord = function() {

        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/GetUnitMasterRecord',
            async: false,
            cache: true,
            data: "",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            beforeSend: function() {
            },
            success: function(response) {
                //alert(response.d);
                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);
                var items = xml.find("Table");
                var ctr = 1;
                $.each(items, function(index) {

                    $(".ddlUnit").append($("<option></option>").val($(this).find("CODE").text()).html($(this).find("NAME").text()));

                    ctr++;

                });
            },
            failure: function(response) {
                alert('Loading Failed');
            },
            error: function(response) {
                alert('Error');
            }

        });

    } //END HERE

    BindDoctorMaster = function() {
        //alert('BindFromBirth');
        //debugger;

        $("#ddlDoctor").empty("");
        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/GetDoctorCode',
            async: false,
            cache: true,
            data: "",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            beforeSend: function() {
            },
            success: function(response) {
                //alert(response.d);
                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);
                var items = xml.find("Table");
                $("#ddlDoctor").removeAttr("disabled");
                $("#ddlDoctor").append($("<option></option>").val("0").html("Select Doctor"));
                $.each(items, function(index) {

                    $("#ddlDoctor").append($("<option></option>").val($(this).find("CODE").text()).html($(this).find("NAME").text()));
                });
            },
            failure: function(response) {
                alert('Bind Doctor Code Failed');
            },
            error: function(response) {
                alert('Bind Doctor Code Error');
            }
        });
    }  // BIND FUNCTION ENDING

    BindPersonalHistory = function() {
        //alert('HELLO');
        debugger;

        $("#ddlPersonalHistory74").empty("");
        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/GetPersonalHistory',
            async: false,
            cache: true,

            data: "{'CODE':'" + $("#hdncode").val() + "'}",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            beforeSend: function() {
            },
            success: function(response) {
                //alert(response.d);
                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);
                var items = xml.find("Table");
                $("#ddlPersonalHistory74").removeAttr("disabled");
                $("#ddlPersonalHistory74").append($("<option></option>").val("0").html("--Select Result type --"));
                $.each(items, function(index) {

                    $("#ddlPersonalHistory74").append($("<option></option>").val($(this).find("QUESTIONNAME").text()).html($(this).find("QUESTIONNAME").text()));
                });
            },
            failure: function(response) {
                alert('Bind Personal History Failed');
            },
            error: function(response) {
                alert('Bind Personal History Error');
            }
        });
    }  // BIND FUNCTION ENDING


    BindPersonalHistory1 = function() {
        //  alert('HELLO');
        //debugger;

        $("#ddlPersonalHistory75").empty("");
        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/GetPersonalHistory1',
            async: false,
            cache: true,

            data: "{'CODE':'" + $("#hdncode").val() + "'}",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            beforeSend: function() {
            },
            success: function(response) {
                //alert(response.d);
                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);
                var items = xml.find("Table");
                $("#ddlPersonalHistory75").removeAttr("disabled");
                $("#ddlPersonalHistory75").append($("<option></option>").val("0").html("--Select Result type --"));
                $.each(items, function(index) {

                    $("#ddlPersonalHistory75").append($("<option></option>").val($(this).find("QUESTIONNAME").text()).html($(this).find("QUESTIONNAME").text()));
                });
            },
            failure: function(response) {
                alert('Bind Personal History Failed');
            },
            error: function(response) {
                alert('Bind Personal History Error');
            }
        });
    }  // BIND FUNCTION ENDING



    BindPersonalHistory2 = function() {
        //  alert('HELLO');
        //debugger;

        $("#ddlPersonalHistory76").empty("");
        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/GetPersonalHistory2',
            async: false,
            cache: true,

            data: "{'CODE':'" + $("#hdncode").val() + "'}",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            beforeSend: function() {
            },
            success: function(response) {
                //alert(response.d);
                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);
                var items = xml.find("Table");
                $("#ddlPersonalHistory76").removeAttr("disabled");
                $("#ddlPersonalHistory76").append($("<option></option>").val("0").html("--Select Result type --"));
                $.each(items, function(index) {

                    $("#ddlPersonalHistory76").append($("<option></option>").val($(this).find("QUESTIONNAME").text()).html($(this).find("QUESTIONNAME").text()));
                });
            },
            failure: function(response) {
                alert('Bind Personal History Failed');
            },
            error: function(response) {
                alert('Bind Personal History Error');
            }
        });
    }  // BIND FUNCTION ENDING


    BindPersonalHistory3 = function() {
        //  alert('HELLO');
        //debugger;

        $("#ddlPersonalHistory77").empty("");
        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/GetPersonalHistory3',
            async: false,
            cache: true,

            data: "{'CODE':'" + $("#hdncode").val() + "'}",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            beforeSend: function() {
            },
            success: function(response) {
                //alert(response.d);
                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);
                var items = xml.find("Table");
                $("#ddlPersonalHistory77").removeAttr("disabled");
                $("#ddlPersonalHistory77").append($("<option></option>").val("0").html("--Select Result type --"));
                $.each(items, function(index) {

                    $("#ddlPersonalHistory77").append($("<option></option>").val($(this).find("QUESTIONNAME").text()).html($(this).find("QUESTIONNAME").text()));
                });
            },
            failure: function(response) {
                alert('Bind Personal History Failed');
            },
            error: function(response) {
                alert('Bind Personal History Error');
            }
        });
    }  // BIND FUNCTION ENDING





    AddRowDocument = function(_trid) {
        var _btnAdd = "#btnPlusDocument" + _trid;
        var _newTrid = parseInt(_trid) + 1;
        // $(_btnAdd).css('display','none');
        var Ftrid = "<tr id='Td" + _newTrid + "'><td><input type='text' class='form-control clsFileName' id='txtFileName" + _newTrid + "' placeholder='File Name'  /></td>\
           <td><a href='#' id='a" + _newTrid + "' target='_blank' class='documentLink'></a><input type='file' class='btn btn-primary FileUpload' id='File" + _newTrid + "' /></td>\
           <td><button type='button' id='btnDeleteDocument' onclick='DeleteRowDocument(" + _newTrid + ")' class='btn btn-danger'><i class='fa fa-trash fa-lg' aria-hidden='true'></i></button>&nbsp;\
            <button type='button' id='btnPlusDocument" + _newTrid + "' style='margin-top: 3px;' onclick='AddRowDocument(" + _newTrid + ");' class='btn btn-primary btnclsPlusDocument'><i class='fa fa-plus ' aria-hidden='true'></i></button></td></tr>";
        $(".tblDocumentUpload tbody").append(Ftrid);
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


    AddRowDocument_Provisional = function(_trid) {
        //alert(_trid);
        var _btnAdd = "#btnPlus_Provisional" + _trid;

        var _newTrid = parseInt(_trid) + 1;


        //var Ftrid = "<tr id='Td" + _newTrid + "'><td><input type='text' class='form-control txtCodeProvisionalDiagnosis'  id='txtCodeProvisionalDiagnosis" + _trid + "'></td><td><select class='form-control ddlDiseaseName' id='ddlDiseaseName" + _trid + "' onchange=(" + $(".ddlDiseaseName").val() + ")><option value='0'>--Select--</option></select></td><td><input type='text' class='form-control txtNameProvisionalDiagnosis'  id='txtNameProvisionalDiagnosis" + _trid + "'></td><td><input type='text' class='form-control txtSince' style='width:80px;' id='txtSince'></td><td><select style='width:150px;' id='ddlUnit' class='form-control ddlUnit'><option value='0'>--Select--</option></select></td><td><input type='checkbox' id='chkProvisional'  name='chkProvisional' class='from-control chkProvisional ml-4'></td><td><input type='text' id='txt_ProvisionalRemarks' class='form-control txt_ProvisionalRemarks'></td><td><select id='txt_ProvisionalCurrentStatus' class='form-control txt_ProvisionalCurrentStatus'><option value='0'>--Select--</option><option value='1'>Cured</option><option value='2'>Ongoing</option><option value='3'>Partially Treated</option><option value='4'>Improved</option></select></td><td><input type='text' id='txt_ProvisionalStartDate' class='form-control txt_ProvisionalStartDate hasDatepicker' ></td><td><input type='text' id='txt_ProvisionalEndDate' class='form-control txt_ProvisionalEndDate hasDatepicker' ></td><td><input type='checkbox' id='chk_ProvisionalFollowUp' name='chk_ProvisionalFollowUp' class='form-control chk_ProvisionalFollowUp'></td><td style='width:200px;'><button type='button' id='btnPlus_Provisional' onclick='AddRowDocument_Provisional(" + _newTrid + ")' class='btn btn-primary'><i class='fa fa-plus fa-lg' aria-hidden='true'></i></button>&nbsp;<button type='button' id='btnDelete_Provisional' onclick='DeleteRow_Provisional(" + _newTrid + ")' class='btn btn-danger'><i class='fa fa-trash fa-lg' aria-hidden='true'></i></button></td></tr>";
        var Ftrid = "<tr id='Td" + _newTrid + "'><td><select class='form-control txtCodeProvisionalDiagnosis'  id='txtCodeProvisionalDiagnosis" + _newTrid + "'><option value='0'>--Select--</option></select></td><td><select onchange='myFunction_disease(" + _newTrid + ")' class='form-control ddlDiseaseName' id='ddlDiseaseName" + _newTrid + "'><option value='0'>--Select--</option></select></td><td><select class='form-control txtNameProvisionalDiagnosis'  id='txtNameProvisionalDiagnosis" + _newTrid + "'><option value='0'>--Select--</option></select></td><td><input type='text' class='form-control txtSince' style='width:80px;' id='txtSince" + _newTrid + "'></td><td><select style='width:150px;' id='ddlUnit" + _newTrid + "' class='form-control ddlUnit'><option value='0'>--Select--</option></select></td><td><input type='checkbox' id='chkProvisional" + _newTrid + "'  name='chkProvisional' class='from-control chkProvisional ml-4'></td><td><input type='text' id='txt_ProvisionalRemarks" + _newTrid + "' class='form-control txt_ProvisionalRemarks'></td><td><select id='txt_ProvisionalCurrentStatus" + _newTrid + "' class='form-control txt_ProvisionalCurrentStatus'><option value='0'>--Select--</option><option value='1'>Cured</option><option value='2'>Ongoing</option><option value='3'>Partially Treated</option><option value='4'>Improved</option></select></td><td><input type='text' id='txt_ProvisionalStartDate" + _newTrid + "' class='form-control txt_ProvisionalStartDate' onclick='ShowStartDate_provisional(" + _newTrid + ");'></td><td><input type='text' id='txt_ProvisionalEndDate" + _newTrid + "' class='form-control txt_ProvisionalEndDate' onclick='ShowEndDate_provisional(" + _newTrid + ");'></td><td><input type='checkbox' id='chk_ProvisionalFollowUp" + _newTrid + "' name='chk_ProvisionalFollowUp' class='form-control chk_ProvisionalFollowUp'></td><td style='white-space: nowrap; width: 200px;'><button type='button' id='btnPlus_Provisional'  onclick='AddRowDocument_Provisional(" + _newTrid + ")' class='btn btn-primary'><i class='fa fa-plus' aria-hidden='true'></i></button>&nbsp;<button type='button' id='btnDelete_Provisional' onclick='DeleteRow_Provisional(" + _newTrid + ")' class='btn btn-danger'><i class='fa fa-trash fa-lg' aria-hidden='true'></i></button></td></tr>";


        $("#divProvisionalDiagnosis tbody").append(Ftrid);
        BindUnitRecord();
        BindDiseases();
        BindICDCODE();


    }

    ShowStartDate_provisional = function(_trid) {
        //alert("hello");
        debugger;
        var _newTrid = parseInt(_trid) + 1;
        $("#txt_ProvisionalStartDate" + _trid).datepicker({ dateFormat: 'dd/mm/yy' });


    }
    ShowEndDate_provisional = function(_trid) {
        //alert("hello");
        var _newTrid = parseInt(_trid) + 1;
        $("#txt_ProvisionalEndDate" + _trid).datepicker({ dateFormat: 'dd/mm/yy' });
    }




    DeleteRow_Provisional = function(_trid) {
        if (_trid == 1) {
            $("#btnDeleteDocument").css("disabled", "disabled");
        }

        else {
            var _deltrId = "#Td" + _trid;

            $(_deltrId).remove().delay(3200).fadeOut(300);
        }
    }


    BindCurrentDate = function() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var today = dd + '/' + mm + '/' + yyyy;
        //$("#txtDateOfBirth").val();
        $("#txtDate").val(today);


    } //Bind end here

    FileUploadFunction = function(_ID) {
        //alert('hello');

        //debugger;
        var fileUpload = $("#FileUpload1").get(0);
        var files = fileUpload.files;

        var data = new FormData();
        for (var i = 0; i < files.length; i++) {
            data.append(files[i].name, files[i]);
        }

        $.ajax({
            url: "FileUploadHandler.ashx?CODE=" + _ID + "",
            type: "POST",
            data: data,
            contentType: false,
            processData: false,
            success: function(result) { },
            error: function(err) {
                //alert(err.statusText)  
            }
        });

        //evt.preventDefault();
    }
    FileBrowserImage = function() {
        debugger;
        //alert("hello");

        var fileUpload = $("#FileBrowser").get(0);
        var files = fileUpload.files;

        var data = new FormData();
        for (var i = 0; i < files.length; i++) {
            data.append(files[i].name, files[i]);
        }

        $.ajax({
            url: "BrowserImage.ashx",
            type: "POST",
            data: data,
            contentType: false,
            processData: false,
            success: function(result) { },
            error: function(err) {
                //alert(err.statusText)  
            }
        });

        //evt.preventDefault();
    }

    DocumentSaveFunction = function(_ID) {

        var lastId = $('#tblDocumentId tr:last').attr('id');
        var _last_id = lastId.substring(2, 3);

        for (var j = 1; j <= _last_id; j++) {
            var name = $("#txtFileName" + j).val();
            if (name == undefined) {
                continue;
            }
            var fileUpload1 = $("#File" + j).get(0);

            var files1 = fileUpload1.files;
            var data = new FormData();

            for (var i = 0; i < files1.length; i++) {
                data.append(files1[i].name, files1[i]);
            }
            $.ajax({
                url: "SaveDocument.ashx?ID=" + _ID + "&Name=" + name,
                type: "POST",
                data: data,
                contentType: false,
                processData: false,
                success: function(result) { },
                error: function(err) {
                    //alert(err.statusText)  
                }
            });
        }
    }  // DOCUMENT UPLOAD FUNCTION ENDING

    UpdateDocuments = function(_ID) {
        debugger;
        //  deleteSelectedRecord(_ID);
        if (counterDocuments > 0) {
            var lastId = $('#tblDocumentId_Update tr:last').attr('id');
        }
        else {
            var lastId = $('#tblDocumentId tr:last').attr('id');
        }

        var _last_id = lastId.substring(2, 3);

        if (_last_id == 0) {
            var lastId = $('#tblDocumentId tr:last').attr('id');
            var _last_id = lastId.substring(2, 3);
        }
        for (var j = 1; j <= _last_id; j++) {
            var name = $("#txtFileName" + j).val();
            if (name == undefined) {
                continue;
            }
            var serialnumber = $("#txtSerialnumber" + j).val();
            if (serialnumber == undefined) {
                continue;
            }
            var fileUpload1 = $("#File" + j).get(0);
            var files1 = fileUpload1.files;
            if (files1.length == 0) {
                files1 = $("#a" + j).attr("href").substring(10);
                //            if(files1!="")
                //            {
                //                saveUpdateDocuments(_ID,name,files1);
                //            }
            }
            var data = new FormData();

            for (var i = 0; i < files1.length; i++) {
                data.append(files1[i].name, files1[i]);
            }
            for (var i = 0; i < files1.length; i++) {
                data.append(files1[i].serialnumber, files1[i]);
            }

            $.ajax({
                url: "UpdateDocument.ashx?ID=" + _ID + "&Name=" + name + "&files=" + files1 + "&Serialnumber=" + serialnumber,
                type: "POST",
                data: data,
                contentType: false,
                processData: false,
                success: function(result) { },
                error: function(err) {
                    //alert(err.statusText)  
                }
            });
        }
    }  // DOCUMENT UPLOAD FUNCTION ENDING


    BindDocumentsDetails = function() {
        //alert("hello");
        //debugger;

        var _code = $("#txtCode").val();

        $.ajax({
            type: 'POST',
            url: 'SchizophreniaPerforma.aspx/GetSchizophreniaDocuments',
            async: false,
            cache: true,
            data: "{'SCHIZOPHRENIA_NO':'" + _code + "'}",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            beforeSend: function() {
            },
            success: function(response) {
                //alert(response.d);
                var xmlDoc = $.parseXML(response.d);
                var xml = $(xmlDoc);


                var items = xml.find("Table");
                var table = $('<table id="tblDocumentId_Update" style="font-family:Calibri;" class="table table-bordered table-hover mt-2 tblDocumentUpload" ></table>');
                var row = '';
                var count = 0;
                $.each(items, function(index) {

                    if (parseInt(count) == 0) {
                        var rowheader = '<thead><tr>';
                        // rowheader += '<th>S.no</th>';
                        rowheader += '<th>File Name</th>';
                        rowheader += '<th>Upload</th>';
                        rowheader += '<th>Action</th>';
                        rowheader += '</tr></thead>';
                        table.append(rowheader);
                    }
                    var rowcol = '';
                    rowcol += '<tbody><tr>';
                    var _new = count + 1;
                    var _DOCID = $(this).find('DOC_ID').text();
                    //alert(_DOCID);
                    rowcol += "<tbody><tr id='Td" + _new + "'>";
                    rowcol += "<td style='display:none;'><input type='text' disabled class='form-control clsSerialnumber' id='txtSerialnumber" + _new + "' placeholder='S.no' value='" + $(this).find('DOC_ID').text() + "' /></td>";
                    rowcol += "<td><input type='text' class='form-control clsFileName' id='txtFileName" + _new + "' placeholder='File Name' value='" + $(this).find('DOCUMENT_NAME').text() + "' /></td>";
                    rowcol += "<td><input type='file' class='btn btn-primary FileUpload' id='File" + _new + "' /><a href='Images/" + $(this).find("DOCUMENT_URL").text() + "' id='a" + _new + "' class='documentLink' target='_blank'>" + $(this).find("DOCUMENT_URL").text() + "</a></td>";
                    rowcol += "<td> <button type='button' id='btnDeleteDocument' onclick='DeleteRowDocument(" + _new + ")' class='btn btn-danger'><i class='fa fa-trash fa-lg' aria-hidden='true'></i></button>&nbsp;&nbsp;\
                                   <button type='button' onclick='AddRowDocument(" + _new + ")'  class='btn btn-primary btnPlusDocumentEnquiry'><i class='fa fa-plus' aria-hidden='true'></i></button></td>";
                    rowcol += "</tr></tbody>";
                    //rowcol += '</tr>';

                    table.append(rowcol);

                    count += 1;
                }); //each end here
                counterDocuments = count;

                if (parseInt(count) > 0) {
                    $('#tblDocumentId').css('display', 'none');
                }
                $('#grdDocumentDetail').html(table);
                var _table = $('#grdDocumentDetail table');
            },
            failure: function(response) {
                alert('Bind Provisional Diganosis Failed');
            },
            error: function(response) {
                alert('Bind Provisional Diganosis Error');
            }
        });
    }  // BIND FUNCTION ENDING

    BindImageLocation = function() {
        $("#imgTest").attr("src", $("#txtImagingList").val());
    }

    ClearFunction = function() {
        $('#ddlSaveAs').val('0');
        $('#divImageView').css("display", "none");


    }


})(jQuery);                                                                                                                                                                                                                               //main function end