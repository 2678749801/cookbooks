import styled from 'styled-components'
const ListWrap =styled.ul`
  flex:1;
  overflow-y:scroll;
  li{
    display:flex;
    padding:.1rem;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    img{
      margin-right:.15rem;
      width:115px;
      height:75px;
    }
    >div:last-child{
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      h1{
        font-size:.16rem;
        line-height:.3rem
      }
      h2{
        
        font-weight:normal;        
      }
      h3{
        font-size:.12rem;
        font-weight:normal;
        line-height:.25rem;
      }

    }
  }
`
const ListContainer =styled.div `
  display:flex;
  flex-direction:column;
  
`
export {
  ListWrap,
  ListContainer,
}