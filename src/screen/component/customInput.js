import React, { Component } from 'react'
import { Text, View,TextInput } from 'react-native'

import FontAwesome from 'react-native-vector-icons/Ionicons';
import { Fonts } from '../../utils/font'
import { Sae } from 'react-native-textinput-effects';
// import AnimatedInput from "react-native-animated-input";
import { widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class ComponentText extends Component {
    render() {
        return (
            <View style={{alignItems:"center",flexDirection:'row',justifyContent:'space-between'}}>
            <View style={{borderBottomWidth:2,borderBottomColor:'#009FB8',width:wp(86.67)}}>

           
                <Sae
                    label={this.props.label}
                    labelStyle={{color:"#707070",marginBottom:hp(3),fontFamily:Fonts.Regular,fontSize:1}}
                    inputStyle={{fontSize:24,fontFamily:Fonts.SemiBold}}
                    inputPadding={10}
                    labelHeight={10}
                    borderHeight={0}
                    style={{fontFamily:Fonts.SemiBold}}
                    autoCapitalize={'none'}
                    autoCorrect={false}
               
                 />
                 {/* <AnimatedInput
                    placeholder="Email"
                    // valid={isValid}
                    errorText="Error"
                    // onChangeText={handleChange}
                    value={this.props.value}
                    styleLabel={{ fontWeight: "600" }}
                    styleBodyContent={{ borderBottomWidth: 1.5 }}
                /> */}



            </View>
            <FontAwesome name="ios-mail-outline" size={20} color="#009FB8" />
           
            </View>
        )
    }
}
