using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using System.Globalization;

namespace VMS.BuisinessFramework
{
   public class PatientRegistration
    {
        static SqlConnection conn;
        static SqlCommand cmd;
        static string connstr = ConfigurationManager.ConnectionStrings["MoonrakerConnectionString1"].ToString();
        ApplicationFields objApplicationFields = new ApplicationFields();
        //GetAllergyList GetHabitList
        public DataSet GetAllergyList()
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_GET_SAVE_PATIENT_DETAIL", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "SEARCH ALLERGY"));
            cmd.Parameters.Add(new SqlParameter("@HOSPITAL_ID", objApplicationFields.HOSPITAL_ID));
            cmd.Parameters.Add(new SqlParameter("@CLINIC_ID", objApplicationFields.CLINIC_ID));

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
        public DataSet GetHabitList()
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_GET_SAVE_PATIENT_DETAIL", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "SEARCH HABIT"));
            cmd.Parameters.Add(new SqlParameter("@HOSPITAL_ID", objApplicationFields.HOSPITAL_ID));
            cmd.Parameters.Add(new SqlParameter("@CLINIC_ID", objApplicationFields.CLINIC_ID));

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
        public DataSet GetPatientList()
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_GET_SAVE_PATIENT_DETAIL", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "SEARCH PATIENT"));
            cmd.Parameters.Add(new SqlParameter("@HOSPITAL_ID", objApplicationFields.HOSPITAL_ID));
            cmd.Parameters.Add(new SqlParameter("@CLINIC_ID", objApplicationFields.CLINIC_ID));

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
        public DataSet GetDiseaseList()
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_GET_SAVE_PATIENT_DETAIL", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "SEARCH DISEASE"));
            cmd.Parameters.Add(new SqlParameter("@HOSPITAL_ID", objApplicationFields.HOSPITAL_ID));
            cmd.Parameters.Add(new SqlParameter("@CLINIC_ID", objApplicationFields.CLINIC_ID));

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
        public string SavePatientRegistrationDetail(string TITLE, string FIRST_NAME, string MIDDLE_NAME, string LAST_NAME, string INSTITUTIONAL_ID, string GENDER, string OCCUPATION, string DOB, string DD, string MM, string YY, string AADHAR_NO, string FATHER_TITLE, string FATHER_NAME, string GUARDIAN_NAME, string RELATION, string PATIENT_CATEGORY, string FAMILY_INCOME, string REF_BY, string IS_HEALTH_INS, string POLICY_AMOUNT, string IS_HEAD_OF_FAMILY, string PATIENT_ID, string PATIENT_RELATION, string IS_HANDICAPPED, string HANICAP_PERCENTAGE, string IS_BLINDNESS, string HEIGHT, string WEIGHT, string BLOOD_GROUP, string APGAR_SCORE, string GROWTH, string OBESITY, string RELIGON, string ADDRESS1, string ADDRESS2, string MOBILE, string ALTERNATE_NO, string EMAIL, string COUNTRY, string STATE, string CITY, string PINCODE, string EMERGENCY_CONTACT_NAME, string EMERGENCY_CONTACT_NO, string EMERGENCY_CONTACT_NAME1, string EMERGENCY_CONTACT_NO1, string XML_ALLERGY, string XML_PERSONAL_HISTORY, string XML_PAST_HISTORY, string XML_FAMILY_HISTORY, string XML_SAFETY_PARAMETER, string MARITAL_STATUS, string DATE_OF_ANNIVERSARY, string NO_OF_CHILD, string TOTAL_DEPENDENT, string HEALTH_INS_COMPANY,string BLIND_PERCENT)
        {
            DataSet strResultstring = new DataSet();
            string result = string.Empty;
            conn = new SqlConnection(connstr);
            
            

            cmd = new SqlCommand("UDSP_GET_SAVE_PATIENT_DETAIL", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            if (!string.IsNullOrEmpty(DATE_OF_ANNIVERSARY))
            {
                DateTime dtAnniversary = DateTime.ParseExact(DATE_OF_ANNIVERSARY, "dd/MM/yyyy", CultureInfo.InvariantCulture);
                cmd.Parameters.Add(new SqlParameter("@DATE_OF_ANNIVERSARY", dtAnniversary));
            }
            else
            {
                cmd.Parameters.Add(new SqlParameter("@DATE_OF_ANNIVERSARY", ""));
            }
            if (!string.IsNullOrEmpty(DOB))
            {
                DateTime dtdob = DateTime.ParseExact(DOB, "dd/MM/yyyy", CultureInfo.InvariantCulture);
                cmd.Parameters.Add(new SqlParameter("@DOB", dtdob));
            }
            else
            {
                cmd.Parameters.Add(new SqlParameter("@DOB", ""));
            }

            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "SAVE PATIENT"));
            cmd.Parameters.Add(new SqlParameter("@HOSPITAL_ID", objApplicationFields.HOSPITAL_ID));
            cmd.Parameters.Add(new SqlParameter("@CLINIC_ID", objApplicationFields.CLINIC_ID));
            cmd.Parameters.Add(new SqlParameter("@USER_ID", objApplicationFields.USER_ID));

