/**
* This is the Main file
* This file contains the routes of all the pages
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { Root } from 'native-base';
import { Scene, Router, Actions } from 'react-native-router-flux';




import Splash from '../../component/splash/Splash';
import IntroSlider from '../splash/IntroSlider';
import Registration from '../User/Registration';
import Otp from '../User/Otp';
import ForgotPassword from '../password/ForgotPassword';
import Home from '../User/Home';
import Profile from '../Profile/Profile';
import Feed from '../User/Feed';
import CreateService from '../service/CreatService';
import Service from '../service/Service';
import Authentication from '../User/Aunthentication';







export default class Main extends Component {
  componentWillMount = () => {
    BackHandler.addEventListener('hardwareBackPress', () => Actions.pop());
  };

  render() {
    return(
      <Root>
        <Router>
          <Scene key="root">
            <Scene initial key="splash" component={Splash} hideNavBar />
            <Scene  key="intro" component={IntroSlider} hideNavBar />
            <Scene  key="auth" component={Authentication} hideNavBar />
            <Scene  key="reg" component={Registration} hideNavBar />
            <Scene  key="otp" component={Otp} hideNavBar />
            <Scene  key="forgetpassword" component={ForgotPassword} hideNavBar />
            <Scene key="home" component={Home} hideNavBar />
            <Scene  key="profile" component={Profile} hideNavBar />
            <Scene  key="feed" component={Feed} hideNavBar />
            <Scene  key="createservice" component={CreateService} hideNavBar />
            <Scene  key="service" component={Service} hideNavBar />
           
          </Scene>
        </Router>
      </Root>
    );
  }

}
