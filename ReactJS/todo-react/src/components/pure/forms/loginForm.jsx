import React, { useState } from 'react'
import PropTypes from 'prop-types'

const LoginForm = () => {
    const initialCredentials = [
        {
            user: '',
            password: ''
        }
    ];
    
    const [credentials, setCredentials] = useState(initialCredentials);
  return (
    <div>
        
    </div>
  )
}

LoginForm.propTypes = {}

export default LoginForm