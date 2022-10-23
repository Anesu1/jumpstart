/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react';
import styled from 'styled-components';
import {BiSearch} from 'react-icons/bi';
import {Link} from 'react-router-dom';

const Wrapper = styled.header`
    background:${props => props.theme.color.khakhi};
    padding:5%;
    display:flex;
    align-items:center;
    justify-content:space-between;
    @media(min-width:768px){
        padding:3%;
    }
    @media(min-width:992px){
        background:transparent;
        position:absolute;
        padding:0;
        width:100%;

    }
    a{
        text-decoration:none;
        font-family:${props => props.theme.fam.semibold};
        z-index:6;
        h3{
            color:${props => props.theme.color.orange};
            @media(min-width:992px){
                font-size:14px;
                margin:40px 0 0 50px;
            }
            @media(min-width:1200px){
                margin:40px 0 0 100px;
                font-size:16px;
            }
        }
    }
    .menu{
        position:absolute;
        top:0;
        right:0;
        width:100%;
        height:100vh;
        background:rgba(236, 179, 46, 0.4);
        backdrop-filter: blur(15.5px);
        z-index:5;
        display:flex;
        align-items:center;
        justify-content:center;;
        flex-direction:column;
        max-width:0;
        overflow:hidden;
        transition:all 0.7s ease;

        @media(min-width:768px){
            height:730px;
        }
        @media(min-width:992px){
            position:relative;
            background:transparent;
            height:unset;
            max-width:unset;
            align-items:flex-start;
        justify-content:flex-start;;
            flex-direction:row;
            backdrop-filter:unset;
            margin-left:30px;
            flex:1;
            margin-top:38px;
        }

        @media(min-width:1200px){
            margin-left:79px;
            
        }
       
        li{
            width:max-content;
            overflow:hidden;
            
            a{
                text-decoration:none;
                color:#ffffff;
                padding:15px;
                width:max-content;
                display:block;
                font-family:${props => props.theme.fam.semibold};
                font-size:20px;
                @media(min-width:992px){
                    color:#3A3A3A;
                    font-size:14px;
                }
                @media(min-width:1200px){
                    font-size:16px;
                }
                @media(min-width:1400px){
                    padding:15px 20px;
                }
            }
            
        }
    }
    
    .change{
        max-width:100%;
        
    }
    .hamburger{
        padding:20px 26px 20px 5px;
        z-index:6;
        @media(min-width:992px){
            display:none;
        }
        span{
            height:2px;
            width:20px;
            border-radius:12px;
            background:${props => props.theme.color.orange};
            position:absolute;
            transition:all 0.7s ease;
            &:before{
                height:100%;
                width:100%;
                position:absolute;
                top:-7px;
                border-radius:12px;
                background:${props => props.theme.color.orange};
                content:"";
                transition:all 0.7s ease;
            }
            &:after{
                height:100%;
                border-radius:12px;
                width:100%;
                position:absolute;
                top:7px;
                background:${props => props.theme.color.orange};
                content:"";
                transition:all 0.7s ease;
            }
        }
    }
    .open{
        span{
            background:transparent;
            &:before{
                top:0;
                transform:rotate(495deg);
            }
            &:after{
                top:0;
                transform:rotate(-135deg);
            }
        }
    }
    .search{
        display:none;
        @media(min-width:992px){
            max-height:45px;
        padding:12px;
        background:${props => props.theme.color.khakhi};
        display:flex;
        align-items:center;
        z-index:6;
        margin-top:35px;
        margin-right:35px;
        input{
            background:transparent;
            border:none;
            outline:none;
            
        }
        svg{
            margin-right:12px;
        }
        }
        @media(min-width:1200px){
            width:250px;
            input{
                flex:1;
            }
        }
        @media(min-width:1400px){
            width:280px;
        }
    }
`

function Header() {
    const [open, setOpen] = useState(false);
  return (
    <Wrapper>
        <a href="#">
            <h3>Jumpstart</h3>
        </a>
        <div className={open ? "hamburger open" : "hamburger"} onClick={() => setOpen(!open)}>
            <span></span>
        </div>
        <ul className={open ? 'menu change' : 'menu'}>
            <li>
                <Link to='/'>About JumpStart</Link>
            </li>
            <li>
                <Link to='/'>Blog & News</Link>
            </li>
            <li>
                <Link to='/'>For Kids</Link>
            </li>
            <li>
                <Link to='/'>For Parents</Link>
            </li>
            <li>
                <Link to='/'>For Teachers</Link>
            </li>
        </ul>
        <div className="search">
            <BiSearch />
            <input type="text" placeholder='Search' />
        </div>
    </Wrapper>
  )
}

export default Header