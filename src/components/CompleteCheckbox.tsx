import * as React from 'react';
import { ComponentBase } from 'resub';
import { CheckBox } from 'grommet';
import TodoStore from '../store/TodoStore';
import { Todo } from '../models/TodoModels';


interface CompleteCheckBoxProps {
  todo: Todo
}

interface TodoState {
  status: boolean
}

class CompleteCheckBox extends React.Component<CompleteCheckBoxProps, TodoState> {

  constructor(props: CompleteCheckBoxProps) {
    super(props);
    this.state = {
      status: props.todo.status
    }
  }

  private setComplete = () => {
    this.setState({
      status: !this.state.status
    });
    TodoStore.setTodoComplete(this.props.todo);
  }

  render() {
    return (
      <React.Fragment>
        <CheckBox
          checked={this.state.status}
          onChange={this.setComplete}
        />
      </React.Fragment>
    );
  }

}

export default CompleteCheckBox;
