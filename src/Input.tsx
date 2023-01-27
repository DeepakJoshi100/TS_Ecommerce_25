import React from "react";
import { input } from "./model";
function Input({
  label,
  id,
  name,
  className,
  touched,
  error,
  logo,
  values,
  ...rest
}: input) {
  let borderClass = "";
  if (error && touched) {
    borderClass =
      "border-red-500 focus:text-red-500 focus:border-red-400 text-red-400 ";
  }
  return (
    <>
      <div className="flex flex-col">
        <label
          htmlFor={id}
          className="px-3 text-sm font-semibold text-gray-500 sr-only"
        >
          {label}
        </label>
        <div
          className={
            "gap-2 bg-white flex items-center justify-start rounded-md px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600 " +
            borderClass +
            className
          }
        >
          <div>{logo}</div>
          <input
            id={id}
            name={name}
            {...rest}
            className={"focus:outline-none w-full px-2 py-1"}
          />
        </div>

        {touched && error && (
          <div className="ml-6 text-xs font-black text-red-500">{error}</div>
        )}
      </div>
    </>
  );
}
export default Input;
