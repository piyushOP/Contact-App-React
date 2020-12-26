import React, { useReducer } from "react";
import axios from "axios";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
   GET_CONTACTS,
   ADD_CONTACT,
   DELETE_CONTACT,
   SET_CURRENT,
   CLEAR_CURRENT,
   UPDATE_CONTACT,
   FILTER_CONTACTS,
   CLEAR_FILTER,
   CONTACT_ERROR,
   CLEAR_CONTACTS
} from "../types";

const ContactState = props => {
   const initialState = {
      contacts: null,
      current: null,
      filtered: null,
      error: null
   };

   const [state, dispatch] = useReducer(contactReducer, initialState);

   // Get Contacts
   async function getContacts(){
      try{
         const res = await axios.get("/api/contacts");

         dispatch({ type: GET_CONTACTS, payload: res.data });

      }catch(err){
         dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
      }
   }




   //Add Contact
   async function addContact(contact){
      const config={
         headers: {
            "Content-Type": "application/json"
         }
      }

      try{
         const res = await axios.post("/api/contacts", contact, config);

         dispatch({ type: ADD_CONTACT, payload: res.data });

      }catch(err){
         dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
      }


   }

   //Delete Contact
   async function deleteContact(id){

      try{
         const res = await axios.delete("/api/contacts/"+id);

         dispatch({ type: DELETE_CONTACT, payload: id });

      }catch(err){
         dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
      }
   }


   //Update Contact
   async function updateContact(contact){

      const config={
         headers: {
            "Content-Type": "application/json"
         }
      }

      try{
         const res = await axios.put("/api/contacts/"+contact._id, contact, config);

         dispatch({ type: UPDATE_CONTACT, payload: res.data });

      }catch(err){
         dispatch({ type: CONTACT_ERROR, payload: err.response.msg });
      }

      
   }
   


   //Clear Contacts
   function clearContacts(){
      dispatch({ type: CLEAR_CONTACTS });
   }

   //Set Current Contact
   function setCurrent(contact){
      dispatch({ type: SET_CURRENT, payload: contact });
   }

   //Clear Current Contact
   function clearCurrent(){
      dispatch({ type: CLEAR_CURRENT });
   }


   //Filter Contacts
   function filterContacts(text){
      dispatch({ type: FILTER_CONTACTS, payload: text });
   }

   //Cleat Filter
   function clearFilter(){
      dispatch({ type: CLEAR_FILTER });
   }


   return (
      <ContactContext.Provider
      value={{
         contacts: state.contacts,
         current: state.current,
         filtered: state.filtered,
         error: state.error,
         addContact,
         deleteContact,
         setCurrent,
         clearCurrent,
         updateContact,
         filterContacts,
         clearFilter,
         getContacts,
         clearContacts
      }}>
         {props.children}
      </ContactContext.Provider>
   );
};


export default ContactState;