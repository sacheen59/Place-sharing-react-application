import { useFormik } from "formik";
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { loginSchema } from "../../shared/schema/ValidationSchema";
import { AuthContext } from "../../shared/context/auth-context";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import { useHttpClient } from "../../shared/hook/http-hook";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: async (values, actions) => {
        try {
          await sendRequest(
            `http://localhost:5000/api/users/login`,
            "POST",
            JSON.stringify({
              email: values.email,
              password: values.password,
            }),
            { "Content-Type": "application/json" }
          );
          auth.login();
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
              LOGIN
            </h2>
            <hr className="my-2" />
            <form onSubmit={handleSubmit}>
              {/* input for user name */}

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
              <div className="flex flex-col justify-center">
                <button
                  type="submit"
                  className="mt-4 px-3 py-2 rounded-lg text-white bg-red-500 font-bold"
                >
                  Login
                </button>
                <div className="mt-4">
                  <p className="text-center">
                    Don't have an account?
                    <span className="text-red-500 hover:text-red-700 cursor-pointer mx-1">
                      <Link to="/auth/signup">Signup</Link>
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

export default Login;
