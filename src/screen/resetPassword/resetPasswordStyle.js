import {StyleSheet} from 'react-native';
import {Fonts} from '../../utils/font';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  head: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161616',
    height: hp(35.34),
    width: wp(100),
  },
  resetView: {
    height: hp(64.66),
    width: wp(100),
    backgroundColor: 'black',
    borderRadius: 30,
    // justifyContent:'center',
    alignItems: 'center',
  },
  mainheading: {
    fontSize: hp(2.96),
    fontFamily: Fonts.Medium,
    color: 'rgba(255,255,255,0.5)',
    marginTop: hp(1.48),
    marginBottom: hp(2.46),
  },
  text: {
    fontSize: hp(1.97),
    fontFamily: Fonts.Regular,
    color: 'rgba(255,255,255,0.5)',
    // marginTop:
  },
});
