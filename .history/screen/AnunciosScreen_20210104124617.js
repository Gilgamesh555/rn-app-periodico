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

import CommuniquesCard from '../components/CommuniqueCard'
import generalAPI from '../apis/News'
import Collapse from './TestCollapse'
import Bg from '../assets/header.jpeg';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const News = ({route, navigation}) => {
    const [news, setNews] = useState([])


    useEffect(() => {
        getNewsFromApi()
    }, [route])
    // const newsResponse = async() =>{
    //     const response = await newAPI.get('top-headlines?country=us&apiKey=c9b21c440f76435ba36297880df2b759');
    //     
    // }
    function getNewsFromApi(){
        async function fetchData() {
            generalAPI.get("anucios")
            .then(function(response){
                setNews(response.data)
            })
            .catch(function(error){
                console.log(error)
            })
        }
        fetchData();
    }

    if(!news){
        return null;
    }
    return(
        <FlatList
            data={news}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={({item}, i) => {
                return <CommuniquesCard item={item} nav={navigation} key={i}/>
            }}
        />
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