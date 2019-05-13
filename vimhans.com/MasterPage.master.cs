using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using VMS.BuisinessFramework;

public partial class AdminPanel_MasterPage : System.Web.UI.MasterPage
{
    protected void Page_Load(object sender, EventArgs e)
    {
        ApplicationFields objApplicationFields=new ApplicationFields();
        string str = objApplicationFields.USER_NAME;
        if (str == "")
        {
            Response.Redirect("~/LoginPage.aspx");
        }
        spnUserName.InnerText = str + "  ! ";// 

    }
}
