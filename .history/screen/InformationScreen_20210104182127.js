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

import InformationCard from '../components/InformationCard'
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
            generalAPI.get("informaciones")
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
                // <AnimatedHeader 
                //     style={{flex: 1 }}
                //     title='UATF'
                //     renderLeft={() => (
                //             <Button transparent
                //                 onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                //             >
                //                 <Icon name="menu" size={30} color="#323" style={{marginLeft: 7.5}}/>
                //             </Button>
                //     )}
                //     renderRight={() => (
                //         <Button transparent
                //             onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                //         >
                //             <Icon name="search" size={30} color="#323" style={{marginRight: 7.5}}/>
                //         </Button>
                //     )}
                //     backStyle={{ marginLeft: 10 }}
                //     backTextStyle={{fontSize: 14, color: '#000'}}
                //     titleStyle={{ fontSize: 22, left: 20, bottom: 20, color: '#000' }}
                //     headerMaxHeight={200}
                //     imageSource={Bg}
                //     toolbarColor='#FFF'
                //     disabled={false}
                // >
                // <Text>{(route!=null ? route.params : "LAGARTO GAA")}</Text>
                // <Text >
                //     {(route.params!=null ? route.params.section : "LAGARTO GAA")}
                // </Text>}
                // <ScrollView>
                //     { news.map((item , i) => <NewsCard item={item} nav={navigation}  key={i}/>)}
                // </ScrollView>
                <View>
                    <Header>
                        <Text>Informaciones</Text>
                    </Header>
                    <FlatList
                        data={news}
                        keyExtractor={(item, index) => 'key' + index}
                        renderItem={({item}, i) => {
                            return <InformationCard item={item} nav={navigation} key={i}/>
                        }}
                    />
                </View>
                // </AnimatedHeader>
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