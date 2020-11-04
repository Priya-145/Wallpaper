import { StyleSheet } from 'react-native';
import { Fonts } from '../../utils/font';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
  head: {
    justifyContent: 'space-between',
    // width:'100%',
    marginTop: hp(3),
    height: hp(3.69),
    flexDirection: "row",
    zIndex: 1000,
    // marginLeft:wp(5.33),
    // marginRight:wp(5.33)
    marginHorizontal: wp(4)
  },
  input: {
    height: hp(6.15),
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#161616',
    marginTop: -8,
    width: wp(85)
  },
  backicon: {
    width: wp(10.66),
    height: hp(4.93),
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(1.33),


  },
  _input: {
    flex: 1,
    height: hp(4.93),
    backgroundColor: '#939393',
    borderRadius: 60,
    paddingHorizontal: wp(4.27),
    fontSize: 15,
  },

})