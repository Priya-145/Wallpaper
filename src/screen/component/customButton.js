import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import {Fonts} from '../../utils/font';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient'

export default class CustomButton extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity>
          <LinearGradient colors={['#00FFFF', '#009FB8']}
          start={{x: 0, y: 0}} end={{x: 1, y: 0}}
          style={{
            alignSelf: 'center',
            height: hp(7.02),
            width: wp(86.67),
            backgroundColor: 'red',
            marginTop: hp(13.67),
            borderRadius: 10,
            alignItems:'center',
            justifyContent:'center'
          }}>
          <Text
            style={{fontFamily: Fonts.Medium, fontSize: 18, color: 'white'}}>
            {this.props.name}
          </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}
