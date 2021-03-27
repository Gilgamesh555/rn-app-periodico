import React, {Component} from 'react'
import {StyleSheet, View, Image} from 'react-native'
import {Text, Card, Divider} from 'react-native-elements'

export default class ForecastCard extends Component{
    render(){
        return(
            <Card containerStyle={styles.card} {...console.log(this.props)}>
                {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.notes}>
                        {this.props.detail.weather[0].description}
                    </Text>
                    <Text style={styles.notes}>{Math.round(this.props.detail.main.temp * 10) / 10}&#8451;</Text>
                </View>
                <Divider style={{ backgroundColor: '#dfe6e9', marginVertical:10 }}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.notes}>
                        {this.props.detail.weather[0].description}
                    </Text>
                    <Text style={styles.notes}>{Math.round(this.props.detail.main.temp * 10) / 10}&#8451;</Text>
                </View>
                <Divider style={{ backgroundColor: '#dfe6e9', marginVertical:10 }}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.notes}>
                        {this.props.detail.weather[0].description}
                    </Text>
                    <Text style={styles.notes}>{Math.round(this.props.detail.main.temp * 10) / 10}&#8451;</Text>
                </View>
                <Divider style={{ backgroundColor: '#dfe6e9', marginVertical:10 }}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.notes}>
                        {this.props.detail.weather[0].description}
                    </Text>
                    <Text style={styles.notes}>{Math.round(this.props.detail.main.temp * 10) / 10}&#8451;</Text>
                </View>
                <Divider style={{ backgroundColor: '#dfe6e9', marginVertical:10 }}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.notes}>
                        {this.props.detail.weather[0].description}
                    </Text>
                    <Text style={styles.notes}>{Math.round(this.props.detail.main.temp * 10) / 10}&#8451;</Text>
                </View> */}
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