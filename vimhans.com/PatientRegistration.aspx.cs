using System;
using System.Collections;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;
using VMS.BuisinessFramework;
using System.Web.Services;
using System.Data.SqlClient;
using System.Globalization;

public partial class Clinical_PatientRegistration : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    [WebMethod()]
    public static string GetAllergy()
    {
        DataSet ds = new DataSet();
        PatientRegistration objPatientRegistration = new PatientRegistration();
        ds = objPatientRegistration.GetAllergyList();
        return ds.GetXml().ToString();

    }//SaveRegistrationDetail
    [WebMethod()]
    public static string SaveRegistrationDetail(string TITLE, string FIRST_NAME, string MIDDLE_NAME, string LAST_NAME, string INSTITUTIONAL_ID, string GENDER, string OCCUPATION, string DOB, string DD, string MM, string YY, string AADHAR_NO, string FATHER_TITLE, string FATHER_NAME, string GUARDIAN_NAME, string RELATION, string PATIENT_CATEGORY, string FAMILY_INCOME, string REF_BY, string IS_HEALTH_INS, string POLICY_AMOUNT, string IS_HEAD_OF_FAMILY, string PATIENT_ID, string PATIENT_RELATION, string IS_HANDICAPPED, string HANICAP_PERCENTAGE, string IS_BLINDNESS, string HEIGHT, string WEIGHT, string BLOOD_GROUP, string APGAR_SCORE, string GROWTH, string OBESITY, string RELIGON, string ADDRESS1, string ADDRESS2, string MOBILE, string ALTERNATE_NO, string EMAIL, string COUNTRY, string STATE, string CITY, string PINCODE, string EMERGENCY_CONTACT_NAME, string EMERGENCY_CONTACT_NO, string EMERGENCY_CONTACT_NAME1, string EMERGENCY_CONTACT_NO1, string XML_ALLERGY, string XML_PERSONAL_HISTORY, string XML_PAST_HISTORY, string XML_FAMILY_HISTORY, string XML_SAFETY_PARAMETER, string MARITAL_STATUS, string DATE_OF_ANNIVERSARY, string NO_OF_CHILD, string TOTAL_DEPENDENT, string HEALTH_INS_COMPANY, string BLIND_PERCENT)
    {
        string strResult = string.Empty;
       

        PatientRegistration objPatientRegistration = new PatientRegistration();
        strResult = objPatientRegistration.SavePatientRegistrationDetail(TITLE, FIRST_NAME, MIDDLE_NAME, LAST_NAME, INSTITUTIONAL_ID, GENDER, OCCUPATION, DOB, DD, MM, YY, AADHAR_NO, FATHER_TITLE, FATHER_NAME, GUARDIAN_NAME, RELATION, PATIENT_CATEGORY, FAMILY_INCOME, REF_BY, IS_HEALTH_INS, POLICY_AMOUNT, IS_HEAD_OF_FAMILY, PATIENT_ID, PATIENT_RELATION, IS_HANDICAPPED, HANICAP_PERCENTAGE, IS_BLINDNESS, HEIGHT, WEIGHT, BLOOD_GROUP, APGAR_SCORE, GROWTH, OBESITY, RELIGON, ADDRESS1, ADDRESS2, MOBILE, ALTERNATE_NO, EMAIL, COUNTRY, STATE, CITY, PINCODE, EMERGENCY_CONTACT_NAME, EMERGENCY_CONTACT_NO, EMERGENCY_CONTACT_NAME1, EMERGENCY_CONTACT_NO1, XML_ALLERGY, XML_PERSONAL_HISTORY, XML_PAST_HISTORY, XML_FAMILY_HISTORY, XML_SAFETY_PARAMETER, MARITAL_STATUS, DATE_OF_ANNIVERSARY, NO_OF_CHILD, TOTAL_DEPENDENT, HEALTH_INS_COMPANY, BLIND_PERCENT);
        return strResult.ToString();

    }//GetPatient
    [WebMethod()]
    public static string GetHabit()
    {
        DataSet ds = new DataSet();
        PatientRegistration objPatientRegistration = new PatientRegistration();
        ds = objPatientRegistration.GetHabitList();
        return ds.GetXml().ToString();

    }
    [WebMethod()]
    public static string GetPatient()
    {
        DataSet ds = new DataSet();
        PatientRegistration objPatientRegistration = new PatientRegistration();
        ds = objPatientRegistration.GetPatientList();
        return ds.GetXml().ToString();

    }
    [WebMethod()]
    public static string BindDisease()
    {
        DataSet ds = new DataSet();
        PatientRegistration objPatientRegistration = new PatientRegistration();
        ds = objPatientRegistration.GetDiseaseList();
        return ds.GetXml().ToString();

    }
    [WebMethod()]
    public static string GetTitle()
    {
        DataSet ds = new DataSet();
        PatientRegistration objPatientRegistration = new PatientRegistration();
        ds = objPatientRegistration.GetTitleList();
        return ds.GetXml().ToString();
    }
    [WebMethod()]
    public static string GetRelation()
    {
        DataSet ds = new DataSet();
        PatientRegistration objPatientRegistration = new PatientRegistration();
        ds = objPatientRegistration.GetRelationList();
        return ds.GetXml().ToString();
    }
    [WebMethod()]
    public static string GetOccupation()
    {
        DataSet ds = new DataSet();
        PatientRegistration objPatientRegistration = new PatientRegistration();
        ds = objPatientRegistration.GetOccupationList();
        return ds.GetXml().ToString();
    }

    [WebMethod()]
    public static string GetCountry()
    {
        DataSet ds = new DataSet();
        PatientRegistration objPatientRegistration = new PatientRegistration();
        ds = objPatientRegistration.GetCountryList();
        return ds.GetXml().ToString();
    }
    [WebMethod()]
    public static string GetState(string COUNTRY_CODE)
    {
        DataSet ds = new DataSet();
        PatientRegistration objPatientRegistration = new PatientRegistration();
        ds = objPatientRegistration.GetStateList(COUNTRY_CODE);
        return ds.GetXml().ToString();
    }
    [WebMethod()]
    public static string GetCity(string STATE_CODE)
    {
        DataSet ds = new DataSet();
        PatientRegistration objPatientRegistration = new PatientRegistration();
        ds = objPatientRegistration.GetGetCityList(STATE_CODE);
        return ds.GetXml().ToString();
    }
    //GetPincode
    [WebMethod()]
    public static string GetPincode(string CITY_CODE)
    {
        DataSet ds = new DataSet();
        PatientRegistration objPatientRegistration = new PatientRegistration();
        ds = objPatientRegistration.GetPincodeList(CITY_CODE);
        return ds.GetXml().ToString();
    }
    //[WebMethod()]
    //public static string GetStateDetail(string COUNTRY_CODE, string STATE_CODE, string COUNTRY_NAME, string STATE_NAME)
    //{
    //    PatientRegistration objPatientRegistration = new PatientRegistration();
    //    DataSet ds = objPatientRegistration.GetStateDetailList(COUNTRY_CODE, STATE_CODE, COUNTRY_NAME, STATE_NAME);
    //    return ds.GetXml().ToString();
    //}

    [WebMethod()]
    public static string GetReligion()
    {
        DataSet ds = new DataSet();
        PatientRegistration objPatientRegistration = new PatientRegistration();
        ds = objPatientRegistration.GetReligionList();
        return ds.GetXml().ToString();
    }
    [WebMethod()]
    public static string SearchRecords(string SEARCH_UHID, string SEARCH_NAME, string SEARCH_MOBILE, string SEARCH_OPD, string SEARCH_IPD, string SEARCH_AADHAAR, string SEARCH_CASUALTY)
    {
        DataSet ds = new DataSet();
        PatientRegistration obj = new PatientRegistration();
        ds = obj.GetAllRecordList(SEARCH_UHID, SEARCH_NAME, SEARCH_MOBILE, SEARCH_OPD, SEARCH_IPD, SEARCH_AADHAAR, SEARCH_CASUALTY);
        return ds.GetXml().ToString();
    }

    [WebMethod()]
    public static string SearchAllRecord(string SEARCH_UHID)
    {
        DataSet ds = new DataSet();
        PatientRegistration obj = new PatientRegistration();
        ds = obj.GetAllRecord(SEARCH_UHID);
        return ds.GetXml().ToString();
    }




}
