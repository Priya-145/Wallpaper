import React, { Component } from 'react'
import Route from './src/screen/route/route'
// import Signup from './src/screen/signup/sign_up'
// import { Text, View } from 'react-native'
import Signin from './src/screen/signin/sign_in'

// import TextComponet from './src/screen/resetPassword/resetPassword'
// import Page from './src/screen/resetPassword/resetPassword'
// import Page from './src/screen/verifycode/verifyCode'
// import In from './src/screen/component/customInput'
// import Page from './src/screen/resetPassword/resetPassword'
import In from './src/screen/component/customProfile'
// import Page from './src/screen/resetPassword/resetPassword'
import Page from './src/screen/drawer/drawer'

// import Page from './src/screen/latest/latestScreen'
import Download from './src/screen/download/download'
import Favourite from './src/screen/favourite/favourites'
// import In from './src/screen/component/customInput'
// import Page from './src/screen/resetPassword/resetPassword'
// import In from './src/screen/component/customInput'
// import Page from './src/screen/resetPassword/resetPassword'
// import Page from './src/screen/latest/latestScreen'
// import Download from './src/screen/download/download'
// import Favourite from './src/screen/favourite/favourites'

export default class App extends Component {
  render() {
    return (
      //  <Signup/>
      
      //  <Signin/>
    
      // <TextComponet/>

  //   </View>
      // <Page/>
      // <Page/>
      // {/* <In/>  */}
      // <Download/>
      //  <Favourite />
      <Route/>
    )
  }
}
