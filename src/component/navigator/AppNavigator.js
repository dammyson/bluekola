import { createStackNavigator, createAppContainer } from 'react-navigation';

import Splash from '../../component/splash/Splash';
import IntroSlider from '../splash/IntroSlider';
import Registration from '../User/Registration';
import Otp from '../User/Otp';
import Username from '../User/Username';
import ForgotPassword from '../password/ForgotPassword';
import Home from '../User/Home';
import Profile from '../Profile/Profile';
import Feed from '../User/Feed';
import CreateService from '../service/CreatService';
import Service from '../service/Service';
import Authentication from '../User/Aunthentication';
import Result from '../search/Result';


import Search from '../search/Search';





const AppNavigator = createStackNavigator({

 

  Splash: {
    screen: Splash,
    navigationOptions: {
      header: null
    }
  },

  IntroSlider: {
    screen: IntroSlider,
    navigationOptions: {
      header: null
    }
  },
  Authentication: {
    screen: Authentication,
    navigationOptions: {
      header: null
    }
  },
  Otp: {
    screen: Otp,
    navigationOptions: {
      header: null
    }
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: {
      header: null
    }
  },

  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Otp: {
    screen: Otp,
    navigationOptions: {
      header: null
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      header: null
    }
  },





}
);

const App = createAppContainer(AppNavigator);

export default App;

