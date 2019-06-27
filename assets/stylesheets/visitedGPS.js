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
  sheTracksMenu: {
    width: wp('60%'),
    height: hp('60%'),
    justifyContent: 'space-evenly'
  },
  simpleView: {
    alignItems: 'center'
  },
  panel: {
    width: wp('60%'),
    height: hp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: SECONDARY_COLOR,
    margin: 5
  },
  videoPanel: {
    width: wp('90%'),
    height: hp('40%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: SECONDARY_COLOR,
    margin: 5
  },
  panelText: {
    fontSize: wp('4%'),
    color: CONTRAST_COLOR,
    fontWeight: '600'
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
    elevation: 3,
    height: hp('13%'),
    backgroundColor: SECONDARY_COLOR,
    width: wp('45%'),
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardHeadingView: {
    height: hp('6%'),
    width: wp('45%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardHeading: {
    fontSize: wp('4%'),
    fontWeight: '800',
    color: CONTRAST_COLOR
  },
  itemTitleView: {
    height: hp('6%'),
    width: wp('43%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    height: hp('5%'),
    backgroundColor: SECONDARY_COLOR,
    width: wp('30%'),
    resizeMode: 'contain'
  },
  itemTitle: {
    fontSize: wp('3%'),
    fontWeight: '500',
    color: CONTRAST_COLOR,
    textAlign: 'center'
  },
  inputContainers: {
    width: wp('90%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  descriptionView: {
    width: wp('90%'),
    margin: 5,
    height: hp('15%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: CONTRAST_COLOR,
    borderWidth: 1
  },
  commentInput: {
    width: wp('87%'),
    height: hp('14%'),
    color: CONTRAST_COLOR
  },
  select: {
    flexDirection: 'row',
    width: wp('90%'),
    height: hp('7%'),
    alignItems: 'center',
    borderColor: CONTRAST_COLOR,
    borderWidth: 1,
    marginTop: hp('2%')
  },
  toView: {
    width: wp('20%'),
    height: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  toText: {
    fontSize: wp('4%'),
    color: CONTRAST_COLOR,
    textAlign: 'center'
  },
  ccView: {
    width: wp('70%'),
    height: hp('7%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  ccText: {
    fontSize: wp('4%'),
    color: CONTRAST_COLOR,
    textAlign: 'center'
  },
  multipleButtonsView: {
    flexDirection: 'row',
    width: wp('90%'),
    height: hp('7%'),
    alignItems: 'center',
    marginTop: hp('2%'),
    justifyContent: 'space-between'
  },
  multipleButton: {
    width: wp('43%'),
    height: hp('7%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: CONTRAST_COLOR,
    borderWidth: 1
  },
  buttonsView: {
    flexDirection: 'row',
    width: wp('90%'),
    height: hp('7%'),
    alignItems: 'center',
    marginTop: hp('2%'),
    justifyContent: 'space-between'
  },
  button: {
    flexDirection: 'row',
    width: wp('27%'),
    height: hp('7%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: CONTRAST_COLOR,
    borderWidth: 1
  },
  resultButton: {
    width: wp('27%'),
    height: hp('7%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: CONTRAST_COLOR,
    borderWidth: 1,
    margin: 5
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
  },
  inputAndPhoto: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('90%'),
    margin: 5,
    borderColor: CONTRAST_COLOR,
    borderWidth: 1
  },
  observationDetails: {
    width: wp('60%'),
    height: hp('15%'),
    borderColor: CONTRAST_COLOR,
    borderWidth: 1
  },
  observationDetailsAssignedCard: {
    width: wp('60%'),
    height: hp('15%')
  },
  photoView: {
    width: wp('28%'),
    height: hp('15%'),
    borderColor: CONTRAST_COLOR,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  photoViewAssignedCard: {
    width: wp('28%'),
    height: hp('14%'),
    borderColor: CONTRAST_COLOR,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 3
  },
  actionPanel: {
    width: wp('95%'),
    flexDirection: 'row',
    alignItems: 'center'
  },
  trainingPanel: {
    width: wp('47.5%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  cell: {
    width: wp('45%'),
    height: hp('6%'),
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5
  },
  buttonCell: {
    width: wp('45%'),
    height: hp('6%'),
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderColor: CONTRAST_COLOR,
    borderWidth: 1
  },
  input: {
    width: wp('45%'),
    height: hp('6%'),
    borderColor: CONTRAST_COLOR,
    borderWidth: 1,
    color: CONTRAST_COLOR
  },
  userPicture: {
    width: wp('45%'),
    height: wp('45%'),
    borderColor: CONTRAST_COLOR,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputTitle: {
    fontSize: wp('4%'),
    color: CONTRAST_COLOR
  },
  inputs: {
    height: hp('40%'),
    width: wp('95%'),
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  emailView: {
    borderBottomColor: CONTRAST_COLOR,
    borderBottomWidth: 1,
    flexDirection: 'row',
    margin: 5
  },
  userInput: {
    width: wp('90%'),
    height: hp('8%'),
    color: CONTRAST_COLOR
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
  }
});
