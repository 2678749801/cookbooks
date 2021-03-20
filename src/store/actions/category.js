import {CHANGESELECTED,CHANGECATETYPE,CHANGECATEASIDE} from '../constant'
export const change_selected_tab =(selectedTab)=>({type:CHANGESELECTED,selectedTab})
export const change_cateType =(cateType)=>({type:CHANGECATETYPE,cateType})
export const change_cate_Aside =(cateAside)=>({type:CHANGECATEASIDE,cateAside})