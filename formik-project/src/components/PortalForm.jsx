/* eslint-disable no-unused-vars */
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";

const PortalForm = () => {
  return (
    <Formik
      initialValues={{
        userName: "",
        city: "",
        isAccepted: true,
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
        city: Yup.string().required("Required"),
        isAccepted: Yup.boolean()
          .required("Required")
          .oneOf([true], "You must accept the terms and conditions"),
      })}
    >
      {(values) => {
        return (
          <Form className="w-screen h-screen flex bg-black text-white justify-center items-center ">
            <div className=" flex justify-center items-center flex-col bg-gray-700 w-2/4 h-60">
              <CustomInput
                label="Username"
                name="userName"
                placeholder="Enter Your Username..."
              />
              <CustomSelect label="City" name="city" type="select">
                <option value="">Please Select Your City</option>
                <option value="istanbul">Istanbul</option>
                <option value="newyork">New York</option>
                <option value="berlin">Berlin</option>
              </CustomSelect>
              <button
                type="submit"
                disabled={values.isSubmitting}
                className=" bg-white text-black py-2 px-4 rounded-lg mt-4"
              >
                {values.isSubmitting ? "Loading..." : "Submit"}
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PortalForm;
