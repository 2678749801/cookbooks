import {CHANGESELECTED,CHANGECATETYPE,CHANGECATEASIDE} from '../constant'
const preState={
  routeInfo:{
    selectedTab:'cookbook',
    cateType:'category',
    cateAside:'',
  }
}
export default function categoryReducer (state=preState,action){
  const {type}=action
  switch (type) {
    case CHANGESELECTED:
    return {
      routeInfo:{
        ...state.routeInfo,
        selectedTab:action.selectedTab
      }
    
    }
    case CHANGECATETYPE:
      return {
        routeInfo:{
          ...state.routeInfo,
          cateType:action.cateType
        }
      }
    case CHANGECATEASIDE:
      return {
        routeInfo:{
          ...state.routeInfo,
          cateAside:action.cateAside
        }
      }
    default:
      return preState;
  }
}