import React from "react";
import styled from "styled-components";
import Paragraph from "../styled/Paragraph";

const Wrapper = styled.section`
  text-align: center;
  @media(min-width:992px){
   padding-bottom:50px; 
  }
  p{
    color:#616161;
    @media(min-width:768px){
        font-size:18px;
    }
  }
  h3 {
    font-family: ${(props) => props.theme.fam.bold};
    color: ${(props) => props.theme.color.orange};
    font-size: 22px;
    margin-bottom: 30px;
    @media(min-width:768px){
        margin-top:17px;
        margin-bottom:-20px;
        font-size:35px;
    }
  }
  img {
    object-fit: contain;
  }
  .outer {
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      .inner-right {
        display: block;
        width: 37%;
        padding-top:20px;
        .top {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 3%;
          img {
            &:last-child {
              width: 32%;
            }
            &:first-child {
              width: 65%;
            }
          }
        }
        .bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          img {
            &:first-child {
              width: 49%;
            }
            &:last-child {
              width: 48%;
            }
          }
        }
      }
      .inner {
        width: 62%;
      }
    }
    @media(min-width:992px){
        .inner-right{
            width:30%;
        }
        .inner{
            width:47%;
        }
        img{
            width:21%;
        }
    }
  }
  .inner {
    margin-bottom: 50px;
    .top {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 2%;
      img {
        &:first-child {
          width: 31%;
        }
        &:last-child {
          width: 67%;
        }
      }
    }
    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      img {
        &:first-child {
          width: 49%;
        }
        &:last-child {
          width: 49%;
        }
      }
    }
  }
  .jumpcenter{
    display:none;
    @media(min-width:992px){
        display:block;
        width:5%;
    }
  }
  .inner-right {
    display: none;
  }
`;

function FollowUs() {
  return (
    <Wrapper>
      <Paragraph>Follow us on</Paragraph>
      <h3>@jumpstart</h3>
      <div className="outer">
        <div className="inner">
          <div className="top">
            <img src="./images/follow1.png" alt="" />
            <img src="./images/follow2.png" alt="" />
          </div>
          <div className="bottom">
            <img src="./images/follow3.png" alt="" />
            <img src="./images/follow4.png" alt="" />
          </div>
        </div>
        <img src="./images/jumpcenter.png" className="jumpcenter" alt="" />
        <div className="inner-right">
          <div className="top">
            <img src="./images/jump1.png" alt="" />
            <img src="./images/jump2.png" alt="" />
          </div>
          <div className="bottom">
            <img src="./images/jump3.png" alt="" />
            <img src="./images/jump4.png" alt="" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default FollowUs;
