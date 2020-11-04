import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image,} from 'react-native'
import styles from './editstyle'
import { Icons } from '../../utils/icon'
import ComponentText from '../component/customInput'
import CustomButton from '../component/customButton'
import ImagePicker from 'react-native-image-picker';
// import { Images } from '../../utils/image'
// import Customimage from '../component/customimage'
import CustomProfile from './../component/customProfile'

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default class profile extends Component {

    constructor(){
        super()
        this.state={
            avatarSource:''
        }
    }

    onClick=()=>{
        const options = {
            title: 'Select Avatar',
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
           
        
          ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
           
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
     
              this.setState({
                avatarSource: source,
              });
            }
          });
    }

    render() {
        return (
            <View style={styles.main}>
                <View style={styles.mainview}>
                    <View style={styles.profileview}>
                        <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
                            <Image source={Icons.combined}style={{marginLeft:wp(5.33)}} />
                        </TouchableOpacity>
                        <Text style={styles.text}>Profile</Text>

                    </View>
                    <View style={{ borderWidth: 1, borderColor: '#343434', marginTop: hp(1.85) }}></View>
                </View>
                <View >
                    <View style={{height:hp(23.70),justifyContent:'center',alignItems:'center',marginTop:hp(2)}}>
                        <View> 

                            <CustomProfile source={this.state.avatarSource} />
                        
                                <TouchableOpacity  style={{position:'absolute',right:0,bottom:0}} onPress={()=>this.onClick()}>                       
                                    <Image source={Icons.camera} />
                                </TouchableOpacity>
                          
                        </View>
                    </View>
                    <View style={styles.textinput}>
                        <ComponentText label='Name' ></ComponentText>
                        <Image source={Icons.user} style={{ marginTop: hp(2) }} ></Image>
                    </View>
                    <View style={styles.textinput}>
                        <ComponentText label='E-mail' ></ComponentText>
                        <Image source={Icons.mail} style={{ marginTop: hp(2) }} ></Image>
                    </View>
                    <View style={styles.textinput}>
                        <ComponentText label='Phone No.' ></ComponentText>
                        <Image source={Icons.call} style={{ marginTop: hp(2) }} ></Image>
                    </View>
                    <View style={{marginTop:hp(8)}}>
                                <CustomButton name='Save'/>
                            </View>
                            
                </View>
            </View>



        )
    }
}
