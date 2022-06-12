import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ContactComponent from './contact'
import { Contact } from '../models/contact.class'
import ContactForm from './contactform'

const ContactList = () => {
    const [contacts, setContacts] = useState([new Contact("Pepito", false)]);

    const addContact = (contact) => {
        setContacts([...contacts, contact]);
    }

    const changeState = (contact) => {
        const idx = contacts.indexOf(contact);
        const tmpContacts = [...contacts];
        tmpContacts[idx].status = !tmpContacts[idx].status;
        tmpContacts.sort((a,b)=>{return b.status - a.status}); //Sort by status
        setContacts(tmpContacts);
    }

    const removeContact = (contact) => {
        const idx = contacts.indexOf(contact);
        const tmpContacts = [...contacts];
        tmpContacts.splice(idx, 1);
        setContacts(tmpContacts);
        console.log(tmpContacts, idx)
    }

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="col-6">
                <div className="card text-center">
                    <div className="card-header p-3">
                        <h1>Contacts</h1>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            {contacts.map((contact, idx) => {
                                return <ContactComponent key={idx}
                                    contact={contact}
                                    changeState={changeState}
                                    removeContact={removeContact} />
                            })}
                        </ul>
                    </div>
                    <ContactForm add={addContact} />
                </div>
            </div>
        </div>
    )
}

ContactList.propTypes = {}

export default ContactList