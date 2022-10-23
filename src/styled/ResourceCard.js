import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import Paragraph from './Paragraph';

const Wrapper = styled.div`
    background: linear-gradient(90deg, #FBFBFB 0%, #FFFFFF42 100%);
    border-radius: 20px;
    padding:40px 25px;
    margin-bottom:30px;
    @media(min-width:992px){
        padding:54px 42px 57px 42px;
    }
    img{
        width:50%;

    }
    h3{
        margin:25px 0;
        font-family:${props => props.theme.fam.bold};
        font-size:20px;
    }
    p{
        margin-bottom:25px;
    }
    a{
        text-transform:uppercase;
        font-family:${props => props.theme.fam.bold};
        font-size:15px;
        position:relative;
        padding-bottom:3px;
        &:before{
            content:"";
            background:${props => props.theme.color.orange};
            height:2px;
            width:100%;
            position:absolute;
            bottom:0;
            left:0;
        }
    }

`

function ResourceCard({imgSrc, title, description, link}) {
  return (
    <Wrapper className='resource-card'>
        <img src={imgSrc} alt={title} />
        <h3>{title}</h3>
        <Paragraph>{description}</Paragraph>
        <Link to={link}>Find Out More</Link>
    </Wrapper>
  )
}

export default ResourceCard