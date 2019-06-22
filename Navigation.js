import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator
} from 'react-navigation';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

//drawerComponent
import DrawerContentComponent from './components/DrawerContentComponent';

//Home
import Home from './pages/home/Home';

const drawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Home
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    gesturesEnabled: false,

    navigationOptions: {
      drawerLockMode: 'locked-close'
    },
    drawerType: 'slide',
    overlayColor: '00FFFFF',
    drawerWidth: wp('60%'),
    contentComponent: DrawerContentComponent
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      drawerNavigator
    },
    {
      initialRouteName: 'drawerNavigator',
      headerMode: 'none'
    }
  )
);
