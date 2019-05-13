using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Globalization;

namespace VMS.BuisinessFramework
{
    public class SchizophreniaPerformaBLDL
    {
        static SqlConnection conn;
        static SqlCommand cmd;
        static string connstr = ConfigurationManager.ConnectionStrings["MoonrakerConnectionString2"].ToString();

        //SEARCHING THROUGH 7 FIELDS
        public DataSet GetPatientRecord(string VIMHANSID)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("[UDSP_WEB_MAIN_PERFORMA]", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "SEARCH_SCHIZOPHRENIA_VIMHANSID"));
            cmd.Parameters.Add(new SqlParameter("@VIMHANSID", VIMHANSID));
          
            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }

   

        public DataSet GetPerformaCode()
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("[UDSP_WEB_MAIN_PERFORMA]", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "SEARCH_PATIENTPERFORMA"));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }

        //SEARCHING THROUGH 7 FIELDS
        public DataSet GetPatientRecordOLDID(string VIMHANSID)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("[UDSP_WEB_MAIN_PERFORMA]", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "SEARCH_SCHIZOPHRENIA_VIMHANSID"));
            cmd.Parameters.Add(new SqlParameter("@VIMHANSID", VIMHANSID));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }
        public DataSet GetEditAllRecord(string CODE)
        {
            DataSet strResultstring = new DataSet();
            CODE = " " + CODE + " ";
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("[UDSP_WEB_MAIN_PERFORMA]", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "SEARCH_ALL_RECORD"));
            cmd.Parameters.Add(new SqlParameter("@CODE", CODE));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }
       
     
        public DataSet GetQuestionPerforma()
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "SCHIZOPHERNIA_MENTALSTATUS_EXAM"));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }
        public DataSet GetQuestionPerformaDetail(string CODE)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "SCHIZOPHERNIA_MENTALSTATUS_EXAM_DETAIL"));
            cmd.Parameters.Add(new SqlParameter("@L1_CODE", CODE));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }

        public DataSet GetQuestionPerformaDetailUpdated(string CODE, string UPDATE_CODE)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "SCHIZOPHERNIA_MENTALSTATUS_EXAM_DETAIL_UPDATED"));
            cmd.Parameters.Add(new SqlParameter("@CODE", CODE));
            cmd.Parameters.Add(new SqlParameter("@UPDATE_CODE", UPDATE_CODE));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }

        public DataSet GetQuestionforRelationManagementPlan()
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            // cmd.Parameters.Add(new SqlParameter("@CODE", CODE));
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "RELATION_MANAGEMENT_PLAN"));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }

        public DataSet GetQuestionforRelationManagementPlanDeatil(string CODE)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "RELATION_MANAGEMENT_PLAN_DETAIL"));
            cmd.Parameters.Add(new SqlParameter("@L1_CODE", CODE));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }

        public DataSet GetQuestionforRelationManagementPlanDeatilUpdate(string CODE, string UPDATE_CODE)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "RELATION_MANAGEMENT_PLAN_DETAIL_UPDATED"));
            cmd.Parameters.Add(new SqlParameter("@CODE", CODE));
            cmd.Parameters.Add(new SqlParameter("@UPDATE_CODE", UPDATE_CODE));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }

        public DataSet GetUnitDeatil()
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "GET_UNIT_PROVISIONAL_DIAGNOSIS"));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }
      

        public DataSet GetQuestionforRelationFamilyDynamics(string CODE)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "RELATION_FAMILY_DYNAMICS_DETAIL"));
            cmd.Parameters.Add(new SqlParameter("@CODE", "CODE"));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }

        public DataSet GetQuestionforRelationFamilyDynamicsUpdated(string CODE)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "RELATION_FAMILY_DYNAMICS_DETAIL_UPDATED"));
            cmd.Parameters.Add(new SqlParameter("@CODE", CODE));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }



        public DataSet GetQuestionforPastHistory()
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "PAST_HISTORY"));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }

        public DataSet GetQuestionforPastHistoryUpdated(string CODE)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "PAST_HISTORY_UPDATED"));
            cmd.Parameters.Add(new SqlParameter("@CODE", CODE));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }

        public DataSet GetQuestionforTreatmentHistory()
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "TREATMENT_HISTORY"));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }

        public DataSet GetQuestionforTreatmentHistoryUpdated(string CODE)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "TREATMENT_HISTORY_UPDATED"));
            cmd.Parameters.Add(new SqlParameter("@CODE", CODE));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }
        public DataSet GetQuestionforFamilyHistory()
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "FAMILY_HISTORY"));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }

        public DataSet GetQuestionforFamilyHistoryUpdated(string CODE)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "FAMILY_HISTORY_UPDATED"));
            cmd.Parameters.Add(new SqlParameter("@CODE", CODE));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }


        public DataSet GetQuestionforPersonalHistory()
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "PERSONAL_HISTORY"));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }

        

        public DataSet GetQuestionforPersonalHistoryUpdated(string CODE)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "PERSONAL_HISTORY_UPDATED"));
            cmd.Parameters.Add(new SqlParameter("@CODE", CODE));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }

        public DataSet GetQuestionforPhysicalExamination()
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "PHYSICAL_EXAMINATION"));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }

        public DataSet GetQuestionforPhysicalExaminationUpdated(string CODE)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "PHYSICAL_EXAMINATION_UPDATED"));
            cmd.Parameters.Add(new SqlParameter("@CODE", CODE));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }

        public DataSet GetQuestionforSymptoms()
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "SYMPTOMS"));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }

        public DataSet GetQuestionforSymptomsUpdated(string CODE)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "SYMPTOMS_UPDATED"));
            cmd.Parameters.Add(new SqlParameter("@CODE", CODE));
            //string CODE
            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }

      



        public DataSet GetDiseaseDeatil()
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "GET_DISEASENAME_PROVISIONAL_DIAGNOSIS"));
           
            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }

        public DataSet GetICDCODEDeatil()
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "GET_ICDRECORDS_PROVISIONAL_DIAGNOSIS"));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }

        public DataSet SearchICDDetailsList(string CODE)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "GET_ICDCODE_PROVISIONAL_DIAGNOSIS"));
            cmd.Parameters.Add(new SqlParameter("@CODE", CODE));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }


        public DataSet GetICDNameList()
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "GET_ICDNAME_PROVISIONAL_DIAGNOSIS"));
            

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }

        public DataSet GetICDNameListUpdated(string DocVisitNo)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "GET_ICDNAME_PROVISIONAL_DIAGNOSIS_UPDATED"));
          
            cmd.Parameters.Add(new SqlParameter("@DocVisitNo", DocVisitNo));
            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }
      

        public DataSet GetDoctorCodeList()
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "SEARCH_DOCTOR"));
          

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }

        public DataSet GetPersonalHistoryList(string CODE)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "SEARCH_PERSONALHISTORY"));
            cmd.Parameters.Add(new SqlParameter("@L1_CODE", CODE));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }

        public DataSet GetPersonalHistoryList1(string CODE)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "SEARCH_PERSONALHISTORY1"));
            cmd.Parameters.Add(new SqlParameter("@L1_CODE", CODE));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }

        public DataSet GetPersonalHistoryList2(string CODE)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "SEARCH_PERSONALHISTORY2"));
            cmd.Parameters.Add(new SqlParameter("@L1_CODE", CODE));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }

        public DataSet GetPersonalHistoryList3(string CODE)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "SEARCH_PERSONALHISTORY3"));
            cmd.Parameters.Add(new SqlParameter("@L1_CODE", CODE));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }



        
        public string SaveSchizophreniaList(string CODE, string NAME, string AGEYEAR, string AGEMONTH, string AGEDAY, string GENDER, string ADDRESS,  string DOCTOR, string STATUS, string DATE, string TIME, string NOTES, string CAREGIVER_NAME, string CAREGIVER_DOB, string CAREGIVER_GENDER, string CAREGIVER_AGEGROUP, string CAREGIVER_TRAINED, string CAREGIVER_MARTALSTATUS, string CAREGIVER_EDUCATION, string CAREGIVER_OCCUPATION, string CAREGIVER_RELIGION, string EXPLAINYES, string EXPLAINNO, string RESULT, string CHK_SLEEP, string CHK_APPETITE, string CHK_INTERESTES, string CHK_INTIMACY, string CHK_SOCIALLIFE, string CHK_FINANCES, string HEIGHT, string WEIGHT, string BLOOD_GROUP, string APGAR, string OBESITY, string XMLREQUEST_MENTALSTATUS, string XMLREQUEST_FAMILYDYNAMICS, string XMLREQUEST_MANAGEMENTPLAN, string XMLREQUEST_SYMPTOMS, string XMLREQUEST_PASTHISTORY, string XMLREQUEST_TREATMENTHISTORY, string XMLREQUEST_FAMILYHISTORY, string XMLREQUEST_PERSONALHISTORY, string XMLREQUEST_PHYSICALEXAMINATION, string XMLREQUEST_PROVISIONAL_DIAGNOSIS)
        {
          
            string strResultstring = string.Empty;
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            if (!string.IsNullOrEmpty(DATE))
            {
                DateTime dt = DateTime.ParseExact(DATE, "dd/MM/yyyy", CultureInfo.InvariantCulture);
                cmd.Parameters.Add(new SqlParameter("@DATE", dt));
            }
            else
            {
                cmd.Parameters.Add(new SqlParameter("@DATE", ""));
            }
            if (!string.IsNullOrEmpty(CAREGIVER_DOB))
            {
                DateTime dt = DateTime.ParseExact(CAREGIVER_DOB, "dd/MM/yyyy", CultureInfo.InvariantCulture);
                cmd.Parameters.Add(new SqlParameter("@CAREGIVER_DOB", dt));
            }
            else
            {
                cmd.Parameters.Add(new SqlParameter("@CAREGIVER_DOB", ""));
            }
           
            cmd.Parameters.Add(new SqlParameter("@UHID", CODE));
            cmd.Parameters.Add(new SqlParameter("@NAME", NAME));
            cmd.Parameters.Add(new SqlParameter("@AGEYEAR", AGEYEAR));
            cmd.Parameters.Add(new SqlParameter("@AGEMONTH", AGEMONTH));
            cmd.Parameters.Add(new SqlParameter("@AGEDAY", AGEDAY));
            cmd.Parameters.Add(new SqlParameter("@GENDER", GENDER));
            cmd.Parameters.Add(new SqlParameter("@ADDRESS", ADDRESS));
            cmd.Parameters.Add(new SqlParameter("@DOCTOR", DOCTOR));
            cmd.Parameters.Add(new SqlParameter("@STATUS", STATUS));
           
            cmd.Parameters.Add(new SqlParameter("@TIME", TIME));
            cmd.Parameters.Add(new SqlParameter("@NOTES", NOTES));//first textboxes
         
            cmd.Parameters.Add(new SqlParameter("@CAREGIVER_NAME", CAREGIVER_NAME));
            cmd.Parameters.Add(new SqlParameter("@CAREGIVER_GENDER", CAREGIVER_GENDER));
            cmd.Parameters.Add(new SqlParameter("@CAREGIVER_AGEGROUP", CAREGIVER_AGEGROUP));
            cmd.Parameters.Add(new SqlParameter("@CAREGIVER_TRAINED", CAREGIVER_TRAINED));
            cmd.Parameters.Add(new SqlParameter("@CAREGIVER_MARTALSTATUS", CAREGIVER_MARTALSTATUS));
            cmd.Parameters.Add(new SqlParameter("@CAREGIVER_EDUCATION", CAREGIVER_EDUCATION));
            cmd.Parameters.Add(new SqlParameter("@CAREGIVER_OCCUPATION", CAREGIVER_OCCUPATION));
            cmd.Parameters.Add(new SqlParameter("@CAREGIVER_RELIGION", CAREGIVER_RELIGION));

            cmd.Parameters.Add(new SqlParameter("@EXPLAINYES", EXPLAINYES));
            cmd.Parameters.Add(new SqlParameter("@EXPLAINNO", EXPLAINNO));
            cmd.Parameters.Add(new SqlParameter("@RESULT", RESULT));
            cmd.Parameters.Add(new SqlParameter("@CHK_SLEEP", CHK_SLEEP));
            cmd.Parameters.Add(new SqlParameter("@CHK_APPETITE", CHK_APPETITE));
            cmd.Parameters.Add(new SqlParameter("@CHK_INTERESTES", CHK_INTERESTES));
            cmd.Parameters.Add(new SqlParameter("@CHK_INTIMACY", CHK_INTIMACY));
            cmd.Parameters.Add(new SqlParameter("@CHK_SOCIALLIFE", CHK_SOCIALLIFE));
            cmd.Parameters.Add(new SqlParameter("@CHK_FINANCES", CHK_FINANCES));

            cmd.Parameters.Add(new SqlParameter("@HEIGHT", HEIGHT));
            cmd.Parameters.Add(new SqlParameter("@WEIGHT", WEIGHT));
            cmd.Parameters.Add(new SqlParameter("@BLOOD_GROUP", BLOOD_GROUP));
            cmd.Parameters.Add(new SqlParameter("@APGAR", APGAR));
           
            cmd.Parameters.Add(new SqlParameter("@OBESITY", OBESITY));
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "SAVE"));
            cmd.Parameters.Add(new SqlParameter("@XML_DATA_MENTALSTATUS", XMLREQUEST_MENTALSTATUS));
            cmd.Parameters.Add(new SqlParameter("@XML_DATA_FAMILYDYNAMICS", XMLREQUEST_FAMILYDYNAMICS));
            cmd.Parameters.Add(new SqlParameter("@XML_DATA_MANAGEMENTPLAN", XMLREQUEST_MANAGEMENTPLAN));
            cmd.Parameters.Add(new SqlParameter("@XML_DATA_SYMPTOMS", XMLREQUEST_SYMPTOMS));
            cmd.Parameters.Add(new SqlParameter("@XML_DATA_PASTHISTORY", XMLREQUEST_PASTHISTORY));
            cmd.Parameters.Add(new SqlParameter("@XML_DATA_TREATMENTHISTORY", XMLREQUEST_TREATMENTHISTORY));
            cmd.Parameters.Add(new SqlParameter("@XML_DATA_FAMILYHISTORY", XMLREQUEST_FAMILYHISTORY));
            cmd.Parameters.Add(new SqlParameter("@XML_DATA_PERSONALHISTORY", XMLREQUEST_PERSONALHISTORY));
            cmd.Parameters.Add(new SqlParameter("@XML_DATA_PHYSICALEXAMINATION", XMLREQUEST_PHYSICALEXAMINATION));
            cmd.Parameters.Add(new SqlParameter("@XML_DATA_PROVISIONAL_DIAGNOSIS", XMLREQUEST_PROVISIONAL_DIAGNOSIS));
            
           
            conn.Open();
            try
            {
                strResultstring = Convert.ToString(cmd.ExecuteScalar());

            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }

        //SEARCH(EDIT) START HERE
        public DataSet SearchSchizophreniaList(string CODE)
        {
            DataSet strResultstring = new DataSet();
            //CODE = " " + CODE + " ";
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "SEARCH_SCHIZOPHRENIA_CODE"));
            cmd.Parameters.Add(new SqlParameter("@CODE", CODE));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }
        //SEARCH(EDIT) END HERE


        //SEARCH UHID START HERE
        public DataSet SearchUHIDSchizophreniaList(string UHID)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "SEARCH_SCHIZOPHRENIA_UHID"));
            cmd.Parameters.Add(new SqlParameter("@UHID", UHID));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }
        //SEARCH UHID END HERE

        //UPDATE START HERE

        public string UpdateSchizophreniaList(string CODE, string UHID, string NAME, string AGEYEAR, string AGEMONTH, string AGEDAY, string GENDER, string ADDRESS, string DOCTOR, string STATUS, string
            DATE, string TIME, string NOTES, string CAREGIVER_NAME, string CAREGIVER_DOB, string CAREGIVER_GENDER, string CAREGIVER_AGEGROUP, string CAREGIVER_TRAINED, string CAREGIVER_MARTALSTATUS, string CAREGIVER_EDUCATION, string CAREGIVER_OCCUPATION, string CAREGIVER_RELIGION, string EXPLAINYES, string EXPLAINNO, string RESULT, string CHK_SLEEP, string CHK_APPETITE, string CHK_INTERESTES, string CHK_INTIMACY, string CHK_SOCIALLIFE, string CHK_FINANCES, string HEIGHT, string WEIGHT, string BLOOD_GROUP, string APGAR, string OBESITY, string XMLREQUEST_MENTALSTATUS, string XMLREQUEST_FAMILYDYNAMICS, string XMLREQUEST_MANAGEMENTPLAN, string XMLREQUEST_SYMPTOMS, string XMLREQUEST_PASTHISTORY, string XMLREQUEST_TREATMENTHISTORY, string XMLREQUEST_FAMILYHISTORY, string XMLREQUEST_PERSONALHISTORY, string XMLREQUEST_PHYSICALEXAMINATION, string XMLREQUEST_PROVISIONAL_DIAGNOSIS)
        {
        
            string strResultstring = string.Empty;
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            if (!string.IsNullOrEmpty(DATE))
            {
                DateTime dt = DateTime.ParseExact(DATE, "dd/MM/yyyy", CultureInfo.InvariantCulture);
                cmd.Parameters.Add(new SqlParameter("@DATE", dt));
            }
            else
            {
                cmd.Parameters.Add(new SqlParameter("@DATE", ""));
            }
            if (!string.IsNullOrEmpty(CAREGIVER_DOB))
            {
                DateTime dt = DateTime.ParseExact(CAREGIVER_DOB, "dd/MM/yyyy", CultureInfo.InvariantCulture);
                cmd.Parameters.Add(new SqlParameter("@CAREGIVER_DOB", dt));
            }
            else
            {
                cmd.Parameters.Add(new SqlParameter("@CAREGIVER_DOB", ""));
            }
            cmd.Parameters.Add(new SqlParameter("@CODE", CODE));
            cmd.Parameters.Add(new SqlParameter("@UHID", UHID));
            cmd.Parameters.Add(new SqlParameter("@NAME", NAME));
            cmd.Parameters.Add(new SqlParameter("@AGEYEAR", AGEYEAR));
            cmd.Parameters.Add(new SqlParameter("@AGEMONTH", AGEMONTH));
            cmd.Parameters.Add(new SqlParameter("@AGEDAY", AGEDAY));
            cmd.Parameters.Add(new SqlParameter("@GENDER", GENDER));
            cmd.Parameters.Add(new SqlParameter("@ADDRESS", ADDRESS));
            cmd.Parameters.Add(new SqlParameter("@DOCTOR", DOCTOR));
            cmd.Parameters.Add(new SqlParameter("@STATUS", STATUS));
          
            cmd.Parameters.Add(new SqlParameter("@TIME", TIME));
            cmd.Parameters.Add(new SqlParameter("@NOTES", NOTES));//first textboxes
            cmd.Parameters.Add(new SqlParameter("@CAREGIVER_NAME", CAREGIVER_NAME));
            cmd.Parameters.Add(new SqlParameter("@CAREGIVER_GENDER", CAREGIVER_GENDER));
            cmd.Parameters.Add(new SqlParameter("@CAREGIVER_AGEGROUP", CAREGIVER_AGEGROUP));
            cmd.Parameters.Add(new SqlParameter("@CAREGIVER_TRAINED", CAREGIVER_TRAINED));
            cmd.Parameters.Add(new SqlParameter("@CAREGIVER_MARTALSTATUS", CAREGIVER_MARTALSTATUS));
            cmd.Parameters.Add(new SqlParameter("@CAREGIVER_EDUCATION", CAREGIVER_EDUCATION));
            cmd.Parameters.Add(new SqlParameter("@CAREGIVER_OCCUPATION", CAREGIVER_OCCUPATION));
            cmd.Parameters.Add(new SqlParameter("@CAREGIVER_RELIGION", CAREGIVER_RELIGION));
         

            cmd.Parameters.Add(new SqlParameter("@EXPLAINYES", EXPLAINYES));
            cmd.Parameters.Add(new SqlParameter("@EXPLAINNO", EXPLAINNO));
            cmd.Parameters.Add(new SqlParameter("@RESULT", RESULT));
            cmd.Parameters.Add(new SqlParameter("@CHK_SLEEP", CHK_SLEEP));
            cmd.Parameters.Add(new SqlParameter("@CHK_APPETITE", CHK_APPETITE));
            cmd.Parameters.Add(new SqlParameter("@CHK_INTERESTES", CHK_INTERESTES));
            cmd.Parameters.Add(new SqlParameter("@CHK_INTIMACY", CHK_INTIMACY));
            cmd.Parameters.Add(new SqlParameter("@CHK_SOCIALLIFE", CHK_SOCIALLIFE));
            cmd.Parameters.Add(new SqlParameter("@CHK_FINANCES", CHK_FINANCES));

            cmd.Parameters.Add(new SqlParameter("@HEIGHT", HEIGHT));
            cmd.Parameters.Add(new SqlParameter("@WEIGHT", WEIGHT));
            cmd.Parameters.Add(new SqlParameter("@BLOOD_GROUP", BLOOD_GROUP));
            cmd.Parameters.Add(new SqlParameter("@APGAR", APGAR));
          
            cmd.Parameters.Add(new SqlParameter("@OBESITY", OBESITY));
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "UPDATE"));
            cmd.Parameters.Add(new SqlParameter("@XML_DATA_MENTALSTATUS", XMLREQUEST_MENTALSTATUS));
            cmd.Parameters.Add(new SqlParameter("@XML_DATA_FAMILYDYNAMICS", XMLREQUEST_FAMILYDYNAMICS));
            cmd.Parameters.Add(new SqlParameter("@XML_DATA_MANAGEMENTPLAN", XMLREQUEST_MANAGEMENTPLAN));
            cmd.Parameters.Add(new SqlParameter("@XML_DATA_SYMPTOMS", XMLREQUEST_SYMPTOMS));
            cmd.Parameters.Add(new SqlParameter("@XML_DATA_PASTHISTORY", XMLREQUEST_PASTHISTORY));
            cmd.Parameters.Add(new SqlParameter("@XML_DATA_TREATMENTHISTORY", XMLREQUEST_TREATMENTHISTORY));
            cmd.Parameters.Add(new SqlParameter("@XML_DATA_FAMILYHISTORY", XMLREQUEST_FAMILYHISTORY));
            cmd.Parameters.Add(new SqlParameter("@XML_DATA_PERSONALHISTORY", XMLREQUEST_PERSONALHISTORY));
            cmd.Parameters.Add(new SqlParameter("@XML_DATA_PHYSICALEXAMINATION", XMLREQUEST_PHYSICALEXAMINATION));
            cmd.Parameters.Add(new SqlParameter("@XML_DATA_PROVISIONAL_DIAGNOSIS", XMLREQUEST_PROVISIONAL_DIAGNOSIS));



            conn.Open();
            try
            {
                strResultstring = Convert.ToString(cmd.ExecuteScalar());

            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }


        //UPDATE END HERE

        public string SaveNewPatientRecordList(string NAME, string GENDER, string AGEYEAR, string REGISTDATE)
        {
            string strResultstring = string.Empty;
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_MAIN_PERFORMA_PATIENT_REGISTRATION", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            if (!string.IsNullOrEmpty(REGISTDATE))
            {
                DateTime dt = DateTime.ParseExact(REGISTDATE, "dd/MM/yyyy", CultureInfo.InvariantCulture);
                cmd.Parameters.Add(new SqlParameter("@REGISTDATE", dt));
            }
            else
            {
                cmd.Parameters.Add(new SqlParameter("@REGISTDATE", ""));
            }
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "SAVENEWPATIENTRECORD"));
            //cmd.Parameters.Add(new SqlParameter("@HOSPITAL_ID", objApplicationFields.HOSPITAL_ID));
            //cmd.Parameters.Add(new SqlParameter("@CLINIC_ID", objApplicationFields.CLINIC_ID));
            cmd.Parameters.Add(new SqlParameter("@NAME", NAME));
            cmd.Parameters.Add(new SqlParameter("@GENDER", GENDER));
            cmd.Parameters.Add(new SqlParameter("@AGEYEAR", AGEYEAR));
            
           
            //cmd.Parameters.Add(new SqlParameter("@REGISTDATE", REGISTDATE));
           


            conn.Open();
            try
            {
                strResultstring = Convert.ToString(cmd.ExecuteScalar());
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }

        //SEARCHING THROUGH 7 FIELDS
        public DataSet AllRecord_SchizopjhreniaList(string SEARCH_UHID, string SEARCH_NAME, string SEARCH_OPD, string SEARCH_IPD, string SEARCH_CASUALTY)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("[UDSP_WEB_MAIN_PERFORMA_SEARCH]", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "SEARCH_ALL_RECORD"));
            cmd.Parameters.Add(new SqlParameter("@SEARCH_UHID", SEARCH_UHID));
            cmd.Parameters.Add(new SqlParameter("@SEARCH_NAME", SEARCH_NAME));
            cmd.Parameters.Add(new SqlParameter("@SEARCH_OPD", SEARCH_OPD));
            cmd.Parameters.Add(new SqlParameter("@SEARCH_IPD", SEARCH_IPD));
            cmd.Parameters.Add(new SqlParameter("@SEARCH_CASUALTY", SEARCH_CASUALTY));
            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }

        public DataSet GetSchizophreniaDocumentsList(string SCHIZOPHRENIA_NO)
        {
            
            DataSet strResultstring = new DataSet();
            //DOC_ID = " " + DOC_ID;
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("[UDSP_WEB_MAIN_PERFORMA]", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "SEARCH_SCHIZOPHRENIADOCUMENTS"));
            cmd.Parameters.Add(new SqlParameter("@SCHIZOPHRENIA_NO", SCHIZOPHRENIA_NO));
           
            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }
    
    
    }
}
