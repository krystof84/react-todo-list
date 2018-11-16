import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const TaskListItem = (props) => {

    let taskListIconDone = '';

    if(props.status === 'undone') {
        taskListIconDone =  <span className="TaskList__icon TaskList__icon--green" onClick={props.done}>
                                <FontAwesomeIcon icon={Icons.faCheckCircle} />
                            </span>;
    }

    let taskListIconDelete = <span className="TaskList__icon TaskList__icon--red">
                                <FontAwesomeIcon icon={Icons.faTimesCircle} />
                            </span>; 


    return (
        <li className="TaskList__item">
            {props.name}

            {taskListIconDone}
            
            {taskListIconDelete}
        </li>
    );
}

export default TaskListItem;