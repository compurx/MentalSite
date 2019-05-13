<%@ Page Language="C#" MasterPageFile="~/MasterPage.master"  AutoEventWireup="true"
    CodeFile="SchizophreniaPerforma.aspx.cs" Inherits="MentalStatus_SchizophreniaPerforma"
    Title="Schizophrenia Performa" %>
    <asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
   <script src="js/UpdatedSchizophrenia.js" type="text/javascript"></script>
   <script src="js/jquery-1.7.2.min.js" type="text/javascript"></script>
    <script src="js/BindMenu.js" type="text/javascript"></script>
    <link href="../Jquery/custom.filter.paging.css" rel="stylesheet" type="text/css" />
    <script src="../Jquery/custom.filter.paging.js" type="text/javascript"></script>
    <link href="../Jquery/jquery-ui.css" rel="stylesheet" type="text/css" />
    <script src="../Jquery/jquery-ui.js" type="text/javascript"></script>
    <script type="text/javascript">
     $(document).ready(function(){
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

                reader.onload = function(e) {
                    $('#blah')
                        .attr('src', e.target.result)
                        .width(184)
                        .height(200);
                   
                }; 

                reader.readAsDataURL(input.files[0]);
            }
        }
    </script>
  
    <script type="text/javascript">
        $(document).ready(function() {
        
            CurrentTime();
            $("#txtDate").datepicker({ dateFormat: 'dd/mm/yy' });
            $("#txtdob").datepicker({ dateFormat: 'dd/mm/yy' });
            $("#txtCareDOB").datepicker({ dateFormat: 'dd/mm/yy' });
            $("#tabs").tabs(); 
            $('#tabsChildofPInfo').tabs();
            var icons = {
                header: "ui-icon-circle-arrow-e",
                activeHeader: "ui-icon-circle-arrow-s"
            };
            $("#accordion").accordion({
                collapsible: true,
                icons: icons,
                active: false
            });



        });
        CurrentTime = function() {
            var date = new Date();
            var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
            var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
            var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
            time = hours + ":" + minutes + ":" + seconds;
           

            $("#txtTime").val(time);
           
        }
    </script>
    <script type="text/javascript">
          function CalculateAge() {
              var mdate = $("#txtdob").val().toString();
              var dayThen = parseInt(mdate.substring(0, 2), 10);
              var monthThen = parseInt(mdate.substring(3, 5), 10);
              var yearThen = parseInt(mdate.substring(6, 10), 10);



              var today = new Date();
              var birthday = new Date(yearThen, monthThen - 1, dayThen);

              var differenceInMilisecond = today.valueOf() - birthday.valueOf();

              var year_age = Math.floor(differenceInMilisecond / 31536000000);
              var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);

              if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {
                  alert("Happy B'day!!!");
              }

              var month_age = Math.floor(day_age / 30);
             
              day_age = day_age % 30;
              
              $("#txtAgeDD").val(day_age);
              $("#txtAgeMM").val(month_age);
              $("#txtAgeYY").val(year_age);
            
          }
    </script>
    <style type="text/css">
        b
        {
            font-weight: bold;
        }
       
    </style>
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
        .buttonGrv
        {
            -webkit-transition-duration: 0.4s; /* Safari */
            transition-duration: 0.4s;
        }
        .buttonGrv:hover
        {
            background-color: #006699; /* Green */
            color: white;
        }
        .switch
        {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
        }
        .switch input
        {
            display: none;
        }
        .slider
        {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            -webkit-transition: .4s;
            transition: .4s;
        }
        .slider:before
        {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
        }
        input:checked + .slider
        {
            background-color: #2196F3;
        }
        input:focus + .slider
        {
            box-shadow: 0 0 1px #2196F3;
        }
        input:checked + .slider:before
        {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
        }
        /* Rounded sliders */.slider.round
        {
            border-radius: 34px;
        }
        .slider.round:before
        {
            border-radius: 50%;
        }
    </style>
     <style type="text/css">
        /* Style the tab */.tab
        {
            float: right;
            border: 1px solid #ccc;
            background-color: #f1f1f1;
            width: 27%;
            height: 700px;
        }
        /* Style the buttons inside the tab */.tab button
        {
            display: block;
            background-color: inherit;
            color: black;
            padding: 12px 16px;
            width: 100%;
            border: none;
            outline: none;
            text-align: left;
            cursor: pointer;
            transition: 0.3s;
            font-size: 14px;
            border-bottom: 2px;
            border-bottom-style: solid;
            border-bottom-color: #ccc;
        }
        /* Change background color of buttons on hover */.tab button:hover
        {
            background-color: #ddd;
        }
        /* Create an active/current "tab button" class */.tab button.active
        {
            /*background-color: #ccc;*/
            background-color: #337ab7;
            color: White;
        }
        /* Style the tab content */.tabcontent
        {
            float: left;
            padding: 0px 12px;
            border: 1px solid #ccc;
            width: 73%;
            border-left: none;
            height: 727px;
            overflow-y: scroll;
        }
    </style>
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
    <div style="margin-top: 45px;">
    <div>
    <h5 style="text-align:center; text-decoration:underline;">PERFORMA FOR SCHIZOPHRENIA</h5>
    <div class="row">
            <div class="col-sm-12">
                <div class="box box-info">
                <div class="row">
                <div class="col-sm-9">
                <fieldset style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                        <legend style="color: #0000ffab; font-family: Calibri;">
                            <h6 style="font-family: Calibri; font-weight: bold;">
                                [ Search Patient ]
                            </h6>
                        </legend>
                        <fieldset style="margin-top: 3px; border-width: thin; border-radius: 5px; height: 209px;">
                         <div class="row" style="font-family: Calibri; font-size: 12px;">
                            <div class="col-sm-4">
                                <b>OLD ID No</b>
                                <input type="text" id="txtOldIdno" class="form-control" />
                             </div>
                            <div class="col-sm-1" style="margin-top: 19px;">
                                <button type="button" data-toggle="tooltip" title="Search" id="btnOldID" style=""
                                    class="btn btn-primary">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </button>
                                <div data-toggle="tooltip" title="" id="btnSearchPatientRecord" style="display:none;" class="btn btn-danger" data-original-title="All Record">
                                            <i class="fa fa-database" aria-hidden="true"></i>
                                 </div>
                              
                            </div>
                            <div class="col-sm-3">
                                <b>UHID</b>
                                <input type="text" id="txtUHID" class="form-control" />
                                </div>
                                  <div class="col-sm-4">
                                  <b>Name</b>
                                <input type="text" id="txtName" class="form-control" />
                                </div>
                                </div></br>
                                
                                 <div class="row" style="font-family: Calibri; font-size: 12px;"> 
                                  <div class="col-sm-3">
                                  <b>IPD NO.</b>
                                  <input type="text" id="txtIPDNO" class="form-control" />
                                 </div>
                                  <div class="col-sm-3">
                                  <b>OPD NO.</b>
                                  <input type="text" id="txtOPDNO" class="form-control" />
                                 </div>
                                  <div class="col-sm-3">
                                  <b>Casualty No.</b>
                                  <input type="text" id="txtCasualty" class="form-control" />
                                 </div>
                                <div class="col-sm-3" style="margin-top: 19px;">
                                <button type="button" data-toggle="tooltip" title="Search" id="btnSearchPatientRecord_BYID" style=""
                                    class="btn btn-primary">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </button>
                                <div data-toggle="tooltip" title="" id="btnSearchPatientRecord" style="display:none;" class="btn btn-danger" data-original-title="All Record">
                                            <i class="fa fa-database" aria-hidden="true"></i>
                                        </div>
                                <button type="button" data-toggle="tooltip" title="Reset" id="btnSearchPatientRecordReset" style=""
                                    class="btn btn-danger">
                                    <i class="fa fa-refresh" aria-hidden="true"></i>
                                </button>
                                </div>
                           </div>
                         
                        </fieldset>
                    </fieldset>
                </div>
                <div class="col-sm-3">
                
                    <fieldset style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                        <legend style="color: Blue; font-family: Calibri;">View/Upload</legend>
                        <div class="photo" style="width: 190px; height: 190px; -webkit-box-shadow: -2px 0px 9px 0px rgba(0,0,0,0.53);
                            box-shadow: -2px 0px 9px 0px rgba(0,0,0,0.53);">
                            <img id="blah" class="img-thumbnail" style="margin-left: 3px; margin-right: 3px;
                                margin-top: 3px; margin-bottom: 2px; max-width:220px; max-height:184px;" src="Images/avatar2.jpg" alt="your image">
                            <a id="ImgUpload" style="cursor: pointer; color: White;" >Upload Image</a>
                        </div>
                        <br>
                        
                        
                        <input type="file" style="width: 40px; display: none;" id="FileUpload1" class="FileUpload1" accept="image/x-png,image/gif,image/jpeg" onchange="readURL(this);">
                    </fieldset>
                </div>
                </div><br />
                <div id="tabs" style="font-family: Calibri; font-size: 14px;">
                        <ul>
                            <li><a href="#tabs-1" style="font-size: medium; font-weight: bold; font-size: 13.5px;
                                font-style: normal; font-variant: normal">Patient Information</a></li>
                            <%--<li><a href="#tabs-2" style="font-size: medium; font-weight: bold; font-size:13.5px;
                                font-style: normal; font-variant: normal">Care Giver Information</a></li>--%>
                                <li><a href="#tabs-3" style="font-size: medium; font-weight: bold; font-size: 13.5px;
                                font-style: normal; font-variant: normal">Marital Status</a></li>
                                <li><a href="#tabs-4" style="font-size: medium; font-weight: bold; font-size: 13.5px;
                                font-style: normal; font-variant: normal">Education</a></li>
                                <li><a href="#tabs-5" style="font-size: medium; font-weight: bold; font-size: 13.5px;
                                font-style: normal; font-variant: normal">Employment Status</a></li>
                                <li><a href="#tabs-6" style="font-size: medium; font-weight: bold; font-size: 13.5px;
                                font-style: normal; font-variant: normal">Religion</a></li>
                                <li><a href="#tabs-7" style="font-size: medium; font-weight: bold; font-size: 13.5px;
                                font-style: normal; font-variant: normal">Residence</a></li>
                                <li><a href="#tabs-8" style="font-size: medium; font-weight: bold; font-size: 13.5px;
                                font-style: normal; font-variant: normal">Case History Details</a></li>
                                 <li><a href="#tabs-9" style="font-size: medium; font-weight: bold; font-size: 13.5px;
                                font-style: normal; font-variant: normal">DayCare And HomeCare</a></li>
                        </ul>
                        <div id="tabs-1" style="font-family: Calibri; font-size: 12px;">
                            <fieldset style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                                <div class="row" style="font-family: Calibri">
                                    <div class="col-sm-3">
                                        <b>Performa Code</b>
                                        <input id="txtCode" type="text" class="form-control" />
                                    </div>
                                    <div class="col-sm-2" style="margin-top: 19px;">
                                        <div data-toggle="tooltip" title="Search" id="btnSearchCode_PerformaCode" style="" class="btn btn-primary">
                                            <i class="fa fa-search" aria-hidden="true"></i>
                                        </div>
                                         <div data-toggle="tooltip" title="All Record" id="btnSearchCode" style="" class="btn btn-danger">
                                            <i class="fa fa-database" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                   
                                    <div class="col-sm-2">
                                        <b>UHID</b>
                                        <input id="txtUHID1" type="text" class="form-control" />
                                    </div>
                                     <div class="col-sm-1" style="margin-top: 19px;">
                                        <div data-toggle="tooltip" title="Add" id="btnAddRecord" style="" class="btn btn-primary">
                                            <i class="fa fa-plus" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                  
                                      <div class="col-sm-2">
                                        <b>Date</b>
                                        <input id="txtDate" type="text" class="form-control" />
                                    </div>
                                    
                                    
                                      <div class="col-sm-2">
                                        <b>Time</b>
                                        <input id="txtTime" type="time" class="form-control" />
                                    </div>
                                    
                                    </div> <br />
                                    
                                     <div class="row">
                                     <div class="col-sm-3">
                                        <b>Name</b>
                                        <input id="txtName1" type="text" class="form-control" />
                                    </div>
                                      <div class="col-sm-2">
                                        <b>DOB</b>
                                        <input id="txtdob" type="text" class="form-control" />
                                    </div>
                                    <div class="col-sm-1">
                                        <b>Age YY</b>
                                        <input id="txtAgeYY" type="text" class="form-control" />
                                    </div>
                                    <div class="col-sm-1">
                                        <b>Age MM</b>
                                        <input id="txtAgeMM" type="text" class="form-control" />
                                    </div>
                                    <div class="col-sm-1">
                                        <b>Age DD</b>
                                        <input id="txtAgeDD" type="text" class="form-control" />
                                    </div>
                                   
                                  <div class="col-sm-4">
                                        <b>Doctor</b>
                                        <select class="form-control" id="ddlDoctor" style="font-family: Calibri">
                                        </select>
                                    </div>
                               </div><br />
                                    
                                      <div class="row">
                                      <div class="col-sm-3">
                                        <b>Gender</b>
                                        <select class="form-control" id="Select1" style="font-family: Calibri"><option value="0">Select Gender</option><option value="0">Male</option><option value="0">Famale</option><option value="0">Other</option>
                                        </select>
                                    </div>
                                       <div class="col-sm-3">
                                        <b>Ethnicity</b>
                                        <select class="form-control" id="ddlEthnicity" style="font-family: Calibri"><option value="0">Asian</option><option value="0">Caucasian</option><option value="0">Afro/Caribbean</option>
                                        </select>
                                    </div>
                                     <div class="col-sm-6">
                                        <b>Address</b>
                                        <textarea name="txtAddress" id="txtAddress" class="form-control" style="height: 38px"
                                            cols="20"></textarea>
                                    </div>
                                    
                                    </div><br />
                                    
                                    
                                     <div class="row">
                                      <div class="col-sm-3">
                                        <b>Status</b>
                                        <select class="form-control" id="Select2" style="font-family: Calibri"><option value="0">Active</option><option value="0">InActive</option>
                                        </select>
                                    </div>
                                
                                    <div class="col-sm-9">
                                        <b>Notes</b>
                                       
                                        <i style="color: black; font-size: 12px; cursor: pointer; float:right; margin:3px;" data-toggle="tooltip"
                                            title="Speech to text" class="fa fa-microphone"></i>&nbsp;&nbsp;<i style="color: black;
                                                font-size: 12px; float:right; margin:3px;cursor: pointer;" data-toggle="tooltip" title="Ink to Text"
                                                class="fa fa-pencil" aria-hidden="true"></i>&nbsp;&nbsp;<i data-toggle="tooltip"
                                                    title="Maximize" id="Notesmaximize" style="color: black; float:right; margin:3px;font-size: 12px; cursor: pointer;" class="fa fa-window-maximize"
                                                    aria-hidden="true"></i><textarea name="txtNotes" id="txtNotes" class="form-control"
                                                        style=""></textarea>
                                    </div>
                                    </div>
                                    
                                     
                            </fieldset> 
                           
                         
                           
                            
                            
                              
                                   
                   </div>
                       
                        <div id="tabs-3" style="font-family: Calibri; font-size: 12px;">
                           
                            <fieldset style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                                <div class="row" style="font-family: Calibri">
                                 
                               <%-- <div class="col-sm-2" class="form-control">
                               
                                </div>--%>
                                 <div class="col-sm-12">
                                 <h6><b>Marital Status:</b></h6><br />
                                 <div class="row">
                                 <div class="col-sm-2">
                                 <strong><b>Single</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="chkIsHealthIns" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                                 <div class="col-sm-2">
                                 <strong><b>Married</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox1" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                                 <div class="col-sm-2">
                                 <strong><b>Divorced</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox2" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                                 <div class="col-sm-2">
                                 <strong><b>Separated</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox29" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                                 <div class="col-sm-2">
                                 <strong><b>Cohabiting</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox34" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                                 <div class="col-sm-2">
                                 <strong><b>Widowed</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox35" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                               
                               </div>
                              
                                 
         </div>
                               
                                  
                                </div>
                                <br />
                               
                            </fieldset>
                           
                        </div>
                        <div id="tabs-4" style="font-family: Calibri; font-size: 12px;">
                           
                            <fieldset style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                                <div class="row" style="font-family: Calibri">
                                <div class="col-sm-12"> 
                                 <h6><b>Education:</b></h6><br />
                                 <div class="row">
                                 <div class="col-sm-2">
                                 <strong><b>Professional</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox6" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                                 <div class="col-sm-3">
                                 <strong><b>Graduate or Postgraduate</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox7" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                                 <div class="col-sm-4">
                                 <strong><b>Intermediate or Post High School Diploma</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox8" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                                 <div class="col-sm-3">
                                 <strong><b>High School Certificate</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox3" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                               
                               </div><br />
                               
                                <div class="row">
                                <div class="col-sm-2">
                                  <strong><b>Literate</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox4" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                                 <div class="col-sm-3">
                                  <strong><b>Uneducated</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox9" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                                 <div class="col-sm-4">
                                 <strong><b>Middle School Certificate</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox10" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                                 <div class="col-sm-3">
                                 <strong><b>Primary School Certificate</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox11" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                               </div><br />
                              </div>
                              </div>
                                <br />
                               
                            </fieldset>
                           
                        </div>
                        <div id="tabs-5" style="font-family: Calibri; font-size: 12px;">
                           
                            <fieldset style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                                <div class="row" style="font-family: Calibri">
                                
                                 <div class="col-sm-12">
                                 <h6><b>Employment Status:</b></h6><br />
                                 <div class="row">
                                 <div class="col-sm-3">
                                 <strong><b>Profession</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox12" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                                 <div class="col-sm-3">
                                 <strong><b>Semi-Profession</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox13" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                                 <div class="col-sm-3">
                                 <strong><b>clerical</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox14" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                                 <div class="col-sm-3">
                                 <strong><b>Shop Owner</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox15" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                               
                               </div><br />
                                <div class="row">
                                
                                 <div class="col-sm-3">
                                 <strong><b>Skilled Worker</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox16" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                                 <div class="col-sm-3">
                                 <strong><b>Semi-Skilled Worker</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox17" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                                 <div class="col-sm-3">
                                 <strong><b>UnSkilled Worker</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox32" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                                 <div class="col-sm-3">
                                 <strong><b>Unemployed</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox33" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                               
                               </div><br />
                              
                                <div class="row">
                                 <div class="col-sm-12">
                                 <b>Monthly Income of Family</b>
                                 <input type="text" id="txtIncome" class="form-control" />
                                
                                </div>
                                 </div>
                                </div>
                                </div>
                                <br />
                               
                            </fieldset>
                           
                        </div>
                        <div id="tabs-6" style="font-family: Calibri; font-size: 12px;">
                           
                            <fieldset style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                                <div class="row mt-3 ml-1" style="font-family: Calibri" >
                                
                                
                                 <h6><b>Religion:</b></h6><br />
                                
                                 <div class="col-sm-2">
                                 <strong><b>Hindu</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox18" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                                 <div class="col-sm-2">
                                 <strong><b>Christian</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox19" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                                 <div class="col-sm-2">
                                 <strong><b>Muslim</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox20" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                                <div class="col-sm-2">
                                 <strong><b>Sikh</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox21" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                                 <div class="col-sm-2">
                                 <strong><b>Other</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox22" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                              
                               
                                  
                                </div>
                                <br />
                               
                            </fieldset>
                           
                        </div>
                        <div id="tabs-7" style="font-family: Calibri; font-size: 12px;">
                           
                            <fieldset style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                                <div class="row ml-1 mt-3" style="font-family: Calibri">
                               
                           
                                  <h6><b>Residence:</b></h6>
                               
                                
                                  <div class="col-sm-1">
                                  <strong><b>Rural</b></strong>
                                 </div>
                                 <div class="col-sm-1">
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox24" class="ml-0 mt-0" style="zoom: 1.5;">
                                </div>
                                  <div class="col-sm-1">
                                 <strong><b>Urban</b></strong>
                                 </div>
                                 <div class="col-sm-1">
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox25" class="ml-0 mt-0" style="zoom: 1.5;">
                                </div>
                                <div class="col-sm-8">
                                </div><br /><br />
                               
                                  
                                </div>
                                <br />
                               
                            </fieldset>
                           
                        </div>
                        <div id="tabs-8" style="font-family: Calibri; font-size: 12px;">
                           
                        <fieldset style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                                <div class="row" style="font-family: Calibri">
                                <div class="col-sm-12">
                                <b>Total duration of illness:</b>
                                <input type="text" class="form-control" id="textDurationIllness" />
                                </div>
                                 </div><br />
                                <div class="row" style="font-family: Calibri">
                                 <div class="col-sm-12">
                                  <b>Duration of current Episode:</b>
                                 <input type="text" class="form-control" id="text8" />
                                </div>
                                 
                                 </div><br />
                                 <div class="row">
                                 <div class="col-sm-1">
                                  <h6><b>Course:</b></h6>
                                 
                                </div>
                                 <div class="col-sm-1">
                                  <b>Continuous</b>
                                  </div>
                                  <div class="col-sm-1">
                                 
                               
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox23" class="ml-0 mt-0" style="zoom: 1.5;">
                                </div>
                                 <div class="col-sm-1">
                                 <strong><b>Episodic</b></strong>
                                 </div>
                                <div class="col-sm-1">
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox26" class="ml-0 mt-0" style="zoom: 1.5;">
                                </div>
                                
                                 <div class="col-sm-1">
                                  <h6><b>Stressors:</b></h6>
                                  </div>
                                   <div class="col-sm-1">
                                  <strong><b>Absent</b></strong>
                                 </div>
                                 <div class="col-sm-1">
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox5" class="ml-0 mt-0" style="zoom: 1.5;">
                                </div>
                                  <div class="col-sm-1">
                                 <strong><b>Present</b></strong>
                                 </div>
                                 <div class="col-sm-1">
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox27" class="ml-0 mt-0" style="zoom: 1.5;">
                                </div>
                                <div class="col-sm-2">
                                  
                                  </div>
                                
                                </div><br />
                                 <div class="row" style="font-family: Calibri">
                                 <div class="col-sm-12">
                                <b>Number of Previous episodes:</b>
                                <input type="text" class="form-control" id="text10" />
                                </div>
                                </div><br />
                                 </fieldset>
                                </div>
                          <div id="tabs-9" style="font-family: Calibri; font-size: 12px;">
                           
                            <fieldset style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                                <div class="row" style="font-family: Calibri">
                                    <div class="col-sm-4">
                                        <b>Name</b>
                                        <input id="txtCareName" type="text" class="form-control" />
                                    </div>
                                    <div class="col-sm-4">
                                        <b>DOB</b>
                                        <input id="txtCareDOB" type="text" class="form-control" />
                                    </div>
                                    <div class="col-sm-4">
                                        <b>Gender</b>
                                        <input id="txtCareGender" type="text" class="form-control" />
                                    </div>
                                </div>
                                <br />
                                <div class="row" style="font-family: Calibri">
                                    <div class="col-sm-4">
                                        <b>Agegroup</b>
                                        <input id="txtAgegroup" type="text" class="form-control" />
                                    </div>
                                    <div class="col-sm-4">
                                        <b>Trained</b>
                                        <input id="txtTrained" type="text" class="form-control" />
                                    </div>
                                    <div class="col-sm-4">
                                        <b>Marital Status</b>
                                        <input id="txtMaritalStatus" type="text" class="form-control" />
                                    </div>
                                </div>
                                <br />
                                <div class="row" style="font-family: Calibri">
                                    <div class="col-sm-4">
                                        <b>Education</b>
                                        <input id="txtEducation" type="text" class="form-control" />
                                    </div>
                                    <div class="col-sm-4">
                                        <b>Occupation</b>
                                        <input id="txtOccupation" type="text" class="form-control" />
                                    </div>
                                    <div class="col-sm-4">
                                        <b>Religion</b>
                                        <input id="txtReligion" type="text" class="form-control" />
                                    </div>
                                </div>
                            </fieldset>
                           
                        </div>
                          </div>
                 <!-- Grid Start Here---->
                  <fieldset class="mt-3" style="border-width: thin; border-radius: 5px; height: auto;
                            font-family: Calibri">
                            <legend style="color: #0000ffd9; font-family: Calibri;">
                                    <h6 style="font-family: Calibri; font-weight: bold">
