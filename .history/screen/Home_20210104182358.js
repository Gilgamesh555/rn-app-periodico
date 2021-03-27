import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
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
                        onPress={() => {
                            return(
                                's'
                            )
                        }}
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

