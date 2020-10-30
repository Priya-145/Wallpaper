import React, { Component } from 'react'
import { Text, View , Image} from 'react-native'
import {Images} from '../../utils/image'

export default class latestScreen extends Component {
    render() {
        return (
            <View>
                <View>
                    <Image source={Images.a}/>
                </View>
            </View>
        )
    }
}
