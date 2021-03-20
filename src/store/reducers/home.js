import {CHANGE_SWITCH} from '../constant'
const defaultState={
  checked:true
}
export default function homeReducer (state=defaultState,action){
  switch (action.type) {
    case CHANGE_SWITCH:
      return {
        checked:action.checked
      }
    
    default:
      return defaultState
  }
}