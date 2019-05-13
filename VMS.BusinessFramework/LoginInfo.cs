using System;
using System.Collections.Generic;
using System.Text;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;
namespace VMS.BuisinessFramework
{
    public class LoginInfo
    {
        static SqlConnection conn;
        static SqlCommand cmd;
        static string connstr = ConfigurationManager.ConnectionStrings["MoonrakerConnectionString2"].ToString();
        public DataSet BindHospitalDetail()
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("SELECT * FROM WEBHOSPITAL WHERE ISNULL(STATUS,'')='A'", conn);
            cmd.CommandType = CommandType.Text;
            //cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "GET"));

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
        public DataSet BindClinicDetail(string HOSPITAL_ID)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("SELECT * FROM WEBCLINIC_MASTER WHERE HOSPITAL_ID=@HOSPITAL_ID AND ISNULL(STATUS,'')='A'", conn);
            cmd.CommandType = CommandType.Text;
            cmd.Parameters.Add(new SqlParameter("@HOSPITAL_ID", HOSPITAL_ID));

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
        public DataSet BindStoreDetail(string HOSPITAL_ID, string CLINIC_ID)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("SELECT * FROM WEBSTORE_MASTER WHERE ISNULL(STATUS,'')='A' AND HOSPITAL_ID=@HOSPITAL_ID AND CLINIC_ID=@CLINIC_ID", conn);
            cmd.CommandType = CommandType.Text;
            cmd.Parameters.Add(new SqlParameter("@HOSPITAL_ID", HOSPITAL_ID));
            cmd.Parameters.Add(new SqlParameter("@CLINIC_ID", CLINIC_ID));

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
        public DataSet BindLabDetail(string HOSPITAL_ID, string CLINIC_ID)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("SELECT * FROM WEBLAB_MASTER WHERE ISNULL(STATUS,'')='A' AND HOSPITAL_ID=@HOSPITAL_ID AND CLINIC_ID=@CLINIC_ID", conn);
            cmd.CommandType = CommandType.Text;
            cmd.Parameters.Add(new SqlParameter("@HOSPITAL_ID", HOSPITAL_ID));
            cmd.Parameters.Add(new SqlParameter("@CLINIC_ID", CLINIC_ID));

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

        public DataSet BindLoginInfoDetail(string UserName, string HOSPITAL_ID, string CLINIC_ID)
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("SELECT NAME AS USER_NAME,CODE AS USER_CODE,ISNULL(DISC_PERCENT,0)DISC_PERCENT,ISNULL(DISC_AMOUNT,0)DISC_AMOUNT,* FROM WEBUSER_MASTER WHERE NAME=@USER_NAME AND HOSPITAL_ID=@HOSPITAL_ID AND CLINIC_ID=@CLINIC_ID AND ISNULL(STATUS,'')='A'", conn);
            cmd.CommandType = CommandType.Text;
            cmd.Parameters.Add(new SqlParameter("@HOSPITAL_ID", HOSPITAL_ID));
            cmd.Parameters.Add(new SqlParameter("@CLINIC_ID", CLINIC_ID));
            cmd.Parameters.Add(new SqlParameter("@USER_NAME", UserName));

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
        public DataSet BindModuleDetail()
        {
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("SELECT * FROM WEBMODULES WHERE ISNULL(STATUS,'')='A'", conn);
            cmd.CommandType = CommandType.Text;
            //cmd.Parameters.Add(new SqlParameter("@INPUT_TYPE", "GET"));

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
