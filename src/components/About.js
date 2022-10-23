import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import Heading from '../styled/Heading';
import Paragraph from '../styled/Paragraph';

const Wrapper = styled.section`
    margin:5%;
    background:${props => props.theme.color.khakhi};
    border-radius:20px;
    .inner{
        padding:10% 5%;
        position:relative;
        z-index:1;
        
        img{
            display:none;
        }
        @media(min-width:768px){
            img{
                display:block;
                position:absolute;
                z-index:2;
            }
            .about{
                width:280px;
                bottom:0;
                right:10%;
                z-index:4;
                @media(min-width:992px){
                    width:300px;
                    right:2%;
                }
            }
            .text{
                width:50%;
                padding:30px 0;
            }
            .red{
                bottom:0;
                right:20%;
                width:150px;
                @media(min-width:992px){
                    width:250px;
                }
            }
            .yellow{
                right:0;
                top:10%;
                width:100px;
                @media(min-width:992px){
                    width:130px;
                }
            }
            .blue{
                top:30%;
                right:40%;
                width:60px;
                @media(min-width:992px){
                    right:34%;
                    top:35%;
                    width:85px;
                }
            }
        }
        @media(min-width:992px){
            .text{
                padding-left:75px;
                max-width:400px;
                padding-top:80px;
                padding-bottom:50px;
            }
        }
        h2{
            margin-bottom:15px;
            position:relative;
            z-index:3;
            @media(min-width:992px){
                margin-bottom:30px;
            }
        }
        p{
            margin:20px 0;
            position:relative;
            z-index:3;
            @media(min-width:768px){
                line-height:28px;
                margin-bottom:30px;
            }
        }
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


function About() {
  return (
    <Wrapper>
        <div className="inner">
            <div className="text">
                <Heading>About <span>Jumpstart</span></Heading>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </Paragraph>
                <Link to='/'>Find Out More</Link>
            </div>
            <img src="./images/about.png" className='about' alt="" />
            
            <img src="./images/redbubble.png" className='red' alt="" />
            <img src="./images/bluebubble.png" className='blue' alt="" />
            <img src="./images/yellowbubble.png" className='yellow' alt="" />
        </div>
    </Wrapper>
  )
}

export default About