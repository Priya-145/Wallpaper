import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Fonts } from '../../utils/font';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'




export default StyleSheet.create(
    {
        flex1: {
            height: hp(35.12),
            width: wp(100),
            backgroundColor: '#161616',
            marginTop:hp(14.77),
            alignItems: 'center'
        },
        flex2: {
            height: hp(50),
            width: wp(100),
            backgroundColor: '#000000',
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30
        },
        text1: {
            fontSize: hp(3.69),
            justifyContent: 'center',
            alignSelf: 'center',
            color: 'rgba(255,255,255,0.5)',
            marginTop: hp(6.15),
            fontFamily: Fonts.Medium,
        },
        text2: {
            fontSize: hp(2.46),
            color: 'rgba(255,255,255,0.5)',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: hp(1.84),
            fontFamily: Fonts.Regular,
        },
      
       button1:{
           color:'#707070',
           marginTop:hp(8.73),
           backgroundColor:'#FFFFFF',
           height:hp(7.01),
           width:wp(86.66),
           alignSelf:'center',
          borderRadius:10,
        
       },
       
       button2:{
        color:'#FFFFFF',
        marginTop:hp(3.07),
        backgroundColor:'#3E5C9B',
        // marginBottom:hp(8.62),
        height:hp(7.01),
        width:wp(86.66),
        alignSelf:'center',
        borderRadius:10,
    },
    
    text3:{
        alignSelf:'center',
        marginTop:hp(1.97),
        marginLeft:wp(5.33),
        fontFamily: Fonts.Medium,
    },

    text4:{
        color:'#ffffff',
        marginTop:hp(1.97),
        marginLeft:wp(5.33),
        fontFamily: Fonts.Medium,
        
    }

        // bottom: {
        //     justifyContent: 'space-between',
        //     flexDirection: 'row',
        //     alignSelf: 'center',
        //     marginTop: hp(2.46),
        //     marginBottom: hp(4.68)
        // }

    }
)




















































