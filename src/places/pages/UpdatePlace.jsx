import { useFormik } from "formik";
import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { updatePlaceSchema } from "../../shared/schema/ValidationSchema";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Manakamana Temple",
    description:
      "One of the greatest spritual place of Nepal where people go to worship god.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Gorkha_Manakamana_Temple_%28cropped%29.jpg/1024px-Gorkha_Manakamana_Temple_%28cropped%29.jpg",
    address: "WH3M+MJM, Manakamana",
    location: {
      lat: 27.904219,
      lng: 84.581459,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Manakamana Temple",
    description:
      "One of the greatest spritual place of Nepal where people go to worship god.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Gorkha_Manakamana_Temple_%28cropped%29.jpg/1024px-Gorkha_Manakamana_Temple_%28cropped%29.jpg",
    address: "WH3M+MJM, Manakamana",
    location: {
      lat: 27.904219,
      lng: 84.581459,
    },
    creator: "u2",
  },
  {
    id: "p3",
    title: "Kusma Suspension Bridge",
    description:
      "It is an stunnig bridge of Nepal which connects Kusma and gyadi.",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipMvowJBoHjI8_-jL7i_DSZcj_JTokamkw6VrKo=w408-h306-k-no",
    address: "6M5J+G3M, कुश्मा ज्ञादी पुल, Kushma 33400",
    location: {
      lat: 28.2326381,
      lng: 83.6273556,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  const initialValues = {
    title: identifiedPlace.title,
    description: identifiedPlace.description,
  };

  const {
    values,
    errors,
    touched,
    isValid,
    handleSubmit,
    handleBlur,
    handleChange,
  } = useFormik({
    initialValues,
    validationSchema: updatePlaceSchema,
    onSubmit: (values, actions) => {
      console.log(values);
      actions.resetForm();
    },
  });

  if (!identifiedPlace) {
    return (
      <div>
        <h1>Could not find place!</h1>
      </div>
    );
  }
  return (
    <div className="max-w-[20rem] md:max-w-[40rem] mx-auto mt-10 bg-white p-6 rounded-2xl">
      <form onSubmit={handleSubmit}>
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
        <button
          type="submit"
          className={`mt-4  px-3 py-2 rounded-lg text-white font-bold ${
            !isValid ? "bg-gray-300 cursor-not-allowed" : " bg-red-500"
          }`}
        >
          UPDATE PLACES
        </button>
      </form>
    </div>
  );
};

export default UpdatePlace;
