import React, { Component } from 'react'
import { Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'

// import AnimatedInput from "react-native-animated-input";

import styles from './signup_style'

export default class sign_up extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: ''
        }
    }
    render() {
        return (

            <View style={{ backgroundColor: '#161616' }}>

                <View style={styles.main}>
                    <Image source={require('./../../../asset/image/icons/logo-colored.png')}></Image>

                </View>

                <View style={styles.head}>
                    <ScrollView>
                        <Text style={styles.txt}>SIGN UP</Text>
                        <Text style={styles.txt1}>Sign up to Continue</Text>
                        {/* <View>
                    <AnimatedInput placeholder="Name"  errorText='error' style={{backgroundColor:'white',borderBottomWidth:10}} value={this.state.email} styleLabel={{fontWeight: "600"}} styleBodyContent={{borderBottomWidth:1.5}}></AnimatedInput>
                </View> */}
                        <View>
                            <TouchableOpacity style={styles.btn}>
                                <Image source={require('./../../../asset/image/icons/base.png')}></Image>

                            </TouchableOpacity>
                            <Text style={styles.txt}>Sign up</Text>
                        </View>

                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'center' }}>
                            <Text style={styles.txt2}>Already have an account? </Text>
                            <TouchableOpacity >
                                <Text style={styles.txt3}>
                                    Signin
                                </Text>

                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>

        )
    }
}
