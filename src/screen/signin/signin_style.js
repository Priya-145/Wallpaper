import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


export default StyleSheet.create(
    {
        main: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#161616',
        },
        flex1: {
            justifyContent:'center',
            alignItems:'center',
            height: hp(35.34),
            width: wp(100)
        },
        flex2: {
            height: hp(64.65),
            width: wp(100),
            backgroundColor: '#000000',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25
        },
        text1: {
            alignSelf: 'center',
            color: '#707070',
            fontSize: 24,
            // marginTop:7.16
        },
        text2: {
            alignSelf: 'center',
            fontSize: 14,
            color: '#707070',
            // marginTop:2.47
        },
        button: {
            color: '#707070'
        },
        text3: {
            flexDirection: 'row'
        },
        text4: {
            color: '#707070',
        },
        text5: {
            color: '#707070'
        },
        text6:
        {
            color: 'red',
            // marginTop:93.84
        },
        text7:
        {
            color: 'red'
        },
        


    }
)
