import React, { useState, FC } from "react";
import { withFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Input from "./Input";
import axios from "axios";
import { withAlert, withUser } from "./withProvider";
import Alert from "./Alert";
import { Bag, forLogin, loginUp } from "./model";

function callloginapi(values: forLogin, bag: Bag) {
  axios
    .post("https://myeasykart.codeyogi.io/login", {
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      bag.props.setUser(user);
      bag.props.setAlert({ type: "success", message: "Logged in" });
    })
    .catch((response) => {
      bag.props.setAlert({
        type: "failure",
        message: "Login errror",
      });
    });
}

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(5, "Too Short").required(),
});

const initialValues = { email: "", password: "" };

const Login = ({
  handleSubmit,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  isValid,
}: loginUp) => {
  return (
    <>
      <Link to="/LoginPage"></Link>

      <form onSubmit={handleSubmit}>
        <div className="max-w-4xl mx-auto my-0 bg-white lg:my-12">
          <div className="flex flex-col p-20">
            <h1 className="mb-10 text-2xl font-bold text-gray-600">Login </h1>
            <div className="flex flex-col w-full border border-gray-400 rounded-md aspect-video">
              <div className="flex flex-col gap-8 mx-3 my-10">
                <Input
                  values={values.email}
                  error={errors.email}
                  touched={touched.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="email"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  autoComplete="email"
                />
                <Input
                  values={values.password}
                  error={errors.password}
                  touched={touched.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  label="password"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
              </div>

              <div className="flex gap-4 mx-6">
                <button
                  type="submit"
                  disabled={!isValid}
                  className="px-8 py-2 font-semibold text-white bg-red-500 rounded-md hover:bg-orange-500 disabled:bg-gray-300"
                >
                  LOG IN
                </button>
              </div>
              <div className="flex items-center justify-end gap-4 px-2 mx-3">
                <div className="text-red-500 ">
                  <Link to="/Forgot">Lost Your Password?</Link>
                </div>
                <div className="font-black text-blue-500 hover:underline">
                  <Link to="/SignUp">Signup</Link>
                </div>
              </div>
              <div>
                <Alert />
              </div>

              <div className="pb-6"></div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
const myHOC = withFormik({
  validationSchema: schema,
  mapPropsToValues: () => {
    return { email: "", password: "" };
  },
  handleSubmit: callloginapi,
  validateOnMount: true,
});
const EasyLogin = myHOC(Login);
export default withAlert(withUser(EasyLogin));
