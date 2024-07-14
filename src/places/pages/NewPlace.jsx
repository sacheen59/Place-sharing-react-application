import React, { useState } from "react";
import { useFormik } from "formik";
import { newPlaceSchema } from "../../shared/schema/ValidationSchema";

const initialValues = {
  title: "",
  description: "",
  address: "",
};

const NewPlace = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useFormik({
    initialValues,
    validationSchema: newPlaceSchema,
    onSubmit: async (values, actions) => {
      //sending http request
      try {
        const response = await fetch("http://localhost:5000/api/places", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: values.title,
            description: values.description,
            address: values.address,
          }),
        });
        const resData = response.json();
      } catch (err) {}
      actions.resetForm();
    },
  });
  return (
    <div className="max-w-[20rem] md:max-w-[40rem] mx-auto mt-10 bg-white p-6 rounded-2xl">
      <form onSubmit={handleSubmit}>
        {/* input for title */}
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-black tracking-[1px]">
            Title:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className=" bg-gray-300 outline-none py-2 px-3 rounded-lg"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.title && touched.title ? (
            <p className="text-red-500 text-md">{errors.title}</p>
          ) : null}
        </div>

        {/* input for description */}
        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="text-black tracking-[1px]">
            Description:
          </label>

          <textarea
            type="text"
            name="description"
            id="description"
            className=" bg-gray-300 outline-none py-2 px-3 rounded-lg"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
          ></textarea>
          {errors.description && touched.description ? (
            <p className="text-red-500 text-md">{errors.description}</p>
          ) : null}
        </div>

        {/* input for address */}
        <div className="flex flex-col gap-2">
          <label htmlFor="address" className="text-black tracking-[1px]">
            Address:
          </label>

          <input
            type="text"
            name="address"
            id="address"
            className=" bg-gray-300 outline-none py-2 px-3 rounded-lg"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.address && touched.address ? (
            <p className="text-red-500 text-md">{errors.address}</p>
          ) : null}
        </div>
        <button
          type="submit"
          className={`mt-4  px-3 py-2 rounded-lg text-white font-bold ${
            !isValid ? "bg-gray-300 cursor-not-allowed" : " bg-red-500"
          }`}
        >
          ADD PLACES
        </button>
      </form>
    </div>
  );
};

export default NewPlace;
