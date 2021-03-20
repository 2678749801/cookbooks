
import React ,{Component} from 'react'
import {CSSTransition} from 'react-transition-group'
const animate =(WrappedComp)=>{
  return class extends Component{
    render(){
      return (
        <CSSTransition 
        in={true}
        timeout={1000}
        classNames={{      
        enter:"animate__animated",
        enterActive:" animate__slideInRight",
        exit:"animate__animated",
        exitActive:"animate__slideOutLeft"}} 
        mountOnEnter={true}
        unmountOnExit={true}
        >
        <WrappedComp {...this.props}></WrappedComp>
        </CSSTransition>
      )
    }
  }
}
export default animate