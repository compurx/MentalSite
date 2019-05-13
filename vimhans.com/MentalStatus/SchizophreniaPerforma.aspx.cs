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
using System.Web.Services;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data.Sql;
using System.Globalization;
using System.Collections.Generic;
using VMS.BuisinessFramework;


public partial class MentalStatus_SchizophreniaPerforma : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    //SEARCHING THROUGH 7 FIELDS
    [WebMethod()]
    public static string Search_PatientRecord(string VIMHANSID)
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetPatientRecord(VIMHANSID);
        return ds.GetXml().ToString();
    }

    


    [WebMethod()]
    public static string Search_PerformaCode()
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetPerformaCode();
        return ds.GetXml().ToString();
    }

    [WebMethod()]
    public static string Search_OLDID(string VIMHANSID)
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetPatientRecordOLDID(VIMHANSID);
        return ds.GetXml().ToString();
    }

    [WebMethod()]
    public static string SearchEditPatient_Record(string CODE)
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetEditAllRecord(CODE);
        return ds.GetXml().ToString();

    }
    
   

    [WebMethod()]
    public static string BindSchizophreniaQuestionPerforma()
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetQuestionPerforma();
        return ds.GetXml().ToString();
    }//
    [WebMethod()]
    public static string BindSchizophreniaQuestionPerformaDetail(string CODE)
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetQuestionPerformaDetail(CODE);
        return ds.GetXml().ToString();
    }

    [WebMethod()]
    public static string BindSchizophreniaQuestionPerformaDetailUpdated(string CODE, string UPDATE_CODE)
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetQuestionPerformaDetailUpdated(CODE, UPDATE_CODE);
        return ds.GetXml().ToString();
    }

    [WebMethod()]
    public static string BindQuestionManagementPlan()
    {
        DataSet ds = new DataSet();        
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetQuestionforRelationManagementPlan();
        return ds.GetXml().ToString();
    }//GetUnit
    [WebMethod()]
    public static string GetUnitMasterRecord()
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetUnitDeatil();
        return ds.GetXml().ToString();
    }

    [WebMethod()]
    public static string GetDiseaseMasterRecord()
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetDiseaseDeatil();
        return ds.GetXml().ToString();
    }

    [WebMethod()]
    public static string GetICDCODERecord()
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetICDCODEDeatil();
        return ds.GetXml().ToString();
    }

  

    [WebMethod()]
    public static string SearchICDDetails(string CODE)
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.SearchICDDetailsList(CODE);
        return ds.GetXml().ToString();
    }

    [WebMethod()]
    public static string BindQuestionManagementPlanDetail(string CODE)
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetQuestionforRelationManagementPlanDeatil(CODE);
        return ds.GetXml().ToString();
    }

    [WebMethod()]
    public static string BindQuestionManagementPlanDetailUpdate(string CODE, string UPDATE_CODE)
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetQuestionforRelationManagementPlanDeatilUpdate(CODE, UPDATE_CODE);
        return ds.GetXml().ToString();
    }


    [WebMethod()]
    public static string BindQuestionFamilyDynamics(string CODE)
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetQuestionforRelationFamilyDynamics(CODE);
        return ds.GetXml().ToString();
    }
    [WebMethod()]
    public static string BindQuestionFamilyDynamicsUpdated(string CODE)
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetQuestionforRelationFamilyDynamicsUpdated(CODE);
        return ds.GetXml().ToString();
    }

    [WebMethod()]
    public static string BindPastHistory()
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetQuestionforPastHistory();
        return ds.GetXml().ToString();
    }

    [WebMethod()]
    public static string BindPastHistoryUpdated(string CODE)
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetQuestionforPastHistoryUpdated(CODE);
        return ds.GetXml().ToString();
    }

    [WebMethod()]
    public static string BindTreatmentHistory()
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetQuestionforTreatmentHistory();
        return ds.GetXml().ToString();
    }
    [WebMethod()]
    public static string BindTreatmentHistoryUpdated(string CODE)
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetQuestionforTreatmentHistoryUpdated(CODE);
        return ds.GetXml().ToString();
    }

    [WebMethod()]
    public static string BindFamilyHistory()
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetQuestionforFamilyHistory();
        return ds.GetXml().ToString();
    }

    [WebMethod()]
    public static string BindFamilyHistoryUpdated(string CODE)
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetQuestionforFamilyHistoryUpdated(CODE);
        return ds.GetXml().ToString();
    }

    [WebMethod()]
    public static string BindPersonalHistory()
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetQuestionforPersonalHistory();
        return ds.GetXml().ToString();
    }

    

    [WebMethod()]
    public static string BindPersonalHistoryUpdated(string CODE)
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetQuestionforPersonalHistoryUpdated(CODE);
        return ds.GetXml().ToString();
    }

    [WebMethod()]
    public static string BindPhysicalExamination()
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetQuestionforPhysicalExamination();
        return ds.GetXml().ToString();
    }

    [WebMethod()]
    public static string BindPhysicalExaminationUpdated(string CODE)
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetQuestionforPhysicalExaminationUpdated(CODE);
        return ds.GetXml().ToString();
    }


    [WebMethod()]
    public static string BindSymptoms()
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetQuestionforSymptoms();
        return ds.GetXml().ToString();
    }
    [WebMethod()]
    public static string BindSymptomsUpdated(string CODE)
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetQuestionforSymptomsUpdated(CODE);
        return ds.GetXml().ToString();
    }

    [WebMethod()]
    public static string GetICDNameUpdated(string DOCVISITNO)
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetICDNameListUpdated(DOCVISITNO);
        return ds.GetXml().ToString();
    }

  
   [WebMethod()]
    public static string GetPersonalHistory(string CODE)
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetPersonalHistoryList(CODE);
        return ds.GetXml().ToString();
    }

    [WebMethod()]
    public static string GetPersonalHistory1(string CODE)
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetPersonalHistoryList1(CODE);
        return ds.GetXml().ToString();
    }

    [WebMethod()]
    public static string GetPersonalHistory2(string CODE)
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetPersonalHistoryList2(CODE);
        return ds.GetXml().ToString();
    }

    [WebMethod()]
    public static string GetPersonalHistory3(string CODE)
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetPersonalHistoryList3(CODE);
        return ds.GetXml().ToString();
    }

    [WebMethod()]
    public static string GetDoctorCode()
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetDoctorCodeList();
        return ds.GetXml().ToString();
    }


    [WebMethod()]
   
    public static string SaveSchizophrenia(string CODE, string NAME, string AGEYEAR, string AGEMONTH, string AGEDAY, string GENDER, string ADDRESS,  string DOCTOR, string STATUS, string DATE, string TIME, string NOTES, string CAREGIVER_NAME, string CAREGIVER_DOB, string CAREGIVER_GENDER, string CAREGIVER_AGEGROUP, string CAREGIVER_TRAINED, string CAREGIVER_MARTALSTATUS, string CAREGIVER_EDUCATION, string CAREGIVER_OCCUPATION, string CAREGIVER_RELIGION, string EXPLAINYES, string EXPLAINNO, string RESULT, string CHK_SLEEP, string CHK_APPETITE, string CHK_INTERESTES, string CHK_INTIMACY, string CHK_SOCIALLIFE, string CHK_FINANCES, string HEIGHT, string WEIGHT, string BLOOD_GROUP, string APGAR, string OBESITY, string XMLREQUEST_MENTALSTATUS, string XMLREQUEST_FAMILYDYNAMICS, string XMLREQUEST_MANAGEMENTPLAN, string XMLREQUEST_SYMPTOMS, string XMLREQUEST_PASTHISTORY, string XMLREQUEST_TREATMENTHISTORY, string XMLREQUEST_FAMILYHISTORY, string XMLREQUEST_PERSONALHISTORY, string XMLREQUEST_PHYSICALEXAMINATION, string XMLREQUEST_PROVISIONAL_DIAGNOSIS)
    {

       
        string resultstring = string.Empty;
       
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        resultstring = objSchizophreniaPerformaBLDL.SaveSchizophreniaList(CODE, NAME, AGEYEAR, AGEMONTH, AGEDAY, GENDER, ADDRESS, DOCTOR, STATUS, DATE, TIME, NOTES,CAREGIVER_NAME, CAREGIVER_DOB, CAREGIVER_GENDER, CAREGIVER_AGEGROUP, CAREGIVER_TRAINED, CAREGIVER_MARTALSTATUS, CAREGIVER_EDUCATION, CAREGIVER_OCCUPATION, CAREGIVER_RELIGION, EXPLAINYES, EXPLAINNO, RESULT, CHK_SLEEP, CHK_APPETITE, CHK_INTERESTES, CHK_INTIMACY, CHK_SOCIALLIFE, CHK_FINANCES, HEIGHT, WEIGHT, BLOOD_GROUP, APGAR, OBESITY, XMLREQUEST_MENTALSTATUS, XMLREQUEST_FAMILYDYNAMICS, XMLREQUEST_MANAGEMENTPLAN, XMLREQUEST_SYMPTOMS, XMLREQUEST_PASTHISTORY, XMLREQUEST_TREATMENTHISTORY, XMLREQUEST_FAMILYHISTORY, XMLREQUEST_PERSONALHISTORY, XMLREQUEST_PHYSICALEXAMINATION, XMLREQUEST_PROVISIONAL_DIAGNOSIS);
       

        return resultstring.ToString();

    }

    //SEARCH(EDIT) START HERE
    [WebMethod()]
    public static string SearchSchizophrenia(string CODE)
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.SearchSchizophreniaList(CODE);
        return ds.GetXml().ToString();

    }
 

    //SEARCH UHID START HERE
    [WebMethod()]
    public static string SearchUHIDSchizophrenia(string CODE)
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.SearchUHIDSchizophreniaList(CODE);
        return ds.GetXml().ToString();

    }
   
    //UPDATE START HERE

    [WebMethod()]
    
    public static string UpdateSchizophrenia(string CODE, string UHID, string NAME, string AGEYEAR, string AGEMONTH, string AGEDAY, string GENDER, string ADDRESS, string DOCTOR, string STATUS, string DATE, string TIME, string NOTES, string CAREGIVER_NAME, string CAREGIVER_DOB, string CAREGIVER_GENDER, string CAREGIVER_AGEGROUP, string CAREGIVER_TRAINED, string CAREGIVER_MARTALSTATUS, string CAREGIVER_EDUCATION, string CAREGIVER_OCCUPATION, string CAREGIVER_RELIGION, string EXPLAINYES, string EXPLAINNO, string RESULT, string CHK_SLEEP, string CHK_APPETITE, string CHK_INTERESTES, string CHK_INTIMACY, string CHK_SOCIALLIFE, string CHK_FINANCES, string HEIGHT, string WEIGHT, string BLOOD_GROUP, string APGAR, string OBESITY, string XMLREQUEST_MENTALSTATUS, string XMLREQUEST_FAMILYDYNAMICS, string XMLREQUEST_MANAGEMENTPLAN, string XMLREQUEST_SYMPTOMS, string XMLREQUEST_PASTHISTORY, string XMLREQUEST_TREATMENTHISTORY, string XMLREQUEST_FAMILYHISTORY, string XMLREQUEST_PERSONALHISTORY, string XMLREQUEST_PHYSICALEXAMINATION, string XMLREQUEST_PROVISIONAL_DIAGNOSIS)
    {

        string resultstring = string.Empty;
     
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        resultstring = objSchizophreniaPerformaBLDL.UpdateSchizophreniaList(CODE, UHID, NAME, AGEYEAR, AGEMONTH, AGEDAY, GENDER, ADDRESS, DOCTOR, STATUS, DATE, TIME, NOTES, CAREGIVER_NAME, CAREGIVER_DOB, CAREGIVER_GENDER, CAREGIVER_AGEGROUP, CAREGIVER_TRAINED, CAREGIVER_MARTALSTATUS, CAREGIVER_EDUCATION, CAREGIVER_OCCUPATION, CAREGIVER_RELIGION, EXPLAINYES, EXPLAINNO, RESULT, CHK_SLEEP, CHK_APPETITE, CHK_INTERESTES, CHK_INTIMACY, CHK_SOCIALLIFE, CHK_FINANCES, HEIGHT, WEIGHT, BLOOD_GROUP, APGAR, OBESITY, XMLREQUEST_MENTALSTATUS, XMLREQUEST_FAMILYDYNAMICS, XMLREQUEST_MANAGEMENTPLAN, XMLREQUEST_SYMPTOMS, XMLREQUEST_PASTHISTORY, XMLREQUEST_TREATMENTHISTORY, XMLREQUEST_FAMILYHISTORY, XMLREQUEST_PERSONALHISTORY, XMLREQUEST_PHYSICALEXAMINATION, XMLREQUEST_PROVISIONAL_DIAGNOSIS);
        return resultstring.ToString();

    }

    [WebMethod()]
    public static string SaveNewPatientRecord(string NAME, string GENDER, string AGEYEAR, string REGISTDATE)
    {
        string resultstring = string.Empty;
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        resultstring = objSchizophreniaPerformaBLDL.SaveNewPatientRecordList(NAME, GENDER, AGEYEAR, REGISTDATE);
        return resultstring.ToString();

    }

    [WebMethod()]
    public static string SearchAllRecord_Schizopjhrenia(string SEARCH_UHID, string SEARCH_NAME, string SEARCH_OPD, string SEARCH_IPD, string SEARCH_CASUALTY)
    {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.AllRecord_SchizopjhreniaList(SEARCH_UHID, SEARCH_NAME, SEARCH_OPD, SEARCH_IPD, SEARCH_CASUALTY);
        return ds.GetXml().ToString();
    }

    [WebMethod()]
    public static string GetSchizophreniaDocuments(string SCHIZOPHRENIA_NO)
     {
        DataSet ds = new DataSet();
        SchizophreniaPerformaBLDL objSchizophreniaPerformaBLDL = new SchizophreniaPerformaBLDL();
        ds = objSchizophreniaPerformaBLDL.GetSchizophreniaDocumentsList(SCHIZOPHRENIA_NO);
        return ds.GetXml().ToString();
    }


    //GETTING DATA OF NEW RECORD
   




}
