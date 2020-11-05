import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image,} from 'react-native'
import styles from './editstyle'
import { Icons } from '../../utils/icon'
import ComponentText from '../component/customInput'
import CustomButton from '../component/customButton'
import ImagePicker from 'react-native-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import { Images } from '../../utils/image'
// import Customimage from '../component/customimage'
import CustomProfile from './../component/customProfile'
import Profilephoto from './../profilephoto/profilephoto'

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default class profile extends Component {

    constructor(){
        super()
        this.state={
            avatarSource:'',
            userName:'',
            userPhone:'',
            userEmail:'',
            isUser:true
        }
    }

    validate = (text,text1,text2) => {
        // console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let reg1 = /^[a-zA-Z]+$/;
        let reg2 = /^[0]?[789]\d{9}$/;


        if (!this.state.userEmail || !this.state.userName || !this.state.userPhone ) {
            alert("Please fill all fields");
            
            return ;
          }
        else if (reg.test(text) === false ) {
          alert("Email is Not Correct");
          return false;
        }
        else if (reg1.test(text1) === false ) {
          alert("name is Not Correct");
          return false;
        }
        else if (reg2.test(text2) === false ) {
          alert("number is Not Correct");
          return false;
        }
        else {
          alert("done");
          return true;
        }
       
        
      }
      
     
    
    onCheck=()=>{
        const {userName,userEmail,userPhone}=this.state
        const emails=this.validate(userEmail,userName,userPhone)
        


        var self=this
        if (!emails) {
            // alert('Please fill name');
            return;
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
                <KeyboardAwareScrollView >
                <View >
                
                    <View style={{height:hp(23.70),justifyContent:'center',alignItems:'center',marginTop:hp(2)}}>
                        <View> 

                            <CustomProfile source={this.state.avatarSource} />
                        
                        {/* {Profilephoto.Profilephoto=this.state.avatarSource} */}


                                <TouchableOpacity  style={{position:'absolute',right:0,bottom:0}} onPress={()=>this.onClick()}>                       
                                    <Image source={Icons.camera} />
                                </TouchableOpacity>
                          
                        </View>
                    </View>
                   
                    <View style={styles.textinput}>
                        <ComponentText label='Name' onChangeText={(userName) => this.setState({userName})}></ComponentText>
                        <Image source={Icons.user} style={{ marginTop: hp(2) }} ></Image>
                    </View>
                    <View style={styles.textinput}>
                        <ComponentText label='E-mail' onChangeText={(userEmail) => this.setState({userEmail})} ></ComponentText>
                        <Image source={Icons.mail} style={{ marginTop: hp(2) }} ></Image>
                    </View>
                    {/* <Text style={{color:'red',fontSize:10,marginLeft:wp(3)}}>{this.state.isUser}fghj</Text> */}
                    <View style={styles.textinput}>
                        <ComponentText label='Phone No.' keyboardType={'numeric'} maxLength={10} onChangeText={(userPhone) => this.setState({userPhone})}></ComponentText>
                        <Image source={Icons.call} style={{ marginTop: hp(2) }} ></Image>
                    </View>
                    <View style={{marginTop:hp(8)}}>
                                <CustomButton name='Save' onPress={()=>this.onCheck()}/>
                            </View>
               
                            
                </View>
                </KeyboardAwareScrollView>
            </View>



        )
    }
}
