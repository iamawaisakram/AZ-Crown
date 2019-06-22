import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator
} from 'react-navigation';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

//drawerComponent
import DrawerContentComponent from './components/DrawerContentComponent';

//SplashScree
import SplashScreen from './pages/splashScreen/SplashScreen';

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
    // drawerType: 'slide',
    // overlayColor: '00FFFFF',
    drawerWidth: wp('60%'),
    contentComponent: DrawerContentComponent
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      SplashScreen,
      drawerNavigator
    },
    {
      initialRouteName: 'SplashScreen',
      headerMode: 'none'
    }
  )
);
