<%@ Page Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true"
    CodeFile="PatientRegistration.aspx.cs" Inherits="Clinical_PatientRegistration"
    Title="Patient Registration" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
    
    <script src="../js/BindMenu.js" type="text/javascript"></script>

    <script src="js/PatientRegistration.js" type="text/javascript"></script>

    <link href="../Jquery/custom.filter.paging.css" rel="stylesheet" type="text/css" />

    <script src="../Jquery/custom.filter.paging.js" type="text/javascript"></script>

    <%--<script src="vendor/jquery/jquery.min.js" type="text/javascript"></script>

    

    <script src="../Jquery/jquery-ui.min.js" type="text/javascript"></script>--%>
    <%-- <script src="vendor/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>--%>
    <link rel="stylesheet" href="../Jquery/jquery-ui.css" />

    <script src="../Jquery/jquery-ui.js" type="text/javascript"></script>

    <link href="../css/jquery.autocomplete.css" rel="stylesheet" type="text/css" />

    <script src="../scripts/jquery.autocomplete.js" type="text/javascript"></script>

    <script type="text/javascript">
        $(document).ready(function(){
                $("#txtdob").datepicker({ dateFormat: 'dd/mm/yy' });
                $("#txtImgDate").datepicker({ dateFormat: 'dd/mm/yy' });  
                $("#txtDateofWedding").datepicker({ dateFormat: 'dd/mm/yy' });//txtRegistrationDate 
                
                $("#txtdob").change(function(){
                    //alert("The text has been changed.");
                    if($("#txtdob").val()!="")
                    {
                        CalculateAge();
                    }
                });

            });
            
            
            //txtDateofWedding
    </script>
    <script type="text/javascript">
    function CalculateAge()
    {
     var mdate = $("#txtdob").val().toString();
//        var yearThen = parseInt(mdate.substring(0,4), 10);
//        var monthThen = parseInt(mdate.substring(5,7), 10);
//        var dayThen = parseInt(mdate.substring(8,10), 10);


        var dayThen = parseInt(mdate.substring(0,2), 10);
        var monthThen = parseInt(mdate.substring(3,5), 10);
        var yearThen = parseInt(mdate.substring(6,10), 10);
        
        
        
        var today = new Date();
        var birthday = new Date(yearThen, monthThen-1, dayThen);
        
        var differenceInMilisecond = today.valueOf() - birthday.valueOf();
        
        var year_age = Math.floor(differenceInMilisecond / 31536000000);
        var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);
        
        if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {
            alert("Happy B'day!!!");
        }
        
        var month_age = Math.floor(day_age/30);
        //alert(day_age);
        day_age = day_age % 30;
        //alert(day_age);
//        if (isNaN(year_age) || isNaN(month_age) || isNaN(day_age)) {
//            $("#exact_age").text("Invalid birthday - Please try again!");
//        }
//        else {
//            $("#exact_age").html("You are<br/><span id=\"age\">" + year_age + " years " + month_age + " months " + day_age + " days</span> old");
//        }
        $("#txtAgeDD").val(day_age);
        $("#txtAgeMM").val(month_age);
        $("#txtAgeYY").val(year_age);
