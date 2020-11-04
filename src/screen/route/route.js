import React, { Component } from 'react'
import {Image,TouchableOpacity,View} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomButton from '../component/customButton'
import Signup from '../signup/sign_up'
import ResetPassword from '../resetPassword/resetPassword'
import Signin from '../signin/sign_in'
import VerifyCode from '../verifycode/verifyCode'
import Profile from '../profile/profile'
import Edit from '../editprofile/edit'
import Latest from '../latest/latestScreen'
import Download from '../download/download'
import Favourite from '../favourite/favourites'
import Drw from '../drawer/drawer'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import { heightPercentageToDP as hp ,widthPercentageToDP as wp } from 'react-native-responsive-screen'


import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Icons } from '../../utils/icon'
import LinearGradient from 'react-native-linear-gradient'
import { Images } from '../../utils/image'


const drawer=createDrawerNavigator()
// const draw=()=>{
//     return(
           

//     )
// }

const Stack=createStackNavigator()
const Home = () =>{
    
    return(
        <NavigationContainer>
        <drawer.Navigator drawerContent={props => <Drw/>} drawerStyle={{borderTopEndRadius:60,borderBottomEndRadius:60,width:wp(70),height:'100%'}}>
                <drawer.Screen name="SignIn" component={Signin} options={{gestureEnabled:false}}/>
                {/* <drawer.Screen name="Signup" component={Signup} options={{headerShown:false}}/> */}
                <drawer.Screen name="ResetPassword" component={ResetPassword}/>
                <drawer.Screen name="VerifyCode" component={VerifyCode}/>
                <drawer.Screen name="Latest" component={App} />
                <drawer.Screen name="Download" component={Download} />
                <drawer.Screen name="Favourite" component={Favourite} />
                <drawer.Screen name="Edit" component={Edit} />

            </drawer.Navigator>
        </NavigationContainer>
    )
}

const tab=createBottomTabNavigator()

class App extends React.Component{
constructor()
    {
        super()
        this.state={
            isButton:false
        }
    }
    render() {
        return (

            <View style={{backgroundColor:'#161616',height:'100%'}}>

            
            <tab.Navigator   
             barStyle={{ backgroundColor: 'pink' }}
            initialRouteName={'Latest'}
            tabBarOptions={{style:{backgroundColor:'black',borderTopRightRadius:20,borderTopLeftRadius:20,borderTopColor:'#161616',},activeTintColor:'#00ffff',showLabel:false}} >
             <tab.Screen name="Favourite" component={Favourite}
            options={{
                
                tabBarIcon:({focused,color})=>(
                    // <Ionicons name='md-heart' size={30} color={color}/>
                    <Image source={focused? Icons.blueheart : Icons.heart}></Image>
                    
                )
                
            }}></tab.Screen>
            
            <tab.Screen name="Latest" component={Latest}
            options={{
                
                tabBarIcon:({focused,color})=>(
<Image source={focused? Icons.home : Icons.lighthome}></Image>                    
                )
                
            }}></tab.Screen>
           
            <tab.Screen name="Profile" component={Profile}
            options={{
                
                tabBarIcon:({focused,color})=>(
<Image source={focused? Icons.blueuser : Icons.circle}></Image>                    
                )
                
            }}></tab.Screen>
            {/* <tab.Screen name="Edit" component={Edit}
            options={{
                tabBarVisible:false,
                tabBarIcon:({color})=>(
                    <Ionicons name='md-person' size={30} color={color}/>
                    
                )
                
            }}></tab.Screen> */}
          
          
        </tab.Navigator>
        
        </View>
        )
    }
  
}
export default Home