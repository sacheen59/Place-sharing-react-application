import React from "react";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

const UserList = (props) => {
  const classes = "w-[90%] max-w-[25rem] mx-auto my-[4rem]";
  if (props.items.length === 0) {
    return (
      <Card className={`${classes} bg-primary p-[1.5rem]`}>
        <h2 className="text-center text-3xl text-white font-bold">
          No Users Found!
        </h2>
      </Card>
    );
  }
  return (
    <ul className={classes}>
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
          placeCount={user.places.length}
        />
      ))}
    </ul>
  );
};

export default UserList;
