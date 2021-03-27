import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import React, { Component, useEffect, useState } from 'react';
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Button,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import CategoryItem from '../components/CategoryItem'
import SubCategoryItem from '../components/SubCategoryItem'
import generalAPI from '../apis/Categories'
import { Body, Footer, Header } from 'native-base';
import Images from './Images';

import SectionItem from '../components/SectionItem'

const BACON_IPSUM =
  'Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ';

const CONTENT = [
  {
    title: <CategoryItem />,
    content: <CategoryItem />,
  },
  {
    title: <CategoryItem />,
    content: <CategoryItem />,
  },
  {
    title: <CategoryItem />,
    content: <CategoryItem />,
  },
  {
    title: <CategoryItem />,
    content: <CategoryItem />,
  },
  {
    title: <CategoryItem />,
    content: <CategoryItem />,
  },
];

const SELECTORS = [
  {
    title: 'First',
    value: 0,
  },
  {
    title: 'Third',
    value: 2,
  },
  {
    title: 'None',
  },
];

export default class App extends Component {
  constructor(...props){
    super(...props)
    this.state = {
      activeSections: [],
      collapsed: true,
      multipleSelect: false,
      categories: [],
    }
  }

  componentDidMount(){
      generalAPI.get('section')
      .then(res => {
        const categories = res.data
        this.setState({categories})
      }) 
  }
  
  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  render() {
    const { multipleSelect, activeSections } = this.state;

    return (
      <View style={styles.container} >
        {/* <DrawerItemList {...this.props} /> */}
        <Header>
          <Body>
            <Text>Secciones</Text>
          </Body>
        </Header>
          <FlatList
          data={this.state.categories}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={({item}, i) => {
              return <SectionItem  index={this.props} section={item}/>
          }}
          />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerS: {
    backgroundColor: '#F5FCFF',
    padding: 30,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 30,
    backgroundColor: '#F5FCFF',
  },
  active: {
    backgroundColor: '#F5FCFF',
  },
  inactive: {
    backgroundColor: '#F5FCFF',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});