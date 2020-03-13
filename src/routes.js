import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Product from './pages/Product';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes(singn = false) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={singn ? 'Home' : 'Singnin'}
        // screenOptions={{gestureEnabled: false}}
        headerTintColor="#fff"
        headerStyle={{BackgroundColor: '#7d40e7'}}>
        <Stack.Screen
          name="Singnin"
          component={Signin}
          options={{title: 'Bem Vindo'}}
        />
        <Stack.Screen
          name="Create"
          component={Signup}
          initialParams={{user: 'me'}}
        />
        <Stack.Screen name="Home">
          {() => (
            <Tab.Navigator
              initialRouteName="Home"
              tabBarOptions={{
                keyboardHidesTabBar: true,
                activeTintColor: '#fff',
                inactiveTintColor: 'rgba(255,255,255 ,0.6)',
                style: {backgroundColor: '#8d41a8'},
              }}>
              {/* <Tab.Screen name="Product" component={Product} /> */}
              <Tab.Screen
                name="Home"
                component={Home}
                tabBarOptions={{activeTintColor: '#fff'}}
                options={Home.navigationOptions}
              />
            </Tab.Navigator>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Home2"
          component={Home}
          initialParams={{user: 'Inicio'}}
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#7d40e7',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
