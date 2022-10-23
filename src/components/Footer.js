/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import Paragraph from "../styled/Paragraph";
import TextField from "@mui/material/TextField";
import moment from 'moment';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Wrapper = styled.section`
  background: ${(props) => props.theme.color.khakhi};
  padding: 10% 5%;
  @media(min-width:768px){
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    padding:5% 5% 3%;
  }
  @media(min-width:1200px){
    padding-top:150px;
  }
  h3 {
    font-family: ${(props) => props.theme.fam.semibold};
    font-size: 14px;
    font-weight:700;
    margin-bottom: 25px;
    @media (min-width: 992px) {
      margin-bottom: 35px;
    }
  }
  .left {
    margin-bottom: 35px;
    @media(min-width:768px){
      width:50%;
    }
    @media(min-width:992px){
      width:32%;
    }
    p {
      margin-bottom: 20px;
      @media(min-width:1200px){
        line-height:25px;
        margin-bottom:30px;
      }
    }
    .social {
      display: flex;

      a {
        height: 35px;
        width: 35px;
        background: #f2f2f2;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        margin-right: 20px;
        transition: all 0.7s ease;
        &:hover {
          background: ${(props) => props.theme.color.orange};
        }
        svg {
          color: #ffffff;
        }
        &:first-child {
          svg {
            height: 18px;
            width: 10px;
          }
        }
        &:nth-child(2) {
          svg {
            height: 15px;
            width: 15px;
          }
        }
        &:nth-child(3) {
          svg {
            width: 20px;
          }
        }
        &:last-child {
          svg {
            width: 20px;
          }
        }
      }
    }
  }
  .links {
    margin-bottom: 30px;
    @media(min-width:768px){
      width:45%;
    }
    @media(min-width:992px){
      width:12%;
    }
    ul {
      li {
        a {
          display: block;
          padding: 15px 0;
          text-decoration: none;
          color: #000000;
          font-size:14px;
          font-family: ${(props) => props.theme.fam.regular};
          @media(min-width:768px){
            padding:10px 0;
          }
        }
      }
    }
  }
  .news {
    @media(min-width:992px){
      width:45%;
      max-width:470px;
    }
    form {
      .top{
        @media(min-width:992px){
          display:flex;
          justify-content:space-between;
          .MuiTextField-root{
            width:49%;

          }
        }
      }
      .MuiTextField-root {
        width: 100%;
        opacity:0.6;
        margin-bottom: 20px;
        font-family: ${(props) => props.theme.fam.regular};
        background: #F7F7F7;
        border-radius:0;
        @media(min-width:992px){
          margin-bottom:10px;
        }
        label {
          color: #A9A9A9;
          font-size: 15px;
          padding-left:23px;
          padding-bottom:5px;
          @media (min-width: 768px) {
            font-size: 13px;
          }
        }
        input {
          /* color: ${(props) => props.theme.color.darkblue}; */
          font-size: 15px;
          padding-left:15px;
          padding-bottom:5px;
          @media (min-width: 768px) {
            font-size: 13px;
            color: #A9A9A9;
          }
        }
         div .Mui-focused{
         outline:1px solid ${props => props.theme.color.orange} !important;
      }
      label+.css-1ptx2yq-MuiInputBase-root-MuiInput-root {
    
    padding-bottom: 15px;
}

      }
      button{
  width:100%;
  height:50px;
  border:none;
  background:${props => props.theme.color.orange};
  color:#ffffff;
  text-transform:uppercase;
  font-family:${props => props.theme.fam.semibold};
  margin-bottom:20px;
}
.css-1ptx2yq-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before {

     border-bottom: transparent;
}
label+.css-1ptx2yq-MuiInputBase-root-MuiInput-root{
  margin-top:7px;
}
.css-1ptx2yq-MuiInputBase-root-MuiInput-root:before{
  border:none !important;
}
.css-1ptx2yq-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):after,.css-1ptx2yq-MuiInputBase-root-MuiInput-root:after {
    border:none !important;
     /* border-bottom: 2px solid ${props => props.theme.color.orange}; */
}
      .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root{
        border-radius:0;
       
      }
     
    }
    p{
      margin-bottom:20px;
      width:100%;
      color:#8c8c8c;
      font-size:13px;
      font-family:${props => props.theme.fam.regular};
      @media(min-width:768px){
        width:max-content;
      }
      a{
        display:unset;
        color:#000000;
        font-family:${props => props.theme.fam.bold};
        @media(min-width:768px){
          margin:0;
        }
      }
    }
    a{
      display:block;
      color:#000000;
      font-size:13px;
      font-family:${props => props.theme.fam.bold};
      @media(min-width:768px){
        margin:0 10px;
      }
      @media(min-width:992px){
        margin:0 5px;
        
      }
    }
    .footer-last{
      display:flex;
      justify-content:space-between;
      flex-wrap:wrap;
    }
  }
`;

function Footer() {
  const year = moment().year();
  return (
    <Wrapper>
      <div className="left">
        <h3>Jumpstart</h3>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </Paragraph>
        <div className="social">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaLinkedinIn />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className="links">
        <h3>Quick Links</h3>
        <ul>
          <li>
            <a href="#">Section One</a>
          </li>
          <li>
            <a href="#">Section One</a>
          </li>
          <li>
            <a href="#">Section One</a>
          </li>
          <li>
            <a href="#">Section One</a>
          </li>
          <li>
            <a href="#">Section One</a>
          </li>
          <li>
            <a href="#">Section One</a>
          </li>
        </ul>
      </div>
      <div className="news">
        <h3>Newsletter Subscription</h3>
        <form action="">
          <div className="top">
            <TextField id="firstname" variant='standard' name="firstname" label="First Name" />
            <TextField id="lastname" variant='standard' name="lastname" label="Last Name" />
          </div>
          <TextField id="email" variant='standard' name="email" label="Email Address" />
          <button>Subscribe Now</button>
        </form>
        <div className="footer-last">
          <p>
          Copyright
          <a href="#"> @ JUMPSTART </a> {year}
        </p>
        <Link to="/">About JUMPSTART</Link>
        <Link to="/">Terms & Conditions</Link>
        </div>
        
      </div>
    </Wrapper>
  );
}

export default Footer;
