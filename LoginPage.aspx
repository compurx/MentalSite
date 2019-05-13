<%@ Page Language="C#" AutoEventWireup="true" CodeFile="LoginPage.aspx.cs" Inherits="AdminPanel_LoginPage" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Admin Login</title>
    <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom fonts for this template-->
    <link href="vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
    <!-- Custom styles for this template-->
    <link href="css/sb-admin.css" rel="stylesheet">
    <script src="js/jquery-1.7.2.min.js" type="text/javascript"></script>

    <script src="Mainjs/Login.js" type="text/javascript"></script>
</head>
<body>
    <div class="alert alert-success" id="divalertSuccess" style="width: 470px; position: absolute;
        margin-top: -45px; background-color: #1E8449; border: none; margin-left: 400px;
        display: none; z-index: 999; -webkit-box-shadow: -7px 3px 15px -1px rgba(0,0,0,0.35);
        -moz-box-shadow: -7px 3px 15px -1px rgba(0,0,0,0.35); box-shadow: -7px 3px 15px -1px rgba(0,0,0,0.35);">
        <span id="strngSuccess" style="font-weight: bold; color: White; font-family: Calibri;">
            Danger!</span>
    </div>
    <div id="divErrorMsg" class="alert alert-danger" style="width: 470px; position: absolute;
        margin-top: -45px; background-color: #CB4335; border: none; margin-left: 400px;
        display: none; z-index: 999; -webkit-box-shadow: -7px 3px 15px -1px rgba(0,0,0,0.35);
        -moz-box-shadow: -7px 3px 15px -1px rgba(0,0,0,0.35); box-shadow: -7px 3px 15px -1px rgba(0,0,0,0.35);">
        <span id="spnerrormsg" style="font-weight: bold; font-family: Calibri; color: White;"
            class="spnerrormsg">Hello this is Error Message. </span>
    </div>
    <form id="form1" runat="server">
    <body class="bg-dark">
        <div class="container">
            <div class="card mx-auto mt-5" style="width: 550px;">
                <div class="card-header" style="font-weight: bold; font-family: Calibri;">
                    Welcome to Dhanvantri HPMS</div>
                <div class="card-body">
                    <form>
                    <label id="lblMsg" style="display: none; text-align: center; color: Red; font-weight: bold;
                        font-family: Calibri; position: absolute; margin-top: -20px;">
                        Incorrect User Id Password
                    </label>
                    <div class="form-group">
                        <label for="ddlHospital" style="font-family: Calibri">
                            <b>Hospital</b></label>
                        <select id="ddlHospital" class="form-control">
                            <option>-- Select Hospital --</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="ddlClinic" style="font-family: Calibri">
                            <b>Clinic</b></label>
                        <select id="ddlClinic" class="form-control">
                            <option>-- Select Clinic --</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="ddlModule" style="font-family: Calibri">
                            <b>Module</b></label>
                        <select id="ddlModule" class="form-control">
                            <option>-- Select Module --</option>
                        </select>
                    </div>
                    <div class="form-group" style="display: none;" id="frmstore">
                        <label for="ddlStore" style="font-family: Calibri">
                            <b>Store</b></label>
                        <select id="ddlStore" class="form-control">
                            <option>-- Select Store --</option>
                        </select>
                    </div>
                    <div class="form-group" style="display: none;" id="frmlab">
                        <label for="ddlLab" style="font-family: Calibri">
                            <b>Lab</b></label>
                        <select id="ddlLab" class="form-control">
                            <option>-- Select Lab --</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="txuserName" style="font-family: Calibri">
                            <b>User Name</b></label>
                        <input class="form-control" id="txuserName" type="email" aria-describedby="emailHelp"
                            placeholder="User Name">
                    </div>
                    <div class="form-group">
                        <label for="txtPassword" style="font-family: Calibri">
                            <b>Password</b></label>
                        <input class="form-control" id="txtPassword" type="password" placeholder="Password">
                    </div>
                    <a id="btnLogin" class="btn btn-primary btn-block" style="color: White">Login</a>
                    <a id="btnLogindisp" class="btn btn-primary btn-block" style="color: White; display: none">
                        Logging &nbsp;<i class="fa fa-circle-o-notch fa-spin fa-lg"></i></a>
                    </form>
                    <div class="text-center">
                        <%-- <a class="d-block small mt-3" href="register.html">Register an Account</a> --%>
                        <a class="d-block small" href="forgot-password.html">Forgot Password?</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Bootstrap core JavaScript-->

        <script src="vendor/jquery/jquery.min.js"></script>

        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

        <!-- Core plugin JavaScript-->

        <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    </body>
    </form>
</body>
</html>
