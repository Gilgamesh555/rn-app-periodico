import React from 'react'
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import HTML from "react-native-render-html";
import {Button} from 'react-native-elements'
//import Icon from 'react-native-vector-icons/FontAwesome'
import Share from 'react-native-share';
import {Icon} from 'react-native-elements'

const {width, height} = Dimensions.get('window')

const App = ({route, navigation}) => {

  const myCustomShare = async () => {
    const shareOptions = {
      message: "This is a test message",
    }
    try{
      const ShareResponse = await Share.open(shareOptions)
    } catch(error) {
      console.log('Error => ', error)
    }
  }
    if(route.params == null){
      return;
    }
    return(
      <ScrollView style={styles.image}>
        <Text style={styles.title}>{route.params.item.titulo}</Text>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
          <Icon
              name="user"
              size={15}
              color="gray"
              type='antdesign'
              style={{
                marginHorizontal: width * 0.03
              }}
          />
          <Text style={styles.author}>{route.params.item.autor}</Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
          <Icon
              name="time-outline"
              size={15}
              color="gray"
              type='ionicon'
              style={{
                marginHorizontal: width * 0.03
              }}
          />
          <Text style={styles.author}>{route.params.item.fecha_ini}</Text>
        </View>
        <Image 
            source={{uri: route.params.item.imagen}}
            style={styles.image}
        />
        <View style={styles.description}>
          <HTML source={{ html: route.params.item.descripcion}}/>
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: 'green',
        margin: width * 0.03,
        borderRadius: width * 0.05,
        shadowColor: '#000',
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    title: {
        marginHorizontal: width * 0.03,
        marginVertical: width * 0.03,
        color: 'black', 
        fontSize: 20,
        fontWeight: 'bold'
    },
    description: {
        marginVertical: width * 0.05,
        marginHorizontal: width * 0.05,
        color: 'black',
        fontSize: 18
    },
    image: {
        height: height / 3,
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        marginVertical: height * 0.02,
        resizeMode: 'contain',
        backgroundColor: 'green',
        borderRadius: width * 0.05,
    },
    author: {
        marginBottom: width * 0.0,
        marginHorizontal: width * 0.0,
        fontSize: 13,
        color: 'black'
    }
})

export default App