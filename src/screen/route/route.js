import React, { Component } from 'react'
import {Image,TouchableOpacity,View} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomButton from '../component/customButton'
import Signup from '../signup/sign_up'
import ResetPassword from '../resetPassword/resetPassword'
import Signin from '../signin/sign_in'
import VerifyCode from '../verifycode/verifyCode'
import Latest from '../latest/latestScreen'
import Download from '../download/download'
import Favourite from '../favourite/favourites'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Icons } from '../../utils/icon'
import LinearGradient from 'react-native-linear-gradient'
const Stack=createStackNavigator()
const Home = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SignIn" component={Signin} options={{headerShown:false}}/>
                <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
                <Stack.Screen name="ResetPassword" component={ResetPassword} options={{headerShown:false}}/>
                <Stack.Screen name="VerifyCode" component={VerifyCode} options={{headerShown:false}}/>
                {/* <Stack.Screen name="InPut" component={InPut}/> */}
                <Stack.Screen name="Latest" component={App} options={{headerShown:false}}/>
                <Stack.Screen name="Download" component={Download} options={{headerShown:false}}/>
                <Stack.Screen name="Favourite" component={Favourite} options={{headerShown:false}}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

const tab=createBottomTabNavigator()

class App extends React.Component{
    constructor(){
        super()
        this.state={
            isImage:false
        }
    }
    render() {
        return (

            <View style={{backgroundColor:'#161616',height:'100%'}}>

            
            <tab.Navigator   
             barStyle={{ backgroundColor: 'pink' }}
            
            tabBarOptions={{style:{backgroundColor:'black',borderTopRightRadius:20,borderTopLeftRadius:20,borderTopColor:'#161616',},activeTintColor:'#00ffff',showLabel:false}} >
            <tab.Screen name="Latest" component={Latest}
            options={{
                
                tabBarIcon:({color})=>(
                    <Ionicons name='md-heart' size={30} color={color}/>
                    
                )
                
            }}></tab.Screen>
            <tab.Screen name="Favourite" component={Favourite}
            options={{
                
                tabBarIcon:({color})=>(
                    <Ionicons name='md-home' size={30} color={color}/>
                    
                )
                
            }}></tab.Screen>
            <tab.Screen name="btn" component={CustomButton}
            options={{
                
                tabBarIcon:({color})=>(
                    <Ionicons name='md-person' size={30} color={color}/>
                    
                )
                
            }}></tab.Screen>
          
          
        </tab.Navigator>
        
        </View>
        )
    }
  
}
export default Home