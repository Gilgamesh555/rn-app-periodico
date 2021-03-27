import React, {Component} from 'react'
import {StyleSheet, View, Image} from 'react-native'
import {Text, Card, Divider} from 'react-native-elements'

export default class ForecastCard extends Component{
    render(){
        return(
            <Card containerStyle={styles.card} >
                {/* this.props.detail[0] */}
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.notes}>
                        {this.props.detail[0].mineral} - {this.props.detail[0].unidad}
                    </Text>
                    <Text style={styles.notes}>{this.props.detail[0].cotizacion_baja}</Text>
                </View>
                <Divider style={{ backgroundColor: '#dfe6e9', marginVertical:10 }}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.notes}>
                        {this.props.detail[2].mineral} - {this.props.detail[2].unidad}
                    </Text>
                    <Text style={styles.notes}>{this.props.detail[2].cotizacion_baja}</Text>
                </View>
                <Divider style={{ backgroundColor: '#dfe6e9', marginVertical:10 }}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.notes}>
                        {this.props.detail[3].mineral} - {this.props.detail[3].unidad}
                    </Text>
                    <Text style={styles.notes}>{this.props.detail[3].cotizacion_baja}</Text>
                </View>
                <Divider style={{ backgroundColor: '#dfe6e9', marginVertical:10 }}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.notes}>
                        {this.props.detail[7].mineral} - {this.props.detail[7].unidad}
                    </Text>
                    <Text style={styles.notes}>{this.props.detail[7].cotizacion_baja}</Text>
                </View>
                <Divider style={{ backgroundColor: '#dfe6e9', marginVertical:10 }}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.notes}>
                        {this.props.detail[8].mineral} - {this.props.detail[8].unidad}
                    </Text>
                    <Text style={styles.notes}>{this.props.detail[8].cotizacion_baja}</Text>
                </View>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#7a780b',
        borderWidth: 0 ,
        borderRadius: 20,
    },
    time: {
        fontSize: 22,
    },
    notes: {
        fontSize: 10,
        textTransform: 'capitalize'
    },
})