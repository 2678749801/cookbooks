import React from 'react'
import { NavBar } from 'antd-mobile';
import {NavWrap} from '../more/StyledMore'
export default function Map() {
  return (
    <div style={{width:'100%',height:'100%'}}>
     <NavWrap>
      <NavBar
      mode="dark"     
    >美食地图</NavBar>
     </NavWrap>
      <iframe 
      style={{width:'100%' ,height:'100%'}}
      title="iframe" 
      src="/map.html" 
      frameBorder="0"></iframe>
    </div>
  )
}
