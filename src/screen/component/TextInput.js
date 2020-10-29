import React, { Component } from 'react'
import { Text, View,TextInput } from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';

export default class componentText extends Component {
    render() {
        return (
            <View style={{borderBottomWidth:3,borderBottomColor:'red'}}>
                <TextInput
                    placeholder='name'
                />
                <Sae
                label={'Email Address'}
                labelStyle={{color:"#707070"}}
                // inputStyle={{borderBottomWidth:3,borderBottomColor:'red',height:50}}
                inputPadding={16}
                labelHeight={30}
                borderHeight={0}
                
                autoCapitalize={'none'}
                autoCorrect={false}
            />

            </View>
        )
    }
}
