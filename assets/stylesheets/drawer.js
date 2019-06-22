import { StyleSheet, Platform, StatusBar } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    alignItems: 'center'
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
  headerContainer: {
    height: hp('17%'),
    width: wp('40%'),
    alignItems: 'flex-start',
    justifyContent: 'flex-end'
  },
  profileImage: {
    width: wp('20%'),
    height: hp('10%'),
    resizeMode: 'contain'
  },
  profileText: {
    fontSize: wp('4.5%'),
    fontWeight: '800',
    color: '#000',
    marginTop: hp('2%')
  },
  screenContainerFirst: {
    marginTop: hp('2%'),
    height: hp('28%'),
    width: wp('40%'),
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  },
  navigationCell: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp('40%'),
    alignItems: 'center',
    height: hp('5%')
  },
  cellIcon: {
    width: wp('8%')
  },
  navigationCellText: {
    width: wp('32%'),
    textAlign: 'left',
    fontSize: wp('5%'),
    fontWeight: '400'
  },
  screenContainerSecond: {
    marginTop: hp('2%'),
    height: hp('15%'),
    width: wp('40%'),
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  },
  screenContainerThird: {
    marginTop: hp('2%'),
    height: hp('10%'),
    width: wp('40%'),
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
});
