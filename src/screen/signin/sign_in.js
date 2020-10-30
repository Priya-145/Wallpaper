import React, { Component } from 'react'
import { Text, View ,TouchableOpacity,Image} from 'react-native'
import styles from './signin_style'

export default class sign_in extends Component {
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.flex1}>
                    <Image source={require('./../../../asset/image/icons/logo-colored.png')} style={styles.logo}></Image>
                </View>
                <View style={styles.flex2}>
                    <Text style={styles.text1}>SIGN IN</Text>
                    <Text style={styles.text2}>Sign in to Continue</Text>
                  
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text5}>Sign in</Text>
                    </TouchableOpacity>
                    <View style={styles.text3}>
                    <Text style={styles.text6}>Don't have an account?</Text>
                    <TouchableOpacity style={styles.text4}>
                        <Text style={styles.text7}>Signup</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
