import React, { FC, InputHTMLAttributes } from "react";

type InputProps = {
  theme?: "primary" | "secondary";
  sizing?: "small" | "medium" | "large";
} & InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = ({
  theme,
  className,
  sizing,
  ...rest
}) => {
  let themeClasses = "bg-indigo-200 text-white font-semibold font-mono";
  if (theme === "secondary") {
    themeClasses = "bg-gray-200 font-serif text-black";
  }

  let sizeClasses = "";
  if (sizing === "small") {
    sizeClasses = "w-20";
  } else if (sizing === "medium") {
    sizeClasses = "w-1/2";
  } else if (sizing === "large") {
    sizeClasses = "w-full";
  }

  return (
    <div>
      <input
        className={
          "px-2 py-1 border rounded-md " +
          className +
          " " +
          sizeClasses +
          " " +
          themeClasses
        }
        {...rest}
      />
    </div>
  );
};
Input.defaultProps = {
  theme: "primary",
  sizing: "small",
};
