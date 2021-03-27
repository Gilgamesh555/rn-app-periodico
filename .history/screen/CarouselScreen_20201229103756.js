import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import ForecastScreen from './ForecastScreen'

export default class App extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
            content: <ForecastScreen />
          },
          {
            content: <ForecastScreen />
          },
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View>
              {item.content}
          </View>
        )
    }

    render() {
        return (
          <SafeAreaView style={{flex: 1 }}>
            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
            </View>
          </SafeAreaView>
        );
    }
}

