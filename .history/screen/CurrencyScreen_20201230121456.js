import { Card } from 'native-base'
import React from 'react'
import {Button} from 'react-native-elements'
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    Image,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { WebView } from 'react-native-webview'
import Icon from 'react-native-vector-icons/FontAwesome';

const iframeString = '<iframe width="1838" height="773" src="https://www.youtube.com/embed/glhB1lsfcVs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
const app = () => {
    return(
        <View>
            <View style={styles.cardRounded}>
                <Text style={styles.label}>Seccion de Directos</Text>
                <WebView 
                    mediaPlaybackRequiresUserAction={true}
                    style={{ height:240, width:320,alignSelf:"center",alignContent:"center", marginBottom: 20}}
                    source={{uri: 'https://www.youtube.com/embed/glhB1lsfcVs'}}
                />
            </View>
        </View>
    )
}
// https://www.youtube.com/embed/cNplZrRSjeI?list=RDMM5A9OIIapSko

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    cardRounded: {
        marginTop: 25,
        paddingEnd: 0,
        paddingTop: 0,
        paddingBottom: 0,
        paddingStart: 0,
        padding: 0,
        borderRadius: 12,
        alignItems:"center",
        backgroundColor:"white",
        flex:0,
        height:300,
    },
    label: {
        fontSize: 23,
        paddingBottom: 20,
    },
    button: {
        paddingBottom: 10,
    }
})

export default app;