            cmd.Parameters.Add(new SqlParameter("@TITLE", TITLE));
            cmd.Parameters.Add(new SqlParameter("@FNAME", FIRST_NAME));

            cmd.Parameters.Add(new SqlParameter("@MNAME", MIDDLE_NAME));
            cmd.Parameters.Add(new SqlParameter("@LNAME", LAST_NAME));
            cmd.Parameters.Add(new SqlParameter("@INSTITUTONAL_ID", INSTITUTIONAL_ID));
            cmd.Parameters.Add(new SqlParameter("@GENDER", GENDER));
            cmd.Parameters.Add(new SqlParameter("@OCCUPATION_CODE", OCCUPATION));
            
            cmd.Parameters.Add(new SqlParameter("@AGE_DAY", DD));
            cmd.Parameters.Add(new SqlParameter("@AGE_MONTH", MM));
            cmd.Parameters.Add(new SqlParameter("@AGE_YEAR", YY));
            cmd.Parameters.Add(new SqlParameter("@ADHAR_NO", AADHAR_NO));
            cmd.Parameters.Add(new SqlParameter("@MARITAL_STATUS", MARITAL_STATUS));

            

            cmd.Parameters.Add(new SqlParameter("@NO_OF_CHILDREN", NO_OF_CHILD));
            cmd.Parameters.Add(new SqlParameter("@TOTAL_DEPENDENT", TOTAL_DEPENDENT));
            cmd.Parameters.Add(new SqlParameter("@MOBILE_NO", MOBILE));
            cmd.Parameters.Add(new SqlParameter("@FTITLE", FATHER_TITLE));
            cmd.Parameters.Add(new SqlParameter("@FATHER_NAME", FATHER_NAME));
            cmd.Parameters.Add(new SqlParameter("@GUARDIAN", GUARDIAN_NAME));
            cmd.Parameters.Add(new SqlParameter("@RELATION_CODE", RELATION));
            cmd.Parameters.Add(new SqlParameter("@PATIENT_CATEGORY", PATIENT_CATEGORY));
            cmd.Parameters.Add(new SqlParameter("@FAMILY_INCOME", FAMILY_INCOME));
            cmd.Parameters.Add(new SqlParameter("@REF_BY", REF_BY));
            cmd.Parameters.Add(new SqlParameter("@IS_HEALH_INS", IS_HEALTH_INS));
            cmd.Parameters.Add(new SqlParameter("@COMPANY_NAME", HEALTH_INS_COMPANY));
            cmd.Parameters.Add(new SqlParameter("@POLICY_AMOUNT", POLICY_AMOUNT));
            cmd.Parameters.Add(new SqlParameter("@IS_HEAD_OF_FAMILY", IS_HEAD_OF_FAMILY));
            cmd.Parameters.Add(new SqlParameter("@PATIENT_ID", PATIENT_ID));
            cmd.Parameters.Add(new SqlParameter("@HEAD_OF_FAMILY_RELATION", PATIENT_RELATION));
            cmd.Parameters.Add(new SqlParameter("@IS_HANDICAP", IS_HANDICAPPED));
            cmd.Parameters.Add(new SqlParameter("@HANDICAP_PERCENT", HANICAP_PERCENTAGE));
            cmd.Parameters.Add(new SqlParameter("@IS_BLINDNESS", IS_BLINDNESS));
            cmd.Parameters.Add(new SqlParameter("@BLINDNESS_PER", BLIND_PERCENT));
            cmd.Parameters.Add(new SqlParameter("@HEIGHT", HEIGHT));
            cmd.Parameters.Add(new SqlParameter("@WEIGHT", WEIGHT));
            cmd.Parameters.Add(new SqlParameter("@BLOOD_GROUP", BLOOD_GROUP));
            cmd.Parameters.Add(new SqlParameter("@APGAR", APGAR_SCORE));
            cmd.Parameters.Add(new SqlParameter("@GROWTH", GROWTH));
            cmd.Parameters.Add(new SqlParameter("@WAIST", ""));
            cmd.Parameters.Add(new SqlParameter("@OBESITY", OBESITY));
            cmd.Parameters.Add(new SqlParameter("@RELIGION", RELIGON));
            cmd.Parameters.Add(new SqlParameter("@ADDRESS1", ADDRESS1));
            cmd.Parameters.Add(new SqlParameter("@ADDRESS2", ADDRESS2));
            cmd.Parameters.Add(new SqlParameter("@ALTERNATE_NO", ALTERNATE_NO));
            cmd.Parameters.Add(new SqlParameter("@EMAIL", EMAIL));
            cmd.Parameters.Add(new SqlParameter("@COUNTRY_CODE", COUNTRY));
            cmd.Parameters.Add(new SqlParameter("@STATE_CODE", STATE));
            cmd.Parameters.Add(new SqlParameter("@CITY_CODE", CITY));
            cmd.Parameters.Add(new SqlParameter("@PINCODE", PINCODE));
            cmd.Parameters.Add(new SqlParameter("@EMERGENCY_CONTACT_NAME", EMERGENCY_CONTACT_NAME));
            cmd.Parameters.Add(new SqlParameter("@EMERGENCY_CONTACT_NO", EMERGENCY_CONTACT_NO));
            cmd.Parameters.Add(new SqlParameter("@EMERGENCY_CONTACT_NAME1", EMERGENCY_CONTACT_NAME1));
            cmd.Parameters.Add(new SqlParameter("@EMERGENCY_CONTACT_NO1", EMERGENCY_CONTACT_NO1));
            cmd.Parameters.Add(new SqlParameter("@XML_ALLERGY", XML_ALLERGY));
            cmd.Parameters.Add(new SqlParameter("@XML_PERSONAL_HISTORY", XML_PERSONAL_HISTORY));
            cmd.Parameters.Add(new SqlParameter("@XML_PAST_HISTORY", XML_PAST_HISTORY));
            cmd.Parameters.Add(new SqlParameter("@XML_FAMILY_HISTORY", XML_FAMILY_HISTORY));
            cmd.Parameters.Add(new SqlParameter("@XML_SAFETY_PARAMETER", XML_SAFETY_PARAMETER));



