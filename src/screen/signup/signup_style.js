
import {StyleSheet } from 'react-native'
import {Fonts} from '../../utils/font';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default StyleSheet.create(
    {
        main: {
            height: hp(35.34),
            width: wp(100),
            backgroundColor: '#161616',
            justifyContent: 'center',
            alignItems: 'center'
        },
        head: {
            height: hp(64.66),
            width: wp(100),
            backgroundColor: '#000000',
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30
        },
        txt: {
            fontSize: hp(2.96),
            justifyContent: 'center',
            alignSelf: 'center',
            color: 'rgba(255,255,255,0.5)',
            marginTop: hp(7.62),

            fontFamily: Fonts.Medium,
        },
        textinput:{
            marginTop:hp(4.31),
            alignSelf:'center',
            flexDirection:'row',

        },
        btn: {
            color: 'white',
            // justifyContent:'center',
            alignSelf: 'center',
            // marginBottom:hp(3.80)

        },
        txt1: {
            fontSize: hp(1.97),
            color: 'rgba(255,255,255,0.5)',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: hp(1.60),
            fontFamily: Fonts.Regular,
        },
        txt2: {
            color: 'rgba(255,255,255,0.5)',
            fontSize: 12,
            fontFamily:Fonts.Regular

        },
        txt3: {
            color: '#009FB8',
            fontSize: 12,
            // borderBottomColor: '#009FB8',
            // borderBottomWidth: 1,
            fontFamily:Fonts.Bold,
            textDecorationLine:'underline'
        },
        bottomtext: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: hp(2.46),
            marginBottom:hp(4.68)
        },
       

    }
)