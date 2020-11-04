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
            // source={require('../../../asset/image/wallpapers/s.jpg')}
            source={this.props.source}
            style={{
              width: hp(14.32),
              height: hp(14.32),
              borderWidth: 4,
              borderColor: 'white',
              borderRadius: hp(14.32/2),
            }}
          />
        </View>
      
    );
  }
}
