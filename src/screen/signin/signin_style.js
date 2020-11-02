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
            marginTop: hp(1.60),
            fontFamily: Fonts.Regular,
        },
        textinput1: {
            marginTop: hp(4.31),
           alignSelf:'center',
           flexDirection:'row'
        },
        textinput2: {
            marginTop: hp(4.31),
           alignSelf:'center',
           flexDirection:'row'
        },
        forgot: {
            alignSelf: 'flex-end',
            color: '#707070',
            fontSize: 12,
            fontFamily: Fonts.Regular,
            marginTop: hp(1.23),
            marginRight:wp(5)
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
            fontFamily: Fonts.Bold,
         
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




















































