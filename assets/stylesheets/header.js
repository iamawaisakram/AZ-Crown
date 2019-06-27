import { StyleSheet, Platform, StatusBar } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { PRIMARY_COLOR, CONTRAST_COLOR } from '../../config';

export default StyleSheet.create({
  header: {
    width: wp('100%'),
    height: hp('7%'),
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: PRIMARY_COLOR
  },
  icon: {
    width: wp('20%'),
    height: hp('7%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    width: wp('60%'),
    height: hp('7%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: wp('4%'),
    fontWeight: '800',
    color: CONTRAST_COLOR
  }
});
