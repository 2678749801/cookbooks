import {LOADDATA} from '../constant'
const defaultState={
  list:[],
}

const reducer =(preState=defaultState,action)=>{
  const {type,list}=action
  switch (type) {
    case LOADDATA:
      return{
       
        list:list.data
        
      }
    default:
      return preState
  }
}
export default reducer