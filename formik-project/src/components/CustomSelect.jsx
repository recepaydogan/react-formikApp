import { useField } from "formik";
import PropTypes from "prop-types";

function CustomSelect({ label, ...props }) {
  const [field, meta] = useField(props);

  const errorStyle = meta.touched && meta.error ? "border-red-500" : "";
  return (
    <>
      <label className="ps-1"> {label} </label>
      <select
        className={`text-black border-[3px] w-full ps-2 py-1 rounded-md my-2 outline-none ${errorStyle}`}
        {...field}
        {...props}
      />
    </>
  );
}
CustomSelect.propTypes = {
  label: PropTypes.string.isRequired,
};
export default CustomSelect;
