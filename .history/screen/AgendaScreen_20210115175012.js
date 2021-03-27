import React, {useState, useEffect} from 'react'
import { DrawerActions } from '@react-navigation/native';
import {
    Container,
    Content,
    Header,
    Left,
    Body,
    Right,
    Button
} from 'native-base'

import Icon from 'react-native-vector-icons/Feather';
import AnimatedHeader from 'react-native-animated-header';

import {View, StyleSheet, Text, FlatList, SafeAreaView} from 'react-native'

import AnunciosCard from '../components/AnunciosCard'
import generalAPI from '../apis/Test'
import Collapse from './TestCollapse'
import Bg from '../assets/header.jpeg';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const News = ({route, navigation}) => {
    const [contactos, setContactos] = useState([])


    useEffect(() => {
        getNewsFromApi()
    }, [])
    // const newsResponse = async() =>{
    //     const response = await newAPI.get('top-headlines?country=us&apiKey=c9b21c440f76435ba36297880df2b759');
    //     
    // }
    function getNewsFromApi(){
        async function fetchData() {
            generalAPI.get("carpeta")
            .then(function(response){
                console.log(response.data)
                setContactos(response.data)
            })
            .catch(function(error){
                console.log(error)
            })
        }
        fetchData();
    }

    if(!contactos){
        return null;
    }
    return(
        <AnimatedHeader 
        style={{flex: 1 }}
        title='Contactos UATF'
        renderLeft={() => (
                <Button transparent
                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                >
                    <Icon name="menu" size={30} color="#323" style={{marginLeft: 7.5}}/>
                </Button>
        )}
        renderRight={() => (
            <Button transparent
                // onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
                <Icon name="search" size={30} color="#323" style={{marginRight: 7.5}}/>
            </Button>
        )}
        backStyle={{ marginLeft: 10 }}
        backTextStyle={{fontSize: 14, color: '#000'}}
        titleStyle={{ fontSize: 22, left: 20, bottom: 20, color: '#000' }}
        headerMaxHeight={200}
        imageSource={Bg}
        toolbarColor='#FFF'
        disabled={false}
        >
            {/* <FlatList
                data={news}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}, i) => {
                    return <AnunciosCard item={item} nav={navigation} key={i}/>
                }}
            /> */}
        </AnimatedHeader>
    )
}


export default News;

{/* <FlatList
    data={news}
    keyExtractor={(item, index) => 'key' + index}
    renderItem={({item}) => {
        return <NewsCard item={item}/>
    }}
/> */}