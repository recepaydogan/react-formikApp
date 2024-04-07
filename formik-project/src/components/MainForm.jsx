import { useFormik } from "formik";
import ValidationSchema from "../schemas/index.jsx";

function MainForm() {
  const { handleSubmit, isSubmitting, values, touched, errors, handleChange } =
    useFormik({
      initialValues: { name: "", lastName: "", password: "", email: "" },
      validationSchema: ValidationSchema,
      onSubmit: async (values, actions) => {
        await new Promise((resolve) => {
          setTimeout(() => {
            console.log("done");
            resolve();
            actions.resetForm();
          }, 5000);
        });
      },
    });
  const getValidationClass = (field) => {
    if (touched[field] && errors[field]) return "border-red-500";
    if (touched[field] && !errors[field]) return "border-green-500";
    return "";
  };
  const labelStyles = "w-full ps-1 pb-1 ";
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col h-full justify-center bg-slate-700 items-center "
    >
      {" "}
      <div className=" py-11  px-11 max-sm:w-full max-md:w-10/12 max-lg:w-1/2 max-xl:w-1/2 max-2xl:w-1/3 flex flex-col w-1/3 items-center justify-start  text-white">
        <h2 className="text-2xl">General Form</h2>
        <label className={labelStyles}>Name</label>
        <input
          className={`w-full outline-none border-t-4 border-2  text-black bg-slate-200  p-2 rounded-lg placeholder-gray-500  mb-3 ${getValidationClass(
            "name"
          )}`}
          value={values.name}
          id="name"
          onChange={handleChange}
          placeholder="Enter Your Name"
        />

        <label className={labelStyles}>Lastname</label>
        <input
          className={`w-full outline-none border-2 text-black bg-slate-200  p-2 rounded-lg placeholder-gray-500  mb-3 ${getValidationClass(
            "lastName"
          )}`}
          onChange={handleChange}
          value={values.lastName}
          id="lastName"
          placeholder="Enter Your Lastname"
        />
        <label className={labelStyles}>Mail</label>
        <input
          className={`w-full outline-none text-black border-2 bg-slate-200  p-2 rounded-lg placeholder-gray-500  mb-3 ${getValidationClass(
            "email"
          )}`}
          onChange={handleChange}
          type="email"
          value={values.email}
          id="email"
          placeholder="Enter Your email"
        />
        <label className={labelStyles}>Password</label>
        <input
          className={`w-full outline-none text-black bg-slate-200 border-2  p-2 rounded-lg placeholder-gray-500  mb-3 ${getValidationClass(
            "password"
          )}`}
          onChange={handleChange}
          type="password"
          value={values.password}
          id="password"
          placeholder="Enter Your password"
        />
        <button
          disabled={isSubmitting}
          type="submit"
          className="w-full hover:bg-blue-600 bg- bg-blue-500 text-white rounded-lg p-2 mt-10"
        >
          {isSubmitting ? "Submitting" : "Submit"}
        </button>
        <ul className=" text-start w-full mt-4 flex flex-col gap-1 text-lg">
          <li className="text-red-500 ">
            {touched.name && errors.name ? errors.name : ""}
          </li>
          <li className="text-red-500 ">
            {touched.lastName && errors.lastName ? errors.lastName : ""}
          </li>
          <li className="text-red-500 ">
            {touched.email && errors.email ? errors.email : ""}
          </li>
          <li className="text-red-500 ">
            {touched.password && errors.password ? errors.password : ""}
          </li>
        </ul>
      </div>
    </form>
  );
}

export default MainForm;
