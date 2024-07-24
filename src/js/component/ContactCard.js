import React , {useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const ContactCard = ({contact}) => {
  const {store,actions} = useContext(Context)

  return (
    <>
    <div className="container border shadow-lg"><h1> {contact.name} </h1></div>
    <div className="container border shadow-lg"><h1> {contact.phone} </h1></div>
    <div className="container border shadow-lg"><h1> {contact.email} </h1></div>
    <div className="container border shadow-lg"><h1> {contact.address} </h1></div>
    <Link className=" btn success" to={`/edit-contact/${contact.id}`}> Edit
    </Link>
    </>
  );
}
