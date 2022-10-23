import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.h2`
  color:#000000;
  text-transform:uppercase;
  font-size:25px;
  font-family:${props => props.theme.fam.bold};
  @media(min-width:992px){
    font-size:33px;
  }
    span{
      color:${props => props.theme.color.orange};
    }
`

function Heading({children}) {
  return (
    <Wrapper>{children}</Wrapper>
  )
}

export default Heading