            conn.Open();
            try
            {
                //SqlDataAdapter da = new SqlDataAdapter(cmd);
                //da.Fill(strResultstring);
                result = Convert.ToString(cmd.ExecuteScalar());
            }
            catch (Exception ex)
            {

            }
            finally
            {
                conn.Close();
            }
            return result;
        }

        public DataSet GetTitleList()
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_GET_TITLE_LIST", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "GET"));
            cmd.Parameters.Add(new SqlParameter("@HOSPITAL_ID", objApplicationFields.HOSPITAL_ID));
            cmd.Parameters.Add(new SqlParameter("@CLINIC_ID", objApplicationFields.CLINIC_ID));    

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
        public DataSet GetRelationList()
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_GET_RELATION_LIST", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "GET"));
            cmd.Parameters.Add(new SqlParameter("@HOSPITAL_ID", objApplicationFields.HOSPITAL_ID));
            cmd.Parameters.Add(new SqlParameter("@CLINIC_ID", objApplicationFields.CLINIC_ID)); 
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
        public DataSet GetOccupationList()
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_GET_OCCUPATION_LIST", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "GET"));
            cmd.Parameters.Add(new SqlParameter("@HOSPITAL_ID", objApplicationFields.HOSPITAL_ID));
            cmd.Parameters.Add(new SqlParameter("@CLINIC_ID", objApplicationFields.CLINIC_ID));
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
        public DataSet GetCountryList()
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_GET_COUNTRY_LIST", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "GET"));
            cmd.Parameters.Add(new SqlParameter("@HOSPITAL_ID", objApplicationFields.HOSPITAL_ID));
            cmd.Parameters.Add(new SqlParameter("@CLINIC_ID", objApplicationFields.CLINIC_ID));
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

