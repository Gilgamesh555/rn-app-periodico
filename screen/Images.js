import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, FlatList, SafeAreaView} from 'react-native'
import ImageCard from '../components/ImageCard'
import { DrawerActions } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import {
    Container,
    Content,
    Header,
    Left,
    Body,
    Right,
    Button
} from 'native-base'


import imageAPI from '../apis/Images'

const Images = ({navigation}) => {
    const [news, setNews] = useState([])

    useEffect(() => {
        getNewsFromApi()
    }, [])
    const newsResponse = async() =>{
        const response = await imageAPI.get('prevencion');
        
    }
    function getNewsFromApi(){
        imageAPI.get('prevencion')
        .then(function(response){
            setNews(response.data)
        })
        .catch(function(error){
            console.log(error)
        })
    }

    return(
        <SafeAreaView 
            contentContainerStyle={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Header>
                    <Left style={{flex: 0.1}}>
                        {/* <Button transparent
                            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                        >
                            <Icon name="menu" size={30} color="#323" />
                        </Button> */}
                    </Left>
                    <Body style={{flex: 1, alignItems: 'center'}}>
                        <Text style={{fontSize: 20}}>Agenda</Text>
                    </Body>
                </Header>
                
                <FlatList
                    data={news}
                    keyExtractor={(item, index) => 'key' + index}
                    renderItem={({item}) => {
                        return <ImageCard item={item}/>
                    }}
                />
        </SafeAreaView >
    )
}


export default Images;