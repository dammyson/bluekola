import { createStackNavigator, createAppContainer } from 'react-navigation';
import Feed from '../User/Feed';
import ServieDetails from '../service/ServieDetails';

const AppNavigator = createStackNavigator({


    Feed: {
    screen: Feed,
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

