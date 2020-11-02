import React, { Component } from 'react'
import { Text, View ,FlatList, Image,ScrollView,TouchableOpacity} from 'react-native'
import { widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Customimage extends Component {
    render() {
        var images=[
            {
                img:require('../../../asset/image/wallpapers/a.jpg')
            },
            {
                img:require('../../../asset/image/wallpapers/b.jpg')
            },
            {
                img:require('../../../asset/image/wallpapers/c.jpg')
            },
            {
                img:require('../../../asset/image/wallpapers/d.jpg')
            },
            {
                img:require('../../../asset/image/wallpapers/e.jpg')
            },
            {
                img:require('../../../asset/image/wallpapers/f.jpg')
            },
            {
                img:require('../../../asset/image/wallpapers/g.jpg')
            },
            {
                img:require('../../../asset/image/wallpapers/h.jpg')
            },
            {
                img:require('../../../asset/image/wallpapers/i.jpg')
            },
            {
                img:require('../../../asset/image/wallpapers/j.jpg')
            },
            {
                img:require('../../../asset/image/wallpapers/k.jpg')
            },
            {
                img:require('../../../asset/image/wallpapers/l.jpg')
            },
            {
                img:require('../../../asset/image/wallpapers/m.jpg')
            },
            {
                img:require('../../../asset/image/wallpapers/n.jpg')
            },
            {
                img:require('../../../asset/image/wallpapers/o.jpg')
            },
            {
                img:require('../../../asset/image/wallpapers/p.jpg')
            },
            {
                img:require('../../../asset/image/wallpapers/q.jpg')
            },
            {
                img:require('../../../asset/image/wallpapers/r.jpg')
            },
            {
                img:require('../../../asset/image/wallpapers/s.jpg')
            },
            {
                img:require('../../../asset/image/wallpapers/t.jpg')
            },
            {
                img:require('../../../asset/image/wallpapers/u.jpg')
            },
            {
                img:require('../../../asset/image/wallpapers/v.jpg')
            },
            {
                img:require('../../../asset/image/wallpapers/w.jpg')
            },
        

        ]
        return (
            <View style={{marginVertical:hp(2.46)}}>
            <ScrollView>
            <View  >
                <FlatList data={images}
                    style={{alignSelf:'center'}}
                    keyExtractor={(item,index)=>index}
                    numColumns={2}
                    renderItem={({item})=>{
                        return(
                            <View style={{marginHorizontal:wp(2),marginVertical:hp(1)}}>
                                <TouchableOpacity>
                                    <Image source={item.img}  style={{height:hp(36.95),width:wp(42.67),borderRadius:20,alignSelf:'center'}}></Image>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                >

                </FlatList>
                </View>
                </ScrollView>
            </View>
        )
    }
}
