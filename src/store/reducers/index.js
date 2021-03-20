//该文件用于汇总reducer
import {combineReducers} from 'redux'//引入中间件 
import cookbook from './cookbook'
import count from './count'
import home from './home'
import category from './category'
export default combineReducers({
  cookbook,
  count,
  home,
  category,
})//combine传入的对象就是redux的总对象
