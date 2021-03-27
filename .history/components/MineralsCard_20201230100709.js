import React, {Component} from 'react'
import {StyleSheet, View, Image} from 'react-native'
import {Text, Card, Divider} from 'react-native-elements'

export default class ForecastCard extends Component{
    render(){
        let time;
        
        // Create a new date from the passed date time
        var date = new Date()
        
        // Hours part from the timestamp
        var hours = date.getHours()
        //Minutes part from the timestamp
        var minutes = "0" + date.getMinutes()

        time = hours + ':' + minutes.substr(-2)
        return(
            <Card containerStyle={styles.card}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.notes}>
                        {this.props.detail.weather[0].description}
                    </Text>
                    <Text style={styles.notes}>{Math.round(this.props.detail.main.temp * 10) / 10}&#8451;</Text>
                </View>
                <Divider style={{ backgroundColor: '#dfe6e9', marginVertical:20 }}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.notes}>
                        {this.props.detail.weather[0].description}
                    </Text>
                    <Text style={styles.notes}>{Math.round(this.props.detail.main.temp * 10) / 10}&#8451;</Text>
                </View>
                <Divider style={{ backgroundColor: '#dfe6e9', marginVertical:20 }}/>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.notes}>
                        {this.props.detail.weather[0].description}
                    </Text>
                    <Text style={styles.notes}>{Math.round(this.props.detail.main.temp * 10) / 10}&#8451;</Text>
                </View>
                <Divider style={{ backgroundColor: '#dfe6e9', marginVertical:20 }}/>
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
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#517fa4',
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