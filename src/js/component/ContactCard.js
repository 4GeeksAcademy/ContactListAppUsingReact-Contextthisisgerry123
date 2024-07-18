import React , {useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const ContactCard = ({contact}) => {
  const {store,actions} = useContext(Context)

  return (
    <>
    <div className="container border shadow-lg"> This is the contact card</div>
    <div className="container border shadow-lg"><h1> {contact.name} </h1></div>
    </>
  );
}
