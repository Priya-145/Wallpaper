import React, { Component } from 'react'
import { Text, View,Image,TextInput } from 'react-native'
import { Fonts } from '../../utils/font'
import ComponentText from '../component/customInput'
 import CustomButton from '../component/customButton'
import  Styles from './verifyCodeStyle'
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
                    <Text style={Styles.mainheading}>Verification Code</Text>
                    <Text style={Styles.text}>Enter the 4 digits code that you  </Text>
                    <Text style={Styles.text}>received on your e-mail. </Text>

                    <View style={{marginTop:hp(10.10),marginBottom:hp(12.56),flexDirection:'row',justifyContent:'space-between',marginHorizontal:wp(3),width:'80%'}}>
                        
                        <View style={Styles.code}>
                            <TextInput style={Styles.codeText}>6</TextInput>
                        </View>
                        <View style={Styles.code}>
                            <TextInput style={Styles.codeText}>7</TextInput>
                        </View>
                        <View style={Styles.code}>
                            <TextInput style={Styles.codeText}>8</TextInput>
                        </View>
                        <View style={Styles.code}>
                            <TextInput style={Styles.codeText}>1</TextInput>
                        </View>
                    </View>
                    <View>
                        <CustomButton name="Continue"/>
                    </View>
                </View>
                
            </View>
        )
    }
}