<%--                                      [Grid Information]--%>
                                    </h6>
                                </legend>
                <div class="row">
                <div class="col-sm-12">
                    <div class="tab">
                        <button type="button" style="font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;"
                            class="tablinks" onclick="openCity(event, 'Presenting_symptoms')" id="defaultOpen">
                           <%-- <i class="fa fa-file-o"></i>--%>&nbsp;PRESENTING SYMPTOMS</button>
                        <button type="button" style="font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;"
                            class="tablinks" onclick="openCity(event, 'AdditionalSymptoms_details')" >
                            &nbsp;ADDITIONAL SYMPTOMS DETAILS</button>
                        <button type="button" style="font-weight: normal; font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;"
                            class="tablinks" onclick="openCity(event, 'Past_treatment')">
                            &nbsp;PAST TREATMENT HISTORY</button>
                        <button type="button" style="font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;"
                            class="tablinks" onclick="openCity(event, 'Family_history')">
                            &nbsp;FAMILY HISTORY</button>
                        <button type="button" style="font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;"
                            class="tablinks" onclick="openCity(event, 'Personal_history')">
                            &nbsp;PERSONAL HISTORY</button>
                        <button type="button" style="font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;"
                            class="tablinks" onclick="openCity(event, 'Pre_morbidPersonality')">
                           &nbsp;PRE MORBID PERSONALITY TRAITS</button>
                        <button type="button" style="font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;"
                            class="tablinks" onclick="openCity(event, 'Physical_examination')">
                            &nbsp;PHYSICAL EXAMINATION</button>
                        <button type="button" style="font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;"
                            class="tablinks" onclick="openCity(event, 'MentalStatus_examination')">
                            &nbsp;MENTAL STATUS EXAMINATION</button> 
                        <button type="button" style="font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;"
                            class="tablinks" onclick="openCity(event, 'Noncompliance')">
                            &nbsp;REASON FOR NONCOMPLIANCE WITH MEDICATION</button> 
                             <button type="button" style="font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;"
                            class="tablinks" onclick="openCity(event, 'Provisional_diagnosis')">
                            &nbsp;PROVISIONAL DIAGNOSIS</button> 
                             <button type="button" style="font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;"
                            class="tablinks" onclick="openCity(event, 'Differential_diagnosis')">
                            &nbsp;DIFFERENTIAL DIAGNOSIS</button> 
                             <button type="button" style="font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;"
                            class="tablinks" onclick="openCity(event, 'Co_morbidity')">
                            &nbsp;CO-MORBIDITY</button> 
                            <button type="button" style="font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;"
                            class="tablinks" onclick="openCity(event, 'Management_plan')">
                           &nbsp;MANAGEMENT PLAN</button> 
                            <button type="button" style="font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;"
                            class="tablinks" onclick="openCity(event, 'Follow_up')">
                            &nbsp;PROGRESS/ FOLLOW UP NOTES</button> 
                            <button type="button" style="font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;"
                            class="tablinks" onclick="openCity(event, 'Prescripation_writting')">
                            &nbsp;PRESCRIPATIONS WRITTING</button> 
                                  
                    </div>
                      <div id="Presenting_symptoms" class="tabcontent" style="font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;font-size: 12px;">
                      <fieldset class="mt-3" style="border-width: thin; border-radius: 5px; height: auto;
                            font-family: Calibri">
                            <legend style="color: #0000ffd9; font-family: Calibri;">
                                    <h6 style="font-family: Calibri; font-weight: bold">
                                      [Presenting Symptoms]
                                    </h6>
                                </legend>
                       <div class="GridPresenting_symptoms" id="Presenting_symptoms"></div>
                       </fieldset>                       </div>
                      <div id="AdditionalSymptoms_details" class="tabcontent" style="font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;font-size: 13px;">
                       <fieldset class="mt-3" style="border-width: thin; border-radius: 5px; height: auto;
                            font-family: Calibri">
                            <legend style="color: #0000ffd9; font-family: Calibri;">
                                    <h6 style="font-family: Calibri; font-weight: bold">
                                      [Additional Details]
                                    </h6>
                                </legend>
                       <div class="row" style="font-family: Calibri">
                         
                        <div class="col-sm-12">
                         <b>Other Psychitatric Symptoms :</b>
                       <div class="row mt-4">
                                 <div class="col-sm-2">
                                  Depression
                       </div>
                                 
                       <div class="col-sm-1">
                          <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox28" class="ml-0 mt-0" style="zoom: 1.5;">
                       </div>
                       <div class="col-sm-1">
                       Mania
                       </div>
                                 <div class="col-sm-1">
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox30" class="ml-0 mt-0" style="zoom: 1.5;">
                                </div>
                                 <div class="col-sm-1">
                                 OCD
                                  </div>
                                   <div class="col-sm-1">
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox36" class="ml-0 mt-0" style="zoom: 1.5;">
                                </div>
                                 <div class="col-sm-1">
                                 Others
                                 </div>
                                 <div class="col-sm-1">
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox31" class="ml-0 mt-0" style="zoom: 1.5;">
                                </div>
                                 <div class="col-sm-3">
                               
                                </div>
                                 
                                
                        </div>
                                
                             
                       
                     
                        </div>
                         
                        
                        </div><br />
                       <div class="row" style="font-family: Calibri">
                       <div class="col-sm-2">
                      <b>DSH:</b>
                       </div>
                      
                      <div class="col-sm-1">
                      Absent
                       </div>
                                 
                       <div class="col-sm-1">
                          <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox37" class="ml-0 mt-0" style="zoom: 1.5;">
                       </div>
                       <div class="col-sm-1">
                       Present
                       </div>
                                 <div class="col-sm-1">
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox38" class="ml-0 mt-0" style="zoom: 1.5;">
                                </div>
                                
                                 <div class="col-sm-6">
                               
                                </div>
                                 
                                
                       
                                
                             
                       
                     
                     
                         
                        
                        </div><br />
                         <div class="row" style="font-family: Calibri">
                       <div class="col-sm-3">
                      <b>Suicidal Ideation:</b>
                       </div>
                      
                      <div class="col-sm-1">
                     Absent
                       </div>
                                 
                       <div class="col-sm-1">
                          <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox39" class="ml-0 mt-0" style="zoom: 1.5;">
                       </div>
                       <div class="col-sm-1">
                      Present
                       </div>
                                 <div class="col-sm-1">
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox40" class="ml-0 mt-0" style="zoom: 1.5;">
                                </div>
                                
                                 <div class="col-sm-6">
                               
                                </div>
                                 
                                
                       
                                
                             
                       
                     
                     
                         
                        
                        </div><br />
                         <div class="row" style="font-family: Calibri">
                       <div class="col-sm-3">
                       <b>Suicidal Attempts:</b>
                       </div>
                      
                      <div class="col-sm-1">
                      Absent
                       </div>
                                 
                       <div class="col-sm-1">
                          <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox41" class="ml-0 mt-0" style="zoom: 1.5;">
                       </div>
                       <div class="col-sm-1">
                       Present
                       </div>
                                 <div class="col-sm-1">
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox42" class="ml-0 mt-0" style="zoom: 1.5;">
                                </div>
                                
                                 <div class="col-sm-6">
                               
                                </div>
                                 
                                
                       
                                
                             
                       
                     
                     
                         
                        
                        </div><br />
                        
                       <div class="row" style="font-family: Calibri">
                       <div class="col-sm-3">
                       <b>Substance Use:</b>
                       </div>
                      
                      <div class="col-sm-1">
                     Absent
                       </div>
                                 
                       <div class="col-sm-1">
                          <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox43" class="ml-0 mt-0" style="zoom: 1.5;">
                       </div>
                       <div class="col-sm-1">
                       Present
                       </div>
                                 <div class="col-sm-1">
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox44" class="ml-0 mt-0" style="zoom: 1.5;">
                                </div>
                                
                                 <div class="col-sm-6">
                               
                                </div>
                            </div><br />
                              <div class="row" style="font-family: Calibri">
                       <div class="col-sm-3">
                       <b>Substance-Use:</b>
                       </div>
                       <div class="col-sm-1">
                          <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox47" class="ml-0 mt-0" style="zoom: 1.5;">
                       </div>
                      
                      <div class="col-sm-1">
                      Abuse
                       </div>
                                 
                       <div class="col-sm-1">
                          <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox45" class="ml-0 mt-0" style="zoom: 1.5;">
                       </div>
                       <div class="col-sm-2">
                      Depedence
                       </div>
                                 <div class="col-sm-1">
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox46" class="ml-0 mt-0" style="zoom: 1.5;">
                                </div>
                                
                                 <div class="col-sm-3">
                               
                                </div>
                            </div><br />
                            <div class="row" style="font-family: Calibri">
                            <div class="col-sm-12">
                            <b>Substance used:(tick all that apply): alcohol/nicotine/cannabis/opiod/benzodiazepine/inhalants/caffeine/Others</b>
                            </div>
                            </div><br />
                            <div class="row" style="font-family: Calibri">
                            <div class="col-sm-3">
                            <b>Sexual Dysfunction:</b>
                            </div>
                            <div class="col-sm-3">
                            <select class="form-control" id="ddlYesNo"> <option value"0">select</option><option value"0">yes</option><option value"0">No</option></select>
                            </div>
                            <div class="col-sm-1">
                           Specify
                            </div>
                            <div class="col-sm-5">
                            <textarea class="form-control" id="txtSpecify" ></textarea>
                           
                            
                            </div>
                            </div><br />
                             <div class="row" style="font-family: Calibri">
                             <div class="col-sm-12">
                              <b>Co-Morbid medical history(Specify):</b>
                             </div>
                             </div><br />
                           <div class="row" style="font-family: Calibri">
                           <div class="col-sm-3">
                            Diabetes Mellitus
                           <br />
                           <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox48" class="ml-2 mt-0" style="zoom: 1.5;">
                            </div>
                             <div class="col-sm-2">
                            HyperTension
                           <br />
                           <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox49" class="ml-2 mt-0" style="zoom: 1.5;">
                            </div>
                             <div class="col-sm-2">
                           Hypothyrodism
                           <br />
                           <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox50" class="ml-2 mt-0" style="zoom: 1.5;">
                            </div>
                             <div class="col-sm-3">
                           Neurological Illness
                           <br />
                           <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox51" class="ml-2 mt-0" style="zoom: 1.5;">
                            </div>
                             <div class="col-sm-1">
                            Others
                           <br />
                           <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox52" class="ml-2 mt-0" style="zoom: 1.5;">
                            </div>
                             <div class="col-sm-1">
                           
                            </div>
                            
                            </div>
                        
                        
                       
                           
                        </fieldset>
                     </div>
                              
                      <div id="Past_treatment" class="tabcontent" style="font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;font-size: 13px;">
                           <fieldset class="mt-3" style="border-width: thin; border-radius: 5px; height: auto;
                            font-family: Calibri">
                            <legend style="color: #0000ffd9; font-family: Calibri;">
                                    <h6 style="font-family: Calibri; font-weight: bold">
                                      [Past Treatment History]
                                    </h6>
                                </legend>
                         
                         
                         <div id="divScrollN"  style="overflow-x: auto;">
                         
                         <table class="table table-bordered table-hover tblProvisionalDiagnosis" id="tblProvisionalDiagnosis">
                         <thead style="font-size: 14px;">
                         <tr >
                         <th style="white-space: nowrap">No</th>
                        <th  style="white-space: nowrap">Medication</th>
                         <th style="white-space: nowrap">Dose</th>
                         <th style="white-space: nowrap">Duration(Weeks/Yrs)</th>
                         <th style="white-space: nowrap">Response(Full/Partial)</th>
                         <th style="white-space: nowrap">Compliance</th>
                         <th style="white-space: nowrap">Side Effect Specify(If any)</th>
                        </tr>
                         </thead>
                         <tbody>
                           <tr">
                         <td style="padding:50px;"></td>
                         <td style="padding:50px;"></td>
                         <td style="padding:50px;"></td>
                         <td style="padding:50px;"></td>
                         <td style="padding:50px;"></td>
                         <td style="padding:50px;"></td>
                         <td style="padding:50px;"></td>
                        
                         
                         </tr>
                         </tbody></table>
                          
                         </div><br />
                          <h6><b>Past Psychiatric Admission:</b></h6>
                         <div class="row">
                        
                         <div class="col-sm-3">
                         Select Y/N
                        <select class="form-control" id="Select3"> <option value"0"="">select</option><option value"0"="">yes</option><option value"0"="">No</option></select>
                         </div>
                          <div class="col-sm-3">
                         Specify Number
                         <input type="text" class="form-control" />
                         </div>
                          <div class="col-sm-3">
                        Year
                           <input type="text" class="form-control" />
                           </div>
                            <div class="col-sm-3">
                           Duration
                             <input type="text" class="form-control" />
                             </div>
                             </div>
                           
                               </fieldset>
                              </div>
                     
                      <div id="Family_history" class="tabcontent" style="font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;font-size: 13px;">
                          <fieldset class="mt-3" style="border-width: thin; border-radius: 5px; height: auto;
                            font-family: Calibri">
                            <legend style="color: #0000ffd9; font-family: Calibri;">
                                    <h6 style="font-family: Calibri; font-weight: bold">
                                      [Family History]
                                    </h6>
                                </legend>
                         
                          
                         <div class="row" style="font-family: Calibri; font-size: 14px;">
                         <div class="col-sm-6">
                           Family History Of Psychiatric illness:
                        </div>
                        <div class="col-sm-3">
                         <div class="radio"><i class="fa fa-circle-thin" id="I15" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> YES &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I16" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> NO</div>
                        </div>
                         
                         </div><br />
                         <div class="row" style="font-family: Calibri; font-size: 14px;" >
                         <div class="col-sm-2">
                           History Of:
                        </div>
                        <div class="col-sm-4">
                         Substance use
                         </div>
                        <div class="col-sm-3">
                         <div class="radio"><i class="fa fa-circle-thin" id="I1" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> YES &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I2" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> NO</div>
                        </div>
                         
                         </div><br />
                          <div class="row" style="font-family: Calibri; font-size: 14px;">
                           <div class="col-sm-2">
                          
                        </div>
                        
                        <div class="col-sm-4">
                         Psychosis
                         </div>
                         <div class="col-sm-3">
                         <div class="radio"><i class="fa fa-circle-thin" id="I3" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> YES &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I4" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> NO</div>
                        </div>
                         
                         </div><br />
                           <div class="row" style="font-family: Calibri; font-size: 14px;">
                           <div class="col-sm-2">
                          
                        </div>
                        
                        <div class="col-sm-4">
                         Biploar Disorder
                         </div>
                          <div class="col-sm-3">
                         <div class="radio"><i class="fa fa-circle-thin" id="I5" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> YES &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I6" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> NO</div>
                        </div>
                         
                         </div><br />
                           <div class="row" style="font-family: Calibri; font-size: 14px;">
                        <div class="col-sm-2">
                          
                        </div>
                        <div class="col-sm-4">
                         Depression
                         </div>
                         <div class="col-sm-3">
                         <div class="radio"><i class="fa fa-circle-thin" id="I7" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> YES &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I8" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> NO</div>
                        </div>
                         </div><br />
                           <div class="row" style="font-family: Calibri; font-size: 14px;">
                           <div class="col-sm-2">
                          
                        </div>
                       
                        <div class="col-sm-4">
                         OCD
                         </div>
                        <div class="col-sm-3">
                         <div class="radio"><i class="fa fa-circle-thin" id="I9" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> YES &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I10" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> NO</div>
                        </div>
                         </div><br />
                           <div class="row" style="font-family: Calibri; font-size: 14px;">
                           <div class="col-sm-2">
                          
                        </div>
                          <div class="col-sm-10">
                           Others(Specify)
                          </div>
                        
                       
                         </div><br />
                           <div class="row" style="font-family: Calibri; font-size: 14px;">
                          <div class="col-sm-2">
                          
                        </div>
                        <div class="col-sm-4">
                         Absonding/wandering/missing
                         </div>
                        <div class="col-sm-3">
                         <div class="radio"><i class="fa fa-circle-thin" id="I11" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> YES &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I12" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> NO</div>
                        </div>
                         </div><br />
                           <div class="row" style="font-family: Calibri; font-size: 14px;">
                           <div class="col-sm-2">
                          
                        </div>
                        
                        <div class="col-sm-4">
                        Complete Suicide
                         </div>
                         <div class="col-sm-3">
                         <div class="radio"><i class="fa fa-circle-thin" id="I13" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> YES &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I14" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> NO</div>
                        </div>
                         </div><br />
                           <div class="row" style="font-family: Calibri; font-size: 14px;">
                           <div class="col-sm-3">
                           <b>Treatment Taken:</b>
                           </div>
                           <div class="col-sm-3">
                         <div class="radio"><i class="fa fa-circle-thin" id="I17" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> YES &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I18" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> NO</div>
                        </div>
                        </div><br />
                           <div class="row" style="font-family: Calibri; font-size: 14px;">
                           <div class="col-sm-4">
                           <b>Best Response to(Specify):</b>
                           </div>
                          <div class="col-sm-5">
                           <input type="text" id="txtResponse" class="form-control" />
                           </div>
                          </div><br />
                          </div>
                        <div id="Personal_history" class="tabcontent" style="font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;font-size: 12px;">
                         <legend style="color: #0000ffd9; font-family: Calibri;">
                                    <h6 style="font-family: Calibri; font-weight: bold">
                                      [Personal History]
                                    </h6>
                                </legend>
                         
                          
                         <div class="row" style="font-family: Calibri; font-size: 14px;">
                         <table class="table table-bordered table-hover tblProvisionalDiagnosis" id="Table6">
                         
                         <tbody>
                         <tr>
                         <td>A. Birth-Perinatal complications</td>
                         <td> <div class="radio"><i class="fa fa-circle-thin" id="I19" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> YES &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I20" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> NO</div></td>
                         <td><input type="text" class="form-control" id="textSpecify" /></td>
                         
                        
                        
                         
                         </tr>
                          <tr>
                         <td>B. Developement Milestones age Appropriate</td>
                        <td> <div class="radio"><i class="fa fa-circle-thin" id="I21" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> YES &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I22" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> NO</div></td>
                         <td><input type="text" class="form-control" id="text1" /></td>
                         
                        
                        
                         
                         </tr>
                          <tr>
                         <td>C. Emotional Problems</td>
                         <td> <div class="radio"><i class="fa fa-circle-thin" id="I23" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> YES &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I24" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> NO</div></td>
                         <td><input type="text" class="form-control" id="text2" /></td>
                         
                        
                        
                         
                         </tr>
                          <tr>
                         <td>D. Conduct Problems</td>
                        <td> <div class="radio"><i class="fa fa-circle-thin" id="I25" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> YES &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I26" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> NO</div></td>
                         <td><input type="text" class="form-control" id="text3" /></td>
                         
                        
                        
                         
                         </tr>
                          <tr>
                         <td>E. ADHD</td>
                        <td> <div class="radio"><i class="fa fa-circle-thin" id="I27" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> YES &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I28" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> NO</div></td>
                         <td><input type="text" class="form-control" id="text4" /></td>
                         
                        
                        
                         
                         </tr>
                          <tr>
                         <td>1. Marital/Family Discord</td>
                        <td> <div class="radio"><i class="fa fa-circle-thin" id="I29" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> YES &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I30" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> NO</div></td>
                         <td><input type="text" class="form-control" id="text5" /></td>
                         
                        
                         
                         </tr>
                          <tr>
                         <td>2. Legal Problems</td>
                         <td> <div class="radio"><i class="fa fa-circle-thin" id="I31" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> YES &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I32" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> NO</div></td>
                         <td><input type="text" class="form-control" id="text6" /></td>
                         
                        
                        
                         
                         </tr>
                          <tr>
                         <td>Any Signi</td>
                        <td> <div class="radio"><i class="fa fa-circle-thin" id="I33" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> YES &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I34" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> NO</div></td>
                         <td><input type="text" class="form-control" id="text7" /></td>
                         
                        
                         
                         </tr>
                          
                         </tbody></table>
                         </div>
                           
                               </div>
                             
                     <div id="Pre_morbidPersonality" class="tabcontent" style="font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;font-size: 12px;">
                         <fieldset class="mt-3" style="border-width: thin; border-radius: 5px; height: auto;
                            font-family: Calibri">
                            
                        <legend style="color: #0000ffd9; font-family: Calibri;">
                        
                                    <h6 style="font-family: Calibri; font-weight: bold">
                                      [Pre Morbid Personality traits]
                                    </h6>
                                </legend>
                                
                         
                          
                          <div class="row" style="font-family: Calibri; font-size: 14px;">
                         <table class="table table-bordered table-hover tblProvisionalDiagnosis" id="Table7">
                         
                         <tbody>
                         <tr>
                         <td>Cluster A</td>
                        <td> <div class="radio"><i class="fa fa-circle-thin" id="I35" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> </div></td>
                        
                         
                         </tr>
                          <tr>
                         <td>Cluster B</td>
                       <td> <div class="radio"><i class="fa fa-circle-thin" id="I36" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> </div></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td>Cluster C</td>
                        <td> <div class="radio"><i class="fa fa-circle-thin" id="I39" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> </div></td>
                        
                         
                         </tr>
                           <tr>
                         <td>Well Adjusted</td>
                        <td> <div class="radio"><i class="fa fa-circle-thin" id="I37" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> </div></td>
                        
                         
                         </tr>
                         
                           <tr>
                         <td>Other(Specify)</td>
                        <td> <input type="text" class="form-control" /></td>
                        
                         
                         </tr>
                         
                         
                          
                         </tbody></table>
                         </div>
                         </fieldset>
                         </div>
                     <div id="Physical_examination" class="tabcontent" style="font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;font-size: 12px;">
                         <fieldset style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                            <legend style="color: #0000ffd9; font-family: Calibri;">
                        
                                    <h6 style="font-family: Calibri; font-weight: bold">
                                      [Physical Examination]
                                    </h6>
                                </legend>
                        <div class="row" style="font-family: Calibri; font-size: 14px;">
                         <table class="table table-bordered table-hover tblProvisionalDiagnosis" id="Table8">
                         
                         <tbody>
                         <tr>
                         <td>1. Weight</td>
                        <td> <div class="radio"><i class="fa fa-circle-thin" id="I38" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> </div></td>
                        
                         
                         </tr>
                          <tr>
                         <td>2. Height</td>
                       <td> <div class="radio"><i class="fa fa-circle-thin" id="I40" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> </div></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td>3. BMI</td>
                        <td> <div class="radio"><i class="fa fa-circle-thin" id="I41" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> </div></td>
                        
                         
                         </tr>
                           <tr>
                         <td>4. General Examination(Tick if Present)</td>
                        <td> <div class="radio"><i class="fa fa-circle-thin" id="I42" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> </div></td>
                        
                         
                         </tr>
                         
                          
                         
                          
                         </tbody></table>
                         </div>
                       
                           <div class="row mt-3 ml-1" style="font-family: Calibri">
                           
                                <div class="col-sm-3">
                                 <strong><b>Pallor</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox72" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                                 <div class="col-sm-3">
                                 <strong><b>Leterus</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox73" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                                 <div class="col-sm-3">
                                 <strong><b>Cyanosis</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox74" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                                 <div class="col-sm-3">
                                 <strong><b>Clubbing</b></strong>
                                <br>
                                <input type="checkbox" onchange="checkHealthInsurance()" id="Checkbox75" class="ml-2 mt-2" style="zoom: 1.5;">
                                </div>
                               
                               
                                  
                                </div><br />
                              <div class="row" style="font-family: Calibri; font-size: 14px;">
                         <table class="table table-bordered table-hover tblProvisionalDiagnosis" id="Table9">
                         
                         <tbody>
                         <tr>
                         <td><div class="radio"><i class="fa fa-circle-thin" id="I43" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> Lymphadenopathy &nbsp;</div></td>
                        
                        <td><div class="radio"><i class="fa fa-circle-thin" id="I47" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i>Edema &nbsp;&nbsp;</div></td>
                        
                         
                         </tr>
                          <tr>
                         <td>5. Pulse</td>
                       <td> <div class="radio"><i class="fa fa-circle-thin" id="I44" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> </div></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td>6. B.P.</td>
                        <td> <div class="radio"><i class="fa fa-circle-thin" id="I45" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> </div></td>
                        
                         
                         </tr>
                           <tr>
                         <td>7. Gastrointestinal System</td>
                        <td> <div class="radio"><i class="fa fa-circle-thin" id="I46" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> WSNL &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I48" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> ABN</div></td>
                        
                         
                         </tr>
                             <tr>
                         <td>7. Gastrointestinal System</td>
                        <td> <div class="radio"><i class="fa fa-circle-thin" id="I49" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> WNL &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I50" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> ABN</div></td>
                        
                         
                         </tr>
                             <tr>
                         <td>8. Respiratory System</td>
                        <td> <div class="radio"><i class="fa fa-circle-thin" id="I51" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> WNL &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I52" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> ABN</div></td>
                        
                         
                         </tr>
                             <tr>
                         <td>9. Musculoskeletal System</td>
                        <td> <div class="radio"><i class="fa fa-circle-thin" id="I53" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> WNL &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I54" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> ABN</div></td>
                        
                         
                         </tr>
                             <tr>
                         <td>10. Cardiovascular System</td>
                        <td> <div class="radio"><i class="fa fa-circle-thin" id="I55" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> WNL &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I56" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> ABN</div></td>
                        
                         
                         </tr>
                          <tr>
                         <td>11. Nervous System</td>
                        <td> <div class="radio"><i class="fa fa-circle-thin" id="I57" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> WNL &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I58" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> ABN</div></td>
                        
                         
                         </tr>
                         
                          
                         
                          
                         </tbody></table>
                         </div>
                           
                               </fieldset>
                              </div>
                     
                     <div id="MentalStatus_examination" class="tabcontent" style="font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;font-size: 12px;">
                         <fieldset style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                           <legend style="color: #0000ffd9; font-family: Calibri;">
                        
                                    <h6 style="font-family: Calibri; font-weight: bold">
                                      [Mental Status Examination]
                                    </h6>
                                </legend>
                                  <div class="row" style="font-family: Calibri; font-size: 14px;">
                         <table class="table table-bordered table-hover tblProvisionalDiagnosis" id="Table13">
                         
                         <tbody>
                         <tr>
                         <td>Questions</td>
                        <td> Result</td>
                         <td> Remarks</td>
                        
                         
                         </tr>
                         <tr>
                         <td>1. General Apperance, attitute $ behaviour</td>
                        <td> <div class="radio"><i class="fa fa-circle-thin" id="I59" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> YES &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I65" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> NO</div></td>
                        <td></td>
                         
                         </tr>
                          <tr>
                         <td>2. Psychomotor Activity</td>
                      <td> <div class="radio"><i class="fa fa-circle-thin" id="I60" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> YES &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I66" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> NO</div></td>
                        <td></td>
                        
                         
                         </tr>
                          <tr>
                         <td>3. Rapport</td>
                       <td> <div class="radio"><i class="fa fa-circle-thin" id="I61" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> YES &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I67" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> NO</div></td>
                        <td></td>
                         </tr>
                           <tr>
                         <td>4. Speech</td>
                        <td> <div class="radio"><i class="fa fa-circle-thin" id="I62" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> YES &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I68" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> NO</div></td>
                        <td></td>
                         </tr>
                         
                         <tr>
                         <td>5. Mood & Affect</td>
                       <td> <div class="radio"><i class="fa fa-circle-thin" id="I63" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> YES &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I69" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> NO</div></td>
                        <td></td>
                         </tr>
                         
                         <tr>
                         <td>6. Thought</td>
                      <td> <div class="radio"><i class="fa fa-circle-thin" id="I64" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> YES &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I70" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> NO</div></td>
                        <td></td>
                         
                         </tr>
                         <tr>
                         <td>6. Perceptual abnormalities</td>
                      <td> <div class="radio"><i class="fa fa-circle-thin" id="I71" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> YES &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I72" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> NO</div></td>
                        <td></td>
                         
                         </tr>
                         <tr>
                         <td>6. Cognitive Functions</td>
                      <td> <div class="radio"><i class="fa fa-circle-thin" id="I73" onclick="ChangeRadioYesClass(6239)" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> YES &nbsp;<i onclick="ChangeRadioNoClass(6239)" id="I74" class="fa fa-circle-thin" style="color:red;cursor:pointer;font-weight:bold;font-size:20px;"></i> NO</div></td>
                        <td></td>
                         
                         </tr>
                         
                          
                         
                          
                         
                          
                         </tbody></table>
                         </div>
                                
                           
                               </fieldset>
                              </div>
                     
                     <div id="Noncompliance" class="tabcontent" style="font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;font-size: 12px;">
                         <fieldset style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                            <legend style="color: #0000ffd9; font-family: Calibri;">
                        
                                    <h6 style="font-family: Calibri; font-weight: bold">
                                      [Reason For NonCompliance]
                                    </h6>
                                </legend>
                          <table class="table table-bordered table-hover tblProvisionalDiagnosis" id="Table3" style="font-size:14px;">
                         <thead style="font-size: 14px;">
                         <tr>
                         <th style="white-space: nowrap">Cant't afford Some Medications</th>
                         <th style="white-space: nowrap">Yes</th>
                         <th style="white-space: nowrap">No</th>
                        
                         
                        </tr>
                         </thead>
                         <tbody>
                         <tr>
                         <td>Dicontinoued because of side effect</td>
                         <td></td>
                         <td></td>
                        
                        
                        
                         
                         </tr>
                          <tr>
                         <td>Patient Stopped The medication as he felt better</td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                        <td>Patient Stopped The medication as he felt Helpful</td>
                         <td></td>
                         <td></td>
                        
                        
                        
                         
                         </tr>
                          <tr>
                         <td>Lack of education in the family about medication</td>
                         <td></td>
                         <td></td>
                         
                        
                        
                         
                         </tr>
                          <tr>
                         <td>Family feels that the medication cannot help the patient</td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td>Family stopped The medication as felt it's not helping the patient</td>
                         <td></td>
                         <td></td>
                        
                        
                        
                         
                         </tr>
                          <tr>
                         <td>Family stopped the medication as patient felt better & thought he/she does not need </td>
                         <td></td>
                         <td></td>
                         
                        
                         
                       
                         </tr>
                           <tr>
                         <td>Other specify </td>
                         <td></td>
                         <td></td>
                         
                        
                         
                       
                         </tr>
                         </tbody></table>
                           
                               </fieldset>
                              </div>
                     
                     <div id="Provisional_diagnosis" class="tabcontent" style="font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;font-size: 12px;">
                         <fieldset style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                         <div class="form-control" id="div11">
                         </div>
                           
                               </fieldset>
                              </div>
                     
                     <div id="Differential_diagnosis" class="tabcontent" style="font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;font-size: 12px;">
                         <fieldset style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                         <div class="form-control" id="div13">
                         </div>
                           
                               </fieldset>
                              </div>
                     
                     <div id="Co_morbidity" class="tabcontent" style="font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;font-size: 12px;">
                         <fieldset style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                           <table class="table table-bordered table-hover tblProvisionalDiagnosis" id="Table4">
                         <thead style="font-size: 14px;">
                         <tr>
                         <th style="white-space: nowrap">OCD</th>
                         <th style="white-space: nowrap">Present/Absent</th>
                         </tr>
                         <tr>
                         <th style="white-space: nowrap">Depression</th>
                         <th style="white-space: nowrap">Present/Absent</th>
                         </tr>
                          <tr>
                         <th style="white-space: nowrap">Substance</th>
                         <th style="white-space: nowrap">Present/Absent</th>
                         </tr>
                          <tr>
                         <th style="white-space: nowrap">Other</th>
                         <th style="white-space: nowrap"></th>
                         </tr>
                         </thead>
                        </table>
                           
                               </fieldset>
                              </div>
                     
                         
                     
                      <div id="Management_plan" class="tabcontent" style="font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;font-size: 12px;">
                           <fieldset style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                            <legend style="color: #0000ffd9; font-family: Calibri;">
                        
                                    <h6 style="font-family: Calibri; font-weight: bold">
                                      [Management Plan]
                                    </h6>
                                </legend>
                          <table class="table table-bordered table-hover tblProvisionalDiagnosis" id="Table10" style="font-size:14px;">
                         <thead style="font-size: 14px;">
                        
                         <tr>
                         <th style="white-space: nowrap">Question</th>
                         <th style="white-space: nowrap">Result</th>
                         <th style="white-space: nowrap">Remarks</th>
                        
                         
                        </tr>
                         </thead>
                         <tbody>
                          <b>Pharamcological :</b>
                         <tr>
                         <td>A. Acute Management</td>
                         <td></td>
                         <td></td>
                        
                        
                        
                         
                         </tr>
                          <tr>
                         <td>B. Maintainence Plan</td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                         
                         </tbody>
                         
                          
                         
                         </table>
                         
                           <table class="table table-bordered table-hover tblProvisionalDiagnosis" id="Table11" style="font-size:14px;">
                         <thead style="font-size: 14px;">
                        
                         <tr>
                         <th style="white-space: nowrap">Question</th>
                         <th style="white-space: nowrap">Result</th>
                         <th style="white-space: nowrap">Remarks</th>
                        
                         
                        </tr>
                         </thead>
                        <tbody>
                          <b>Referred To:</b>
                         <tr>
                         <td>A. Clinical-Psychologist</td>
                         <td></td>
                         <td></td>
                        
                        
                        
                         
                         </tr>
                          <tr>
                         <td>B. Neuro-Psychologist</td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                         <tr>
                         <td>C. Occupational Therapist</td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                         
                         </tbody>
                         
                          
                         
                         </table>
                         
                           <table class="table table-bordered table-hover tblProvisionalDiagnosis" id="Table12" style="font-size:14px;">
                         <thead style="font-size: 14px;">
                        
                         <tr>
                         <th style="white-space: nowrap">Question</th>
                         <th style="white-space: nowrap">Result</th>
                         <th style="white-space: nowrap">Remarks</th>
                        
                         
                        </tr>
                         </thead>
                        <tbody>
                          <b>Non Pharamacological</b>
                         <tr>
                         <td>CBT</td>
                         <td></td>
                         <td></td>
                        
                        
                        
                         
                         </tr>
                          <tr>
                         <td>IPT</td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                         <tr>
                         <td>Family Theraphy</td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          </tr>
                         <tr>
                         <td>Supportive Theraphy</td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          </tr>
                         <tr>
                         <td>Biofeedback</td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          </tr>
                         <tr>
                         <td>Relaxation Techniques</td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          </tr>
                         <tr>
                         <td>PAI (positive Activity Intervention)</td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          </tr>
                         <tr>
                         <td>MECT</td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          </tr>
                         <tr>
                         <td>rTMS</td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          </tr>
                         <tr>
                         <td>TDCS</td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          </tr>
                         <tr>
                         <td>Others</td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                         
                         </tbody>
                         
                          
                         
                         </table>
                         
                         
                           
                               </fieldset>
                              </div>
                     
                              
                              <div id="Follow_up" class="tabcontent" style="font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;font-size: 12px;">
                         
                         <fieldset style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                         <legend style="color: #0000ffd9; font-family: Calibri;">
                                    <h6 style="font-family: Calibri; font-weight: bold">
                                      [Progress/Follow Up Notes]
                                    </h6>
                                </legend>
                       
                         
                     
                         
                         <table class="table table-bordered table-hover tblProvisionalDiagnosis" id="Table1">
                         <thead style="font-size: 14px;">
                         <tr>
                         <th style="white-space: nowrap">Symptoms</th>
                         <th style="white-space: nowrap">Improved</th>
                         <th style="white-space: nowrap">Partially Improved</th>
                         <th style="white-space: nowrap">Not Improved</th>
                         <th style="white-space: nowrap">Worsening</th>
                         
                        </tr>
                         </thead>
                         <tbody>
                         <tr>
                         <td>A. Delusion</td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td>B. Hallucination</td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td>C. Catatonic Symptoms</td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td>D. Disorganised Behaviour</td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td>E. First Rank <br /> Symptoms</td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td>1. Audiable thoughts<br />(voice speaking out <br />through aloud)</td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td>2. Voice Arguing<br /> (Referring to patient) </td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td>Voice <br /> Commenting on One's <br />Actions</td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td>Somantic Passiveity</td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td>Throught Withdrawal</td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td>Throught Insertion</td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td>Throught Broadcasting</td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                         </tbody></table>
                          <h6><b>Details of any session of MECT/tdcs/rTMS:</b></h6>
                          <h6>Non Pharmacological:</h6>
                         <table class="table table-bordered table-hover tblProvisionalDiagnosis" id="Table5">
                         <thead style="font-size: 14px;">
                         <tr>
                         <th style="white-space: nowrap"></th>
                         <th style="white-space: nowrap">Yes</th>
                         <th style="white-space: nowrap">No</th>
                        
                         
                        </tr>
                         </thead>
                         <tbody>
                         <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                        
                         
                         </tr>
                          <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                        
                        
                        
                         
                        
                         </tbody></table>
                         
                        
                         <h6>Goals Of Theraphy:</h6>
                         
                         
                         <table class="table table-bordered table-hover tblProvisionalDiagnosis" id="Table2">
                         <thead style="font-size: 14px;">
                         <tr>
                         <th style="white-space: nowrap"></th>
                         <th style="white-space: nowrap">Yes</th>
                         <th style="white-space: nowrap">No</th>
                        
                         
                        </tr>
                         </thead>
                         <tbody>
                         <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                        
                         
                         </tr>
                          <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                        
                         
                         </tr>
                          <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                         
                        
                        
                         
                         </tr>
                          <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                        
                         
                         </tr>
                          <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                         
                        
                         
                         </tr>
                          <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                         
                        
                        
                         
                         </tr>
                          <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                       
                        
                         
                         </tr>
                          <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                        
                         
                         </tr>
                          <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                         
                         </tr>
                          <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                        
                         
                         </tr>
                          <tr>
                         <td></td>
                         <td></td>
                         <td></td>
                        
                        
                        
                         
                         </tr>
                         </tbody></table>
                         
                        <div class="row">
                       
                        <div class="col-sm-12">
                         Education Y/N 
                     
                        </div>
                        </div>
                        <div class="row">
                       
                        <div class="col-sm-12">
                         <h6><b>Preceived Barriers to Treatment Idebtified(check only those that apply)</b></h6>
                     
                        </div>
                        </div>
                        
                        <div class="row">
                       
                        <div class="col-sm-12">
                         <h6><b>Preceived Barriers to Treatment Idebtified(check only those that apply)</b></h6>
                     
                        </div>
                        </div>
                        
                        <div class="row">
                       
                        <div class="col-sm-12">
                         <h6><b>Preceived Barriers to Treatment Idebtified(check only those that apply)</b></h6>
                     
                        </div>
                        </div>
                        <div class="row">
                       
                        <div class="col-sm-12">
                         <h6><b>Preceived Barriers to Treatment Idebtified(check only those that apply)</b></h6>
                     
                        </div>
                        </div>
                        <div class="row">
                       
                        <div class="col-sm-12">
                         <h6><b>Preceived Barriers to Treatment Idebtified(check only those that apply)</b></h6>
                     
                        </div>
                        </div>
                        <div class="row">
                       
                        <div class="col-sm-12">
                         <h6><b>Preceived Barriers to Treatment Idebtified(check only those that apply)</b></h6>
                     
                        </div>
                        </div>
                        
                        
                           
                               </fieldset>
                         </div>
                           
                              
                     
                     <div id="Prescripation_writting" class="tabcontent" style="font-family: Trebuchet MS,Tahoma,Verdana,Arial,sans-serif;font-size: 12px;">
                         <fieldset style="margin-top: 3px; border-width: thin; border-radius: 5px;">
                          <legend style="color: #0000ffd9; font-family: Calibri;">
                        
                                    <h6 style="font-family: Calibri; font-weight: bold">
                                      [Prescripation Writing]
                                    </h6>
                                </legend>
                                 <table class="table table-bordered table-hover tblProvisionalDiagnosis" id="Table14">
                         
                          <tr>
                         <td>Patient Problems</td>
                         <td><input type="text" /></td>
                         
                        
                        
                        
                         
                         </tr>
                        
                         
                         <tbody>
                         <tr>
                         <td>Specify the therapeutic objective</td>
                          <td><input type="text" /></td>
                        
                        
                        
                        
                         
                         </tr>
                          <tr>
                         <td>Instructions & warning</td>
                          <td><input type="text" /></td>
                         
                        
                         
                         </tr>
                          <tr>
                         <td>Monitor Treatment</td>
                          <td><input type="text" /></td>
                        
                        
                         
                       
                         </tr>
                          <tr>
                         <td></td>
                         <td></td>
                         
                        
                        
                        
                         
                         </tr>
                         </tbody></table>
                                
                         
                           
                               </fieldset>
                              </div>
                     
                     
                      
                     
                   </div>
                 </div>
                 </fieldset>
                 
                 
              
                 
                  <!-- Grid end Here---->
                    <fieldset class="mt-3" style="border-width: thin; border-radius: 5px; height: auto;
                            font-family: Calibri">
                            <div class="row">
                                <div class="col-sm-2">
                                </div>
                                <div class="col-sm-8" style="text-align: center;">
                                    <div id="btnSaveInfantToddler" class="btn btn-primary">
                                        <i class="fa fa-save"></i>&nbsp;Save
                                    </div>
                                    <div id="btnUpdateInfantToddler" style="display: none;" class="btn btn-info">
                                        <i class="fa fa-pencil-square-o" aria-hidden="true"></i>&nbsp;&nbsp;Update
                                    </div>
                                   <%--<div id="btnPrintAssessment" class="btn btn-primary">
                                      <i class="fa fa-print"></i>&nbsp;Print
                                    </div>--%>
                                    <div id="btnPrintPdf" class="btn btn-danger" onclick="window.open('PDF/report1.pdf');">
                                        <i class="fa fa-refresh"></i>&nbsp;Print Report
                                    </div>
                                 
                                    <div id="btnResetInfantToddler" class="btn btn-danger">
                                        <i class="fa fa-refresh"></i>&nbsp;Reset
                                    </div>
                                </div>
                                <div class="col-sm-2">
                                </div>
                            </div>
                        </fieldset>
                 
                 
                  
                </div>
            </div>
        </div>
    </div>
    </div>
      <script type="text/javascript">
          function openCity(evt, cityName) {
              var i, tabcontent, tablinks;
              tabcontent = document.getElementsByClassName("tabcontent");
              for (i = 0; i < tabcontent.length; i++) {
                  tabcontent[i].style.display = "none";
              }
              tablinks = document.getElementsByClassName("tablinks");
              for (i = 0; i < tablinks.length; i++) {
                  tablinks[i].className = tablinks[i].className.replace(" active", "");
              }
              document.getElementById(cityName).style.display = "block";
              evt.currentTarget.className += " active";
          }

          // Get the element with id="defaultOpen" and click on it
          document.getElementById("defaultOpen").click();
                             
    </script>

</asp:Content>
