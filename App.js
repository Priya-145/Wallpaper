import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Signin from './src/screen/signin/sign_in'
// import TextComponet from './src/screen/resetPassword/resetPassword'

export default class App extends Component {
  render() {
    return (
      
       <Signin/>
     
      // <TextComponet/>
// import Page from './src/screen/resetPassword/resetPassword'
import Page from './src/screen/verifycode/verifyCode'
import In from './src/screen/component/customInput'
// import Page from './src/screen/resetPassword/resetPassword'
export default class App extends Component {
  render() {
    return (
      <Page/>
    // <In/> 
    )
  }
}
