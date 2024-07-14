import React, { useEffect, useState } from "react";

import UserList from "../components/UserList";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const User = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [loadedUsers, setLoadedUsers] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:5000/api/users`);
        const resData = await response.json();
        setLoadedUsers(resData.users);
      } catch (err) {
        setIsLoading(false);
        setError(
          err.message || "Something went wrong, please try again later."
        );
      }
      setIsLoading(false);
    };

    sendRequest();
  }, []);

  function errorHandler() {
    setError(null);
  }

  return (
    <>
      <ErrorModal error={error} onClose={errorHandler} />
      {isLoading && <LoadingSpinner />}
      {!isLoading && <UserList items={loadedUsers} />}
    </>
  );
};

export default User;
