import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.p`
    font-size:14.5px;
    font-family:${props => props.theme.fam.regular};
    line-height:30px;
    color:${props => props.theme.color.default};
`

function Paragraph({children}) {
  return (
    <Wrapper>{children}</Wrapper>
  )
}

export default Paragraph