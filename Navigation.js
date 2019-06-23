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

//Login
import Login from './pages/login/Login';

//she observation
import SheObservation from './pages/sheObservation/SheObservation';
import CreateStopCard from './pages/sheObservation/CreateStopCard';
import StopCardFeedback from './pages/sheObservation/StopCardFeedback';
import AssignedStopCard from './pages/sheObservation/AssignedStopCard';
import CreateGoCard from './pages/sheObservation/CreateGoCard';
import AssignedGoCard from './pages/sheObservation/AssignedGoCard';

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
    // overlayColor: '00FFFFF',
    drawerWidth: wp('60%'),
    contentComponent: DrawerContentComponent
  }
);

const stackNavigator = createStackNavigator(
  {
    SheObservation,
    CreateStopCard,
    StopCardFeedback,
    AssignedStopCard,
    CreateGoCard,
    AssignedGoCard
  },
  {
    initialRouteName: 'SheObservation',
    headerMode: 'none'
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      SplashScreen,
      Login,
      stackNavigator,
      drawerNavigator
    },
    {
      initialRouteName: 'SplashScreen',
      headerMode: 'none'
    }
  )
);
