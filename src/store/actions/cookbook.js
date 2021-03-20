import {LOADDATA} from '../constant'
import {  getHomeMultidata} from '@/network/home'
export const  loadDataSync= list=>({type:LOADDATA,list})
export const loadDataAsync =()=>{//异步需要引入中间件来实现中间函数不报错 异步不是必须要用到
  return async (dispatch)=>{
   let result= await getHomeMultidata();
   dispatch(loadDataSync(result.list))
 
  }
}
