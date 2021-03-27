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
        {console.log(route.params.titulo)}
        <Text style={styles.title}>{route.params.data.titulo}</Text>
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
          <Text style={styles.author}>{route.params.data.autor}</Text>
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
          <Text style={styles.author}>{route.params.data.fecha}</Text>
        </View>
        <Image 
            source={{uri: route.params.data.imagen}}
            style={styles.image}
        />
        <View style={styles.description}>
          <HTML source={{ html: route.params.data.descripcion}}/>
        </View>
        <View style={{
          marginTop: 25,
          paddingEnd: 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingStart: 0,
          padding: 0,
          borderRadius: 12,
          alignItems:"center",
          flex:0,
          height:300,
        }}>
          <Button
              buttonStyle={{
                  marginBottom: 10,
                  width: 200,
                  borderColor: 'green',
              }}
              icon={
              <Icon
                  name="share"
                  size={15}
                  color="green"
              />
              }
              titleStyle={{
                  color: 'green'
              }}
              title=" Compartir"
              type="outline"
              onPress={myCustomShare}     
          />
          <Button
              buttonStyle={{
                  marginBottom: 10,
                  width: 200,
              }}
              icon={
              <Icon
                  name="like2"
                  type='antdesign'
                  size={15}
                  color="skyblue"
              />
              }
              title=" Me gusta"
              type="outline"
          />
          <Button
              buttonStyle={{
                  borderColor: 'red',
                  marginBottom: 10,
                  width: 200,
              }}
              icon={
              <Icon
                  name="heart"
                  type='feather'
                  size={15}
                  color="red"
              />
              }
              titleStyle={{
                  color: 'red'
              }}
              title=" Me encanta"
              type="outline"
          />
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: 'white',
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
        color: 'gray',
        fontSize: 18
    },
    image: {
        height: height / 3,
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        marginVertical: height * 0.02,
        resizeMode: 'contain'
    },
    author: {
        marginBottom: width * 0.0,
        marginHorizontal: width * 0.0,
        fontSize: 13,
        color: 'gray'
    }
})

export default App