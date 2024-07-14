import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

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
    creator: "u2",
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

function UserPlaces() {
  const userId = useParams().userId;
  const filteredPlaces = DUMMY_PLACES.filter((p) => p.creator === userId);
  return <PlaceList items={filteredPlaces} />;
}

export default UserPlaces;
