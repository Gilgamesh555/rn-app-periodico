import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import Echo from 'laravel-echo';
import socketio from 'socket.io-client';

const echo = new Echo({
  host: 'http://10.10.165.236:6001/', //tried 127.0.0.1, localhost, ws:// etc...
  broadcaster: 'socket.io',
  client: socketio,
});

echo
.channel('public-messsage-channel')
.listen('MessageEvent', ev => console.log(ev));

const App = () => {
  return(
    <>
      <Text>Hello</Text>
    </>
  )
}


const styles = StyleSheet.create({

});

export default App;