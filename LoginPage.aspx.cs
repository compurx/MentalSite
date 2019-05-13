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
using System.Web.Services;
using VMS.BuisinessFramework;

public partial class AdminPanel_LoginPage : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    [WebMethod()]
    public static string CheckLoginCredential(string HOSPITAL_NAME, string HOSPITAL_ID, string CLINIC_NAME, string CLINIC_ID, string MODULE_NAME, string MODULE_ID, string STORE_NAME, string STORE_ID, string LAB_NAME, string LAB_ID, string USER_NAME, string PASSWORD)
    {
        string resultstring = string.Empty;
        try
        {
            DataSet ds = new DataSet();
            ApplicationFields objApplicationFields = new ApplicationFields();

            LoginInfo objLoginInfo = new LoginInfo();
            DataTable dt = new DataTable();
            ds = objLoginInfo.BindLoginInfoDetail(USER_NAME, HOSPITAL_ID, CLINIC_ID);
            dt = ds.Tables[0];
            EncryptDecrypt obj = new EncryptDecrypt();
            //string str = obj.Encrypt("kislay@123");
            //string str1 = obj.Decrypt(str);

            if (dt.Rows.Count > 0)
            {
                string _Password = obj.Decrypt(dt.Rows[0]["PASSWORD"].ToString());
                string _user_name = dt.Rows[0]["USER_NAME"].ToString();
                if (_user_name == USER_NAME.ToString() && _Password == PASSWORD.ToString())
                {
                    objApplicationFields.HOSPITAL_ID = Convert.ToInt32(HOSPITAL_ID);
                    objApplicationFields.HOSPITAL_NAME = HOSPITAL_NAME;

                    objApplicationFields.CLINIC_ID = Convert.ToInt32(CLINIC_ID);
                    objApplicationFields.CLINIC_NAME = CLINIC_NAME;

                    objApplicationFields.MODULE_ID = Convert.ToInt32(MODULE_ID);
                    objApplicationFields.MODULE_NAME = MODULE_NAME;

                    objApplicationFields.STORE_ID = Convert.ToInt32(STORE_ID);
                    objApplicationFields.STORE_NAME = STORE_NAME;

                    objApplicationFields.LAB_ID = Convert.ToInt32(LAB_ID);
                    objApplicationFields.LAB_NAME = LAB_NAME;
                    objApplicationFields.USER_NAME = USER_NAME;
                    objApplicationFields.USER_ID = Convert.ToInt32(dt.Rows[0]["USER_CODE"].ToString());

                    objApplicationFields.USER_DISC_AMOUNT = Convert.ToDecimal(dt.Rows[0]["DISC_AMOUNT"].ToString());
                    objApplicationFields.USER_DISC_AMOUNT_PERCENT = Convert.ToDecimal(dt.Rows[0]["DISC_PERCENT"].ToString());


                    resultstring = "1";

                }
                else
                {
                    resultstring = "2";
                }

            }
            else
            {
                resultstring = "2";
            }

            //HttpContext.Current.Response.Redirect("Dashboard.aspx",false);
            //LoginInfo objLoginInfo = new LoginInfo();
            //ds = objLoginInfo.BindHospitalDetail();
        }
        catch (Exception ex)
        {

        }
        return resultstring;
    }
    [WebMethod()]
    public static string BindHospital()
    {
        DataSet ds = new DataSet();
        LoginInfo objLoginInfo = new LoginInfo();
        ds = objLoginInfo.BindHospitalDetail();//HOSPITAL_MOBILE
        ApplicationFields obj = new ApplicationFields();
        obj.HOSPITAL_MOBILE = ds.Tables[0].Rows[0]["MOBILE"].ToString();
        return ds.GetXml().ToString();
    }
    [WebMethod()]
    public static string BindModule()
    {
        DataSet ds = new DataSet();
        LoginInfo objLoginInfo = new LoginInfo();
        ds = objLoginInfo.BindModuleDetail();
        return ds.GetXml().ToString();
    }
    [WebMethod()]
    public static string BindClinic(string HOSPITAL_ID)
    {
        DataSet ds = new DataSet();
        LoginInfo objLoginInfo = new LoginInfo();
        ds = objLoginInfo.BindClinicDetail(HOSPITAL_ID);
        return ds.GetXml().ToString();
    }
}
