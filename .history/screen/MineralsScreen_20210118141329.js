import React, {Component} from 'react'
import { FlatList } from 'react-native'
import MineralsCard from '../components/MineralsCard'
import Geolocation from '@react-native-community/geolocation'
import { View, Text, ActivityIndicator } from 'react-native'
import mineralsAPI from '../apis/News'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            latitude: 0,
            longitude: 0,
            minerals: [],
            error: '',
        }
    }
    
    componentDidMount(){
        mineralsAPI.get('https://mac-softins.com/api/minerales')
        .then(res => {
          this.setState((prevState, props) => ({
            minerals: res.data.datos
          }));
        }) 
    }

//    getWeather() {
//        //Construct the API url
//        let url =  'https://api.openweathermap.org/data/2.5/weather?lat=' + this.state.latitude + '&lon=' +this.state.longitude + '&units=metric&appid=e1749ff40f9a5a3b52a2b5f6123f7843'

//        // Call the API, and set the state of the weather forecast
//       ForecastAPI.get('weather?lat=' + this.state.latitude + '&lon=' +this.state.longitude + '&units=metric&appid=e1749ff40f9a5a3b52a2b5f6123f7843')
//       .then(res => {
//         this.setState((prevState, props) => ({
//           forecast: res.data
//         }));
//       })

//       //  fetch(url)
//       // .then(response => response.json())
//       // .then(data => {
//       //   this.setState((prevState, props) => ({
//       //     forecast: data
//       //   }));
//       // })
//     }
    
    render() {
      if(this.state.minerals[0] == null){
        return(
          <View style={{alignContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" color="#00ff00"/>
          </View> 
        )
      }
      else{
        return(
            <View>
              <MineralsCard detail={this.state.minerals} />
            </View>
            // <FlatList data={this.state.forecast.list}
            // style={{marginTop: 20}}
            // keyExtractor={item => item.dt_text}
            // renderItem= {({item}) => <ForecastCard detail={item} location={this.state.forecast.city.name} />} />
        )
      }
    }
}