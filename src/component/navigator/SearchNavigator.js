import { createStackNavigator, createAppContainer } from 'react-navigation';
import Search from '../search/Search';

const AppNavigator = createStackNavigator({


  Search: {
    screen: Search,
    navigationOptions: {
      header: null
    }
  },





}
);

const App = createAppContainer(AppNavigator);

export default App;

