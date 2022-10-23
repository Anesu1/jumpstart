import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Wrapper = styled.section`
    
`

function Blog() {
  return (
    <Wrapper>
        <Link to="/">Go Back Home</Link>
        
        Blog</Wrapper>
  )
}

export default Blog