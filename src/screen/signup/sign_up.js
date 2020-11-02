import React, { Component } from 'react'
import { Text, View, Image, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import ComponentText from '../component/customInput'
import CustomButton from '../component/customButton'
import { Icons } from '../../utils/icon'
// import {key} from 'react-native-keyboard-aware-scroll-view'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
// import AnimatedInput from "react-native-animated-input";


import styles from './signup_style'

export default class sign_up extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         email: ''
    //     }
    // }
    render() {
        return (

            <View style={{ backgroundColor: '#161616' }}>

                <View style={styles.main}>
                    <Image source={require('./../../../asset/image/icons/logo-colored.png')}></Image>

                </View>
                <View style={styles.head}>


                    <ScrollView>
                        <KeyboardAvoidingView>
                            <Text style={styles.txt}>SIGN UP</Text>
                            <Text style={styles.txt1}>Sign up to Continue</Text>
                            
                                <View style={styles.textinput}>
                                    <ComponentText label='Name'/>
                                    <Image source={Icons.user} style={{marginTop:hp(2)}}></Image>
                                </View>
                                <View style={styles.textinput}>
                                    <ComponentText label='E-mail' ></ComponentText>
                                    <Image source={Icons.mail}style={{marginTop:hp(2)}} ></Image>
                                </View>
                                <View style={styles.textinput}>
                                    <ComponentText label='Password'/>
                                    <Image source={Icons.lock}style={{marginTop:hp(2)}}></Image>
                                </View>
                                <View style={styles.textinput}>
                                    <ComponentText label='Confirm Password' />
                                    <Image source={Icons.lock}style={{marginTop:hp(2)}} ></Image>
                                </View>
                                
                            <View style={{marginTop:hp(8)}}>
                                <CustomButton name='Sign up' />
                            </View>
                            <View style={styles.bottomtext}>
                                <Text style={styles.txt2}>Already have an account? </Text>
                                <TouchableOpacity >
                                    <Text style={styles.txt3}>
                                    Signin 
                                   
                                </Text>
                                </TouchableOpacity>
                            </View>
                            </KeyboardAvoidingView>
                    </ScrollView>

                </View>

            </View>




            //     <View style={{backgroundColor:'#161616'}}>
            //         <View style={styles.head}>
            //             <Image source={require('./../../../asset/image/icons/logo-colored.png')}/>

            //             {/* <Text style={{fontSize:20,fontFamily:Fonts.Bold,color:'white'}}>sdfgtyh</Text> */}
            //         </View>
            //         <View style={styles.resetView}>
            //             <Text style={styles.mainheading}>Reset Password</Text>
            //             <Text style={styles.text}>We will send 4 digits code to your </Text>
            //             <Text style={styles.text}>email for the verification. </Text>
            //             <View style={{marginTop:hp(8.62)}}>
            //                 {/* <ComponentText label='Name' /> */}
            //             </View>
            //             <View>
            //                 <CustomButton />
            //             </View>
            //         </View>

            //     </View>
        )
    }
}
