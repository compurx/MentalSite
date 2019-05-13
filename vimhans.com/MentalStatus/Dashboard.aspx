<%@ Page Language="C#" MasterPageFile="~/AdminPanel/MasterPage.master" AutoEventWireup="true" CodeFile="Dashboard.aspx.cs" Inherits="AdminPanel_Dashboard" Title="Untitled Page" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
<div style="margin-top: 65px">
        <div class="row">
            <div class="col-xl-3 col-sm-6 mb-3">
                <div class="card text-white bg-primary o-hidden h-100">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fa fa-fw fa-comments"></i>
                        </div>
                        <div class="mr-5">
                            26 New Messages!</div>
                    </div>
                    <a class="card-footer text-white clearfix small z-1" href="#"><span class="float-left">
                        View Details</span> <span class="float-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3">
                <div class="card text-white bg-warning o-hidden h-100">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fa fa-fw fa-list"></i>
                        </div>
                        <div class="mr-5">
                            11 New Tasks!</div>
                    </div>
                    <a class="card-footer text-white clearfix small z-1" href="#"><span class="float-left">
                        View Details</span> <span class="float-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3">
                <div class="card text-white bg-success o-hidden h-100">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fa fa-fw fa-shopping-cart"></i>
                        </div>
                        <div class="mr-5">
                            123 New Orders!</div>
                    </div>
                    <a class="card-footer text-white clearfix small z-1" href="#"><span class="float-left">
                        View Details</span> <span class="float-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
            </div>
            <div class="col-xl-3 col-sm-6 mb-3">
                <div class="card text-white bg-danger o-hidden h-100">
                    <div class="card-body">
                        <div class="card-body-icon">
                            <i class="fa fa-fw fa-support"></i>
                        </div>
                        <div class="mr-5">
                            13 New Tickets!</div>
                    </div>
                    <a class="card-footer text-white clearfix small z-1" href="#"><span class="float-left">
                        View Details</span> <span class="float-right"><i class="fa fa-angle-right"></i></span>
                    </a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <br />
            </div>
        </div>
        <div class="row">
                <div class="col-sm-3">
                </div>
                <div class="col-sm-5">
                        <img src="images/logo.jpg"/>
                </div>
                <div class="col-sm-4">
                </div>
        </div>
      <%--  <div class="row">
            <div class="col-lg-6">
                <div class="panel panel-primary" style="height:170px;">
                    <div class="panel-heading">
                      <i class="fa fa-bullhorn"></i>&nbsp;&nbsp;Corporate Announcement
                    </div>
                    <div class="panel-body">
                        <p id="pcorporate">
                            </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="panel panel-green">
                    <div class="panel-heading">
                       <i class="fa fa-user-plus"></i>&nbsp;&nbsp;Today's Patient Registration
                    </div>
                    <div class="panel-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est
                            vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla
                            augue.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="panel panel-yellow">
                    <div class="panel-heading">
                        <i class="fa fa-birthday-cake"></i>&nbsp;&nbsp;Today's Birthday
                    </div>
                    <div class="panel-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est
                            vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla
                            augue.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="panel panel-red">
                    <div class="panel-heading">
                        <i class="fa fa-heart-o"></i>&nbsp;&nbsp;Today's Marriage Anniversary
                    </div>
                    <div class="panel-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est
                            vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla
                            augue.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="panel panel-info">
                    <div class="panel-heading">
                       <i class="fa fa-bolt"></i>&nbsp;&nbsp;Quick Links
                    </div>
                    <div class="panel-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est
                            vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla
                            augue.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="panel panel-warning">
                    <div class="panel-heading">
                       <i class="fa fa-calendar-plus-o"></i>&nbsp;&nbsp;To-do List
                    </div>
                    <div class="panel-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est
                            vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla
                            augue.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="panel panel-success">
                    <div class="panel-heading">
                        <i class="fa fa-signal"></i>&nbsp;&nbsp;Thought of the Day
                    </div>
                    <div class="panel-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est
                            vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla
                            augue.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="panel panel-danger">
                    <div class="panel-heading">
                       <i class="fa fa-calendar"></i>&nbsp;&nbsp;Holiday
                    </div>
                    <div class="panel-body">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt est
                            vitae ultrices accumsan. Aliquam ornare lacus adipiscing, posuere lectus et, fringilla
                            augue.</p>
                    </div>
                </div>
            </div>
        </div>--%>
    </div>
    <!-- Toggle between fixed and static navbar-->

    <script>
    $('#toggleNavPosition').click(function() {
      $('body').toggleClass('fixed-nav');
      $('nav').toggleClass('fixed-top static-top');
    });

    </script>

    <!-- Toggle between dark and light navbar-->

    <script>
    $('#toggleNavColor').click(function() {
      $('nav').toggleClass('navbar-dark navbar-light');
      $('nav').toggleClass('bg-dark bg-light');
      $('body').toggleClass('bg-dark bg-light');
    });

    </script>
</asp:Content>