        public DataSet GetStateList(string COUNTRY_CODE)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_GET_SAVE_STATE", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "SEARCH STATE"));
            cmd.Parameters.Add(new SqlParameter("@HOSPITAL_ID", objApplicationFields.HOSPITAL_ID));
            cmd.Parameters.Add(new SqlParameter("@COUNTRY", COUNTRY_CODE));
            cmd.Parameters.Add(new SqlParameter("@CLINIC_ID", objApplicationFields.CLINIC_ID));
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
        public DataSet GetGetCityList(string STATE_CODE)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_GET_SAVE_CITY", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "GET CITY"));
            cmd.Parameters.Add(new SqlParameter("@STATE_CODE", STATE_CODE));
            cmd.Parameters.Add(new SqlParameter("@HOSPITAL_ID", objApplicationFields.HOSPITAL_ID));
            cmd.Parameters.Add(new SqlParameter("@CLINIC_ID", objApplicationFields.CLINIC_ID));
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
        public DataSet GetPincodeList(string CITY_CODE)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_GET_SAVE_CITY", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "GET PIN"));
            cmd.Parameters.Add(new SqlParameter("@CITY_CODE", CITY_CODE));
            cmd.Parameters.Add(new SqlParameter("@HOSPITAL_ID", objApplicationFields.HOSPITAL_ID));
            cmd.Parameters.Add(new SqlParameter("@CLINIC_ID", objApplicationFields.CLINIC_ID));
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


        //public DataSet GetStateDetailList()
        //{
        //    DataSet strResultstring = new DataSet();
        //    conn = new SqlConnection(connstr);
        //    cmd = new SqlCommand("UDSP_GET_SAVE_STATE", conn);
        //    cmd.CommandType = CommandType.StoredProcedure;
        //    cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "SEARCH STATE"));
        //    cmd.Parameters.Add(new SqlParameter("@HOSPITAL_ID", objApplicationFields.HOSPITAL_ID));
        //    cmd.Parameters.Add(new SqlParameter("@CLINIC_ID", objApplicationFields.CLINIC_ID));
        //    conn.Open();
        //    try
        //    {
        //        SqlDataAdapter da = new SqlDataAdapter(cmd);
        //        da.Fill(strResultstring);
        //    }
        //    catch (Exception)
        //    {

        //    }
        //    finally
        //    {
        //        conn.Close();
        //    }
        //    return strResultstring;
        //}

        public DataSet GetReligionList()
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_GET_RELIGION_LIST", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "GET"));
            
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

        public DataSet GetAllRecordList(string SEARCH_UHID, string SEARCH_NAME, string SEARCH_MOBILE, string SEARCH_OPD, string SEARCH_IPD, string SEARCH_AADHAAR, string SEARCH_CASUALTY)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("[UDSP_MAIN_PERFORMA]", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "SEARCH_ALL_RECORD"));
            //cmd.Parameters.Add(new SqlParameter("@HOSPITAL_ID", objApplicationFields.HOSPITAL_ID));
            // cmd.Parameters.Add(new SqlParameter("@CLINIC_ID", objApplicationFields.CLINIC_ID));
            cmd.Parameters.Add(new SqlParameter("@SEARCH_UHID", SEARCH_UHID));
            cmd.Parameters.Add(new SqlParameter("@SEARCH_NAME", SEARCH_NAME));
            cmd.Parameters.Add(new SqlParameter("@SEARCH_MOBILE", SEARCH_MOBILE));
            cmd.Parameters.Add(new SqlParameter("@SEARCH_OPD", SEARCH_OPD));
            cmd.Parameters.Add(new SqlParameter("@SEARCH_IPD", SEARCH_IPD));
            cmd.Parameters.Add(new SqlParameter("@SEARCH_AADHAAR", SEARCH_AADHAAR));
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

        public DataSet GetAllRecord(string SEARCH_UHID)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("[UDSP_MAIN_PERFORMA]", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "SEARCH_ALL_RECORD"));
            //cmd.Parameters.Add(new SqlParameter("@HOSPITAL_ID", objApplicationFields.HOSPITAL_ID));
            // cmd.Parameters.Add(new SqlParameter("@CLINIC_ID", objApplicationFields.CLINIC_ID));
            cmd.Parameters.Add(new SqlParameter("@SEARCH_UHID", SEARCH_UHID));

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