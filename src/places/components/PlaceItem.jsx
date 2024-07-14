import React, { useContext, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Card from "../../shared/components/UIElements/Card";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
import { AuthContext } from "../../shared/context/auth-context";

function PlaceItem(props) {
  const auth = useContext(AuthContext);
  const [isModalOpen, setIsOpenModel] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  function openModalHandler() {
    setIsOpenModel(true);
  }

  function closeModalHandler() {
    setIsOpenModel(false);
  }

  function showDeleteWarningHandler() {
    setShowConfirmModal(true);
  }

  function cancelDeleteHandler() {
    setShowConfirmModal(false);
  }

  function confirmDeleteHandler() {
    setShowConfirmModal(false);
    console.log("Deleting...");
  }
  return (
    <>
      {isModalOpen && (
        <Modal
          header={props.address}
          footer={
            <button
              className="bg-red-700 text-white px-3 py-2 rounded-lg"
              onClick={closeModalHandler}
            >
              Close
            </button>
          }
          onClose={closeModalHandler}
          show={isModalOpen}
        >
          <Map />
        </Modal>
      )}

      {showConfirmModal && (
        <Modal
          header={"Are you sure?"}
          footer={
            <div className="flex gap-4 justify-end">
              <button
                className="bg-green-700 text-white px-3 py-2 rounded-lg"
                onClick={confirmDeleteHandler}
              >
                Proceed
              </button>
              <button
                className="bg-red-700 text-white px-3 py-2 rounded-lg"
                onClick={cancelDeleteHandler}
              >
                Cancel
              </button>
            </div>
          }
          onClose={cancelDeleteHandler}
        >
          <p>
            Do you want to proceed and delete this place ? Please note that it
            can't be undone thereafter.
          </p>
        </Modal>
      )}
      <li className="my-4">
        <Card className="bg-white">
          <div className="h-[30rem] w-full">
            <img
              src={props.image}
              alt={props.title}
              className="h-[100%] w-full rounded-lg"
            />
          </div>
          <div className="text-center my-4 leading-10">
            <h2 className="text-3xl font-bold">{props.title}</h2>
            <h3 className="text-xl font-semibold tracking-wider">
              {props.address}
            </h3>
            <p className="text-gray-600">{props.description}</p>
          </div>
          <hr />
          <div className="flex justify-evenly py-4">
            <button
              className="bg-green-700 px-4 py-2  text-white text-center hover:"
              onClick={openModalHandler}
            >
              VIEW ON MAP
            </button>
            {auth.isLoggedIn && (
              <Link to={`/places/${props.id}`}>
                <button className="bg-sky-700 px-3 py-2 rounded-lg text-white text-center">
                  EDIT
                </button>
              </Link>
            )}
            {auth.isLoggedIn && (
              <button
                className="bg-red-700 px-3 py-2 rounded-lg text-white text-center"
                onClick={showDeleteWarningHandler}
              >
                DELETE
              </button>
            )}
          </div>
        </Card>
      </li>
    </>
  );
}

export default PlaceItem;
