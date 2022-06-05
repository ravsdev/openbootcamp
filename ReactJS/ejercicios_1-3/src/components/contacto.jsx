import React from 'react'
import PropTypes from 'prop-types'
import Conectado from './conectado';
import { Contacto } from '../models/Contacto.class';

const ContactoComponent = ({ contacto }) => {

  return (
    <div>
      <h2>Nombre: {contacto.nombre}</h2>
      <h3>Apellidos: {contacto.apellido}</h3>
      <h3>Email: {contacto.email}</h3>
      <Conectado estado={contacto.conectado}/>
    </div>
  )
}

ContactoComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contacto)
}

export default ContactoComponent