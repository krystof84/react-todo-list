import React, {Component} from 'react';

class AddTaskForm extends Component {

    focusTextInput() {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing "current" to get the DOM node
        this.textInput.current.focus();
      }

    componentDidMount() {
        document.getElementById('textInput').focus();
    }

    render() {
        return (
            <div className="AddTask">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control AddTask__input"
                                onChange={this.props.updateInput}
                                onKeyPress={event => {
                                    if(event.key === 'Enter') {
                                        this.props.newTask();
                                    }
                                }}
                                value={this.props.inputVal}
                                id="textInput"/>
                            <button 
                                type="submit" 
                                className="btn btn-primary AddTask__button"
                                onClick={this.props.newTask}>Add task</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTaskForm;