import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const LoginFormik = () => {

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string()
                .email('Invalid email format')
                .required('Email required'),
            password: Yup.string().required('Password required')
        }
    )

    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <div>
            <h4>Login Formilk</h4>
            <Formik
                initialValues={initialCredentials}
                //Yup validation Schema
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem('credentials',values)
                }}
            >
                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (

                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="name@domain.com"
                            type="email"
                        />
                        {
                            errors.email && touched.email &&
                            (<ErrorMessage name="email" component='div' />)
                        }

                        <label htmlFor="password">Password</label>
                        <Field type="password" id="password" name="password" placeholder="Password" />
                        {
                            errors.password && touched.password &&
                            (
                                <ErrorMessage name="password" component='div'></ErrorMessage>
                            )
                        }

                        <button type="submit">Submit</button>
                        {isSubmitting ? (<p>Logging in...</p>):null}
                    </Form>
                )}
            </Formik>
        </div>
    )
}
