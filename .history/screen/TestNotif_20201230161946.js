import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import Echo from 'laravel-echo';
import socketio from 'socket.io-client';

class App extends Component {
  constructor(props){
    super(props)
    let echo = new Echo({
      broadcaster: 'socket.io',
    })
  }
}

export default App;