import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
//import { object, string } from 'yup';
import * as Yup from 'yup';

import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

const Registerformik = () => {
  let user = new User();
  
  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirm: '',
    role: ROLES.USER
  }
  const registerSchema = Yup.object().shape(
    {
      username: Yup.string()
        .min(6, 'Min 6 characters')
        .max(12, 'Max 12 characters')
        .required('Required username'),

      email: Yup.string()
        .email('Invalid format')
        .required('Email required'),

      password: Yup.string()
        .min(8, 'Too short')
        .matches(/\w{5,}[A-Z]+/)
        .required("Password Required"),

      confirm: Yup.string()
        .when("password", {
          is: value => value && value.length > 0,
          then: Yup.string().oneOf(
            [Yup.ref("password")],
            "Passwords don't match!"
          )
        }).required("Confirm the password"),

        role: Yup.string().oneOf([ROLES.ADMIN,ROLES.USER],'Select a role').required("Role required")
    }
  )

  const submit = (values) => {
    alert('Register User')
  }
  return (
    <div>
      <h4>Register Formik</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur }) => (

          <Form>
            <label htmlFor="username">Username</label>
            <Field type="username" id="username" name="username" placeholder="Username" />
            {
              errors.username && touched.username &&
              (<ErrorMessage name="username" component='div' />)
            }
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
            <label htmlFor="confirm">confirm</label>
            <Field type="password" id="confirm" name="confirm" placeholder="confirm" />
            {
              errors.password && touched.password &&
              (
                <ErrorMessage name="password" component='div'></ErrorMessage>
              )
            }
            <label htmlFor="role">Role</label>

            <Field as="select" id="role" name="role">
              <option value={ROLES.ADMIN}>Admin</option>
              <option value={ROLES.USER}>User</option>
            </Field>
            <button type="submit">Submit</button>
            {isSubmitting ? (<p>Logging in...</p>) : null}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Registerformik;