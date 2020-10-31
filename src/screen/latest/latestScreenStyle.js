import {StyleSheet} from 'react-native';
import {Fonts} from '../../utils/font';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default StyleSheet.create({
    head:{
        justifyContent:'space-between',
        width:'100%',
        marginTop:hp(6.40),
        height:hp(3.69),
        flexDirection:"row",
        marginLeft:wp(5.33),
        marginRight:wp(5.33)
        // marginHorizontal:wp(5.33)
    },
    headMid:{
        width:wp(62.67),
        height:hp(3.69),
        borderRadius:40,
        backgroundColor:'#464646',
        justifyContent:'center'
    }
})