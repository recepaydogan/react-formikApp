import { ErrorMessage, useField } from "formik";
import PropTypes from "prop-types";
function CustomInput({ label, ...props }) {
  const [field, meta] = useField(props);

  const errorStyle = meta.touched && meta.error ? "border-red-500" : "";
  return (
    <>
      <label> {label} </label>
      <input
        className={`text-black border-2 outline-none ${errorStyle}`}
        {...field}
        {...props}
      />
      <ErrorMessage name={field.name} />
    </>
  );
}
CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
};
export default CustomInput;
