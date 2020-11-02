import Signup from './src/screen/signup/sign_up'
import { Text, View } from 'react-native'
import ResetPassword from './src/screen/resetPassword/resetPassword'
import Signin from '../signin'
import VerifyCode from './src/screen/verifycode/verifyCode'
import InPut from './src/screen/component/customInput'
import Latest from './src/screen/latest/latestScreen'
import Download from './src/screen/download/download'
import Favourite from './src/screen/favourite/favourites'
import {NavigationContainer, StackActions, TabActions} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Home = () =>{
    return(
<NavigationContainer>
    <StackActions>
        <Stack.Screen name="Signup" Component={Signup}/>
        <Stack.Screen name="ResetPassword" Component={ResetPassword}/>
        <Stack.Screen name="VerifyCode" Component={VerifyCode}/>
        <Stack.Screen name="InPut" Component={InPut}/>
        <Stack.Screen name="Latest" Component={Latest}/>
        <Stack.Screen name="Download" Component={Download}/>
        <Stack.Screen name="Favourite" Component={Favourite}/>
        <Stack.Screen name="Signin" Component={Signin}/>
        <Stack.Screen name="" Component={App}/>



    </StackActions>
</NavigationContainer>
    )
}
const App = () =>{
    return(
{/* <NavigationContainer>
    <TabActions>
        <TabActions.Screen name="" Component={}></TabActions.Screen>
        <TabActions.Screen name="" Component={}></TabActions.Screen>
        <TabActions.Screen name="" Component={}></TabActions.Screen>
    </TabActions>
</NavigationContainer> */}

    )
}
export default Home