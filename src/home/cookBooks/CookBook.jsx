import React, { Component } from 'react'
import {Container} from'./StyledCookBook'
import Swiper from './Swiper'
import Search from '@c/search/Search'
import HotCate from './HotCate'
import Top10 from './Top10'
import { connect } from 'react-redux';
import {loadDataAsync} from '../../store/actions/cookbook'
// import {increment} from '../../store/actions/count'
import PropTypes from 'prop-types'
 class CookBook extends Component {
   static propTypes={
     list:PropTypes.array
   }
  // static contextType = DataContext//举手
  componentDidMount(){
    this.props.loadDataAsync()
    // this.props.increment(3)
  }
  render() {   
    return (
        <Container>
          <header>美食大全</header>
          <Swiper/>
          <Search  outbg="#f5f5f9" innerbg="#fff" hasborder={true}/>
          <HotCate hotCate={this.props.hotCate}/>
          <Top10 list={this.props.list}/>
        </Container>
    )
  }
}
export default connect(
  state =>({list:state.cookbook.list}),
{
  loadDataAsync,
  // increment,
  // decrement,
  // incrementAsync
}
  )(CookBook)
