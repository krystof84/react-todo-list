import React from 'react';

const AddTaskForm = () => {

    return (
        <div className="AddTask">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <input type="text" className="form-control AddTask__input"/>
                        <button type="submit" className="btn btn-primary AddTask__button">Add task</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddTaskForm;