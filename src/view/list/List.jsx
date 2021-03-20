import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBar ,Icon } from 'antd-mobile';
import {withRouter} from 'react-router-dom'
import {ListWrap} from './StyledList'
import {ListContainer} from './StyledList'
class List extends Component {
  handleClickLeft=()=>{
    this.props.history.goBack()
  }
  handleClickList=(title)=>{
    return ()=>{
      this.props.history.push('/detail',{title})
    }
   
  }
  render() {
    console.log(this.props.list);
    return (
      <ListContainer>
      <NavBar
      mode="dark" 
      icon={<Icon type="left"/>}   
      onLeftClick={this.handleClickLeft} 
      style={{backgroundColor:"#ee742f"}}
      >{this.props.location.state.title}</NavBar>
        <ListWrap>
          {
            this.props.list.map((value,index)=>{
              return(
                <li key={index} onClick={this.handleClickList(value.name)}>
                  <div>
                    <img src={value.img} alt=""/>
                  </div>
                  <div>
                    <h1>{value.name}</h1>
                    <h2>{value.burdens}</h2>
                    <h3>{value.all_click}浏览{value.favorites}收藏</h3>
                  </div>
                </li>
              )
            })
          }
          
        </ListWrap>
      </ListContainer>
    );
  }
}

export default withRouter( connect(
  state =>({list:state.cookbook.list}),
{
  
}
  )(List))
