import React from "react";
import { View } from "react-native";
import {  createBottomTabNavigator, createAppContainer } from "react-navigation";

import Home from './HomeNavigator';
import Search from './SearchNavigator';
import Profile from './ProfileNavigator';

import { Card, Icon,SocialIcon} from 'react-native-elements'
import styles from "@twotalltotems/react-native-otp-input/styles";

const TabsNavigation = createBottomTabNavigator( {
   
  Home: Home ,
  Search: Search ,
  Profile: Profile ,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return (
            <View style={{}}> 
            <Icon
            active
            focused={focused}
            name="home"
            type='font-awesome'
            color={tintColor}
          />
          </View>
          );
        }else if(routeName === 'Search') {
          return (
            <View style={{ height:60, width:60, justifyContent:'center', alignItems:'center',  marginBottom:20, borderRadius: 40, backgroundColor:'#749AD1', borderWidth:3, borderColor:tintColor}}> 
            <Icon
            active
            name="search"
            type='font-awesome'
          />
          </View>
          );
        } else if(routeName === 'Profile') {
          return (
            <View style={{}}> 
            <Icon
            active
            name="user"
            type='font-awesome'
            color={tintColor}
          />
          </View>
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