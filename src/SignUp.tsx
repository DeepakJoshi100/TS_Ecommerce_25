import React from "react";
import { Link } from "react-router-dom";
import { SiGnuprivacyguard } from "react-icons/si";
import { withFormik } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import axios from "axios";
import { withAlert, withUser } from "./withProvider";
import Alert from "./Alert";
import { Bag, forSignUp, signUp } from "./model";

function callSignupApi(values: forSignUp, bag: Bag) {
  axios
    .post("https://myeasykart.codeyogi.io/signup", {
      email: values.gmail,
      password: values.password,
      fullName: values.username,
    })
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      bag.props.setUser(user);
    })
    .catch(() => {
      bag.props.setAlert({
        type: "failure",
        message: "Login errror",
      });
    });
}

const schema = Yup.object().shape({
  gmail: Yup.string().email().required(),
  username: Yup.string().required(),
  password: Yup.string().min(1, "too short").required(),
});

const initialValues = {
  gmail: "",
  username: "",
  password: "",
};

const SignUp = ({
  handleSubmit,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
}: signUp) => {
  return (
    <>
      <Link to="/SignUp"></Link>

      <form
        className="flex flex-col items-center justify-center h-screen gap-4 bg-blue-100"
        onSubmit={handleSubmit}
      >
        <SiGnuprivacyguard className="text-6xl font-black text-black" />
        <h1 className="flex items-center justify-center text-4xl font-black text-blue-900">
          SignUp
        </h1>
        <Alert />
        <div className="flex flex-col">
          <Input
            logo="💌"
            values={values.gmail}
            error={errors.gmail}
            touched={touched.gmail}
            onChange={handleChange}
            onBlur={handleBlur}
            id="gmail"
            name="gmail"
            className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
            placeholder="Gmail"
          />
        </div>
        <div className="flex flex-col">
          <Input
            logo="👥"
            values={values.username}
            error={errors.username}
            touched={touched.username}
            onChange={handleChange}
            onBlur={handleBlur}
            id="username"
            name="username"
            className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
            placeholder="UserName"
          />
        </div>

        <div className="flex gap-1">
          <div className="flex flex-col">
            <Input
              logo="🔒"
              values={values.password}
              error={errors.password}
              touched={touched.password}
              onChange={handleChange}
              onBlur={handleBlur}
              id="password"
              name="password"
              className="px-2 py-1 border-2 border-gray-300 focus:z-10 focus:border-2 focus:border-blue-600 focus:outline-none focus:ring-blue-600"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-2">
          <div className="flex gap-4">
            <button
              type="submit"
              className="px-6 py-0 mx-auto bg-blue-700 rounded-md disabled:bg-gray-300"
            >
              SignUp
            </button>
            <Link to="/LoginPage">Login</Link>
          </div>
        </div>
      </form>
    </>
  );
};
const myHOC = withFormik({
  validationSchema: schema,
  mapPropsToValues: () => {
    return { gmail: "", username: "", password: "" };
  },
  handleSubmit: callSignupApi,
});
const EasySignUp = myHOC(SignUp);
export default withAlert(withUser(EasySignUp));
