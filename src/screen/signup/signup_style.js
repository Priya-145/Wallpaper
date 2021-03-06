
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
            fontSize: 24,
            justifyContent: 'center',
            alignSelf: 'center',
            color: '#939393',
            marginTop: hp(7.62),
            fontFamily: Fonts.Medium,
        },
        textinput:{
            marginTop:hp(8.62),
            marginLeft:wp(6.67),
            marginRight:wp(6.67)
        },
        btn: {
            color: 'white',
            // justifyContent:'center',
            alignSelf: 'center',
            // marginBottom:hp(3.80)

        },
        txt1: {
            fontSize: 14,
            color: '#939393',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: hp(2.47),
            fontFamily: Fonts.Regular,
        },
        txt2: {
            color: '#939393',
            fontSize: 12,
            fontFamily:Fonts.Regular

        },
        txt3: {
            color: '#009FB8',
            fontSize: 12,
            borderBottomColor: '#009FB8',
            borderBottomWidth: 1,
            fontFamily:Fonts.Bold
        },
        bottomtext: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: hp(2.46),
            marginBottom:hp(4.68)
        }

    }
)