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
import CurrencyScreen from './screen/CurrencyScreen'
import { createStackNavigator } from '@react-navigation/stack'

//Test
import CommuniqueScreen from './screen/CommuniquesScreen'
import CommuniqueDetails from './components/CommuniqueDetails'



const Tab = createBottomTabNavigator();

function MyTabs({route, navigation}) {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="Inicio" 
      component={Home}
      options={{
        name: 'Noticias',
        tabBarColor: '',
        tabBarIcon: ({ color }) => (
          <Icon
          name='home'
          type='antdesign'
          color='#517fa4'
          />
        )
      }}
      />
      <Tab.Screen 
      name="Noticias" 
      component={MyStack} 
      options={{
        name: 'Noticias',
        tabBarColor: '',
        tabBarIcon: ({ color }) => (
          <Icon
          name='newspaper-o'
          type='font-awesome'
          color='#517fa4'
          />
        )
      }}
      />
      <Tab.Screen 
      name="Comunicados" 
      component={CommuniqueStack}
      options={{
        name: 'Comunicados',
        tabBarColor: '',
        tabBarIcon: ({ color }) => (
          <Icon
          name='megaphone'
          type='entypo'
          color='#517fa4'
          />
        )
      }}
      />
      <Tab.Screen 
      name="Live" 
      component={Live} 
      options={{
        name: 'En Vivo',
        tabBarColor: '',
        tabBarIcon: ({ color }) => (
          <Icon
          name='play'
          type='antdesign'
          color='#517fa4'
          />
        )
      }}
      />
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

const Stack = createStackNavigator();

function MyStack({route, navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Noticias" component={Draw} options={{headerShown: false}}/>
      <Stack.Screen name="Comunicados" component={NewsDetails} options={{headerShown: false}}/>
      <Stack.Screen name="Monedas" component={CurrencyScreen}/>
    </Stack.Navigator>
  );
}

function CommuniqueStack({route, navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={CommuniqueScreen} options={{headerShown: false}}/>
      <Stack.Screen name="ComunicadoD" component={CommuniqueDetails} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
    // <Test />   
  );
}