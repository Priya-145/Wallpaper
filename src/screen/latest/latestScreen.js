import React, { Component, useEffect } from 'react'
import { Text, View, Image, FlatList, ScrollView, TouchableOpacity, StatusBar, Dimensions, TextInput, StyleSheet } from 'react-native'
import { Images } from '../../utils/image'
import { Icons } from '../../utils/icon'
import { Fonts } from '../../utils/font';
import { StackActions } from '@react-navigation/native';
import Animated, { Easing } from 'react-native-reanimated'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Styles from './latestScreenStyle'
import Customimage from '../component/customimage'



const { Value, timing } = Animated

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height






var Name = [
    {
        name: 'Latest',
        isSelected: false
    },
    {
        name: 'Popular',
        isSelected: false
    },
    {
        name: 'Toplist',
        isSelected: false
    },
    {
        name: 'Lorem',
        isSelected: false
    },
    {
        name: 'Lorem',
        isSelected: false
    },
    {
        name: 'Ran',
        isSelected: false
    },

];
export default class latestScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isTouch: false,
            isFocused: false,
            keyword: ''
        }

        this.box = new Value(width)
        this.back = new Value(0)
        this.content = new Value(height)
        this.opacity = new Value(0)
    }

    isClick(index) {
        Name.forEach(element => {
            element.isSelected = false
        });
        Name[index].isSelected = true
        this.setState({})

    }
    _onFocus = () => {
            this.setState({isFocused:true})
            const box_config_x = {
                duration:200,
                toValue:0,
                easing: Easing.inOut(Easing.ease)
            }

            const button_opacity = {
                duration:200,
                toValue:1,
                easing: Easing.inOut(Easing.ease)
            }

            timing(this.box,box_config_x).start()
            timing(this.back, button_opacity).start()
         
    }

    onBlur = () => {
        this.setState({isFocused:false})
        const box_config_x = {
            duration:200,
            toValue:width,
            easing: Easing.inOut(Easing.ease)
        }

        const button_opacity = {
            duration:50,
            toValue:0,
            easing: Easing.inOut(Easing.ease)
        }

        timing(this.box,box_config_x).start()
        timing(this.back, button_opacity).start()

    }


    render() {



        return (
            <View style={{ backgroundColor: "#161616", height: '100%', width: "100%" }}>
                <StatusBar backgroundColor='#161616'></StatusBar>
                <View style={Styles.head}>


                    <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => this.props.navigation.openDrawer()}>
                        <Image source={Icons.combined} />
                    </TouchableOpacity>

                    <View style={Styles.headMid}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: 'white', fontFamily: Fonts.Medium, fontSize: hp(2.40), marginTop: hp(0.5) }}>
                                Wallpapers
                            </Text>
                            {/* <Image source={Icons.search} style={{alignSelf:"center"}}/> */}
                        </View>


                    </View>

                    <TouchableOpacity onPress={this._onFocus}>
                        <Image source={Icons.search} style={{ height: hp(2.3), width: wp(4), marginTop: hp(1) }}></Image>
                    </TouchableOpacity>
                    <Animated.View style={[Styles.input, { transform: [{ translateX: this.box }] }]}>
                        <Animated.View style={{ opacity: this.back }}>
                            <TouchableOpacity activeOpacity={1}
                                onPress={this.onBlur}
                                style={Styles.backicon}
                            >
                                <FontAwesome name='chevron-left' size={22} color='white'></FontAwesome>
                            </TouchableOpacity>
                        </Animated.View>
                        <TextInput ref='input'
                            placeholder='search wallpaper'
                            clearButtonMode='always'
                            value={this.state.keyword}
                            onChangeText={(value) => this.setState({ keyword: value })}
                            style={Styles._input}
                        ></TextInput>
                    </Animated.View>

                </View>


                <View style={{ borderWidth: 1, borderColor: '#343434', marginTop: hp(1.85) }}></View>

                <View >
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {
                            Name.map((item, index) => {
                                return (
                                    <View >
                                        <TouchableOpacity onPress={() => this.isClick(index)} style={{ flexDirection: 'row', backgroundColor:'#161616' }}>

                                            <Text style={{ color: 'white', fontSize: hp(1.97), marginHorizontal: 15,marginVertical:hp(1.5), fontFamily: item.isSelected ? Fonts.Bold : Fonts.Light }}>
                                                {item.name}
                                            </Text>

                                        </TouchableOpacity>
                                    </View>
                                )
                            })

                        }

                    </ScrollView>
                </View>
                <View style={{ marginTop: hp(2), height: hp(81.90) }}>
                    <Customimage onPress={() => this.props.navigation.navigate('Download')} />
                </View>

            </View>


        )
    }
}
