import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { 
Container, 
Content,
Header,
Footer,
Right,
Button,
ListItem,
Left,
Thumbnail,
Body,
H3,
Text,
List,
Switch,
View,
CardItem} from 'native-base';
import React, {useState, useEffect} from 'react'

import {StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const categoryItem = (index, {...props}) => {
    //const name = index.nombre;

    return(
        <TouchableOpacity onPress={() => {
            if(index.nombre === "GENERAL"){
                index.navigation.navigation.jumpTo('Menu', {
                    section: 'general',
                    miembro: true
                })
            }
        }}>
        <CardItem style={styles.container} pointerEvents="none">
            <Left>
                <Icon 
                name="rocket" 
                size={23}
                color="#323"
                />
                <Text style={styles.text}>{index.nombre}</Text>
            </Left>
        </CardItem>
        </TouchableOpacity>
    )    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    text: {
        fontSize: 15,
        textAlign: 'right'
    }
})

export default categoryItem;