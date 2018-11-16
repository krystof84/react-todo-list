import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const TaskItem = (props) => {
    return (
        <li className="TaskList__item">
            {props.name}

            {(props.status === 'undone') ? (<span className="TaskList__icon TaskList__icon--green" onClick={props.done}><FontAwesomeIcon icon={Icons.faCheckCircle} /></span>) : '' }
            
            <span className="TaskList__icon TaskList__icon--red">
                <FontAwesomeIcon icon={Icons.faTimesCircle} />
            </span> 
        </li>
    );
}

export default TaskItem;