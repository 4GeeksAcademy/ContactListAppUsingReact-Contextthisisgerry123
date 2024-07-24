import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const EditContact = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();

  useEffect(() => {
    const contact = store.contacts.find((c) => c.id === parseInt(id));
    if (contact) {
      setName(contact.name);
      setEmail(contact.email);
      setPhone(contact.phone);
      setAddress(contact.address);
    }
  }, [id, store.contacts]);

  const handleEditContact = async (e) => {
    e.preventDefault();
    try {
      let response = await actions.editContact(id, {
        name,
        email,
        phone,
        address,
      });
      if (!response) {
        alert("an error occurred while adding contact");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div>
        <h1 className="text-center mt-5">Edit Contact</h1>
        <div>
          <div className="form-group">
            <label>Full Name</label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              className="form-control"
              placeholder="Full Name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              type="phone"
              className="form-control"
              placeholder="Enter phone"
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              type="text"
              className="form-control"
              placeholder="Enter address"
            />
          </div>
          <button
            onClick={handleEditContact}
            type="button"
            className="btn btn-primary form-control"
          >
            save
          </button>
          <Link className="mt-3 w-100 text-center" to="/">
            or get back to contacts
          </Link>
        </div>
      </div>
    </div>
  );
};
