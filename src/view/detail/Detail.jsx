import React, { Component } from 'react'
import { NavBar ,Icon } from 'antd-mobile'
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'
import { DetailWrap } from "./styledDetail";
 class Detail extends Component {
  handleClickLeft=()=>{
    this.props.history.goBack()
  }
  render() {
    let {title} =this.props.location.state.title
    return (
      <DetailWrap>
      <NavBar
      mode="dark" 
      icon={<Icon type="left"/>}   
      onLeftClick={this.handleClickLeft} 
      style={{backgroundColor:"#ee742f"}}
      >{this.props.location.state.title}</NavBar>
      <div>
        <div>
          <img src="" alt=""/>
        </div>
        <div className="details">
          <h1>{title}</h1>
          <h3>3333浏览？？收藏</h3>
          <button>收藏</button>
        </div>
      </div>
      </DetailWrap>
    )
  }
}
export default withRouter( connect(
  state =>({}),
{
  
}
  )(Detail))
