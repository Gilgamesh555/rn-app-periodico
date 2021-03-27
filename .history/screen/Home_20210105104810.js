import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import AnimatedHeader from 'react-native-animated-header';
import Bg from '../assets/header.jpeg';
import App from './NewsDetails';
import ForecastScreen from './ForecastScreen'

import {
    Container,
    Content,
    Header,
    Left,
    Body,
    Right,
    Button,
} from 'native-base'

import { Icon, Card } from 'react-native-elements'
import CarouselScreen from './CarouselScreen'

export default function Screen({route,navigation}) {
    const [modalVisible, setModalVisible] = useState(false)
    const modalHeader = (
        <View style={styles.modalHeader}>
            <Text style={styles.title}>Delete your Account</Text>
            <View style={styles.divider}></View>
        </View>
    )
    const modalBody = (
        <View style={styles.modalBody} >
            <Text style={styles.bodyText}>Are you sure you want to delete your account?</Text>
        </View>
    )
    const modalFooter = (
        <View style={styles.modalFooter}>
            <View style={styles.divider}></View>
            <View style={{flexDirection:'row-reverse', margin:10}}>
                <TouchableOpacity style={{...styles.actions, backgroundColor: '#db2828'}}
                onPress={() => {
                    setModalVisible(!modalVisible)
                }}
                >
                    <Text style={styles.actionText}>No</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styles.actions,backgroundColor:"#21ba45"}}
                onPress={() => {
                    setModalVisible(!modalVisible)
                }}>
                    <Text style={styles.actionText}>Yes</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
    const modalContainer=(
        <View style={styles.modalContainer}>
            {modalHeader}
            {modalBody}
            {modalFooter}
        </View>
    )
    const modal = (
        <Modal
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false)
          }}>
          <View style={styles.modal}>
            <View>
              {modalContainer}
            </View>
          </View>
        </Modal>
    )
    return (
      <AnimatedHeader 
        style={{flex: 1 }}
        title='UATF'
        renderRight={() => (
            <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', paddingBottom: 25, paddingTop: 20}}>
            <Button transparent
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
                <Icon name="notifications" size={30} color="#323" style={{marginRight: 7.5}}/>
            </Button>
            <Button transparent
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
                <Icon name="search" size={30} color="#323" style={{marginRight: 7.5}}/>
            </Button>
            </View>
        )}
        backStyle={{ marginLeft: 10 }}
        backTextStyle={{fontSize: 14, color: '#000'}}
        titleStyle={{ fontSize: 22, left: 20, bottom: 20, color: '#000' }}
        headerMaxHeight={200}
        imageSource={Bg}
        toolbarColor='#FFF'
        disabled={false}
      >
        <ScrollView>
            <View>
                <CarouselScreen />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', paddingBottom: 25, paddingTop: 20}}>
                <View style={{justifyContent: 'center', alignItems: 'center', paddingRight: 16}}>
                    <Icon
                        reverse
                        name='newspaper-o'
                        type='font-awesome'
                        color='#517fa4'
                        size={40}
                        onPress={() => navigation.navigate('Noticias')}
                    />
                    <Text style={{alignContent: 'center'}}>Noticias</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center', paddingRight: 16}}>
                    <Icon
                        reverse
                        name='book'
                        type='antdesign'
                        color='#517fa4'
                        size={40}
                        onPress={() => {
                            return(
                                's'
                            )
                        }}
                    />
                    <Text style={{alignContent: 'center'}}>Agenda</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center', paddingRight: 16}}>
                    <Icon
                        reverse
                        name='mail'
                        type='entypo'
                        color='#517fa4'
                        size={40}
                        onPress={() => { setModalVisible(true) }}
                    />
                    <Text style={{alignContent: 'center'}}>Suscribete!</Text>
                </View>      
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', paddingBottom: 25, paddingTop: 20}}>
                <View style={{justifyContent: 'center', alignItems: 'center', paddingRight: 16}}>
                    <Icon
                        reverse
                        name='information-variant'
                        type='material-community'
                        color='#517fa4'
                        size={40}
                        onPress={() => navigation.navigate('Informaciones')}
                    />
                    <Text style={{alignContent: 'center'}}>Informaciones</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center', paddingRight: 16}}>
                    <Icon
                        reverse
                        name='megaphone'
                        type='octicon'
                        color='#517fa4'
                        size={40}
                        onPress={() => navigation.navigate('Comunicados')}
                    />
                    <Text style={{alignContent: 'center'}}>Comunicados</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center', paddingRight: 16}}>
                    <Icon
                        reverse
                        name='ios-alert-outline'
                        type='ionicon'
                        color='#517fa4'
                        size={40}
                        onPress={() => navigation.navigate('Anuncios')}
                    />
                    <Text style={{alignContent: 'center'}}>Clasificados</Text>
                </View>      
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', paddingBottom: 25, paddingTop: 20}}>
                <View style={{justifyContent: 'center', alignItems: 'center', paddingRight: 16}}>
                    <Icon
                        reverse
                        name='dollar-sign'
                        type='feather'
                        color='#517fa4'
                        size={40}
                        onPress={() => navigation.navigate('Monedas')}
                    />
                    <Text style={{alignContent: 'center'}}>Cambio Moneda</Text>
                </View>      
            </View>
            
        </ScrollView>
      </AnimatedHeader>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modal:{
      backgroundColor:"#00000099",
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalContainer:{
      backgroundColor:"#f9fafb",
      width:"80%",
      borderRadius:5
    },
    modalHeader:{
      
    },
    title:{
      fontWeight:"bold",
      fontSize:20,
      padding:15,
      color:"#000"
    },
    divider:{
      width:"100%",
      height:1,
      backgroundColor:"lightgray"
    },
    modalBody:{
      backgroundColor:"#fff",
      paddingVertical:20,
      paddingHorizontal:10
    },
    modalFooter:{
    },
    actions:{
      borderRadius:5,
      marginHorizontal:10,
      paddingVertical:10,
      paddingHorizontal:20
    },
    actionText:{
      color:"#fff"
    }
})
