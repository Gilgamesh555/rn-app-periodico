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

const categoryItem = ({index, section, ...props}) => {
    //console.log(index.nombre);
    //const name = index.nombre;

    const funct = ()=>index.navigation.jumpTo('Home', {
        id: section.id,
    });

    // const ff = ()=>index.navigation.closeDrawer();

    // const funct = () => {
    //     return(
    //         console.log(index.nombre)
    //     )
    // }

    return(
        <TouchableOpacity onPress={() => {console.log("GAAA")}} >
            <CardItem style={styles.container} pointerEvents="none">
            <Left>
                <Icon 
                name="book"
                style="" 
                size={23}
                color="#323"
                />
                <Text style={styles.text}>{section.nombre}</Text>
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