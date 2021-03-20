import styled from 'styled-components'
const Container =styled.div`
  height:100%;
  display:flex;
  flex-direction:column;
  nav{
    display:flex;
    align-items:center;
    justify-content:center;
    height:.44rem;
    background-color: #ee742f;
    ul{
      display:flex;
      width:1.4rem;
      height:.3rem;
      border: solid 1px #fff;
      border-radius:.15rem;
      position:relative;
      li{
        transition all 200ms ease-in;
        flex:1;
        color:#fff;
        line-height:.3rem;
        text-align:center;
        &.active{
          color:#ee742f;
          z-index:3;
        }
        &.slide{
          position:absolute;
          left:0;
          width:.7rem;
          height:.3rem;
          background-color: #fff;
          z-index:2;
          border-radius:.15rem;
        }
        &.slide.right{
          left:.7rem;
        }
      }
    }
  }
`
const MenuWrap =styled.div`
  border-top:solid .5px #ccc;
  overflow:hidden;
  flex:1;
  display:flex;
  aside{
    width:.9rem;
    overflow-y:scroll;
    ul{
      li{
        height:.5rem;
        text-align:center;
        line-height:.5rem;
        &.active{
          background-color: #fff;
          color:#ee742f;
          span{
            display:inline-block;
            height:100%;
            border-bottom:solid 1px #ee742f;
          }
        }
      }
    }
  }
  section{
    overflow-y:scroll;
    flex:1;
    padding:.25rem;
    background-color: #fff;
    ul{
      display:flex;
      flex-wrap:wrap;
      li{
        width:33.333333%;
        height:.45rem;
        text-align:center;

      }
    }
  }
`
export{
  Container,
  MenuWrap,
}