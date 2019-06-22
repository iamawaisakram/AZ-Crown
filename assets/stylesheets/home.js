import { StyleSheet, Platform, StatusBar } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

//config
import { PRIMARY_COLOR, SECONDARY_COLOR, CONTRAST_COLOR } from '../../config';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: PRIMARY_COLOR
  },
  menu: {
    width: wp('95%'),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: PRIMARY_COLOR,
    marginTop: hp('3%')
  },
  leftMenu: {
    width: wp('47.5%'),
    backgroundColor: PRIMARY_COLOR,
    alignItems: 'center'
  },
  rightMenu: {
    backgroundColor: PRIMARY_COLOR,
    width: wp('47.5%'),
    alignItems: 'center'
  },
  menuItem: {
    height: hp('13%'),
    backgroundColor: SECONDARY_COLOR,
    width: wp('40%'),
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    height: hp('5%'),
    backgroundColor: SECONDARY_COLOR,
    width: wp('30%'),
    resizeMode: 'contain'
  },
  itemTitle: {
    fontSize: wp('3%'),
    fontWeight: '800',
    marginTop: 5,
    color: CONTRAST_COLOR
  }
});
