import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { 
Container, 
Icon,
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
Switch} from 'native-base';
import React, {useState, useEffect} from 'react'


const categoryItem = ({index, ...props}) => {

    const name = index.nombre;

    const funct = ()=>props.navigation.navigate('Home'); 

    return(
        <DrawerItem
            label={name}
            icon={({color,size}) => (
                <Icon 
                name="home" 
                style={{
                    fontSize:size,
                    color: 'lightblue'
                }}
                />
            )}
            onPress={funct}
        /> 
    )    
}

export default categoryItem;