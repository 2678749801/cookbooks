import React, { Component } from 'react'
import {MenuWrap} from '../../home/category/StyledCategory'

export default class MenuList extends Component {

  render() {
    let cate =this.props.cate
    return (
      <MenuWrap>
        <aside>
          <ul>
            {
             cate && Object.keys(cate).map(value=>{//将对象转换为数组 然后进行遍历               
                return(
                  <li 
                  className={this.props.curCate === value? 'active':''}
                  onClick={this.props.onAsideClick(value)}
                  key={value}
                 ><span>{value}</span></li>
                )
              })
            }
          </ul>
        </aside>
        <section>
          <ul>
            {
             cate && cate[this.props.curCate].map(value=>{
                return (
                  <li key={value} onClick={this.props.handleGotoList(value)}>{value}</li>
                )              
              })
            }
          </ul>
        </section>
      </MenuWrap>
    )
  }
}

