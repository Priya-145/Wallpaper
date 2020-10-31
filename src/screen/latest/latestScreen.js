import React, { Component } from 'react'
import { Text, View , Image,FlatList,ScrollView} from 'react-native'
import {Images} from '../../utils/image'
import {Icons} from '../../utils/icon'
import {Fonts} from '../../utils/font';
import { widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Styles from './latestScreenStyle'

export default class latestScreen extends Component {

    render() {

        var Name = [
            'Latest',
            'Popular',
            'Toplist',
            'Lorem',
            'Lorem',
            'Ran',
 
        ];

        return (
            <View style={{backgroundColor:"#161616",height:'100%',width:"100%"}}>
                <View style={Styles.head}>
     
                    <Image source={Icons.combined} style={{height:hp(1.72),width:wp(5.33)}}/>
                   
                
                    <View style={Styles.headMid}>
                        <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:wp(5.33)}}>
                            <Text style={{color:'#868686',fontFamily:Fonts.Light,fontSize:hp(1.97)}}>
                                Search
                            </Text>
                            <Image source={Icons.search} style={{alignSelf:"center"}}/>
                        </View>
                    </View>

                    
                    <Image source={Images.b} style={{height:hp(3.69),width:wp(8)}}/>
                    
                </View>

                <View style={{borderWidth:1,borderColor:'#343434',marginTop:hp(1.85)}}></View>

                <View style={{flexDirection:'row'}}>
                    <ScrollView horizontal={true}>
                    
                        {/* Name.map((item,index)=>vindex) */}
                         <View >
                                <Text style={{color:'white'}}> {item} </Text>
                        </View>
                         
                         
                    
                        
                    </ScrollView>
                </View>

            </View>
        )
    }
}
