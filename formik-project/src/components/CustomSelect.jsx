import { ErrorMessage, useField } from "formik";
import PropTypes from "prop-types";

function CustomSelect({ label, ...props }) {
  const [field, meta] = useField(props);

  const errorStyle = meta.touched && meta.error ? "border-red-500" : "";
  return (
    <>
      <label> {label} </label>
      <select
        className={`text-black border-[3px] outline-none ${errorStyle}`}
        {...field}
        {...props}
      />
      <ErrorMessage name={field.name} />
    </>
  );
}
CustomSelect.propTypes = {
  label: PropTypes.string.isRequired,
};
export default CustomSelect;
