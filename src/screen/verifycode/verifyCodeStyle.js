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
    fontSize: 24,
    fontFamily: Fonts.Medium,
    color: 'rgba(255,255,255,0.5)',
    marginTop: hp(1.48),
    marginBottom: hp(2.46),
  },
  text: {
    fontSize: 16,
    fontFamily: Fonts.Regular,
    color: 'rgba(255,255,255,0.5)',
    // marginTop:
  },
  code:{
      width:wp(13.33),
      height:hp(7.51),
      borderWidth:0.5,
      borderColor:'#939393',
      backgroundColor:'#343434',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
    //   backgroundColor:'red'
  },
  codeText:{
    fontSize:22,
    fontFamily:Fonts.Medium,
    color:'white',
    textAlign:'center',
    height:'100%',
    width:'100%'
  }
});
