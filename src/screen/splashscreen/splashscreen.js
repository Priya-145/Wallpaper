import React, {useEffect}  from 'react'
import { Text, View,Image,StatusBar } from 'react-native'
import { Icons } from '../../utils/icon'
import { Images } from '../../utils/image'
// import { NavigationContainer } from '@react-navigation/native'


const Splash =({navigation})=>
{
    useEffect(()=>
    {
    
            setTimeout(()=>{
           
            navigation.navigate('SignIn')
            // )
        },4000)
        
    },[])

    return(
       <View style={{flex :1,justifyContent:"center",alignItems:"center",backgroundColor:'#131313'}}>
           <StatusBar backgroundColor='#131313'/>
          <View>
         <Image source={Icons.logo} ></Image>
         </View>
     
       </View>
    )
}
export default Splash