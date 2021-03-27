import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import Echo from 'laravel-echo';
import socketio from 'socket.io-client';

const echo = new Echo({
  host: 'projectb.io:6001', //tried 127.0.0.1, localhost, ws:// etc...
  broadcaster: 'socket.io',
  client: socketio,
});

echo
    .channel('home')
    .listen('NewMessage', ev => console.log(ev));

console.log(echo)

const App = () => {
  return (
    <>
      <Text>The usual stuff</Text>
    </>
      );
};

const styles = StyleSheet.create({

});

export default App;