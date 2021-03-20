import React, { Component } from 'react'
import {
  TabBar
} from 'antd-mobile'
import cookbook from '@a/images/cookbook.png'
import cookbookActive from '@a/images/cookbook-active.png'
import menu from '@a/images/menu.png'
import menuActive from '@a/images/menu-active.png'
import more from '@a/images/more.png'
import moreActive from '@a/images/more-active.png'
import location from '@a/images/location.png'
import locationActive from '@a/images/location-active.png'
import CookBook from './cookBooks/CookBook'
import {getHomeMultidata} from '@/network/home'
import Category from './category/Category'
import Map from './map/Map'
import More from './more/More'
import { connect } from 'react-redux';
import {change_switch} from '../store/actions/home'
import {change_selected_tab} from '../store/actions/category'
import animate from '@/hoc/animate';


 class Home extends Component {
  state={
    selectedTab: this.props.selectedTab,
    hidden: false,
    fullScreen: true,
    hotCate:[],
    // detail:{},
    // category:{},
    // list:{},
   
  }
  componentDidMount(){
    this.getDate()
    
    // console.log(hotCate);
  }
  getDate(){
    getHomeMultidata().then(res=>{
      this.setState({
        hotCate:res.hotCate,
        // detail:res.detail,
        // category:res.category,
        // list:res.list,
      })
    })
  }
  render() {
    const tabItem =[
      <TabBar.Item
      title="美食大全"
      key="cookbooks"
      icon={<div style={{
        width: '22px',
        height: '22px',
        background: `url(${cookbook}) center center /  26px 26px no-repeat`}}
      />
      }
      selectedIcon={<div style={{
        width: '22px',
        height: '22px',
        background: `url(${cookbookActive}) center center /  26px 26px no-repeat` }}
      />
      }
      selected={this.state.selectedTab === 'cookbook'}
     
      onPress={() => {
        this.setState({
          selectedTab: 'cookbook',
        });
      }}
      
    >
     
      <CookBook hotCate={this.state.hotCate}/>
      {/* <CookBook /> */}
      
    </TabBar.Item>,
    <TabBar.Item
      icon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${menu}) center center /  21px 21px no-repeat` }}
        />
      }
      selectedIcon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${menuActive}) center center /  21px 21px no-repeat` }}
        />
      }
      title="分类"
      key="category"
      
      selected={this.state.selectedTab === 'category'}
      onPress={() => {
        this.setState({
          selectedTab: 'category',
        });
        this.props.change_selected_tab('category')
      }}
      
    >
      
      <Category/>
    </TabBar.Item>,
    <TabBar.Item
      icon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${location}) center center /  21px 21px no-repeat` }}
        />
      }
      selectedIcon={
        <div style={{
          width: '22px',
          height: '22px',
          background: `url(${locationActive}) center center /  21px 21px no-repeat` }}
        />
      }
      title="位置"
      key="location"
      
      selected={this.state.selectedTab === 'location'}
      onPress={() => {
        this.setState({
          selectedTab: 'location',
        });
      }}
    >
      <Map/>
    </TabBar.Item>,
    <TabBar.Item
      icon={{ uri: more }}
      selectedIcon={{ uri: moreActive }}
      title="更多"
      key="more"
      selected={this.state.selectedTab === 'more'}
      onPress={() => {
        this.setState({
          selectedTab: 'more',
        });
      }}
    >
      {/* {this.renderContent('My')} */}
      <More/>
    </TabBar.Item>
    ]
    // const { hotCate}=this.state;
    return (
      
        <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#000"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          {
            this.props.checked ? tabItem.map(v=>v):tabItem.filter((v,i)=>i !==2)
          }
        </TabBar>
      </div>
      
      
    );
  }
}
export default connect(
  state =>({checked:state.home.checked,selectedTab:state.category.routeInfo.selectedTab}),
{
  change_switch,
  change_selected_tab,
}
  )(Home)
