import React from "react";

export const Input = ({
  labelFor,
  placeholder,
  labelText = "",
  type = "text",
  register,
  errorMessage = "",
}) => {
  return (
    <div className="w-[360px] h-[60px]">
      <label
        htmlFor={labelFor}
        className="font-medium font-sans block mb-2 pl-1 text-white"
      >
        {labelText}
      </label>
      <input
        {...register(labelFor, { required: true })}
        placeholder={placeholder}
        type={type}
        className="h-10 w-full pl-4 font-sans placeholder:font-medium placeholder:text-white text-white rounded-md bg-primary"
      />
      <div className="flex justify-end ">
        <span className="text-secondary text-xs mt-1">{errorMessage}</span>
      </div>
    </div>
  );
};
