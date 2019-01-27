import React from 'react';
import { ComponentBase } from 'resub';
import {
  Grommet,
  Box,
  Button,
  Heading,
  Text,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableBody,
  CheckBox
} from 'grommet';
import { v1 } from 'grommet-theme-v1';
import { Add } from 'grommet-icons';

import { AppBar, DeleteButton, TodoAddTaskForm } from './components';
import { Todo } from './models/TodoModels';
import TodoStore from './store/TodoStore';
import CompleteCheckBox from './components/CompleteCheckbox';

interface AppState {
  addForm: boolean;
  todos: Todo[];
}

class App extends ComponentBase<{}, AppState> {

  protected _buildState(props: {}, initialBuild: boolean): AppState {
    return {
      todos: TodoStore.getTodos(),
      addForm: false
    };
  }
  
  private _OpenForm = () => {
    this.setState({ addForm: true });
  };

  private _CloseForm = () => {
    this.setState({ addForm: false });
  };

  private _onSubmit = (event: any) => {
    TodoStore.addTodo(event.target.label.value);
  };

  private _onDelete = (id: string) => {
    TodoStore.deleteTodo(id);
  };

  render() {
    return (
      <Grommet theme={v1}>
        <AppBar>
          <Heading
            textAlign="center"
            style={{ maxWidth: '100%' }}
            level="3"
            responsive
            size="small"
          >
            React Microsoft ReSub Grommet Typescript Todo App
          </Heading>
        </AppBar>
        <Box pad={{ vertical: 'medium' }} align="center">
          <Button label="Add Task" onClick={this._OpenForm} icon={<Add />} />
          {this.state.addForm ? (
            <TodoAddTaskForm
              onClose={this._CloseForm}
              Submit={this._onSubmit}
            />
          ) : null}
        </Box>
        <Box fill pad="medium">
          <Text size="large">My Tasks</Text>
        </Box>
        <Box fill tag="ul" pad="medium">
          {this.state.todos.length > 0 ? (
            <Table style={{ width: '100%' }}>
              <TableHeader>
                <TableRow>
                  <TableCell>Completed</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {this.state.todos.map((val, index) => (
                  <TableRow key={index}>
                    <TableCell>
                    <CheckBox checked={val.status} onChange={() => TodoStore.setTodoComplete(val)} />
                    </TableCell>
                    <TableCell>{val.text}</TableCell>
                    <TableCell>
                      <DeleteButton id={val.id} deleteTodo={this._onDelete} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
              undefined
            )}
        </Box>
      </Grommet>
    );
  }
}

export default App;
