//该文件专门为count组件生成action对象
import {INCREMENT,DECREMENT} from '../constant'
// import store from './store'
export const  increment= data=>({type:INCREMENT,data})
export const  decrement= data=>({type:DECREMENT,data})
//异步action 就是指action的值为函数   返回的值为函数
export const incrementAsync =(data,time)=>{//异步需要引入中间件来实现中间函数不报错 异步不是必须要用到
  return (dispatch)=>{
    setTimeout(() => {
      dispatch(increment(data))
    }, time);
  }
}