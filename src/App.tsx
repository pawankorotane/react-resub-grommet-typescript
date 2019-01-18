import React, { Component } from 'react';
import { Grommet, Box, Button, Heading } from 'grommet';

import './App.css';
import AppBar from './components/AppBar';

class App extends Component {
  render() {
    return (
      <Grommet plain>
        <Box align='center' background='brand' responsive>
          <Heading size='small'>React ReSub Todo Application</Heading>
        </Box>
      </Grommet>
    );
  }
}

export default App;
