import React, { Component } from 'react'
import { Text, View,Image,ScrollView } from 'react-native'
import { Fonts } from '../../utils/font'
import ComponentText from '../component/customInput'
import CustomButton from '../component/customButton'
import  Styles from '../resetPassword/resetPasswordStyle'
import {heightPercentageToDP as hp , widthPercentageToDP as wp} from 'react-native-responsive-screen'


export default class resetPassword extends Component {
    render() {
        return (
            <View style={{backgroundColor:'#161616'}}>

                <View style={Styles.head}>
                    <Image source={require('./../../../asset/image/icons/logo-colored.png')}/>
                   
                    {/* <Text style={{fontSize:20,fontFamily:Fonts.Bold,color:'white'}}>sdfgtyh</Text> */}
                </View>
                <View style={Styles.resetView}>
                {/* <ScrollView>                     */}
                    <Text style={Styles.mainheading}>Reset Password</Text>
                    <Text style={Styles.text}>We will send 4 digits code to your </Text>
                    <Text style={Styles.text2}>email for the verification. </Text>
                    <View style={{marginTop:hp(8.62),}}>
                        <ComponentText label='Name' name="ios-mail-outline"/>
                    </View>
                    <View style={{marginTop:hp(13.67)}}>
                        <CustomButton name="Continue"/>
                    </View>
                {/* </ScrollView> */}

                </View>
                
            </View>
        )
    }
}
