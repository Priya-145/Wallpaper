import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { heightPercentageToDP as hp ,widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default StyleSheet.create({
    background:{
        height:'100%',
        width:'100%'
    },
    bottom:{
        flexDirection:'row',
        // marginTop:hp(88.91),
    },
    arrow:{
        marginTop:hp(6.5),
        marginLeft:wp(5.54)
    },
    top:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    more:{
        marginTop:hp(6.40),
        marginRight:wp(5.34)
    }
})

