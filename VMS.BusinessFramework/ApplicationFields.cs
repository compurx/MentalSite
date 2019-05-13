using System;
using System.Collections.Generic;
using System.Text;

namespace VMS.BuisinessFramework
{
    public class ApplicationFields
    {
        static string Hospital_Name;

        static decimal UserDisc_Amt;
        static decimal UserDisc_Amt_Per;

        static int Hospital_Id = 0;
        static string Clinic_Name;
        static int Clinic_id = 0;
        static string Module_Name;
        static string Hospital_Mobile;
        static int Module_id = 0;

        static string Store_Name;
        static int Store_id = 0;

        static string Lab_Name;
        static int Lab_id = 0;

        static string User_Name;
        static int User_id;
        static string User_Full_Name;
        //static int Lab_id = 0;

        public decimal USER_DISC_AMOUNT
        {

            get
            {
                return UserDisc_Amt;
            }

            set
            {
                UserDisc_Amt = value;
            }
        }
        public decimal USER_DISC_AMOUNT_PERCENT
        {

            get
            {
                return UserDisc_Amt_Per;
            }

            set
            {
                UserDisc_Amt_Per = value;
            }
        }

        public int USER_ID
        {

            get
            {
                return User_id;
            }

            set
            {
                User_id = value;
            }
        }
        public string HOSPITAL_NAME
        {
            //intializevariable
            get
            {
                return Hospital_Name;
            }
            set
            {
                Hospital_Name = value;
            }

        }
        public string HOSPITAL_MOBILE
        {
            //intializevariable
            get
            {
                return Hospital_Mobile;
            }
            set
            {
                Hospital_Mobile = value;
            }

        }
        public int HOSPITAL_ID
        {

            get
            {
                return Hospital_Id;
            }

            set
            {
                Hospital_Id = value;
            }
        }

        public string CLINIC_NAME
        {
            //intializevariable
            get
            {
                return Clinic_Name;
            }
            set
            {
                Clinic_Name = value;
            }

        }
        public int CLINIC_ID
        {

            get
            {
                return Clinic_id;
            }

            set
            {
                Clinic_id = value;
            }
        }
        public string MODULE_NAME
        {
            //intializevariable
            get
            {
                return Module_Name;
            }
            set
            {
                Module_Name = value;
            }

        }
        public int MODULE_ID
        {

            get
            {
                return Module_id;
            }

            set
            {
                Module_id = value;
            }
        }
        public string STORE_NAME
        {
            //intializevariable
            get
            {
                return Store_Name;
            }
            set
            {
                Store_Name = value;
            }

        }
        public int STORE_ID
        {

            get
            {
                return Store_id;
            }

            set
            {
                Store_id = value;
            }
        }

        public string LAB_NAME
        {
            //intializevariable
            get
            {
                return Lab_Name;
            }
            set
            {
                Lab_Name = value;
            }

        }
        public int LAB_ID
        {

            get
            {
                return Lab_id;
            }

            set
            {
                Lab_id = value;
            }
        }
        public string USER_NAME
        {
            //intializevariable
            get
            {
                return User_Name;
            }
            set
            {
                User_Name = value;
            }

        }

        public string USER_FULL_NAME
        {
            //intializevariable
            get
            {
                return User_Full_Name;
            }
            set
            {
                User_Full_Name = value;
            }

        }
    }
}