//        alert(year_age);
//        alert(month_age);
//        alert(day_age);
        }
    </script>
    <script type="text/javascript">
        DeleteRecord=function(_code)
        {
            $("#hdncode").val(_code);
             $("#myModalforDeletePatientRegistration").modal({
                    show: true,
                    width: '740px' //probably not needed
                    //probably not needed 
               });
        }
    </script>

    <script type="text/javascript">
        $(document).ready(function(){
        var icons = {
            header: "ui-icon-circle-arrow-e",
            activeHeader: "ui-icon-circle-arrow-s"
           };
            $("#accordion" ).accordion({
                collapsible: true,
                icons: icons,
                active: false
            });    
            $( "#tabs" ).tabs();
                $('#ImgUpload').click(function(){//fileupload1
                $('#FileUpload1').trigger('click');
            });
        });
    </script>

    <script type="text/javascript">
        function imageExists(url, callback) {
            var img = new Image();
            img.onload = function() { callback(true); };
            img.onerror = function() { callback(false); };
            img.src = url;
    }
    </script>

    <script type="text/javascript">
    function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#blah')
                        .attr('src', e.target.result)
                        .width(184)
                        .height(200);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }
    </script>
    <%--search Start here --%>
     <script type="text/javascript">
         $(document).ready(function () {
             $("#btnSearchPatient").click(function () {
                 var _UHID = $("#txtSearchUHID").val();
                 var _NAME = $("#txtSearchName").val();
                 var _MOBILENO = $("#txtSearchMobile").val();
                 var _ADHAAR_NO = $(this).find('#txtSearchAadhar').val();


                 $("#myModelForSampleCollection").modal({
                     show: true,
                     width: '740px' //probably not needed
                     //probably not needed
                 }); //modal code end here
                 debugger;

                 $("#TxtUHID").val($("#txtSearchUHID").val());
                 $("#TxtName").val($("#txtSearchName").val());
                 $("#TxtMobile").val($("#txtSearchMobile").val());
                 $("#TxtAdhaar").val($("#txtSearchAadhar").val());
                 $("#btnModSearch").trigger('click');


             }); //button click end here
         });    //ready end here
    </script>

    <style type="text/css">
        .photo
        {
            display: block; /*height: 200px;
            width: 175px;*/
        }
        .photo a
        {
            display: block;
            float: right;
            height: 25px;
            width: 190px;
            visibility: hidden;
            margin-top: -24px;
            text-decoration: none;
            text-align: center;
            vertical-align: middle;
            background: #38ACEC;
            color: White;
            font-weight: normal;
            font-family: Calibri;
            z-index: 99;
            position: absolute;
            font-size: 14px;
            opacity: 0.9;
        }
        .photo:hover a
        {
            visibility: visible;
        }
    </style>
    <style type="text/css">
        b
        {
            font-size: 12px;
        }
        .style2
        {
            width: 203px;
        }
        .style3
        {
            width: 211px;
        }
        .style4
        {
            width: 211px;
        }
        .style5
        {
            width: 210px;
        }
        .style6
        {
        }
        .style7
        {
            width: 124px;
        }
    </style>

    <script type="text/javascript">
        function Check_Click(objRef) {

            //Get the Row based on checkbox
            var row = objRef.parentNode.parentNode;
            if (objRef.checked) {
                //If checked change color to Aqua
                row.style.backgroundColor = "#3F8197";
                row.style.color = "white";
                
            }
            else {
                //If not checked change back to original color
                if (row.rowIndex % 2 == 0) {
                    //Alternating Row Color
                    row.style.backgroundColor = "white";
                    row.style.color = "black";
                }
                else {
                    row.style.backgroundColor = "white";
                    row.style.color = "black";
                }
                
            }

            //Get the reference of GridView
            var GridView = row.parentNode;

            //Get all input elements in Gridview
            var inputList = GridView.getElementsByTagName("input");

            for (var i = 0; i < inputList.length; i++) {
                //The First element is the Header Checkbox
                var headerCheckBox = inputList[0];

                //Based on all or none checkboxes
                //are checked check/uncheck Header Checkbox
                var checked = true;
                if (inputList[i].type == "checkbox" && inputList[i] != headerCheckBox) {
                    if (!inputList[i].checked) {
                        checked = false;
                        break;
                    }
                }
            }
            headerCheckBox.checked = checked;

        }
    </script>

    <script type="text/javascript">
        function checkAll(objRef) {

            var GridView = objRef.parentNode.parentNode.parentNode;
            var inputList = GridView.getElementsByTagName("input");
            for (var i = 0; i < inputList.length; i++) {
                //Get the Cell To find out ColumnIndex
                var row = inputList[i].parentNode.parentNode;
                if (inputList[i].type == "checkbox" && objRef != inputList[i]) {
                    if (objRef.checked) {
                        //If the header checkbox is checked
                        //check all checkboxes
                        //and highlight all rows
                        row.style.backgroundColor = "#3F8197";
                        row.style.color = "white";
                        inputList[i].checked = true;
                        
                    }
                    else {
                        //If the header checkbox is checked
                        //uncheck all checkboxes
                        //and change rowcolor back to original
                        if (row.rowIndex % 2 == 0) {
                            //Alternating Row Color
                            row.style.backgroundColor = "white";
                            row.style.color = "black";
                        }
                        else {
                            row.style.backgroundColor = "white";
                            row.style.color = "black";
                        }
                        inputList[i].checked = false;
                        
                    }
                }
            }
        }
    </script>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <div class="alert alert-success" id="divalertSuccess" style="width: 470px; position: absolute;
        background-color: #1E8449; border: none; margin-left: 250px; display: none; z-index: 999;
        margin-top: 45px; -webkit-box-shadow: -7px 3px 15px -1px rgba(0,0,0,0.35); -moz-box-shadow: -7px 3px 15px -1px rgba(0,0,0,0.35);
        box-shadow: -7px 3px 15px -1px rgba(0,0,0,0.35);">
        <span id="strngSuccess" style="font-weight: bold; color: White; font-family: Calibri;">
            Danger!</span>
    </div>
    <div id="divErrorMsg" class="alert alert-danger" style="width: 470px; position: absolute;
        margin-top: 45px; background-color: #CB4335; border: none; margin-left: 250px;
        display: none; z-index: 999; -webkit-box-shadow: -7px 3px 15px -1px rgba(0,0,0,0.35);
        -moz-box-shadow: -7px 3px 15px -1px rgba(0,0,0,0.35); box-shadow: -7px 3px 15px -1px rgba(0,0,0,0.35);">
        <span id="spnerrormsg" style="font-weight: bold; font-family: Calibri; color: White;"
            class="spnerrormsg">Hello this is Error Message. </span>
    </div>
    <input type="hidden" id="hdncode" />
    <div style="margin-top: 45px;" class="row">
        <div class="col-sm-12">
            <div class="row">
                <div class="col-sm-9">
                    <fieldset style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                        <legend style="color: Blue; font-family: Calibri;">
                            <h5 style="font-size: 15px;">
                                [ Patient Registration ]
                            </h5>
                        </legend>
                        <fieldset style="margin-top: 3px; border-width: thin; border-radius: 5px; height: 209px;">
                            <br />
                            <div class="row">
                                <div class="col-sm-2">
                                    <strong><b>UHID</b></strong>
                                    <input type="text" id="txtSearchUHID" maxlength="50" placeholder="UHID" style=""
                                        class="form-control" />
                                </div>
                                <div class="col-sm-3">
                                    <strong><b>Name</b></strong>
                                    <input type="text" id="txtSearchName" maxlength="50" style="" class="form-control" />
                                </div>
                                <div class="col-sm-3">
                                    <strong><b>Mobile No.</b></strong>
                                    <input type="text" id="txtSearchMobile" maxlength="12" placeholder="Mobile No." style=""
                                        class="form-control" />
                                </div>
                                <div class="col-sm-3">
                                    <strong><b>Aadhar No.</b></strong>
                                    <input type="text" id="txtSearchAadhar" maxlength="50" class="form-control" />
                                </div>
                                <div class="col-sm-1">
                                    <br />
                                    <button type="button" id="btnSearchPatient" class="btn btn-primary">
                                        <i class="fa fa-search" aria-hidden="true"></i>
                                    </button>
                                </div>
                            </div>
                            <br />
                        </fieldset>
                    </fieldset>
                </div>
                <div class="col-sm-3">
                    <fieldset style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                        <legend style="color: Blue; font-family: Calibri;">View/Upload</legend>
                        <div class="photo" style="width: 190px; height: 190px; -webkit-box-shadow: -2px 0px 9px 0px rgba(0,0,0,0.53);
                            box-shadow: -2px 0px 9px 0px rgba(0,0,0,0.53);">
                            <img id="blah" class="img-thumbnail" style="margin-left: 3px; margin-right: 3px;
                                margin-top: 3px; margin-bottom: 2px; max-width: 220px; max-height: 184px;" src="../image/avatar2.jpg"
                                alt="your image" />
                            <a id="ImgUpload" style="cursor: pointer; color: White;">Upload Image</a>
                        </div>
                        <br />
                        <%--File Upload code start from here --%>
                        <%--File Upload code end from here --%>
                        <input type='file' style="width: 40px; display: none;" id="FileUpload1" accept="image/x-png,image/gif,image/jpeg"
                            onchange="readURL(this);" />
                    </fieldset>
                </div>
            </div>
            <fieldset class="mt-3" style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                <div class="row">
                    <div class="col-sm-9">
                        <fieldset class="mt-4" style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                            <div class="row">
                                <div class="col-sm-2">
                                    <strong><b>Title</b></strong>
                                    <select id="ddlTitle" style="font-size: 13px;" class="form-control">
                                    </select>
                                </div>
                                <div class="col-sm-4">
                                    <strong><b>First Name</b></strong>
                                    <input type="text" id="txtFname" class="form-control" />
                                </div>
                                <div class="col-sm-3">
                                    <strong><b>Middle Name</b></strong>
                                    <input type="text" id="txtMiddleName" class="form-control" />
                                </div>
                                <div class="col-sm-3">
                                    <strong><b>Last Name</b></strong>
                                    <input type="text" id="txtLname" class="form-control" />
                                </div>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col-sm-2">
                                    <strong><b>Inst Id</b></strong>
                                    <input type="text" id="txtInstitutionalId" class="form-control" />
                                </div>
                                <div class="col-sm-4">
                                    <strong><b>Gender</b></strong>
                                    <select id="ddlGender" style="font-size: 13px;" class="form-control">
                                        <option value="0">--Select--</option>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                        <option value="O">Others</option>
                                    </select>
                                </div>
                                <div class="col-sm-3">
                                    <strong><b>Occupation</b></strong>
                                    <select id="ddlOccupation" style="font-size: 13px;" class="form-control">
                                    </select>
                                </div>
                                <div class="col-sm-3">
                                    <strong><b>DOB[DD-MM-YY]</b></strong>
                                    <input type="text" id="txtdob" class="form-control" />
                                </div>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col-sm-2">                                                                       
                                    <strong><b>Age Year</b></strong>
                                    <input type="text" id="txtAgeYY" class="form-control" />
                                </div>
                                <div class="col-sm-2">
                                    <strong><b>Age Month</b></strong>
                                    <input type="text" id="txtAgeMM" class="form-control" />
                                </div>
                                <div class="col-sm-2">
                                    <strong><b>Age Day</b></strong>
                                    <input type="text" id="txtAgeDD" class="form-control" />
                                </div>
                                <div class="col-sm-6">
                                    <strong><b>Aadhar No.</b></strong>
                                    <input type="text" id="txtAadharNo" maxlength="19" class="form-control" />
                                </div>
                            </div>
                            <br />
                            <div class="row">
                                <div class="col-sm-3">
                                    <strong><b>Marital Status</b></strong>
                                    <select id="ddlMaritalStatus" style="font-size: 13px;" class="form-control">
                                        <option value="0">--Select--</option>
                                        <option value="1">Single</option>
                                        <option value="2">Married</option>
                                        <option value="3">Divorcee</option>
                                    </select>
                                </div>
                                <div class="col-sm-3">
                                    <strong><b>Date of Anniversary</b></strong>
                                    <input type="text" id="txtDateofWedding" class="form-control" />
                                </div>
                                <div class="col-sm-3">
                                    <strong><b># of Children</b></strong>
                                    <input type="text" id="txtNoofChildren" class="form-control" />
                                </div>
                                <div class="col-sm-3">
                                    <strong><b>Total Dependent</b></strong>
                                    <input type="text" id="txtTotalDependent" class="form-control" />
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div class="col-sm-3">
                        <fieldset style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                            <legend style="color: Blue; font-family: Calibri;">[ Safety Parameters ] </legend>
                            <div style="overflow: auto; height: 300px;">
                                <table id="tblSaftyParameter" class="table table-bordered table-hover">
                                    <tr>
                                        <th>
                                            <input type="checkbox" onclick="checkAll(this)" name="chkAllUnAssignItem" />
                                        </th>
                                        <th style="font-size: 12px">
                                            Select All
                                        </th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" onclick="Check_Click(this)" name="chkItem" />
                                        </td>
                                        <td>
                                            <span id="spnPregnancy" class="spnParameterType" style="font-size: 14px">Pregnancy</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" onclick="Check_Click(this)" name="chkItem" />
                                        </td>
                                        <td>
                                            <span id="spnlactation" class="spnParameterType" style="font-size: 14px">Lactation</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" onclick="Check_Click(this)" name="chkItem" />
                                        </td>
                                        <td>
                                            <span id="spnKidneyDisease" class="spnParameterType" style="font-size: 14px">Kidney
                                                Disease</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" onclick="Check_Click(this)" name="chkItem" />
                                        </td>
                                        <td>
                                            <span id="spnLiverDisease" class="spnParameterType" style="font-size: 14px">Liver Disease</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" onclick="Check_Click(this)" name="chkItem" />
                                        </td>
                                        <td>
                                            <span id="spnHypothyrodism" class="spnParameterType" style="font-size: 14px">Hypothyrodism</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" onclick="Check_Click(this)" name="chkItem" />
                                        </td>
                                        <td>
                                            <span id="spnHypertension" class="spnParameterType" style="font-size: 14px">Hypertension</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" onclick="Check_Click(this)" name="chkItem" />
                                        </td>
                                        <td>
                                            <span id="spnAnemia" class="spnParameterType" style="font-size: 14px">Anemia</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" onclick="Check_Click(this)" name="chkItem" />
                                        </td>
                                        <td>
                                            <span id="spnMentalIllness" class="spnParameterType" style="font-size: 14px">Mental
                                                Illness</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" onclick="Check_Click(this)" name="chkItem" />
                                        </td>
                                        <td>
                                            <span id="spnChronicCough" class="spnParameterType" style="font-size: 14px">Chronic
                                                Cough</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" onclick="Check_Click(this)" name="chkItem" />
                                        </td>
                                        <td>
                                            <span id="spnObesity" class="spnParameterType" style="font-size: 14px">Obesity</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="checkbox" onclick="Check_Click(this)" name="chkItem" />
                                        </td>
                                        <td>
                                            <span id="spnPaediatric" class="spnParameterType" style="font-size: 14px">Paediatric</span>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </fieldset>
                    </div>
                </div>
                <fieldset class="mt-3" style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                    <div class="row">
                        <div class="col-sm-2">
                            <strong><b>Title</b></strong>
                            <select id="ddlTitle1" style="font-size: 13px;" class="form-control">
                            </select>
                        </div>
                        <div class="col-sm-3">
                            <strong><b>Father Name</b></strong>
                            <input type="text" id="txtFatherName" class="form-control" />
                        </div>
                        <div class="col-sm-3">
                            <strong><b>Guardian</b></strong>
                            <input type="text" id="txtGuardianName" class="form-control" />
                        </div>
                        <div class="col-sm-4">
                            <strong><b>Relation</b></strong>
                            <select id="ddlRelation" style="font-size: 13px;" class="form-control">
                            </select>
                        </div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-sm-4">
                            <strong><b>Patient Category</b></strong>
                            <select id="ddlPatientCategory" style="font-size: 13px;" class="form-control">
                                <option value="0">--Select--</option>
                                <option value="General Category">General Category</option>
                                <option value="Senior Citizen">Senior Citizen</option>
                                <option value="BPL Person">BPL Person</option>
                                <option value="OBC">OBC</option>
                                <option value="Handicapped">Handicapped</option>
                                <option value="V.I.P">V.I.P</option>
                                <option value="Insured">Insured</option>
                                <option value="Staff">Staff</option>
                                <option value="Sponsored">Sponsored</option>
                                <option value="Others">Others</option>                                
                            </select>
                        </div>
                        <div class="col-sm-4">
                            <strong><b>Family Income</b></strong>
                            <select id="ddlFamilyIncome" style="font-size: 13px;" class="form-control">
                                <option value="0">--Select Income--</option>
                                <option value="0 < 50,000">0 < 50,000</option>
                                <option value="50,000 < 1,00,000">50,000 < 1,00,000</option>
                                <option value="1,00,000 < 2,00,000">1,00,000 < 2,00,000</option>
                                <option value="2,00,000 < 3,00,000">2,00,000 < 3,00,000</option>
                                <option value="3,00,000 < 4,00,000">3,00,000 < 4,00,000</option>
                                <option value="4,00,000 < 5,00,000">4,00,000 < 5,00,000</option>
                                <option value="5,00,000 < 6,00,000">5,00,000 < 6,00,000</option>
                                <option value="6,00,000 < 7,00,000">6,00,000 < 7,00,000</option>
                                <option value="7,00,000 < 8,00,000">7,00,000 < 8,00,000</option>
                                <option value="8,00,000 < 9,00,000">8,00,000 < 9,00,000</option>
                                <option value="9,00,000 < 10,00,000">9,00,000 < 10,00,000</option>
                            </select>
                        </div>
                        <div class="col-sm-4">
                            <strong><b>Ref By</b></strong>
                            <input type="text" id="txtDoctor" class="form-control" />
                        </div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-sm-4">
                            <strong><b>Health Insurance</b></strong>
                            <br />
                            <input type="checkbox" onchange="checkHealthInsurance()" id="chkIsHealthIns" class="ml-4 mt-2"
                                style="zoom: 1.5;" />
                        </div>
                        <div class="col-sm-4">
                            <strong><b>Company</b></strong>
                            <input type="text" id="ddlHealthInsCompany" disabled="disabled" class="form-control" />
                            <%--<select id="ddlHealthInsCompany" disabled="disabled" style="font-size: 13px;" class="form-control">
                                <option value="0">--Select Company--</option>
                            </select>--%>
                        </div>
                        <div class="col-sm-4">
                            <strong><b>Policy Amount</b></strong>
                            <input type="text" id="ddlPolicyAmount" disabled="disabled" class="form-control" />
                            <%--<select id="ddlPolicyAmount" style="font-size: 13px;" class="form-control">
                                <option value="0">--Select Policy Amount--</option>
                            </select>--%>
                        </div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-sm-4">
                            <strong><b>Head of Family</b></strong>
                            <br />
                            <input type="checkbox" onchange="checkHeadofFamily()" id="chkIsHOF" class="ml-4 mt-2"
                                style="zoom: 1.5;" />
                        </div>
                        <div class="col-sm-4">
                            <strong><b>Patient</b></strong>
                            <select id="ddlHOFPatient" disabled="disabled" style="font-size: 13px;" class="form-control">
                                <option value="0">--Select Patient--</option>
                            </select>
                        </div>
                        <div class="col-sm-4">
                            <strong><b>Relation</b></strong>
                            <select id="ddlHOFRelation" disabled="disabled" style="font-size: 13px;" class="form-control">
                                <option value="0">--Select Releation--</option>
                            </select>
                        </div>
                    </div>
                    <br />
                    <div class="row" style="">
                        <div class="col-sm-4">
                            <strong><b>Handicapped</b></strong>
                            <br />
                            <input type="checkbox" id="chkIsHandicap" onchange="checkHandicap()" class="ml-4 mt-2"
                                style="zoom: 1.5;" />
                        </div>
                        <div class="col-sm-3">
                            <strong class=""><b>Percentage</b></strong>
                            <input type="text" id="txtHandicapPercent" disabled="disabled" class="form-control" />
                        </div>
                        <div class="col-sm-2">
                            <strong><b>Vision/Blindness</b></strong>
                            <br />
                            <input type="checkbox" onchange="checkVision()" id="chkIsBlindness" class="ml-4 mt-2"
                                style="zoom: 1.5;" />
                        </div>
                        <div class="col-sm-3">
                            <strong><b>Percentage</b></strong>
                            <br />
                            <input type="text" id="txtBlindPercentage" disabled="disabled" class="form-control" />
                        </div>
                    </div>
                </fieldset>
            </fieldset>
            <fieldset class="mt-3" style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                <legend style="color: Blue; font-family: Calibri;">
                    <h5 style="font-size: 15px;">
                        [ Demographic Details/General Details ]
                    </h5>
                </legend>
                <div class="row">
                    <div class="col-sm-2">
                        <b>HT[cm]</b>
                        <input type="text" id="txtHT" maxlength="50" class="form-control" />
                    </div>
                    <div class="col-sm-2">
                        <b>WT[cm]</b>
                        <input type="text" id="txtWT" maxlength="50" class="form-control" />
                    </div>
                    <div class="col-sm-2">
                        <b>Blood Group </b>
                        <select id="ddlBloodGroup" class="form-control" style="font-size: 14px;">
                            <option value="0">--Select--</option>
                            <option value="O">O</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="AB">AB</option>
                        </select>
                    </div>
                    <div class="col-sm-2">
                        <b>Apgar Score</b>
                        <input type="text" id="txtApgarScore" maxlength="50" class="form-control" />
                    </div>
                    <div class="col-sm-2">
                        <b>Growth</b>
                        <input type="text" id="txtGrowth" maxlength="50" class="form-control" />
                    </div>
                    <div class="col-sm-2">
                        <b>Waist</b>
                        <input type="text" id="txtWaist" class="form-control" />
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col-sm-3">
                        <b>Obesity</b>
                        <input type="text" id="txtObesity" class="form-control" />
                    </div>
                    <div class="col-sm-3">
                        <b>Religion</b>
                        <select id="ddlReligion" class="form-control" style="font-size: 12px;">
                        </select>
                    </div>
                </div>
            </fieldset>
            <fieldset class="mt-3" style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                <div id="tabs">
                    <ul>
                        <li><a href="#tabs-1" style="font-size: medium; font-weight: bold; font-size: 12px;
                            font-style: normal; font-variant: normal">Contact Details</a></li>
                        <%-- <li><a href="#tabs-2" style="font-size: medium; font-weight: bold; font-size: 12px;
                            font-style: normal; font-variant: normal">Demographic Details/General Details</a></li>--%>
                        <li><a href="#tabs-3" style="font-size: medium; font-weight: bold; font-size: 12px;
                            font-style: normal; font-variant: normal">Imaging</a></li>
                    </ul>
                    <div id="tabs-1">
                        <div class="row">
                            <div class="col-sm-6">
                                <b>Address1</b>
                                <input type="text" id="txtAddress1" style="" class="form-control" />
                            </div>
                            <div class="col-sm-6">
                                <b>Address2</b>
                                <input type="text" id="txtAddress2" style="" class="form-control" />
                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="col-sm-3">
                                <b>Mobile</b>
                                <input type="text" id="txtPMobile" maxlength="10" style="" class="form-control" />
                            </div>
                            <div class="col-sm-3">
                                <b>Alternative No.</b>
                                <input type="text" id="txtAlternativeNo" maxlength="10" style="" class="form-control" />
                            </div>
                            <div class="col-sm-3">
                                <b>Email</b>
                                <input type="text" id="txtEmail" maxlength="50" style="" class="form-control" />
                            </div>
                            <div class="col-sm-3">
                                <b>Country</b>
                                <select id="ddlCountry" class="form-control" style="font-size: 12px;">
                                </select>
                            </div>
                        </div>
                        <br />
                        <div class="row">
                            <div class="col-sm-3">
                                <b>State</b>
                                <select id="ddlState" class="form-control" style="font-size: 12px;">
                                </select>
                            </div>
                            <div class="col-sm-3">
                                <b>City</b>
                                <select id="ddlCity" class="form-control" style="font-size: 12px;">
                                </select>
                            </div>
                            <div class="col-sm-3">
                                <b>Pin Code</b>
                                <input type="text" id="txtPincode" readonly="readonly" maxlength="6" style="" class="form-control" />
                            </div>
                        </div>
                        <br />
                        <fieldset style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                            <legend style="color: Blue; font-family: Calibri;">
                                <h5 style="font-size: 15px;">
                                    [ Emergency Contact ]
                                </h5>
                            </legend>
                            <div class="row">
                                <div class="col-sm-3">
                                    <b>Emergency Contact Name</b>
                                    <input type="text" id="txtEmergencyContactName" style="" class="form-control" />
                                </div>
                                <div class="col-sm-3">
                                    <b>Emergency Contact Mobile</b>
                                    <input type="text" id="txtEmergencyContactNo" style="" class="form-control" />
                                </div>
                                <br />
                                <b class="mt-4" style="font-size: 14px;">2</b>
                                <div class="col-sm-3">
                                    <b>Name</b>
                                    <input type="text" id="txtEmergencyContactName1" style="" class="form-control" />
                                </div>
                                <div class="col-sm-2">
                                    <b>Mobile</b>
                                    <input type="text" id="txtEmergencyContactNo2" maxlength="10" style="" class="form-control" />
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <%-- <div id="tabs-2">
                       
                    </div>--%>
                    <div id="tabs-3">
                        <div class="row">
                            <div class="col-sm-4">
                                <b>Caption</b>
                                <input type="text" id="txtCaption" class="form-control" />
                            </div>
                            <div class="col-sm-4">
                                <b>Date</b>
                                <input type="text" id="txtImgDate" class="form-control" />
                            </div>
                            <div class="col-sm-4">
                                <b>Description</b>
                                <textarea name="txtImgDescription" id="txtImgDescription" class="form-control" style="height: 40px;"
                                    cols="20"></textarea>
                            </div>
                        </div>
                        <br />
                    </div>
                </div>
            </fieldset>
            <fieldset class="mt-3" style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                <div id="accordion">
                    <h5 style="font-size: medium; font-weight: bold; font-size: 14px; font-style: normal;
                        font-variant: normal; max-height: 200px; overflow-y: auto">
                        Allergy</h5>
                    <div id="divAllergy" style="max-height: 200px; overflow-y: auto">
                    </div>
                    <h5 style="font-size: medium; font-weight: bold; font-size: 14px; font-style: normal;
                        font-variant: normal; overflow: auto">
                        Personal History</h5>
                    <div style="height: 250px; overflow: auto">
                        <div id="divPersonalHistory" style="overflow: auto">
                        </div>
                    </div>
                    <h5 style="font-size: medium; font-weight: bold; font-size: 14px; font-style: normal;
                        font-variant: normal">
                        Past History</h5>
                    <div class="row">
                        <div class="col-sm-12">
                            <%-- <div style="overflow: auto;" id="divScrollN11">--%>
                            <div id="divPastHistory" style="">
                            </div>
                            <%--</div>--%>
                        </div>
                    </div>
                    <h5 style="font-size: medium; font-weight: bold; font-style: normal; font-size: 14px;
                        font-variant: normal">
                        Family History</h5>
                    <div class="row">
                        <div class="col-sm-12">
                            <div style="overflow: auto;" id="divScrollN1">
                                <div id="divFamilyHistory">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>
            <fieldset class="mt-3" style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                <div class="row">
                    <div class="col-sm-4">
                    </div>
                    <div class="col-sm-5">
                        <div id="btnSave" style="margin-top: 3px;" class="btn btn-primary">
                            <i class="fa fa-save fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;Save
                        </div>
                        <button type="button" id="btnModUpdate" style="margin-top: 3px; display: none;" class="btn btn-primary">
                            <i class="fa fa-pencil-square fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;Update
                        </button>
                        <div id="btnReset" style="margin-top: 3px;" class="btn btn-danger">
                            <i class="fa fa-refresh fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;Reset
                        </div>
                    </div>
                </div>
            </fieldset>
            <br />
            <br />
        </div>
        <%--Main Search Start here --%>
          <div id="myModelForSampleCollection" class="modal fade" role="dialog" style="height: 580px;">
        <div class="modal-dialog" style="width: 800px; font-family: Calibri">
            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title" style="font-weight: bold;">
                        Search Item</h6>
                    <button type="button" class="close" data-dismiss="modal">
                        &times;</button>
                </div>
                <div class="modal-body" style="width: 740px;">
                    <div class="panel panel-default" style="width: 760px; height: auto;">
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="row">
                                        <div class="col-sm-1">
                                        </div>
                                        <div class="col-sm-2">
                                            <b>UHID</b>
                                            <input type="text" id="TxtUHID" class="form-control"  />
                                        </div>
                                        <div class="col-sm-2">
                                            <b>OPD NO</b>
                                            <input type="text" id="TxtOPDNO" class="form-control" />
                                        </div>
                                        <div class="col-sm-2">
                                            <b>IPD NO</b>
                                            <input type="text" id="TxtIPDNO" class="form-control" />
                                        </div>
                                        <div class="col-sm-2">
                                            <b>Casulty No</b>
                                            <input type="text" id="TxtCasultyNO" class="form-control" />
                                        </div>
                                        <div class="col-sm-3">
                                            <b>Name</b>
                                            <input type="text" id="TxtName" class="form-control"  />
                                        </div>
                                    </div>
                                    <br />
                                    <div class="row">
                                        <div class="col-sm-1">
                                        </div>
                                        <div class="col-sm-3">
                                            <b>Mobile No</b>
                                            <input type="text" id="TxtMobile" class="form-control" />
                                        </div>
                                        <div class="col-sm-3">
                                            <b>Adhaar No</b>
                                            <input type="text" id="TxtAdhaar" class="form-control" />
                                        </div>
                                        <div class="col-sm-1">
                                            <br />
                                            <button type="button" id="btnModSearch" style="margin-top: 2px;" class="btn btn-primary">
                                                <i class="fa fa-search" aria-hidden="true"></i>
                                            </button>
                                        </div>
                                        <div class="col-sm-4">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div class="row">
                                <div class="col-sm-12">
                                    <fieldset style="border-width: thin; border-radius: 5px; font-family: Calibri;">
                                        <div class="row">
                                            <div class="col-sm-12">
                                                <table class="table-bordered table-hover" id="tblItem" style="width: 100%">
                                                    <thead>
                                                        <tr style="font-size: 12px;">
                                                            <th>
                                                                UHID
                                                            </th>
                                                            <th>
                                                                Name
                                                            </th>
                                                            <th>
                                                                Gender
                                                            </th>
                                                            <th>
                                                                Address
                                                            </th>
                                                            <th>
                                                                OPD NO
                                                            </th>
                                                            <th>
                                                                IPD NO
                                                            </th>
                                                            <th>
                                                                Casualty No
                                                            </th>
                                                            <th>
                                                                Mobile No
                                                            </th>
                                                            <th>
                                                                Adhaar No
                                                            </th>
                                                            <th>
                                                                Action
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr style="height: 20px;">
                                                            <td>
                                                            </td>
                                                            <td>
                                                            </td>
                                                            <td>
                                                            </td>
                                                            <td>
                                                            </td>
                                                            <td>
                                                            </td>
                                                            <td>
                                                            </td>
                                                            <td>
                                                            </td>
                                                            <td>
                                                            </td>
                                                            <td>
                                                            </td>
                                                            <td>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div id="divSearchBind">
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" id="btnCloseSampleCollection" class="btn btn-default" data-dismiss="modal">
                        Close</button>
                </div>
            </div>
        </div>
    </div>

    </div>

    <script type="text/javascript">
     $(document).ready(function() {
        //alert(toWords('525'));
         $("#txtDoctor").autocomplete("../Control/AutoComplete.ashx", {
             width: 200,
             formatItem: function(data, i, n, value) {
             //alert(value.split(",")[0]);
             var _vals=value.split(",")[0];
                 if(_vals!="No Records found !")
                 {   
                    return "<img class='img-thumbnail' style = 'width:40px;height:40px' src='../Image/" + value.split(",")[1] + "'/> " + value.split(",")[0];
                 }
                 else
                 {
                    return "<b>"+value.split(",")[0]+"</b>";
                 }
             },
             formatResult: function(data, value) {
                 return value.split(",")[0];
             }
         });
     });
    </script>

</asp:Content>
