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

//She Tracks
import SheTracks from './pages/sheTracks/SheTracks';
import CreateNewAction from './pages/sheTracks/CreateNewAction';
import SheActionFeedback from './pages/sheTracks/SheActionFeedback';
import AssignedSheAction from './pages/sheTracks/AssignedSheAction';

//She Training
import SheTraining from './pages/sheTraining/SheTraining';
import TrainingActions from './pages/sheTraining/TrainingActions';
import Results from './pages/sheTraining/Results';
import ManualHandlingTraining from './pages/sheTraining/ManualHandlingTraining';

//She Douments
import SheDocuments from './pages/sheDocuments/SheDocuments';
import DocumentActions from './pages/sheDocuments/DocumentActions';
import DocumentTraining from './pages/sheDocuments/DocumentTraining';

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
    AssignedGoCard,

    SheTracks,
    CreateNewAction,
    SheActionFeedback,
    AssignedSheAction,

    SheTraining,
    TrainingActions,
    Results,
    ManualHandlingTraining,

    SheDocuments,
    DocumentActions,
    DocumentTraining
  },
  {
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
