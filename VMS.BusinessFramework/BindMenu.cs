using System;
using System.Collections.Generic;
using System.Text;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace VMS.BuisinessFramework
{
    public class BindMenu
    {
        static SqlConnection conn;
        static SqlCommand cmd;
        static string connstr = ConfigurationManager.ConnectionStrings["MoonrakerConnectionString2"].ToString();
        public DataSet BindLoginInfoDetail()
        {
            ApplicationFields objApplicationFields = new ApplicationFields();
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_WEB_GET_MENU_DETAIL", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@HOSPITAL_ID", objApplicationFields.HOSPITAL_ID));
            cmd.Parameters.Add(new SqlParameter("@CLINIC_ID", objApplicationFields.CLINIC_ID));
            cmd.Parameters.Add(new SqlParameter("@USER_CODE", objApplicationFields.USER_ID));
            cmd.Parameters.Add(new SqlParameter("@MODULE_CODE", objApplicationFields.MODULE_ID));
            cmd.Parameters.Add(new SqlParameter("@MENU_TYPE", "T"));

            conn.Open();
            try
            {
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(strResultstring);
            }
            catch (Exception EX)
            {

            }
            finally
            {
                conn.Close();
            }
            return strResultstring;
        }
        public DataSet BindMasterInfoDetail()
        {
            ApplicationFields objApplicationFields = new ApplicationFields();
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_GET_MENU_DETAIL", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@HOSPITAL_ID", objApplicationFields.HOSPITAL_ID));
            cmd.Parameters.Add(new SqlParameter("@CLINIC_ID", objApplicationFields.CLINIC_ID));
            cmd.Parameters.Add(new SqlParameter("@USER_CODE", objApplicationFields.USER_ID));
            cmd.Parameters.Add(new SqlParameter("@MODULE_CODE", objApplicationFields.MODULE_ID));
            cmd.Parameters.Add(new SqlParameter("@MENU_TYPE", "M"));

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
        public DataSet BindReportInfoDetail()
        {
            ApplicationFields objApplicationFields = new ApplicationFields();
            DataSet strResultstring = new DataSet();
            conn = new SqlConnection(connstr);
            cmd = new SqlCommand("UDSP_GET_MENU_DETAIL", conn);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add(new SqlParameter("@HOSPITAL_ID", objApplicationFields.HOSPITAL_ID));
            cmd.Parameters.Add(new SqlParameter("@CLINIC_ID", objApplicationFields.CLINIC_ID));
            cmd.Parameters.Add(new SqlParameter("@USER_CODE", objApplicationFields.USER_ID));
            cmd.Parameters.Add(new SqlParameter("@MODULE_CODE", objApplicationFields.MODULE_ID));
            cmd.Parameters.Add(new SqlParameter("@MENU_TYPE", "R"));

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
