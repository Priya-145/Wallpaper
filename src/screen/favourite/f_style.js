import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Fonts } from '../../utils/font'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default StyleSheet.create({
    main: {
        backgroundColor: '#161616',
        height: hp(91.37),
        width: wp(100)

    },
   
    bottom: {
        backgroundColor: '#000000',
        height: hp(8.62),
        width: wp(100),
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: 'row'
    },
    text: {
        color: 'white',
        fontSize: 16,
        alignItems: 'center',
        fontFamily: Fonts.Medium,
        marginLeft: wp(34.46)
    },
    blueheart: {
        marginLeft: wp(10.67),
        marginTop: hp(3.07)
    },
    home: {
        marginBottom: hp(2.83),
        marginTop: hp(2.83),
        marginLeft: wp(29.86),
        marginRight: wp(29.6)
    },
    circle:{
        marginRight:wp(10.67),
        marginTop:hp(2.83),
        marginBottom:hp(2.83),
    
    }
})