import React, {Component} from 'react'
import { FlatList } from 'react-native'
import ForecastCard from '../components/ForecastCard'
import Geolocation from '@react-native-community/geolocation'
import { View, Text, ActivityIndicator } from 'react-native'
import ForecastAPI from '../apis/Forecast'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            latitude: 0,
            longitude: 0,
            forecast: [],
            error: '',
        }
    }
    
    componentDidMount() {
        // Get the device lotacion
        this.getLocation();
    }

    getLocation() {
      console.log('aaa')
        // Get the current position of the device
        Geolocation.getCurrentPosition(
            (position) => {
                this.setState(
                    (prevState) => ({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    }), () => { this.getWeather(); }
                )
            },
            (error) => this.setState({ forecast: error.message }),
            {timeout: 20000, maximumAge: 1000}
        ) 
   }

   getWeather() {
       //Construct the API url
       let url =  'https://api.openweathermap.org/data/2.5/weather?lat=' + this.state.latitude + '&lon=' +this.state.longitude + '&units=metric&appid=e1749ff40f9a5a3b52a2b5f6123f7843'

       // Call the API, and set the state of the weather forecast
      ForecastAPI.get('weather?lat=' + this.state.latitude + '&lon=' +this.state.longitude + '&units=metric&appid=e1749ff40f9a5a3b52a2b5f6123f7843')
      .then(res => {
        this.setState((prevState, props) => ({
          forecast: res.data
        }));
      })
      .catch(function(error){
          console.log(error)
      })

      //  fetch(url)
      // .then(response => response.json())
      // .then(data => {
      //   this.setState((prevState, props) => ({
      //     forecast: data
      //   }));
      // })
    }
    
    render() {
      if(this.state.forecast.weather == null){
        return(
          <View style={{alignContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color="#00ff00"/>
          </View>  
        )
      }
      else{
        return(
            <View>
              {/* {console.log(this.state.forecast.weather[0])} */}
              {/* <Text>GAA</Text> */}
              <ForecastCard detail={this.state.forecast} location={this.state.forecast.name} />
            </View>
            // <FlatList data={this.state.forecast.list}
            // style={{marginTop: 20}}
            // keyExtractor={item => item.dt_text}
            // renderItem= {({item}) => <ForecastCard detail={item} location={this.state.forecast.city.name} />} />
        )
      }
    }
}