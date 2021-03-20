import React, { Component } from 'react'
import {HotCateWrap} from './StyledCookBook'
import {Grid} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
 class HotCate extends Component {
  handleClick=({title})=>{
    const {history} =this.props
    history.push('/list',{title})  
  }
  render() {
   const {hotCate:hotCateList}=this.props
    return (
      <HotCateWrap>
            <h1>热门分类</h1>
            <div>
            <Grid data={hotCateList}
            onClick={this.handleClick}
            columnNum={4}
            hasLine={false}
            renderItem={dataItem => (
              <div className="grid-item">
                <img src={dataItem.img}  alt="" />
                <div>
                  <span>{dataItem.title}</span>
                </div>
              </div>
            )}
      />
            </div>
          
          </HotCateWrap>
      
    )
  }
}
export default withRouter(HotCate)