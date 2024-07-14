import React, { useContext } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import PlaceItem from "./PlaceItem";
import Card from "../../shared/components/UIElements/Card";
import { AuthContext } from "../../shared/context/auth-context";

function PlaceList(props) {
  const auth = useContext(AuthContext);
  const classes = "w-[90%] max-w-[25rem] mx-auto my-[4rem]";
  if (props.items.length === 0) {
    return (
      <Card className={`${classes} bg-primary p-[1.5rem] flex flex-col`}>
        <h2 className="text-center text-3xl text-white font-bold">
          {auth.isLoggedIn
            ? "No places found, Please Share your places."
            : "No places added Yet!"}
        </h2>
        {auth.isLoggedIn && (
          <Link to="/places/new" className="mx-auto">
            <button className="bg-red-700 text-white px-2 py-1 rounded-lg mt-4">
              Share Places
            </button>
          </Link>
        )}
      </Card>
    );
  }
  return (
    <ul className="max-w-[40rem] mx-auto w-[90%]">
      {props.items.map((place) => {
        return (
          <PlaceItem
            key={place.id}
            id={place.id}
            image={place.imageUrl}
            title={place.title}
            description={place.description}
            address={place.address}
            creator={place.creator}
            coordinate={place.loaction}
          />
        );
      })}
    </ul>
  );
}

export default PlaceList;
