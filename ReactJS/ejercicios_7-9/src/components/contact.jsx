import PropTypes from 'prop-types'
import React, { useState } from 'react'


const ContactComponent = ({ contact, changeState, removeContact }) => {

    const statusContact = () => {
        return contact.status ? (<span className="badge bg-success rounded-pill">Connected</span>)
            : (<span className="badge bg-secondary rounded-pill">Disconnected</span>)
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="flex-fill">{contact.name}</span>
            <span className="btn" onClick={() => { changeState(contact) }}>{statusContact()}</span>
            <span className="btn badge bg-danger rounded-pill" onClick={() => { removeContact(contact) }}>
                <i className="bi bi-trash3-fill"></i>
            </span>
        </li>
    )
}

ContactComponent.propTypes = {}

export default ContactComponent