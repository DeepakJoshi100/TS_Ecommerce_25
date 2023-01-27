import {
  FormEventHandler,
  ChangeEventHandler,
  InputHTMLAttributes,
  FocusEventHandler,
} from "react";
export type maptype = { [item: number]: number };
// export type input = {
//   label?: string;
//   id: string;
//   name: string;
//   touched: boolean;
//   className: string;
//   error?: string;
//   logo: string;
//   values: string;
//   onChange: ChangeEventHandler<HTMLInputElement>;
//   onBlur: ChangeEvent<HTMLInputElement>;
//   placeholder: string;
// };

export type input = {
  label?: string;
  touched: boolean;
  error?: string;
  logo?: string;
  values: string;
} & InputHTMLAttributes<HTMLInputElement>;

export type Product = {
  id: number;
  thumbnail: string;
  sale: string;
  price: number;
  rating: number;
  description: string;
  title: string;
  category: string;
  brand: string;
};

export type ProductProp = {
  id: number;
  thumbnail: string;
  sale: string;
  price: number;
  rating: number;
  description: string;
  title: string;
  category: string;
  brand: string;
};

export type UserNot = { user: []; children: React.ReactNode };

export type forForgot = { email: string; password: string };
export type forLogin = { email: string; password: string };
export type forSignUp = { gmail: string; password: string; username: string };
export type Bag = {
  props: {
    setUser: (arg0: any) => void;
    setAlert: (arg0: { type: string; message: string }) => void;
  };
};
export type ForgotUp = {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleBlur: FocusEventHandler<HTMLInputElement>;
  errors: forLogin;
  values: forLogin;
  isValid: boolean;
  touched: { email: boolean; password: boolean; username: boolean };
};

export type loginUp = {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleBlur: FocusEventHandler<HTMLInputElement>;
  errors: forLogin;
  values: forLogin;
  isValid: boolean;
  touched: { email: boolean; password: boolean; username: boolean };
};

export type signUp = {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleBlur: FocusEventHandler<HTMLInputElement>;
  errors: forSignUp;
  values: forSignUp;
  touched: { gmail: boolean; password: boolean; username: boolean };
};
