import { useField } from "formik";
import React from "react";
import PropTypes from "prop-types";
function CustomInput({ label, ...props }) {
  const [field, meta] = useField(props);

  const errorStyle = meta.touched && meta.error ? "border-red-500" : "";
  return (
    <>
      <label className="w-full ps-1"> {label} </label>
      <input
        className={`text-black w-full ps-2 py-1 rounded-md my-2  border-[3px] outline-none ${errorStyle}`}
        {...field}
        {...props}
      />
    </>
  );
}
CustomInput.propTypes = {
  label: PropTypes.string.isRequired,
};
const MemoizedCustomInput = React.memo(CustomInput);
export default MemoizedCustomInput;
