import React from "react";
import { View } from "react-native";
import {  createBottomTabNavigator, createAppContainer } from "react-navigation";
import Profile from '../User/Profile';
import Home from '../User/Home';
import Setting from '../settings/Settings';
import { Card, Icon,SocialIcon} from 'react-native-elements'

const TabsNavigation = createBottomTabNavigator( {
   
  Home: Home ,
  Setting: Setting ,
  Profile: Profile ,
  
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return (
            <Icon
            active
            focused={focused}
            name="home"
            type='font-awesome'
            color={tintColor}
          />
          );
        } else if(routeName === 'Profile') {
          return (
            <Icon
            active
            name="user"
            type='font-awesome'
            color={tintColor}
          />
          );
        }else if(routeName === 'Setting') {
          return (
            <Icon
            active
            name="search"
            type='font-awesome'
            color={tintColor}
          />
          );
        }
       
      },
    }),
    tabBarOptions: {
      showLabel: false,
      animationEnabled: true,
      tintColor: '#FF6F00',
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
      
    },
  }
);



const App = createAppContainer(TabsNavigation);
export default App;