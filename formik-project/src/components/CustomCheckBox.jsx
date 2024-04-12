import { useField } from "formik";

function CustomCheckBox({ label, ...props }) {
  const [field] = useField(props);

  return (
    <div className="flex ps-1 ">
      <label htmlFor="checkbox" className="w-full order-2 ps-1 select-none">
        {label}
      </label>
      <input
        checked={field.value}
        id="checkbox"
        className="order-1"
        type="checkbox"
        {...field}
        {...props}
      />
    </div>
  );
}

export default CustomCheckBox;
