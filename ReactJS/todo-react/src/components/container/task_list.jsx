import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/task'
import { fireEvent } from '@testing-library/react'
import TaskForm from '../pure/forms/taskForm'
import TaskFormik from '../pure/forms/taskFormik'

const TaskList = () => {
    const defaultTask = new Task('Example', "Description", false, LEVELS.NORMAL);
    const defaultTask1 = new Task('Example2', "Description2", true, LEVELS.URGENT);
    const defaultTask2 = new Task('Example3', "Description3", true, LEVELS.BLOCKING);

    const [tasks, setTasks] = useState([defaultTask, defaultTask1, defaultTask2]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Cambio");

        setTimeout(()=>
            setLoading(false), 2000);

        return () => {
            console.log("Unmount");
        }
    }, [tasks])

    const completeTask = (task) => {
        const tmpTasks = [...tasks];
        const index = tmpTasks.indexOf(task);
        tmpTasks[index].completed = !tmpTasks[index].completed;
        setTasks(tmpTasks);
    }

    const removeTask = (task) => {
        const tmpTasks = [...tasks];
        const index = tmpTasks.indexOf(task);
        tmpTasks.splice(index, 1);
        setTasks(tmpTasks);
    }

    const addTask = (task) => {
        const tmpTasks = [...tasks];
        tmpTasks.push(task);
        setTasks(tmpTasks);
    }

    const TaskTable = () => {
        if(loading) return <h3>Loading tasks...</h3>

        return (<table>
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map((task, idx) => <TaskComponent key={idx} task={task} complete={completeTask} remove={removeTask} />)}
            </tbody>
        </table>)
    }

    
    return (
        <div>
            <div className="col-12">
                <div className="card">
                    <div className="card-header p-3">
                        <h5>
                            Your Tasks:
                        </h5>
                    </div>
                    <div className="card-body" data-mdb-perfect-scrollbar='true' style={{ height: '400px' }}>
                        {tasks.length > 0 ? <TaskTable /> : <h3>You don't have any tasks</h3>}
                    </div>
                </div>
                {/* <TaskForm add={addTask} length={tasks.length} /> */}
                <TaskFormik add={addTask} length={tasks.length}/>
            </div>

        </div>
    )
}

TaskList.propTypes = {}

export default TaskList
