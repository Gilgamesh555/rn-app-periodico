import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screen/Home'
import TestCollapse from './screen/TestCollapse'
import News from './screen/News'
import NewsDetails from './screen/NewsDetails'
import Live from './screen/Lives'
import { Icon, Card } from 'react-native-elements'

//Test
import Test from './screen/TestNotif'


const Tab = createBottomTabNavigator();

function MyTabs({route, navigation}) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={Home}/>
      <Tab.Screen name="Noticias" component={Draw} />
      <Tab.Screen 
      name="Comunicados" 
      component={NewsDetails}
      options={{
        name: 'Comunicados',
        tabBarColor: '',
      }}
      />
      <Tab.Screen name="Live" component={Live} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

const Draw = ({route, navigation}) => {
  return (
      <Drawer.Navigator initialRouteName="NewsDetails" drawerContent={props => <TestCollapse {...props}/>}>
        <Drawer.Screen name="Home" component={News} />
        <Drawer.Screen name="Menu" component={NewsDetails} />
      </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
    // <Test />   
  );
}