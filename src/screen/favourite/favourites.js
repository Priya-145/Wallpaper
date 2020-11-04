import React, { Component } from 'react'
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity ,StatusBar} from 'react-native'
import styles from './f_style'
import { Icons } from '../../utils/icon'
import { Images } from '../../utils/image'
import Customimage from '../component/customimage'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


export default class favourites extends Component {
    render() {
        return (
            <View style={styles.main}>
            <StatusBar backgroundColor='#161616'></StatusBar>
                <View style={styles.mainview}>
                    <View style={{ marginTop: hp(3), flexDirection: 'row',justifyContent:'space-between' ,alignItems:'center',width: wp(60)}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}> 
                            <Image source={Icons.combined} style={{marginLeft:wp(5.33)}}/>
                        </TouchableOpacity>
                        <Text style={styles.text}>Favourite</Text>
                       {/* <Image source={Images.a} style={{width:wp(8),height:hp(3.69),borderRadius:60}}></Image> */}
                    </View>
                    <View style={{borderWidth:1,borderColor:'#343434',marginTop:hp(1.85)}}></View>
                </View>
                
                <View style={{backgroundColor:'#161616'}}>
                <View style={{marginTop:hp(2),height:hp(83.80)}}>
                     <Customimage/>
                </View>
                </View>
{/*                
                <View style={styles.bottom}>
                
                    <Image source={Icons.blueheart} style={styles.blueheart}></Image>
                    <TouchableOpacity>
                        <Image source={Icons.lighthome} style={styles.home}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={Icons.circle} style={styles.circle}/>
                    </TouchableOpacity>
                </View> */}
            </View>
        )
    }
}
