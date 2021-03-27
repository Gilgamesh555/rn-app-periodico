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
import CommuniqueScreen from './screen/CommuniquesScreen'
import CommuniqueDetails from './components/CommuniqueDetails'

//Test
import AnunciosScreen from './screen/AnunciosScreen'
import SectionCollapse from './screen/SectionCollapse'


const Tab = createBottomTabNavigator();

function MyTabs({route, navigation}) {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="Inicio" 
      component={HomeStack}
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

const SectionDraw = ({route, navigation}) => {
  return (
      <Drawer.Navigator drawerContent={props => <SectionCollapse {...props}/>}>
        <Drawer.Screen name="HomeDr" component={AnunciosScreen} />
      </Drawer.Navigator>
  )
}

const Stack = createStackNavigator();

function HomeStack({route, navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="Monedas" component={CurrencyScreen}/>
      <Stack.Screen name="Anuncios" component={SectionDraw}/>
      <Stack.Screen name="AnuncioD" component={CommuniqueDetails} />
    </Stack.Navigator>
  );
}

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
      <Stack.Screen name="HomeC" component={CommuniqueScreen} options={{title: "Anuncios"}}/>
      <Stack.Screen name="ComunicadoD" component={CommuniqueDetails} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    // <NavigationContainer>
    //   <MyTabs />
    // </NavigationContainer>
    <View>
      <Text>GAA</Text>
    </View>
    // <Test />   
  );
}

