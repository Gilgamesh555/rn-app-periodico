import { Card } from 'native-base'
import React, { useEffect, useState } from 'react'
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
import liveApi from '../apis/News'
import Share from 'react-native-share'

var iframeString = '<iframe width="1838" height="773" src="https://www.youtube.com/embed/glhB1lsfcVs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
const app = () => {
    const [lives, setLives] = useState([])

    useEffect(() => {
        getLivesfromApi()
    }, [])

    function getLivesfromApi() {
        liveApi.get('transmision')
        .then(function(response) {
            console.log(response.data)
            setLives(response.data)
        })
        .catch(function(error){
            console.log(error)
        })
    }

    const myCustomShare = async () => {
        const shareOptions = {
            message: "Accede a la Television de la UATF por medio de este link http://laplumanegra.uatf.edu.bo/transmition",
        }
        try{
            const ShareResponse = await Share.open(shareOptions)
        } catch(error) {
            console.log('Error => ', error)
        }
    }

    return(
        <View>
            {/* <ScrollView> */}
            <View style={styles.cardRounded}>
                <Text style={styles.label}>Seccion de Directos</Text>
                <ScrollView>
                    {/* iframeString.match(/(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/gm) */}
                    {
                        lives.map((value, key) => {
                            // value.cod_envevido)
                            if(value.cod_envevido.match(/(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/gm) == null){
                                 return <Text key={key}>...</Text>
                            }
                            // }else{
                                // <WebView key={key}
                                //     // {...console.log(value.cod_envevido.match(/(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/gm)[0])}
                                //     mediaPlaybackRequiresUserAction={true}
                                //     style={{ height:240, width:330,alignSelf:"center",alignContent:"center", marginBottom: 20}}
                                //     source={{uri: 'https://www.youtube.com/embed/gShA0l0T8S4'}}
                                // />
                            // }
                            return(
                                <WebView 
                                    key={key}
                                    // {...console.log(value.cod_envevido)}
                                    mediaPlaybackRequiresUserAction={true}
                                    style={{ height:200, width:330,alignSelf:"center",alignContent:"center", marginBottom: 20}}
                                    source={{uri: value.cod_envevido.match(/(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?/gm)[0]}}
                                />
                            )
                        })
                    }
                    {/* <WebView 
                        mediaPlaybackRequiresUserAction={true}
                        style={{ height:240, width:330,alignSelf:"center",alignContent:"center", marginBottom: 20}}
                        source={{uri: 'https://www.youtube.com/embed/gShA0l0T8S4'}}
                    /> */}
                </ScrollView>
            </View>
            <View style={styles.cardRounded}>
                <Text style={styles.label}>Redes Sociales</Text>
                <Button
                    buttonStyle={{
                        marginBottom: 10,
                        width: 200,
                        borderColor: 'blue',
                    }}
                    icon={
                    <Icon
                        name="share"
                        size={15}
                        color="blue"
                    />
                    }
                    titleStyle={{
                        color: 'blue'
                    }}
                    title=" Compartir"
                    type="outline"
                    onPress={myCustomShare}     
                />
                {/* <Button
                    buttonStyle={{
                        marginBottom: 10,
                        width: 200,
                    }}
                    icon={
                    <Icon
                        name="thumbs-o-up"
                        size={15}
                        color="white"
                    />
                    }
                    title=" Me gusta"
                    type="outline"
                />
                <Button
                    buttonStyle={{
                        borderColor: 'red',
                        marginBottom: 10,
                        width: 200,
                    }}
                    icon={
                    <Icon
                        name="heart-o"
                        size={15}
                        color="red"
                    />
                    }
                    titleStyle={{
                        color: 'red'
                    }}
                    title=" Me encanta"
                    type="outline"
                /> */}
            </View>
            {/* </ScrollView> */}
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
        height: 400,
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