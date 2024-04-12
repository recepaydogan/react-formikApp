/* eslint-disable no-unused-vars */
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";
import CustomCheckBox from "./CustomCheckBox";
import { useEffect, useState } from "react";
const PortalForm = () => {
  const [dark, setDark] = useState(false);
  const switchTheme = () => {
    setDark(!dark);
  };
  return (
    <Formik
      initialValues={{
        userName: "",
        city: "",
        isAccepted: false,
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        // Simulate a login request
        setTimeout(() => {
          alert(JSON.stringify(values, "null", 23));
          setSubmitting(false);
          resetForm();
        }, 400);
      }}
      validationSchema={Yup.object({
        userName: Yup.string()
          .min(3, "Minimum 3 characters")
          .required("Required"),
        city: Yup.string().required("City is required"),
        isAccepted: Yup.boolean()
          .required("Required")
          .oneOf([true], "You must accept the terms and conditions"),
      })}
    >
      {(values) => {
        return (
          <div className={dark ? "dark" : ""}>
            <Form className="w-screen font-sans  h-screen flex relative bg-neutral-200 dark:bg-neutral-800 text-white justify-center items-start">
              <div className=" flex justify-center items-start mt-16     p-10 flex-col bg-gray-700 w-1/3 h-auto rounded-lg max-sm:w-full max-md:w-10/12 max-lg:w-1/2 max-xl:w-1/2 max-2xl:w-1/3">
                <div className="text-2xl w-full text-center mb-2">
                  Portal Form
                </div>
                <CustomInput
                  label="Username"
                  name="userName"
                  placeholder="Enter Your Username..."
                />
                <p className="text-red-400 pl-1 mb-1 ">
                  <ErrorMessage name="userName" />
                  {values.errors.userName && values.touched.userName ? "*" : ""}
                </p>
                <CustomSelect label="City" name="city" type="select">
                  <option value="">Please Select Your City</option>
                  <option value="istanbul">Istanbul</option>
                  <option value="newyork">New York</option>
                  <option value="berlin">Berlin</option>
                </CustomSelect>{" "}
                <p className="text-red-400 pl-1 mb-1 ">
                  <ErrorMessage name="city" />
                  {values.errors.city && values.touched.city ? "*" : ""}
                </p>
                <CustomCheckBox
                  value={values.isAccepted}
                  label="Terms and Conditions"
                  name="isAccepted"
                />
                <p className="text-red-400 pl-1 mb-1 ">
                  <ErrorMessage name="isAccepted" />
                  {values.errors.isAccepted && values.touched.isAccepted
                    ? "*"
                    : ""}
                </p>
                <button
                  type="submit"
                  disabled={values.isSubmitting}
                  className=" bg-white w-full text-black py-2 px-4 rounded-lg mt-4"
                >
                  {values.isSubmitting ? "Loading..." : "Submit"}
                </button>
              </div>
            </Form>
            <button
              className="absolute top-10 right-10 bg-neutral-950 text-neutral-50 w-16 h-16 rounded-full font-semibold  dark:bg-neutral-100 dark:text-neutral-950"
              onClick={switchTheme}
            >
              {dark ? "LHT" : "DRK"}
            </button>
          </div>
        );
      }}
    </Formik>
  );
};

export default PortalForm;
