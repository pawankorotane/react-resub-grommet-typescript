import React, { Component } from 'react';
import { ComponentBase } from 'resub';
import { Grommet, Box, Button, Heading, Meter, Text } from 'grommet';

import './App.css';
import AppBar from './components/AppBar';
import TodoAddTaskForm from './components/TodoAddTaskForm';
import { Todo } from './models/TodoModels';
import TodoStore from './store/TodoStore';

interface AppState {
  addForm: boolean,
  todos: Todo[],
  status: string
}

class App extends ComponentBase<{}, AppState> {

  protected _buildState(props: {}, initialBuild: boolean): AppState {
    return {
      todos: TodoStore.getTodos(),
      addForm: false,
      status: TodoStore.getStatus()
    }
  }

  private _OpenForm = () => {
    this.setState({ addForm: true })
  }

  private _CloseForm = () => {
    this.setState({ addForm: false })
  }

  private _onSubmit = (event: any) => {
    TodoStore.addTodo(event.target.label.value);
  }

  private _updateStatus = (event: any) => {
    TodoStore.setStatus(event.option);
  }

  render() {
    return (
      <Grommet plain>
        <AppBar>
          <Heading textAlign='center' style={{ maxWidth: '100%' }} level='3' responsive size='small' >React Microsoft ReSub Grommet Typescript Todo App</Heading>
        </AppBar>
        <Box pad={{ vertical: 'medium' }} align='center' >
          <Button label='Add Task' onClick={this._OpenForm} />
          {this.state.addForm ? <TodoAddTaskForm onClose={this._CloseForm} Submit={this._onSubmit} updateStatus={this._updateStatus}  status={this.state.status}/> : null}
        </Box>
        <Box direction='row-responsive'>
          <Box basis='1/3' align='center'>
            <Meter type='circle' values={[{ value: 30, label: 'Test' }, { value: 100, label: 'Test 2' }]} />
            <Box direction='row' justify='between' align='center'
              responsive={false}>
              <Box align='center' justify='between' pad='small' >
                <Text size='xlarge'> {this.state.todos.length} Tasks</Text>
              </Box>
            </Box>
          </Box>
          <Box pad='medium' basis='2/3'>
            <Text margin={{ vertical: 'small' }} size='large'>My Tasks</Text>
            <Box fill tag='ul' border='top'>
              {this.state.todos.map((val, index) => (
                <Box
                  align='start'
                  tag='li'
                  direction='row'
                  border='bottom'
                  pad={{ top: 'medium', bottom: 'medium' }}
                  key={val.id}>
                  {val.text}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Grommet>

    );
  }
}

export default App;
