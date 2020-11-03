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
        backgroundColor: '#161616'
    },
    profileview: {
        marginTop: hp(6.40),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: wp(4),
        width: wp(52.27)
    },
    text: {
        color: 'white',
        fontSize: 16,
        alignSelf: 'center',
        textAlign: 'center',
        fontFamily: Fonts.Medium,

    },
    textinput:{
        marginTop:hp(4.31),
        alignSelf:'center',
        flexDirection:'row',

    },
})