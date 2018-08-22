// library imports
import { createStackNavigator } from 'react-navigation';

// local component imports 
import Home from './components/Home';
import CustomerForm from './components/CustomerForm';
import PetForm from './components/PetForm'

const App = createStackNavigator({
  Home: { screen: Home },
  CustomerForm: { screen: CustomerForm },
  PetForm: { screen: PetForm }
});

export default App;