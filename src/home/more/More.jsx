import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Switch ,NavBar } from 'antd-mobile';
import {MoreWrap,NavWrap} from './StyledMore'
import {change_switch} from '../../store/actions/home'
class More extends Component {
  state={
    checked:true
  }

  render() {
    return (
      <NavWrap>
      <NavBar
      mode="dark"     
    >更多</NavBar>
    <MoreWrap>

    <span>显示地图</span>
    <Switch
    checked={this.props.checked}
    onChange={this.props.change_switch}
    />
    </MoreWrap>
      </NavWrap>
    )
  }
}
export default connect(
  state =>({checked:state.home.checked}),
{
  change_switch,
  
}
  )(More)
