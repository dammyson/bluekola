import { createStackNavigator, createAppContainer } from 'react-navigation';

import Profile from '../User/Profile';
import CreateService from '../service/Create';

import ServieDetails from '../service/ServieDetails';





const AppNavigator = createStackNavigator({


 /* */Profile: {
    screen: Profile,
    navigationOptions: {
      header: null
    }
  },
  CreateService: {
    screen: CreateService,
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

