import React, { useState } from "react";
import { useFormik } from "formik";

import { signupSchema } from "../../shared/schema/ValidationSchema";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import { useHttpClient } from "../../shared/hook/http-hook";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: async (values, actions) => {
        try {
          await sendRequest(
            `http://localhost:5000/api/users/signup/`,
            "POST",
            JSON.stringify({
              name: values.name,
              email: values.email,
              password: values.password,
            }),
            {
              "Content-Type": "application/json",
            }
          );
          actions.resetForm();
        } catch (err) {}
      },
    });

  return (
    <>
      <ErrorModal error={error} onClose={clearError} />
      <div className="max-w-[20rem] md:max-w-[30rem] mx-auto mt-10 bg-white p-6 rounded-2xl">
        {isLoading && <LoadingSpinner />}
        {!isLoading && (
          <>
            <h2 className="text-center text-4xl p-2 font-bold text-red-700 ">
              SIGN UP
            </h2>
            <hr className="my-2" />
            <form onSubmit={handleSubmit}>
              {/* input for user name */}
              <div className="flex flex-col gap-2 my-2">
                <label htmlFor="name" className="text-black tracking-[1px]">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className=" bg-gray-300 outline-none py-2 px-3 rounded-lg"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name ? (
                  <p className="text-red-500 text-md">{errors.name}</p>
                ) : null}
              </div>

              {/* input for email */}
              <div className="flex flex-col gap-2 my-2">
                <label htmlFor="email" className="text-black tracking-[1px]">
                  E-Mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className=" bg-gray-300 outline-none py-2 px-3 rounded-lg"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="text-red-500 text-md">{errors.email}</p>
                ) : null}
              </div>
              <div className="flex flex-col gap-2 my-2">
                <label htmlFor="pass" className="text-black tracking-[1px]">
                  PASSWORD
                </label>
                <input
                  type="text"
                  name="password"
                  id="pass"
                  className=" bg-gray-300 outline-none py-2 px-3 rounded-lg"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <p className="text-red-500 text-md">{errors.password}</p>
                ) : null}
              </div>
              <div className="flex flex-col gap-2 my-2">
                <label htmlFor="cpass" className="text-black tracking-[1px]">
                  CONFIRM PASSWORD
                </label>
                <input
                  type="text"
                  name="confirmPassword"
                  id="cpass"
                  className=" bg-gray-300 outline-none py-2 px-3 rounded-lg"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <p className="text-red-500 text-md">
                    {errors.confirmPassword}
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col justify-center">
                <button
                  type="submit"
                  className="mt-4 px-3 py-2 rounded-lg text-white bg-red-500 font-bold"
                >
                  Sign Up
                </button>
                <div className="mt-4">
                  <p className="text-center">
                    Already have an account?
                    <span className="text-red-500 hover:text-red-700 cursor-pointer mx-1">
                      <Link to="/auth/login">Login</Link>
                    </span>
                  </p>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </>
  );
};

export default Signup;
