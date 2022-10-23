import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {BsArrowRight} from 'react-icons/bs';

const Wrapper = styled.div`
    height:400px;
    background:url('${props => props.bgImage}');
    background-size:cover;
    display:flex;
    align-items:flex-end;
    justify-content:center;
    @media(min-width:568px){
      min-width:300px;
    }
    @media(min-width:992px){
      
      min-width:unset;

      max-width:280px;
      height:370px;
      /* transform:translateX(80px); */
    }
    .inner{
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(15.5px);
    padding:41px 24px 26px 24px;
    margin-bottom:50px;
    width:75%;
    max-width:294px;
    
@media(min-width:992px){
  position:absolute;
  width:70%;
}
h3{
  font-family:${props => props.theme.fam.regular};
    font-weight:700;
    color:#000000;
    font-size:24px;
    margin-bottom:10px;
}
a{
  display:flex;
  justify-content:space-between;
  align-items:center;
  span{
    text-transform:uppercase;
    position:relative;
    font-family:${props => props.theme.fam.regular};
    font-weight:700;
    font-size:16px;
    color: #454545;
    &:before{
      content:"";
      position:absolute;
      padding-bottom:3px;
      background:${props => props.theme.color.khakhi};
      height:1px;
      bottom:-8px;
      left:0;
      width:100%;

    }
  }
  svg{
    width:25.2px;
    height:21.64px;
  }
}
  }
`

function BlogItem({bgImage, link, title}) {
  return (
    <Wrapper bgImage={bgImage}>
      <div className="inner">
        <h3>{title}</h3>
        <Link to={link}><span>Find out More</span>  <BsArrowRight /></Link>
      </div>
        
    </Wrapper>
  )
}

export default BlogItem