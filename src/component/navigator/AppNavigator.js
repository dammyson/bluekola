import { createStackNavigator, createAppContainer } from 'react-navigation';

import Splash from '../../component/splash/Splash';
import IntroSlider from '../splash/IntroSlider';
import Registration from '../User/Registration';
import Otp from '../User/Otp';
import Username from '../User/Username';
import ForgotPassword from '../password/ForgotPassword';
import Home from '../User/Home';
import Profile from '../User/Profile';
import Feed from '../User/Feed';
import Service from '../service/Service';
import Authentication from '../User/Aunthentication';
import Result from '../search/Result';


import Search from '../search/Search';
import ServieDetails from '../service/ServieDetails';

import CreateService from '../service/Create';



const AppNavigator = createStackNavigator({

/* */

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
    screen: CreateService,
    navigationOptions: {
      header: null
    }
  },
  Registration: {
    screen: Registration,
    navigationOptions: {
      header: null
    }
  },

  Username: {
    screen: Username,
    navigationOptions: {
      header: null
    }
  },

  ServieDetails: {
    screen: ServieDetails,
    navigationOptions: {
      header: null
    }
  },



}
);

const App = createAppContainer(AppNavigator);

export default App;

const prevGetStateForActionHomeStack = AppNavigator.router.getStateForAction;
AppNavigator.router.getStateForAction = (action, state) => {
    if (state && action.type === 'ReplaceCurrentScreen') {
      const routes = state.routes.slice(0, state.routes.length - 1);
      routes.push(action);
      return {
        ...state,
        routes,
        index: routes.length - 1,
      };
    }
    return prevGetStateForActionHomeStack(action, state);
  }
