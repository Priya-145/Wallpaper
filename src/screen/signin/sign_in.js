import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image,TextInput ,ScrollView} from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
// import CustomButton from './src/screen/component/customButton'
import { Sae } from 'react-native-textinput-effects';
import AnimatedInput from "react-native-animated-input";
import styles from './signin_style'
import CustomButton from '../component/customButton';


export default class sign_in extends Component {
    render() {
        return (
         
            <View style={styles.main}>
               
                <View style={styles.flex1}>
                    <Image source={require('./../../../asset/image/icons/logo-colored.png')} style={styles.logo}></Image>
                </View>
                <View style={styles.flex2}>
                <ScrollView>
                    <Text style={styles.text1}>SIGN IN</Text>
                    <Text style={styles.text2}>Sign in to Continue</Text>
                    {/* <TextInput
                        placeholder='johndoe@gmail.com'
                        style={{marginTop:hp(5.54),color:'white',backgroundColor:'white'}}
                    /> */}
                    
                    <Sae
                        label={'E-mail'}
                        labelStyle={{ color: "#707070" }}
                        // inputStyle={{borderBottomWidth:3,borderBottomColor:'red',height:50}}
                        inputPadding={16}
                        labelHeight={30}
                        borderHeight={0}

                        autoCapitalize={'none'}
                        autoCorrect={false}
                       
                    />
                    {/* <TextInput
                       
                        style={{marginTop:hp(4.31),color:'white',backgroundColor:'white'}}
                    /> */}
                    <Sae
                        label={'Password'}
                        labelStyle={{ color: "#707070" }}
                        // inputStyle={{borderBottomWidth:3,borderBottomColor:'red',height:50}}
                        inputPadding={16}
                        labelHeight={30}
                        borderHeight={0}

                        autoCapitalize={'none'}
                        autoCorrect={false}
                    />
                    <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                    </TouchableOpacity>
                    {/* <View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text5}>Sign in</Text>
                    </TouchableOpacity>
                    </View> */}
                    <CustomButton/>
                    <View style={styles.text3}>
                        <Text style={styles.text6}>Don't have an account?</Text>
                        <TouchableOpacity style={styles.text4}>
                            <Text style={styles.text7}>Signup</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                </View>

            </View>
           
        )
    }
}
