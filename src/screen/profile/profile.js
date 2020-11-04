import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import styles from './profilestyle'
import { Icons } from '../../utils/icon'
import { Images } from '../../utils/image'
import Customimage from '../component/customimage'
import CustomProfile from './../component/customProfile'

// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default class profile extends Component {
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.mainview}>
                    <View style={{ marginTop: hp(6.40), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: wp(4) }}>
                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                            <Image source={Icons.combined} />
                        </TouchableOpacity>
                        <Text style={styles.text}>Profile</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Edit')}>
                            <Image source={Icons.edit}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: '#343434', marginTop: hp(1.85) }}></View>
                </View>
                <View >
                    <View style={{ height: hp(27.91), justifyContent: 'center', alignItems: 'center' }}>
                        <CustomProfile />
                    </View>
                    <View style={styles.textinput}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: wp(14.67) }}>
                            <Image source={Icons.user}></Image>
                        </View>
                        <View>
                            <Text style={{color:'#939393',marginTop:hp(1.5)}}>
                                John Doe
                            </Text>
                        </View>
                    </View>
                    <View style={styles.textinput}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: wp(14.67) }}>
                            <Image source={Icons.mail}></Image>
                        </View>
                        <View>
                            <Text  style={{color:'#939393',marginTop:hp(1.5)}}>
                                johndoe@gmail.com
                            </Text>
                        </View>
                    </View>
                    <View style={styles.textinput}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: wp(14.67) }}>
                            <Image source={Icons.call}></Image>
                        </View>
                        <View>
                            <Text style={{color:'#939393',marginTop:hp(1.5)}}>
                                1234567890
                            </Text>
                        </View>
                    </View>

                </View>
            </View>
        )
    }
}
