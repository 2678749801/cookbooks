import React, { Component } from 'react'
import { connect } from 'react-redux';
import {Container} from './StyledCategory'
import Search from '@c/search/Search'
import Menu from './Menu'
import {withRouter} from 'react-router-dom'
import {change_cateType} from '../../store/actions/category'
 class Category extends Component {
   state={
    //  tabIndex:0,
     curCate:'热门',

   }

   handleClick=(type)=>{
    return ()=>{
      // this.setState({
      //   tabIndex:index,
      // })
      this.props.change_cateType(type)//index从子组件传递 进行比较
    }

   }
  render() {
    console.log(this.props.cateType);
    return (
      <Container>
        <nav>
          <ul>
            <li className={this.props.cateType==='category' ? 'active' :''} onClick={this.handleClick('category')}>分类</li>
            <li className={this.props.cateType==='material'? 'active' :''} onClick={ this.handleClick('material')}>食材</li>
            <li className={this.props.cateType==='category'? 'slide' : 'slide right'}></li>
          </ul>
        </nav>
        <Search outbg="#fff" innerbg="#efefef" hasborder={false}/>
        <Menu 
        type={this.props.cateType}
     
        />
      </Container>
    )
  }
}
export default withRouter( connect(
  state =>({cateType:state.category.routeInfo.cateType}),
{
  change_cateType,
}
  )(Category))
