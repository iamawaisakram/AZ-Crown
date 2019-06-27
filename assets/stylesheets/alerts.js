import { StyleSheet, Dimensions, Platform } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { SECONDARY_COLOR, CONTRAST_COLOR, PRIMARY_COLOR } from '../../config';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    width: wp('100%'),
    height: hp('100%'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalView: {
    width: wp('95%'),
    height: hp('80%'),
    backgroundColor: SECONDARY_COLOR,
    borderWidth: 2,
    borderColor: CONTRAST_COLOR,
    borderRadius: wp('5%')
  },
  scrollView: {
    width: wp('95%'),
    height: hp('63%')
  },
  scrollViewContent: {
    alignItems: 'center'
  },

  element: {
    width: wp('90%'),
    height: hp('5%'),
    backgroundColor: PRIMARY_COLOR,
    borderWidth: 1,
    borderColor: CONTRAST_COLOR,
    borderRadius: wp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  elementText: {
    fontSize: wp('4%'),
    color: CONTRAST_COLOR
  },
  closeButton: {
    width: wp('15%'),
    height: wp('15%'),
    left: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
