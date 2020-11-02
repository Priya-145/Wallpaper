import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Fonts } from '../../utils/font';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'




export default StyleSheet.create(
    {
        flex1: {
            height: hp(35.34),
            width: wp(100),
            backgroundColor: '#161616',
            justifyContent: 'center',
            alignItems: 'center'
        },
        flex2: {
            height: hp(64.66),
            width: wp(100),
            backgroundColor: '#000000',
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30
        },
        text1: {
            fontSize: 24,
            justifyContent: 'center',
            alignSelf: 'center',
            color: '#939393',
            marginTop: hp(7.62),
            fontFamily: Fonts.Medium,
        },
        text2: {
            fontSize: 14,
            color: '#939393',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: hp(2.47),
            fontFamily: Fonts.Regular,
        },
        textinput1: {
            marginTop: hp(8.62),
            marginLeft: wp(6.67),
            marginRight: wp(6.67)
        },
        textinput2: {
            marginTop: hp(4.31),
            marginLeft: wp(6.67),
            marginRight: wp(6.67)
        },
        forgot: {
            alignSelf: 'flex-end',
            color: '#707070',
            fontSize: 12,
            fontFamily: Fonts.Regular,
            marginTop: hp(1.23),
            marginRight:wp(5)
        },
        btn: {
            color: 'white',
            alignSelf: 'center',


        },

        text3: {
            color: '#939393',
            fontSize: 12,
            fontFamily: Fonts.Regular

        },
        text4: {
            color: '#009FB8',
            fontSize: 12,
            borderBottomColor: '#009FB8',
            borderBottomWidth: 1,
            fontFamily: Fonts.Bold
        },
        bottom: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: hp(2.46),
            marginBottom: hp(4.68)
        }

    }
)




















































// export default StyleSheet.create(
//     {
//         main: {
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundColor: '#161616',
//         },
//         flex1: {
//             justifyContent: 'center',
//             alignItems: 'center',
//             height: hp(35.34),
//             width: wp(100)
//         },
//         flex2: {
//             height: hp(64.65),
//             width: wp(100),
//             backgroundColor: '#000000',
//             borderTopLeftRadius: 25,
//             borderTopRightRadius: 25
//         },
//         text1: {
//             alignSelf: 'center',
//             color: '#707070',
//             fontSize: 24,
//             marginTop: hp(4.92),
//             fontFamily: Fonts.Medium,
//         },
//         text2: {
//             alignSelf: 'center',
//             fontSize: 14,
//             color: '#707070',
//             marginTop: hp(1.60),
//             fontFamily: Fonts.Regular,
//         },
//         button: {
//             color: '#707070',
//             marginTop: hp(10.71),
//             borderRadius: 5,
//             // borderColor: 'red',
//             backgroundColor: '#00FFFF',
//             height: 57,
//             width: 325,
//             alignSelf:'center',
//             justifyContent:'center',

//         },
//         text3: {
//             flexDirection: 'row',
//            alignSelf:'center',

//         },
//         text4: {
//             color: '#707070',
//         },
//         text5: {
//             color: '#707070',
//             // marginTop:hp(30),
//             color: 'white',
//             fontSize:18,
//             fontFamily: Fonts.Medium,
//             marginLeft:hp(20),
//             fontWeight:'bold'

//         },
//         text6:
//         {
//             color: '#707070',
//             // marginTop:93.84
//             // marginTop:hp(2.85),
//             fontSize:12,
//             marginTop:hp(1.84)

//         },
//         text7:
//         {
//             color: '#00FFFF',
//             // marginTop:hp(2.85),
//             fontSize:12,
//             marginTop:hp(1.84)

//         },
//         forgot:{
//             alignSelf:'flex-end',
//             color:'#707070',
//             fontSize:12,
//             fontFamily: Fonts.Regular,
//             marginTop:hp(1.23)
//         },
//         textinput:{
//             marginTop:hp(8.62),
//             marginLeft:wp(6.67),
//             marginRight:wp(6.67)
//         },



//     }
// )
