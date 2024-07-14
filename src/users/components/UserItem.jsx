import React from "react";
import Card from "../../shared/components/UIElements/Card";
import { Link } from "react-router-dom";

const UserItem = ({ name, image, placeCount, id }) => {
  return (
    <li className="my-[1rem]">
      <Link to={`/${id}/places`}>
        <Card className="flex items-center gap-4 p-[1.5rem] bg-primary">
          <div className="h-[80px] w-[80px] rounded-full">
            <img
              src={image}
              alt={name}
              className="h-[100%] w-[100%] rounded-full"
            />
          </div>
          <div>
            <h2 className="text-2xl text-white">{name}</h2>
            <h3 className="text-xl text-white">
              {placeCount} {placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Card>
      </Link>
    </li>
  );
};

export default UserItem;
