(function($){

$(document).ready(function(){
//alert("hello");
        BindActionProcess();    
        //Button Logout Starts from here
             $("#btnLogout").click(function(){
            //window.location = "LoginPage.aspx";
//            $.ajax({
//                    type: "POST",
//                    contentType: "application/json",
//                    data: "",
//                    url: "PopulateMaster.aspx/DeleteValueInSession",
//                    dataType: "json",
//                    success: function(data) {
//                        alert(data.d);
//                         var _urlval=document.location.origin+"/webdhanvantri/LoginPage.aspx";
//                         window.location =_urlval
//                    },
//                    error: function(XMLHttpRequest, textStatus, errorThrown) {
//                        debugger;
//                    }
                //});
                
                
               $.ajax({
                type: 'POST',
                url: 'PopulateMaster.aspx/DeleteValueInSession',
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
                    //alert(response.d);
                    var _urlval=document.location.origin+"/Vimhans.com/AdminPanel/LoginPage.aspx";
                    window.location =_urlval;
                    
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
            /* Post Data End*/
           
        });
        //Button Logout Ends Here
});
BindActionProcess=function()
    {
        //alert('ddd');
          
        /* Post Data Start */
            $.ajax({
                type: 'POST',
                url: 'PopulateMaster.aspx/BindActionMenu',
                async: false,
                cache: true,
                data: "",
                contentType: 'application/json; charset=utf-8',
                dataType: 'json',
                beforeSend: function () {
                    // before_loading($('#ddlAppraisalCycle'));
                },
                success: function (response) {
                // alert(response.d);
                    var xmlDoc = $.parseXML(response.d);
                    var xml = $(xmlDoc);
                    var items = xml.find("Table");
                    var _html='<ul class="sidenav-second-level collapse" id="collapseComponents" >';
                    $.each(items, function (index) {
                    
                    //alert($(this).find('PVL').text());
                        if(parseInt($(this).find('PVL').text())>0)
                        {
                            _html+='<li style="margin-top:5px;" onclick="LoadTransaction(\''+$(this).find('PAGE_PATH').text()+'\')"><span  style="margin-left:42px;cursor:pointer;color:white;font-size:14px;"  onclick="LoadTransaction(\''+$(this).find('PAGE_PATH').text()+'\')">'+$(this).find('MENU_NAME').text()+'</span></li>';
                        }
                        else
                        {
                            _html+='<li style="color:red;margin-top:5px;"><a class="disabled" style="color:red;pointer-events: none;font-size:14px;" href="'+$(this).find('PAGE_PATH').text()+'">'+$(this).find('MENU_NAME').text()+'</a></li>';
                        }
                    });
                    _html+='</ul>';
                    $("#divAction").html(_html);
                   // alert("end of success ");
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
            /* Post Data End*/
        //
    }
    //Load Transaction starts from here
     LoadTransaction=function(_path){
        //alert(_path);
        //alert(document.location.origin);
        var _urlval=document.location.origin+"/Vimhans.com/AdminPanel/"+_path;
        window.location =_urlval;
        //alert(_urlval);
        //window.location.pathname=_urlval;
        //location.replace(_urlval);
        
        return false;
        //window.location = _urlval;
        //alert(_urlval);
    }
})(jQuery);