import React from "react";
import { View } from "react-native";
import {  createBottomTabNavigator, createAppContainer } from "react-navigation";

import Home from '../User/Feed';
import Search from '../search/Search';
import Profile from '../User/Profile';

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
            <View style={{paddingLeft: 20,paddingRight: 20, paddingTop: 20, paddingBottom: 20, borderRadius: 40, backgroundColor:'blue'}}> 
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
            <View style={{ height:40, width:40, paddingLeft: 20,paddingRight: 20, paddingTop: 20, paddingBottom: 20, borderRadius: 40, backgroundColor:'red'}}> 
            <Icon
            active
            name="search"
            type='font-awesome'
            color={tintColor}
          />
          </View>
          );
        } else if(routeName === 'Profile') {
          return (
            <View style={{paddingLeft: 20,paddingRight: 20, paddingTop: 20, paddingBottom: 20, borderRadius: 40, backgroundColor:'blue'}}> 
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