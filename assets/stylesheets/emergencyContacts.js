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
  menu: {
    width: wp('90%'),
    height: hp('60%')
  },
  panel: {
    width: wp('90%'),
    height: hp('5%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    margin: 5
  },
  panelNumber: {
    width: wp('70%'),
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('5%'),
    borderColor: CONTRAST_COLOR,
    borderWidth: 1
  },
  callNumber: {
    alignItems: 'center',
    width: wp('17%'),
    justifyContent: 'center',
    height: hp('5%'),
    borderColor: CONTRAST_COLOR,
    borderWidth: 1
  },
  panelText: {
    fontSize: wp('3%'),
    color: CONTRAST_COLOR,
    fontWeight: '600'
  },
  submitButton: {
    width: wp('90%'),
    height: hp('7%'),
    alignItems: 'center',
    marginTop: hp('2%'),
    justifyContent: 'center',
    borderColor: CONTRAST_COLOR,
    borderWidth: 1
  },
  submitText: {
    fontSize: wp('4%'),
    color: CONTRAST_COLOR,
    textAlign: 'center'
  }
});
