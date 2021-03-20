import React, { Component } from 'react'
import {Container} from'./StyledSearch'
export default class Search extends Component {
  render() {
    return (
      <Container {...this.props}>
        <div>
        <svg t="1615769039614" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1243" width="200" height="200"><path d="M921.3 874L738.1 690.8c51.3-62.6 82.1-142.5 82.1-229.6 0-200.1-162.8-363-363-363-200.1 0-363 162.8-363 363s162.8 363 363 363c87 0 167-30.8 229.6-82.1L870 925.3c7.1 7.1 16.4 10.6 25.7 10.6s18.6-3.5 25.7-10.6c14.1-14.2 14.1-37.2-0.1-51.3zM166.8 461.2c0-160.1 130.3-290.4 290.4-290.4s290.4 130.3 290.4 290.4-130.3 290.4-290.4 290.4-290.4-130.3-290.4-290.4z" p-id="1244"></path></svg>
        <span> 想吃什么搜这里</span>
         
        </div>
      </Container>
    )
  }
}
