import React, { Component,useEffect } from 'react'
import { Text, View, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { Images } from '../../utils/image'
import { Icons } from '../../utils/icon'
import { Fonts } from '../../utils/font';
import { StackActions } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Styles from './latestScreenStyle'
import Customimage from '../component/customimage'
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
            isTouch: false
        }
    }

    isClick(index) {
        Name.forEach(element => {
            element.isSelected = false
        });
        Name[index].isSelected = true
        this.setState({})

    }
    
render() {


    // useEffect(()=>{
    //     BackHandler.addEventListener('hardwareBackPress',()=>true)
    //     return()=>{
    //     BackHandler.addEventListener('hardwareBackPress',()=>true)
    
    //     }
    // },[])
    return (
        <View style={{ backgroundColor: "#161616", height: '100%', width: "100%" }}>
            <View style={Styles.head}>


                <TouchableOpacity style={{ alignSelf: 'center' }} onPress={() => this.props.navigation.openDrawer()}>
                    <Image source={Icons.combined} />
                </TouchableOpacity>

                <View style={Styles.headMid}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: wp(5.33) }}>
                        <Text style={{ color: 'white', fontFamily: Fonts.Regular, fontSize: 18 }}>
                            Wallpapers
                            </Text>
                        {/* <Image source={Icons.search} style={{alignSelf:"center"}}/> */}
                    </View>
                </View>

                <TouchableOpacity>
                    <Image source={Icons.search} style={{ height: hp(2), width: wp(4), marginTop: hp(1) }}></Image>
                </TouchableOpacity>
            </View>

            <View style={{ borderWidth: 1, borderColor: '#343434', marginTop: hp(1.85) }}></View>

            <View >
                <ScrollView horizontal={true}>
                    {
                        Name.map((item, index) => {
                            return (
                                <View >
                                    <TouchableOpacity onPress={() => this.isClick(index)} style={{ flexDirection: 'row' }}>

                                        <Text style={{ color: 'white', fontSize: hp(1.97), marginHorizontal: wp(6), marginVertical: hp(3.08), fontFamily: item.isSelected ? Fonts.Bold : Fonts.Regular, fontWeight: item.isSelected ? 'bold' : '100' }}>
                                            {item.name}
                                        </Text>

                                    </TouchableOpacity>
                                </View>
                            )
                        })

                    }

                </ScrollView>
            </View>
            <View>
                <Customimage onPress={() => this.props.navigation.navigate('Download')} />
            </View>

        </View>
    )
}
}
