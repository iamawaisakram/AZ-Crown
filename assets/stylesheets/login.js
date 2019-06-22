import { StyleSheet, Platform } from 'react-native';
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
  inputs: {
    height: hp('40%'),
    width: wp('95%'),
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  emailView: {
    borderBottomColor: CONTRAST_COLOR,
    borderBottomWidth: 1,
    flexDirection: 'row',
    margin: 5
  },
  input: {
    width: wp('90%'),
    height: hp('8%'),
    color: CONTRAST_COLOR
  },
  icon: {
    position: 'absolute',
    right: 0,
    width: wp('15%'),
    height: hp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 11111
  },
  signinButton: {
    width: wp('40%'),
    height: hp('6%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: CONTRAST_COLOR,
    marginTop: hp('4%')
  },
  signinText: {
    fontSize: wp('4%'),
    textAlign: 'center',
    fontWeight: '600',
    color: CONTRAST_COLOR
  },
  indicatiorView: {
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: hp('2%'),
    left: 0
  },
  copyright: {
    fontSize: wp('3%'),
    textAlign: 'center',
    fontWeight: '600',
    color: CONTRAST_COLOR
  }
});
