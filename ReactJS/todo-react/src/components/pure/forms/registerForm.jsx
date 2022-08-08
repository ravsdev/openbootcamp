import React from 'react'
import PropTypes from 'prop-types'

const RegisterForm = () => {
    const initialData = [
        {
            user: '',
            name: '',
            email: '',
            password: ''
        }
    ]

    const [data, setData] = useState(initialData);
    return (
        <div>RegisterForm</div>
    )
}

RegisterForm.propTypes = {}

export default RegisterForm;