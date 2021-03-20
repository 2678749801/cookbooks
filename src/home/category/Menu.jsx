import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {  getHomeMultidata} from '@/network/home'
import MenuList from '@c/menu/MenuList'
import {withRouter} from 'react-router-dom'
 class Menu extends Component {
  static propTypes={
    type:PropTypes.string
  }
  state={
    cate:null,
    type:'category',
    curCate:this.props.type === 'category' ? '热门': '肉类'
  }
  componentDidMount(){
    this.getDate()
    // console.log(hotCate);
  }
  static getDerivedStateFromProps(nextProps,preState){
    if (nextProps.type=== preState.type) {
     return null
    }else{
      return {
        curCate:nextProps.type=== 'category' ? '热门': '肉类',
        type:nextProps.type
      }
    }
    
  }
  getDate(){
    getHomeMultidata().then(res=>{
      this.setState({
        cate:res.category.data,
      })
    })
  }
  handleAside=(mainMenu)=>{
    return ()=>{
      this.setState({
        curCate:mainMenu
      })
    }
  }
  handleGotoList=(title)=>{
    return ()=>{
      this.props.history.push('/list' ,{title})
    }
  }
  render() {
    
    return (
      <MenuList 
      curCate={this.state.curCate}
      onAsideClick={this.handleAside} 
      handleGotoList={this.handleGotoList}
      cate={this.state.cate && this.state.cate[this.props.type]}/>
    )
  }
}
export default withRouter(Menu)