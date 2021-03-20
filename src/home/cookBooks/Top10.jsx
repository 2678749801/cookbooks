import React, { Component } from 'react'
import {Top10Wrap} from './StyledCookBook'
import {withRouter} from 'react-router-dom'
 class Top10 extends Component {
  handleClick=(title)=>{
    return ()=>{
      this.props.history.push('/detail',{title})
    }
  }
  render() {
    
    return (
      <Top10Wrap>
        <h1>精选好菜</h1>
        <ul>
          {
          
            this.props.list.map((value,index)=>{
              return(
                <li key={index} onClick={this.handleClick(value.name)}>
            <div><img src={value.img} alt=""/></div>
            <div>
              <p>{value.name}</p>
              <p><span>{value.all_click}</span><span>{value.favorite}</span></p>
            </div>
          </li>
              )
            })
          }
          
          {/* <li>
            <div><img src="" alt=""/></div>
            <div>
              <p>222</p>
              <p><span>222</span><span>收藏</span></p>
            </div>
          </li> */}
        </ul>
      </Top10Wrap>
    )
  }
}
export default withRouter(Top10)