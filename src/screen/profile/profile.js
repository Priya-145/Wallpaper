import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import styles from './profilestyle'
import { Icons } from '../../utils/icon'
import { Images } from '../../utils/image'
import Customimage from '../component/customimage'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'

export default class profile extends Component {
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.mainview}>
                    <View style={{ marginTop: hp(6.40), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: wp(4) }}>
                        <TouchableOpacity>
                            <Image source={Icons.combined} />
                        </TouchableOpacity>
                        <Text style={styles.text}>Profile</Text>
                        <TouchableOpacity>
                            <Image source={Icons.edit}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderWidth: 1, borderColor: '#343434', marginTop: hp(1.85) }}></View>
                </View>
                <View style={{marginTop:hp(27.91)}}>
                    <View style={styles.textinput}>
                        <View style={{ justifyContent: 'center', alignItems: 'center',width:wp(14.67) }}>
                            <Image source={Icons.user}></Image>
                        </View>
                        <View>
                            <TextInput
                                placeholder='name'
                                placeholderTextColor='#939393'
                            >

                            </TextInput>
                        </View>
                    </View>
                    <View style={styles.textinput}>
                        <View style={{ justifyContent: 'center', alignItems: 'center',width:wp(14.67) }}>
                            <Image source={Icons.mail}></Image>
                        </View>
                        <View>
                            <TextInput
                                placeholder='xyz@gmail.com'
                                placeholderTextColor='#939393'
                                
                            >

                            </TextInput>
                        </View>
                    </View>
                    <View style={styles.textinput}>
                        <View style={{ justifyContent: 'center', alignItems: 'center',width:wp(14.67) }}>
                            <Image source={Icons.call}></Image>
                        </View>
                        <View>
                            <TextInput
                                placeholder='1234567890'
                                placeholderTextColor='#939393'
                            >

                            </TextInput>
                        </View>
                    </View>

                </View>
            </View>
        )
    }
}
