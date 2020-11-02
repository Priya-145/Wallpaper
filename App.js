import React, { Component } from 'react'

import Signup from './src/screen/signup/sign_up'
import { Text, View } from 'react-native'
// import Page from './src/screen/resetPassword/resetPassword'
// import Page from './src/screen/verifycode/verifyCode'
import In from './src/screen/component/customInput'
// import Page from './src/screen/resetPassword/resetPassword'
// import Page from './src/screen/latest/latestScreen'
import Download from './src/screen/download/download'
import Favourite from './src/screen/favourite/favourites'

export default class App extends Component {
  render() {
    return (
       <Signup/>
      // <Page/>
      // <In/> 
      // <Download/>
      // <Favourite />
    )
  }
}
