import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Modal } from "./Modal";
// import "../../styles/index.css";

export const ContactCard = ({ contact }) => {
  const { store, actions } = useContext(Context);
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };
  const handleDelete = () => {
    setShowModal(true);
  };
  const confirmDelete = () => {
    actions.deleteContact(contact.id);
    setShowModal(false);
  };

  return (
    <div className="contact-card">
      <img
        src={
          "https://www.shutterstock.com/image-photo/portrait-smiling-young-man-boy-260nw-2404767419.jpg"
        }
        alt={contact.name}
        className="contact-image"
      />
      <div className="contact-info">
        <h2>{contact.name}</h2>
        <p>
          <i className="fas fa-map-marker-alt"></i> {contact.address}
        </p>
        <p>
          <i className="fas fa-phone"></i> {contact.phone}
        </p>
        <p>
          <i className="fas fa-envelope"></i> {contact.email}
        </p>
      </div>
      <div className="contact-actions">
        <Link to={`/edit-contact/${contact.id}`} className="btn btn-edit">
          <i className="fas fa-pencil-alt"></i>
        </Link>
        <button onClick={handleDelete} className="btn btn-delete">
          <i className="fas fa-trash"></i>
        </button>
        {showModal && (
          <Modal closeModal={closeModal} confirmDelete={confirmDelete} />
        )}
      </div>
    </div>
  );
};
