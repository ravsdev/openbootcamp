import React,{useState} from 'react'
import PropTypes from 'prop-types'

const Conectado = ({ estado }) => {
  const [conectado, setConectado] = useState(estado);

  const cambiarEstado=()=>{
    setConectado(!conectado);
  }

  return (
    <div>
        <h3>{conectado?"Contacto En Línea":"Contacto no Disponible"}</h3>
        <button onClick={cambiarEstado}>{conectado?"Desconecta":"Conecta"}</button>
    </div>
  )
}

Conectado.propTypes = {
  estado: PropTypes.bool
}

export default Conectado