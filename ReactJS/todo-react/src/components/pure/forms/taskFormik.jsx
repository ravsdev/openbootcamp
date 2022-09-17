import { Formik, Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import * as Yup from 'yup';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskFormik = ({ add, length }) => {
    const initialValues = {
        name: '',
        description: '',
        priority: LEVELS.NORMAL
    }

    const taskSchema = new Yup.object().shape({
        name: Yup.string()
            .required("Name required"),
        description: Yup.string()
            .required("Description required"),
        priority: Yup.string().oneOf([LEVELS.BLOCKING, LEVELS.NORMAL, LEVELS.URGENT]).required(),
    })

    const addTask = ({ name, description, priority }) => {
        const newTask = new Task(name, description, false, priority);
        add(newTask);
    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={taskSchema}
                onSubmit={values => addTask(values)}
            >
                {({ values, errors, touched, isSubmitting }) => (
                    <Form className="d-flex justify-content-center align-items-center mb-4">
                        <div className="form-outline flex-fill form-group">
                            <label htmlFor="name">Task</label>
                            <Field name='name' id='name' placeholder='Name' className='form-control form-control-lg' />
                            {
                                errors.name && touched.name &&
                                (<ErrorMessage name="name" component='div' />)
                            }
                            <Field name='description' id='description' placeholder='Description' className='form-control form-control-lg' />
                            {
                                errors.description && touched.description &&
                                (<ErrorMessage name="description" component='div' />)
                            }
                            <Field name='priority' id='priority' as='select' className='form-control form-control-lg'>
                                <option value={LEVELS.NORMAL}>Normal</option>
                                <option value={LEVELS.URGENT}>Urgent</option>
                                <option value={LEVELS.BLOCKING}>Blocking</option>
                            </Field>
                            <button type='submit' className='btn btn-primary btn-lg ms-2'>{length > 0 ? 'Add New Task' : 'Create your first task'}</button>
                            <button type='reset' className='btn btn-danger btn-lg ms-2'>Reset</button>
                        </div>
                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default TaskFormik