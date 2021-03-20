import React, { Component } from 'react'

import Home from './home/Home'
import List from './view/list/List'
import Detail from './view/detail/Detail'
import {Switch,Route,Redirect} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (

      <Switch>
      <Route path="/home" component={Home}></Route>
      <Route path="/list" component={List}></Route>
      <Route path="/detail" component={Detail}></Route>
      <Redirect from='/' to="/home"/>
      </Switch>
 
    

    )
  }
}
