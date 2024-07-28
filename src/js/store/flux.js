import { json } from "react-router";
import { CreateContact } from "../component/CreateContact";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
		},
		actions: {
			getContacts: () => {
				fetch("https://playground.4geeks.com/contact/agendas/gerardo/contacts")
				.then(response => response.json())
				.then(data => setStore({contacts:data.contacts}))
			},
			
			createContact: async(contact) => {
				 let option = {
					method: "POST",
					headers: {"Content-type": "application/json"},
					body: JSON.stringify(contact)
				}
				try {
					let response = await fetch("https://playground.4geeks.com/contact/agendas/gerardo/contacts", option)
					if (!response.ok){
						return false						
					}else{
						getActions().getContacts() 
						return true
					}
				}
				catch(error) {console.log(error)}
				
			},

			editContact: async (id, contact) => {
				 let option = {
					method: "PUT",
					headers: {"Content-type": "application/json"},
					body: JSON.stringify(contact)
				}
				try {
					let response = await fetch(`https://playground.4geeks.com/contact/agendas/gerardo/contacts/${id}`, option);
					if (!response.ok){
						return false	
						console.log("editing contact failed");					
					}else{
						getActions().getContacts() 
						return true
					}
				}
				catch(error) {console.log(error);}
			},

			deleteContact: async (id) => {
				let option = {
				   method: "DELETE",
				   headers: {"Content-type": "application/json"},
			   }
			   try {
				   let response = await fetch(`https://playground.4geeks.com/contact/agendas/gerardo/contacts/${id}`, option);
				   if (!response.ok){
					   return false	
					   console.log("deleting contact failed");					
				   }else{
					   getActions().getContacts() 
					   return true
				   }
			   }
			   catch(error) {console.log(error);}
		   },

		}
	};
};

export default getState;
