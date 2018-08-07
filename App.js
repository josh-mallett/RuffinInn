// library imports
import { createStackNavigator } from 'react-navigation';

// local component imports 
import Home from './components/Home';
import CustomerForm from './components/CustomerForm';

const App = createStackNavigator({
  Home: { screen: Home },
  CustomerForm: { screen: CustomerForm }
});

export default App;