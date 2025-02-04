import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const CreateContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const { store, actions } = useContext(Context);
  let navigate = useNavigate();
  const addContact = async (e) => {
    try {
      let response = await actions.createContact({
        name: name,
        email: email,
        phone: phone,
        address: address,
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
        <h1 className="text-center mt-5">Add a new contact</h1>
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
            onClick={() => {
              addContact();
            }}
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
