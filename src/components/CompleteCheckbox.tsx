import * as React from 'react';
import { ComponentBase } from 'resub';
import { CheckBox } from 'grommet';
import TodoStore from '../store/TodoStore';
import { Todo } from '../models/TodoModels';


interface CompleteCheckBoxProps  {
  id: string,
  completeTodo: (id: string) => void
}

interface TodoState {
  todo: Todo
}

class CompleteCheckBox extends ComponentBase<CompleteCheckBoxProps, TodoState> {
  protected _buildState(props: CompleteCheckBoxProps, initialBuild: boolean): TodoState {
    return {
      todo: TodoStore.getTodoById(props.id),
    
    };
  }

  render() {
    return (
      <React.Fragment>
      <CheckBox
        label="Complete"
        checked={checked}
        onChange={onComplete}
      />
    </React.Fragment>
    );
  }

}



export default CompleteCheckBox;
