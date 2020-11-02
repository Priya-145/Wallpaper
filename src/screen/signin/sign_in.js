import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, ScrollView} from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
// import { Sae } from 'react-native-textinput-effects';
import ComponentText from '../component/customInput'
import CustomButton from '../component/customButton'
// import LinearGradient from 'react-native-linear-gradient'
import styles from './signin_style'
import { Icons } from '../../utils/icon';
// import {} from 'react-native-keyboard-aware-scroll-view'


export default class sign_in extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         email: ''
    //     }
    // }
    render() {
        return (

            <View style={{ backgroundColor: '#161616' }}>

                <View style={styles.flex1}>
                    <Image source={require('./../../../asset/image/icons/logo-colored.png')}></Image>

                </View>
                <View style={styles.flex2}>


                    <ScrollView>
                     
                            <Text style={styles.text1}>SIGN IN</Text>
                            <Text style={styles.text2}>Sign in to Continue</Text>

                            <View style={styles.textinput1}>
                                <ComponentText label='E-mail'/>
                                    <Image source={Icons.mail} style={{marginTop:hp(3)}}></Image>
                              
                            </View>
                            <View style={styles.textinput2}>
                                <ComponentText label='Password'  />
                                <Image source={Icons.lock} style={{marginTop:hp(3)}}></Image>
                            </View>
                            <TouchableOpacity>
                                <Text style={styles.forgot}>Forgot Password?</Text>
                            </TouchableOpacity>
                            <View style={{marginTop:hp(7.38)}}>
                                <CustomButton name="Sign IN" />
                            </View>
                            <View style={styles.bottom}>
                                <Text style={styles.text3}>Don't have an account? </Text>
                                <TouchableOpacity >
                                    <Text style={styles.text4}>
                                        Signup
                                </Text>
                                </TouchableOpacity>
                            </View>
                   
                    </ScrollView>

                </View>

            </View>


        )
    }
}









































































































