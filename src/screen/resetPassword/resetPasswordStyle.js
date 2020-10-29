import {StyleSheet} from 'react-native'
import {heightPercentageToDP as hp , widthPercentageToDP as wp} from 'react-native-responsive-screen'

export default StyleSheet.create({
    head:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#161616'
    },
    resetView:{
        height:hp(64.66),
        width:wp(100),
        backgroundColor:'black'
    }
})