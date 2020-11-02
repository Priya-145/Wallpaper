import React, { Component } from 'react'
import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native'
import styles from './f_style'
import { Icons } from '../../utils/icon'
import Customimage from '../component/customimage'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'


export default class favourites extends Component {
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.mainview}>
                    <View style={{ marginTop: hp(6.40), flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <Image source={Icons.combined} style={{ marginLeft: wp(5.33) }} />
                        </TouchableOpacity>
                        <Text style={styles.text}>Favourite</Text>
                       
                    </View>
                    <View style={{borderWidth:1,borderColor:'#343434',marginTop:hp(1.85)}}></View>
                </View>
                <View style={{backgroundColor:'#161616'}}>
                <Customimage/>
                </View>
                <View style={styles.bottom}>

                    <Image source={Icons.blueheart} style={styles.blueheart}></Image>
                    <TouchableOpacity>
                        <Image source={Icons.lighthome} style={styles.home}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={Icons.circle} style={styles.circle}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
