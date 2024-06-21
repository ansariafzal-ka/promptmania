import React from "react";

const FormField = ({ placeholder, type, value, onChange }) => {
  return (
    <input
      required
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-2 outline-none border rounded-lg shadow-md"
    />
  );
};

export default FormField;
