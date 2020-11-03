import React, { Component } from 'react'
import { Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import styles from './download_style'
import { Images } from '../../utils/image'
import { Icons } from '../../utils/icon'
import Icon from 'react-native-vector-icons/Ionicons'
import downloadbutton from '../download/downloadbutton'
// import CustomButton from '../component/customButton'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import Downloadbutton from '../download/downloadbutton'
import { color } from 'react-native-reanimated'

export default class download extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            isColour:false
        }
    }
    
    render() {
        return (
            <View style={{height:'100%',width:'100%'}}>
                <ImageBackground source={Images.i} style={styles.background}>
                    {/* <ScrollView> */}
                    <View style={styles.top}>
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Image source={Icons.back} style={styles.arrow}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Image source={Icons.more} style={styles.more}></Image>
                        </TouchableOpacity>
                        {/* <View><Icon name="ellipsis-vertical-outline" style={{ height: hp(20), width: wp(20), flexDirection: 'row-reverse' }}></Icon></View> */}

                    </View>


                    <View style={{ flexDirection: 'row', marginTop: hp(80.92),marginBottom:hp(4.93) }}>
                        <TouchableOpacity onPress={()=>this.setState({isColour:!this.state.isColour})} >
                            <Image source={Icons.favourite}  style={this.state.isColour ? {tintColor:'#00FFFF', marginRight: wp(4), marginLeft: wp(9.34)}:{tintColor:'white', marginRight: wp(4), marginLeft: wp(9.34)}} ></Image>
                        </TouchableOpacity>
                        
                            <Downloadbutton name='Download' Icons={this.props.download} style={{ marginTop: hp(88.92), marginBottom: hp(4.93) }}></Downloadbutton>
                        
                        <TouchableOpacity>
                        <Image source={Icons.group} style={{ marginLeft: wp(4) }}></Image>
                        </TouchableOpacity>
                    </View>
          </ImageBackground>

            </View>

        )
    }
}
