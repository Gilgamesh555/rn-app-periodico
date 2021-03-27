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
import categoriesAPI from '../apis/Categories'
import { Body, Footer, Header } from 'native-base';
import Images from './Images';

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
      categoriesAPI.get('menu')
      .then(res => {
        const categories = res.data;
        this.setState({categories});
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


  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <CategoryItem {...section}/>
      </Animatable.View>
    );
  };


  renderContent(section, _, isActive, content) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.headerS, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Button
        onPress={() =>
          <Images />  
        }
        title="Go to Menu profile"
        />
        { section.tienes.map((category , i) => <CategoryItem {...category} key={i} />)}
      </Animatable.View>
    );
  }


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
        <ScrollView contentContainerStyle={{ paddingTop: 1 }}>
          <View>
            <CategoryItem {...{nombre: "GENERAL", navigation: this.props}}/>
          </View>
          <Accordion
            activeSections={activeSections}
            sections={this.state.categories}
            touchableComponent={TouchableOpacity}
            expandMultiple={true}
            renderHeader={(section) => {
              return(
                <View>
                <CategoryItem {...section} />
                </View>
              )
            }}
            renderContent={(section) => {
              return(
                <Animatable.View
                  duration={400}
                  style={styles.headerS}
                  transition="backgroundColor"
                >
                  <SubCategoryItem index={this.props} section={section}/>
                </Animatable.View>
              )
            }}
            duration={400}
            onChange={this.setSections}
          />    
        </ScrollView>
        {/* <Button
        onPress={() =>
          this.props.navigation.navigate('Menu')  
        }
        title="Go to Menu profile"
        /> */}
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