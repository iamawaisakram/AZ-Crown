import { StyleSheet, Platform, StatusBar } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { PRIMARY_COLOR, SECONDARY_COLOR, CONTRAST_COLOR } from '../../config';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    height: hp('100%'),
    width: wp('60%'),
    backgroundColor: PRIMARY_COLOR
  },
  menuBarIcon: {
    position: 'absolute',
    top: hp('2.5%'),
    left: 0,
    width: wp('8%'),
    height: hp('4%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  screenContainer: {
    height: hp('10%'),
    width: wp('60%'),
    // marginTop: hp('1%'),
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navigationCell: {
    flexDirection: 'row',
    width: wp('60%'),
    alignItems: 'center',
    height: hp('10%')
  },
  cellIcon: {
    width: wp('15%'),
    height: hp('10%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  navigationCellText: {
    width: wp('40%'),
    textAlign: 'left',
    color: CONTRAST_COLOR,
    fontSize: wp('4%'),
    fontWeight: '700',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
