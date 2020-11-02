import React, {Component} from 'react';
import {Text, View,TouchableOpacity,Image} from 'react-native';
import {Fonts} from '../../utils/font';
import { Images } from '../../utils/image'
import { Icons } from '../../utils/icon'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient'

export default class Downloadbutton extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity>
          <LinearGradient colors={['#00FFFF', '#009FB8']}
          start={{x: 0, y: 0}} end={{x: 1, y: 0}}
          style={{
            flexDirection:'row',
            alignSelf: 'center',
            height: hp(6.16),
            width: wp(46.67),
            backgroundColor: 'red',
            // marginTop:hp(8),
            borderRadius: 10,
            alignItems:'center',
            justifyContent:'center',
           
          }}>
          <Image source={Icons.download} style={{marginRight:wp(2.66)}}></Image>
          <View>
          <Text
            style={{fontFamily: Fonts.Medium, fontSize: hp(2.22),color: 'white',}}>
            {this.props.name}
          </Text>
          </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}
