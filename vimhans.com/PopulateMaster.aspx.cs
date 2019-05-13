using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Configuration;
using VMS.BuisinessFramework;
using System.Web.Services;

public partial class AdminPanel_PopulateMaster : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    [WebMethod()]
    public static string BindActionMenu()
    {
        BindMenu objBindMenu = new BindMenu();
        DataSet dsResultstring = objBindMenu.BindLoginInfoDetail();
        return dsResultstring.GetXml().ToString();
    }
    [WebMethod()]
    public static string DeleteValueInSession()
    {
        ApplicationFields objApplicationFields = new ApplicationFields();
        objApplicationFields.USER_ID = 0;
        objApplicationFields.USER_NAME = "";
        objApplicationFields.HOSPITAL_ID = 0;
        objApplicationFields.CLINIC_ID = 0;
        return "";
    }
}
