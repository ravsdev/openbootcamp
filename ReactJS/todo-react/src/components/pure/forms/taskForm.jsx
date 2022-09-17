import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({ add, length }) => {

  const nameRef = useRef('');
  const descriptionRef = useRef('');
  const levelRef = useRef(LEVELS.NORMAL);


  const addTask = (e) => {
    e.preventDefault();
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    )

    add(newTask);
  }

  return (
    <form onSubmit={addTask} className="d-flex justify-content-center align-items-center mb-4">
      <div className="form-outline flex-fill form-group">
        <input type='text' id='inputName' ref={nameRef} className='form-control form-control-lg' required autoFocus placeholder="Name" />
        <input type='text' id='descriptionName' ref={descriptionRef} className='form-control form-control-lg' required placeholder="Description" />
        {/* <label htmlFor='selectLevel' className='sr-only'>Priority</label> */}
        <select id='selectLevel' ref={levelRef} defaultValue={LEVELS.NORMAL}className='form-control form-control-lg'>
          <option value={LEVELS.NORMAL}>Normal</option>
          <option value={LEVELS.URGENT}>Urgent</option>
          <option value={LEVELS.BLOCKING}>Blocking</option>
        </select>
        <button type='submit' className='btn btn-primary btn-lg ms-2'>{length > 0 ? 'Add New Task' : 'Create your first task'}</button>
      </div>

    </form>
  )
}

TaskForm.propTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
}

export default TaskForm