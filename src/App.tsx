import React, { Component } from 'react';
import { ComponentBase } from 'resub';
import { Grommet, Box, Button, Heading, Meter, Form, FormField} from 'grommet';

import './App.css';
import AppBar from './components/AppBar';
import TodoAddTaskForm from './components/TodoAddTaskForm';

interface AppState {
  addForm: boolean
}

class App extends ComponentBase<{}, AppState> {

  constructor(props: any){
    super(props);
    this.state = { addForm: false}
  }

  private _OpenForm = () => {
    this.setState({addForm: true})
  }
  
  private _CloseForm = () => {
    this.setState({addForm: false})
  }

  private _onSubmit =  (event: any) => {
    alert(event.target.label.value)
  }
  render() {
    return (
      <Grommet plain>
        <AppBar>
          <Heading textAlign='center' style={{ maxWidth: '100%' }} level='3' responsive size='small' >React Microsoft ReSub Grommet Typescript Todo App</Heading>
        </AppBar>
        <Box pad={{ vertical: 'large' }} align='center' >
          <Button label='Add Task'  onClick={this._OpenForm}/>
          { this.state.addForm ? <TodoAddTaskForm onClose={this._CloseForm} Submit={this._onSubmit}/> : null}
        </Box>
        <Meter type='circle' values={[{ value: 30, label: 'Test' }, { value: 100, label: 'Test 2' }]} />
      
      </Grommet>

    );
  }
}

export default App;
