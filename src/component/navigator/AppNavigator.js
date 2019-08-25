import  {createStackNavigator, createAppContainer} from 'react-navigation';

import Splash from '../splash/Splash';
import IntroSlider from '../splash/IntroSlider';
import Login from '../login/Login';
import Registration from '../register/Registration';
import ForgotPassword from '../password/ForgotPassword';
import Landing from '../User/Landing';
import Profile from '../User/Profile';





const AppNavigator = createStackNavigator({


 
    Splash: {screen: Splash,
    navigationOptions: {
      header:null 
    }},
  
    IntroSlider: {screen: IntroSlider,
      navigationOptions: {
        header:null 
      }},
      Login: {screen: Login,
        navigationOptions: {
          header:null 
        }},
        ForgotPassword: {screen: ForgotPassword,
          navigationOptions: {
            header:null 
          }},
       
      Registration: {screen: Registration,
        navigationOptions: {
          header:null 
        }},
        Landing: {screen: Landing,
          navigationOptions: {
            header:null 
          }},
        Profile: {screen: Profile,
          navigationOptions: {
            header:null 
          }},
     
   
     
   
   
}
);

const App = createAppContainer(AppNavigator);

export default App;

