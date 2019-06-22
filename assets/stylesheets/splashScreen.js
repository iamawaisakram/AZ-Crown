import { StyleSheet, Platform, StatusBar } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

//config
import { SECONDARY_COLOR } from '../../config';

export default StyleSheet.create({
  container: {
    width: wp('100%'),
    height: hp('100%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: SECONDARY_COLOR
  },
  imageView: {
    width: wp('100%'),
    height: hp('30%'),
    alignItems: 'center'
  },
  crown: {
    width: wp('70%'),
    height: hp('30%'),
    resizeMode: 'contain'
  },
  logoView: {
    width: wp('100%'),
    alignItems: 'center'
  },
  logoTitle: {
    fontSize: wp('5%'),
    textAlign: 'center',
    fontWeight: '600'
  },
  indicatiorView: {
    width: wp('100%'),
    marginBottom: hp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0
  },
  copyright: {
    fontSize: wp('3%'),
    textAlign: 'center',
    fontWeight: '600'
  }
});
