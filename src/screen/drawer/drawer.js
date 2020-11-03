import React, { Component } from 'react'
import { Text, View,FlatList, Image } from 'react-native'
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
                img:Icons.logo,
                name:'Liked Wallpapers',
            },
            {
                img:Icons.logo,
                name:'Liked wallpapers',
            },
            {
                img:Icons.logo,
                name:'Liked wallpapers',
            },
            {
                img:Icons.logo,
                name:'Liked wallpapers',
            },
            {
                img:Icons.logo,
                name:'Liked wallpapers',
            },
            {
                img:Icons.logo,
                name:'Liked wallpapers',
            },
        ]
        return (
            <View style={{height:'100%',width:'100%',backgroundColor:"black"}}>
                <View style={{height:'100%',width:wp(69.33),backgroundColor:"#161616",borderTopRightRadius:40,borderBottomRightRadius:40}}>
                    <View style={{marginTop:hp(8.62),alignSelf:"center"}}>
                        <CustomProfile/>
                        <Text style={{color:'white',fontSize:hp(1.72),marginTop:hp(1.23),fontFamily:Fonts.Medium,alignSelf:'center'}}>Wallpaper App </Text>
                    </View>
                    <View style={{borderWidth:0.5,width:wp(61.13),borderColor:'#E0E0E0',marginTop:hp(4.93),marginLeft:wp(4)}}></View>
                    <View style={{marginTop:hp(4.31),marginLeft:wp(6.67)}}>
                        <FlatList data={datas}
                            keyExtractor={(item, index) => index}
                            renderItem={({item}) => {
                                return (
                                    <View style={{flexDirection:'row',marginVertical:hp(3.08)}}>
                                        <Image source={item.img} style={{height:hp(3.69),width:wp(8)}} />
                                        <Text style={{fontSize:hp(1.84),color:'white',fontFamily:Fonts.Regular,marginLeft:wp(2.67),alignSelf:'center'}}>{item.name}</Text>
                                    </View>
                                )
                            }}
                        />
                    </View>
                </View>                
            </View>
        )
    }
}
