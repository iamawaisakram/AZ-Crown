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
  chatContainer: {
    width: wp('100%'),
    height: hp('78%')
  },
  adminTextView: {
    width: wp('100%'),
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  userTextView: {
    width: wp('100%'),
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  textView: {
    width: wp('70%'),
    borderWidth: 1,
    borderColor: CONTRAST_COLOR,
    margin: 3,
    borderRadius: wp('3%'),
    backgroundColor: SECONDARY_COLOR
  },
  text: {
    fontSize: wp('4%'),
    color: CONTRAST_COLOR,
    padding: wp('5%')
  },
  bottomBar: {
    width: wp('100%'),
    height: hp('10%'),
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5
  },
  addFilesView: {
    width: wp('17%'),
    height: hp('8%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('49%'),
    height: hp('8%')
  },
  input: {
    color: CONTRAST_COLOR,
    width: wp('46%'),
    height: hp('7%')
  }
});
