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
      host: 'http://10.10.165.236:6001',
      client: socketio
    })
    echo
    .channel('public-message-channel')
    .listen('MessageEvent', (data) => {
      //Handling Event
      console.log('****', data)
    })
    //console.log('###########', echo)
  }
  render() {
    return(
        <Text>SBCD</Text>
    )
  }
}

export default App;