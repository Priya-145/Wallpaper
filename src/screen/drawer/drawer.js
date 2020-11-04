import React, { Component } from 'react'
import { Text, View,FlatList, Image,TouchableOpacity,ScrollView } from 'react-native'
import CustomProfile from './../component/customProfile'
import { heightPercentageToDP as hp ,widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { Fonts } from '../../utils/font'
import { Images } from '../../utils/image'
import { Icons } from '../../utils/icon'
import { Ionicons } from 'react-native-vector-icons/Ionicons'



export default class drawer extends Component {

    

    render() {

        var datas=[
            {
                img:Icons.liked,
                name:'Liked Wallpapers',
            },
            {
                img:Icons.about,
                name:'About Us',
            },
            {
                img:Icons.privacy,
                name:'Privacy Policy',
            },
            {
                img:Icons.rate,
                name:'Rate Us',
            },
            {
                img:Icons.share,
                name:'Share App',
            },
            {
                img:Icons.logout,
                name:'Logout',
            },
        ]
        return (
            <View style={{height:'100%',width:'100%',backgroundColor:"transparent"}}>
            
                <View style={{height:'100%',width:wp(70),backgroundColor:"#161616",borderTopRightRadius:40,borderBottomRightRadius:40}}>
                {/* <ScrollView> */}
                    <View style={{marginTop:hp(8.62),alignSelf:"center"}}>
                        <CustomProfile/>
                        <Text style={{color:'white',fontSize:hp(1.72),marginTop:hp(1.23),fontFamily:Fonts.Medium,alignSelf:'center'}}>Wallpaper App </Text>
                    </View>
                    <View style={{borderWidth:0.5,width:wp(61.13),borderColor:'rgba(224,244,244,0.2)',marginTop:hp(4.93),marginLeft:wp(4)}}></View>
                    <View style={{marginTop:hp(3.31),marginLeft:wp(6.67)}}>
                        <FlatList data={datas}
                            keyExtractor={(item, index) => index}
                            renderItem={({item}) => {
                                return (
                                    <View >
                                      <TouchableOpacity style={{flexDirection:'row',marginVertical:hp(1.50)}}>
                                             <Image source={item.img}  />
                                      
                                             <Text style={{fontSize:hp(1.84),color:'white',fontFamily:Fonts.Regular,marginLeft:wp(2.67),alignSelf:"center"}}>{item.name}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }}
                        />
                    </View>
                    <View style={{alignSelf:'center',justifyContent:'flex-end',bottom:0,marginBottom:45,position:'absolute'}}>
                        <Text style={{color:'#817876',fontSize:hp(1.47),fontFamily:Fonts.Regular}}>Version : 1.2.7</Text>
                    </View>
                    {/* </ScrollView>   */}
                </View>  
                           
            </View>
        )
    }
}
