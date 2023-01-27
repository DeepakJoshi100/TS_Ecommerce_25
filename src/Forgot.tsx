import React from "react";
import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { withFormik } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import { forForgot, ForgotUp } from "./model";

function callForgotApi(values: forForgot) {
  console.log("sending data", "1", values.email, "2", values.password);
}

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(5, "Too Short").required(),
});

const initialValues = {
  email: "",
  password: "",
};

function Forgot({
  handleSubmit,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}: ForgotUp) {
  return (
    <>
      <Link to="/Forgot"></Link>
      <div className="flex items-center justify-center h-full bg-blue-100">
        <div className="flex items-center justify-center p-10 bg-blue-200 border-4 border-blue-300 rounded-md">
          <form
            className="flex flex-col items-center justify-center gap-5 p-10 bg-blue-300 border-4 border-blue-300 rounded-md"
            onSubmit={handleSubmit}
          >
            <VscAccount className="text-6xl font-black text-black" />
            <h1 className="flex items-center justify-center text-4xl font-black text-blue-900">
              Forgot
            </h1>
            <div className="flex flex-col">
              <Input
                values={values.email}
                error={errors.email}
                touched={touched.email}
                onChange={handleChange}
                onBlur={handleBlur}
                id="email"
                type="email"
                name="email"
                className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
                placeholder="E-mail"
              />

              <Input
                values={values.password}
                error={errors.password}
                touched={touched.password}
                onChange={handleChange}
                onBlur={handleBlur}
                id="password"
                type="password"
                name="password"
                className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
                placeholder="Password"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <button
                  type="submit"
                  className="px-6 py-0 mx-auto bg-blue-700 rounded-md disabled:bg-gray-200"
                  // disabled={!dirty || !isValid}
                >
                  Get OTP
                </button>
              </div>

              <div className="flex flex-col items-center justify-center text-xs font-bold text-green-800 rounded-md">
                <span className="flex items-center text-xs font-semibold text-black">
                  Move to
                  <Link
                    to="/LoginPage"
                    className="text-sm font-black text-red-400 underline"
                  >
                    Login
                  </Link>
                </span>
              </div>

              {/* <button
                  type="button"
                  className="flex items-end justify-end text-xs"
                >
                  Don't have an account ?
                  <Link
                    to="/SignUp"
                    className="text-sm font-black text-red-400 underline"
                  >
                    SignUp
                  </Link>
                </button> */}
              <Link
                to="/LoginPage"
                className="flex items-end justify-end text-xs font-bold text-gray-400"
              >
                Back To Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
const myHOC = withFormik({
  validationSchema: schema,
  mapPropsToValues: () => {
    return { email: "", password: "" };
  },
  handleSubmit: callForgotApi,
});
const EasyForgot = myHOC(Forgot);
export default EasyForgot;
