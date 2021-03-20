import styled from 'styled-components'
const Container =styled.div `
  header {
  height:.44rem;
  line-height:.44rem;
  text-align:center;
  font-size:.16rem;
  color: #fff;
  background-color: #ee742f;
  }

`
const SwiperWrap=styled.div`
  height:0;
  font-size:0;
  padding-bottom:66.66666667%;
  position: relative;
  .slider.am-carousel{
    position:static!important;//改变小点的定位 先设置成默认样式 然后改变参考系
  }
`
const HotCateWrap=styled.div`

  h1{
    height: .5rem;
    padding-left: .1rem;
    color:#666;
    line-height:.5rem;
    font-weight:normal;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
  }
  >div{
    background-color: #fff;
    padding-top:.2rem;
    .grid-item{
   
    padding-bottom:.1rem;
    img{
      width:.6rem;
      height:.6rem;
      border-radius:.06rem
    }
  }
  .am-grid-item-content{
    padding:0 !important
  }
  }
  
`
const Top10Wrap=styled.div`
  h1{
    height: .5rem;
    padding-left: .1rem;
    color:#666;
    line-height:.5rem;
    font-weight:normal;
  }
  ul{
    display:flex;
    flex-wrap:wrap;
    width:100%;
    padding-left:.1rem;
    li{
      width:50%;
      padding-right:.1rem;
      img{
        width:100%;
      }
      >div:last-child{
        display:flex;
        flex-direction:column;
        height:.6rem;
        background-color: #fff;
        margin-bottom:.1rem;
        justify-content:center;
        align-items:center;
        >p:first-child{
          font-size:.18rem;
        }
        >p:last-child{
          color:#666
        }
      }
    }
  }
`
export {
  Container,
  SwiperWrap,
  HotCateWrap,
  Top10Wrap
}