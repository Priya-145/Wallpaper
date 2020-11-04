import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Fonts } from '../../utils/font'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default StyleSheet.create({
    main: {
        backgroundColor: '#161616',
        height: '100%',
        width: '100%'
    },
    mainview: {
        backgroundColor: '#161616',
        marginTop: hp(3),
    },
    text: {
        color: 'white',
        fontSize:hp(2.40),
        alignItems: 'center',
        fontFamily: Fonts.Medium,

    },
    textinput: {
        height: hp(6.78),
        width: wp(89.33),
        backgroundColor: '#343434',
        borderRadius: 5,
        // justifyContent: 'center',
        // alignItems: 'center',
        alignSelf: 'center',
        marginTop: hp(3.07),
        flexDirection: 'row',

     
    }
})