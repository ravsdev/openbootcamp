import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum'

const TaskComponent = ({ task, complete, remove }) => {
    useEffect(() => {
        console.log(`New task`)

        return () => {
            console.log(`${task.name} unmount`)
        }
    }, [task])

    const taskLevelBadge = () => {
        let spanBadge;
        switch (task.level) {
            case LEVELS.NORMAL:
                spanBadge = "text-bg-primary"
                break;
            case LEVELS.URGENT:
                spanBadge = "text-bg-warning"
                break;
            case LEVELS.BLOCKING:
                spanBadge = "text-bg-danger"
                break;

            default:
                break;
        }

        return <h6 className="mb-0"><span className={`badge rounded-pill ${spanBadge}`}>{task.level}</span></h6>
    }

    const TaskCompleted = () => {
        let icon, iconStyle;
        
        if(task.completed){
            icon = "bi bi-toggle-on";
            iconStyle = "text-success fs-5"
        }else{
            icon = "bi bi-toggle-off";
            iconStyle = "text-muted fs-5"
        }

        return <span className={`${iconStyle}`}><i onClick={()=>{complete(task)}} className={`${icon} task-action`}></i></span>
        // task.completed?
            // <span className="text-success fs-5"><i className="bi bi-toggle-on"></i></span> :
            // <span className="text-muted fs-5"><i className="bi bi-toggle-off"></i></span>
    }
    
    /**
     * In-line style
     */

    // const taskCompleted={
    //     color: "gray",
    //     textDecoration: "line-through"
    // }

    // const taskPending={
    //     color: "tomato"
    // }

    return (
        // <tr className="fw-normal" style={task.completed?taskCompleted:taskPending}>
        <tr className={`fw-normal ${task.completed?"task-completed":"task-pending"}`}>
            <th>
                <span className="ms-2">{task.name}</span>
            </th>
            <td className="align-middle">
                <span>{task.description}</span>
            </td>
            <td className="align-middle">
                <span>{taskLevelBadge()}</span>
            </td>
            <td>
                {/* {taskCompleted()} */}
                <TaskCompleted/>
                <span className="text-danger fs-5"><i onClick={()=>remove(task)} className="bi bi-trash task-action"></i></span>
            </td>
        </tr>
    )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired
}

export default TaskComponent
