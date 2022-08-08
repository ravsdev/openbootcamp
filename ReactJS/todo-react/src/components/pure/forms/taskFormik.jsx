import { Formik, Form, Field } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import { LEVELS } from '../../../models/levels.enum';

const TaskFormik = ({ add, length }) => {
    const initialValues = {
        name: '',
        description: '',
        priority: LEVELS.NORMAL
    }

    const taskSchema = {
        
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={values=>console.log(values)}
            >
                <Form className="d-flex justify-content-center align-items-center mb-4">
                    <div className="form-outline flex-fill form-group">
                        <Field name='name' id='name' placeholder='Name' className='form-control form-control-lg'/>
                        <Field name='description' id='description' placeholder='Description' className='form-control form-control-lg'/>
                        <Field name='priority' id='priority' as='select' className='form-control form-control-lg'>
                            <option value={LEVELS.NORMAL}>Normal</option>
                            <option value={LEVELS.URGENT}>Urgent</option>
                            <option value={LEVELS.BLOCKING}>Blocking</option>
                        </Field>
                        <button type='submit' className='btn btn-primary btn-lg ms-2'>{length > 0 ? 'Add New Task' : 'Create your first task'}</button>
                        <button type='reset' className='btn btn-danger btn-lg ms-2'>Reset</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default TaskFormik