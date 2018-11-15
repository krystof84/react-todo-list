import React from 'react';

const AddTaskForm = (props) => {
    return (
        <div className="AddTask">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control AddTask__input"
                            onChange={props.updateInput}
                            onKeyPress={event => {
                                if(event.key === 'Enter') {
                                    props.newTask();
                                }
                            }}
                            value={props.inputVal}/>
                        <button 
                            type="submit" 
                            className="btn btn-primary AddTask__button"
                            onClick={props.newTask}>Add task</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddTaskForm;