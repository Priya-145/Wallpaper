import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class CustomProfile extends Component {
  render() {
    return (
     
        <View>
          <Image
            source={require('../../../asset/image/wallpapers/s.jpg')}
            style={{
              width: wp(26.67),
              height: hp(14.32),
              borderWidth: 4,
              borderColor: 'white',
              borderRadius: 100,
            }}
          />
        </View>
      
    );
  }
}
