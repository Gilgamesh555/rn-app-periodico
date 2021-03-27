import React from 'react'
import {View, StyleSheet, Text, Image, Dimensions, TouchableOpacity} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import HTML from "react-native-render-html"
import {Button} from 'react-native-elements'
// import Icon from 'react-native-vector-icons/FontAwesome'
import {Icon} from 'react-native-elements'
// import { NativeWebViewAndroid } from 'react-native-webview/lib/WebViewTypes';

const {width, height} = Dimensions.get('window')


const htmlContent = "<h2>&iquest;Por qu&eacute; lo usamos?</h2>\r\n<p>Es un hecho establecido hace demasiado tiempo que un lector se distraer&aacute; con el contenido del texto de un sitio mientras que mira su dise&ntilde;o. El punto de usar Lorem Ipsum es que tiene una distribuci&oacute;n m&aacute;s o menos normal de las letras, al contrario de usar textos como por ejemplo \"Contenido aqu&iacute;, contenido aqu&iacute;\". Estos textos hacen parecerlo un espa&ntilde;ol que se puede leer. Muchos paquetes de autoedici&oacute;n y editores de p&aacute;ginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una b&uacute;squeda de \"Lorem Ipsum\" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a trav&eacute;s de los a&ntilde;os, algunas veces por accidente, otras veces a prop&oacute;sito (por ejemplo insert&aacute;ndole humor y cosas por el estilo).</p>"
// const htmlContent = "<h2>&iquest;Por qu&eacute; lo usamos?</h2>\r\n<p>Es un";

// nav.navigate('Inicio', { screen: 'AnuncioD', params: { data: item}})

const NewsCard = ({item, nav}) =>{
    return (
        // <TouchableOpacity onPress={() => nav.navigate('AnuncioD', {item})}>
            <View style={styles.cardView}>
                {/* <Text style={styles.title}>{item.unidad}</Text>
                <Text style={styles.author}>{item.persona}</Text>
                <Image style={styles.image} source={{uri: item.imagen}}/>
                <Text style={styles.description}>{item.telefono}</Text> */}
                <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
                    <Icon
                        name="building"
                        size={15}
                        color="red"
                        type='ionicon'
                        style={{
                            marginVertical: height * 0.011,
                            marginHorizontal: width * 0.05
                        }}
                    />
                    <Text style={styles.author}>{item.unidad}</Text>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
                    <Icon
                        name="user"
                        size={15}
                        color="gray"
                        type='antdesign'
                        style={{
                            marginVertical: height * 0.011,
                            marginHorizontal: width * 0.05
                        }}
                    />
                    <Text style={styles.author}>{item.persona}</Text>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
                    <Icon
                        name="time-outline"
                        size={15}
                        color="green"
                        type='ionicon'
                        style={{
                            marginVertical: height * 0.02,
                            marginHorizontal: width * 0.05,
                        }}
                    />
                    <Text style={styles.author}>{item.telefono}</Text>
                </View>
            </View>
        // </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: 'white',
        margin: width * 0.03,
        borderRadius: width * 0.05,
        shadowColor: '#000',
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.5,
        // shadowRadius: 3,
    },
    title: {
        // marginHorizontal: width * 0.05,
        marginVertical: width * 0.03,
        color: 'black', 
        fontSize: 20,
        fontWeight: 'bold'
    },
    description: {
        height: height / 9, 
        marginVertical: width * 0.05,
        marginHorizontal: width * 0.05,
        color: 'gray',
        fontSize: 18,
    },
    image: {
        height: height / 6,
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        marginVertical: height * 0.02,
    },
    author: {
        marginVertical: height * 0.011,
        marginBottom: width * 0.0,
        marginHorizontal: width * 0.05,
        fontSize: 15,
        color: 'gray'
    }
})

export default NewsCard;