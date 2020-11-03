import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
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

            <View style={{ height: hp(100), width: wp(100), backgroundColor: '#161616' }}>
                <View style={styles.flex1}>
                    <Image source={require('./../../../asset/image/icons/logo-colored.png')}></Image>
                </View>

                <ScrollView>

                    <View style={styles.flex2}>
                        <Text style={styles.text1}>SIGN IN</Text>
                        <Text style={styles.text2}>Sign in to Continue</Text>

                        <View>
                            <TouchableOpacity style={styles.button1}>
                                <View style={{ flexDirection: 'row' }}>
                                     <Image source={Icons.search} style={{marginTop:hp(1.97),marginLeft:wp(10.66)}}></Image>
                                     <Text style={styles.text3}>Sign in with Google</Text>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.button2}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={Icons.facebook} style={{marginTop:hp(1.97),marginLeft:wp(10.66)}}></Image>
                                    <Text style={styles.text4}>Sign in with Facebook</Text>
                                </View>
                            </TouchableOpacity>


                        </View>
                    </View>

                </ScrollView>

            </View>



        )
    }
}









































































































