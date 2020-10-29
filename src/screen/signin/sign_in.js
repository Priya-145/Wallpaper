import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './signin_style'

export default class sign_in extends Component {
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.flex1}>
                    <Text>sdfgh</Text>
                </View>
                <View style={styles.flex2}>
                    <Text style={styles.text1}>SIGN IN</Text>
                    <Text style={styles.text2}>Sign in to Continue</Text>
                </View>
            </View>
        )
    }
}
