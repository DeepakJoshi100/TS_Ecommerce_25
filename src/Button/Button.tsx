import { ButtonHTMLAttributes, createContext, FC, useState } from "react";

type ButtomProps = {
  theme?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
} & ButtonHTMLAttributes<HTMLButtonElement>;


const Button: FC<ButtomProps> = ({ theme, className, size, ...rest }) => {

  let themeClasses = "bg-indigo-700 text-white";
  if (theme === "secondary") {
    themeClasses = "bg-white text-indigo-700";
  }

  let sizeClasses = "";
  switch (size) {
    case "small":
      sizeClasses = "text-sm";
      break;
    case "medium":
      sizeClasses = "text-md";
      break;
    case "large":
      sizeClasses = "text-lg";
  }

  return (
    <button
      {...rest}
      className={
        "px-2 border rounded-md " +
        className +
        " " +
        themeClasses +
        " " +
        sizeClasses
      }
    ></button>
  );
};
Button.defaultProps = {
  theme: "primary",
  size: "small",
};
export default Button;



// import { ButtonHTMLAttributes, createContext, FC, useState } from "react";

// type ButtomProps = {
//   theme?: "primary" | "secondary";
//   size?: "small" | "medium" | "large";
// } & ButtonHTMLAttributes<HTMLButtonElement>;

// type Product = {
//   id: number;
//   title: string;
//   discription: string;
// };

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// type UserContextData = { user: User; setUser: (u: User) => void } | undefined;

// const UserContext = createContext<UserContextData>(undefined);

// const Button: FC<ButtomProps> = ({ theme, className, size, ...rest }) => {
//   const [product, setProduct] = useState(0);
//   let themeClasses = "bg-indigo-700 text-white";
//   if (theme === "secondary") {
//     themeClasses = "bg-white text-indigo-700";
//   }

//   let sizeClasses = "";
//   switch (size) {
//     case "small":
//       sizeClasses = "text-sm";
//       break;
//     case "medium":
//       sizeClasses = "text-md";
//       break;
//     case "large":
//       sizeClasses = "text-lg";
//   }

//   return (
//     <button
//       {...rest}
//       className={
//         "px-2 border rounded-md " +
//         className +
//         " " +
//         themeClasses +
//         " " +
//         sizeClasses
//       }
//     ></button>
//   );
// };
// Button.defaultProps = {
//   theme: "primary",
//   size: "small",
// };
// export default Button;
