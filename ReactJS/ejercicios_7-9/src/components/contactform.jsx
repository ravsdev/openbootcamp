import React, { useRef } from 'react'
import { Contact } from '../models/contact.class';

const ContactForm = ({add}) => {

  const nameRef = useRef("");

  const addContact=(event)=>{
    event.preventDefault();
    const newContact = new Contact(nameRef.current.value);
    // console.log(nameRef.current.value);
    nameRef.current.value='';
    add(newContact);
  }

  return (
    <form onSubmit={addContact} className="d-flex justify-content-center align-items-center m-2 gap-3">
        <label for="nameId">Nombre</label>
          <input ref={nameRef} type="text" id="nameId" className="form-control" placeholder="Contact Name" required />
        <button type="submit" className="btn btn-primary">Añadir</button>
    </form>
  )
}

export default ContactForm