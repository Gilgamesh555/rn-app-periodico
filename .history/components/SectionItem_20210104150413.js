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
import LastItemCategory from './LastItemCategory'

const subCategoryItem = ({index, section}) => {
    //console.log(index.nombre);
    //const name = index.nombre;

    const funct = ()=>index.navigation.navigate("Settings");  

    // const funct = () => index.navigation.navigate("Homies", {
    //     name: "GAA"
    // })

    return(
        <View>
            <LastItemCategory index={index} section={{
                nombre: 'General '+section.nombre,
                id: section.id,
                miembro: true,
            }}/>
            { section.tienes.map((category , i) => <LastItemCategory index={index} section={category} key={i} />)}
        </View>
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
        fontSize: 18,
        textAlign: 'right'
    }
})

export default subCategoryItem;