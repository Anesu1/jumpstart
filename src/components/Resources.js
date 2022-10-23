import React from "react";
import styled from "styled-components";
import Heading from "../styled/Heading";
import Paragraph from "../styled/Paragraph";
import ResourceCard from "../styled/ResourceCard";

const Wrapper = styled.section`
  padding: 5%;
  @media(min-width:768px){
    display:flex;
    justify-content:space-between;
    .inner{
      width:48%;
      /* .text{
        max-width:350px;
      } */
    }
  }
  @media(min-width:992px){
    margin:0 30px;
  }
  @media(min-width:1200px){
    margin:0 140px;
  }
  h2 {
    margin-bottom: 30px;
    @media(min-width:992px){
      margin-bottom:50px;
    }
  }
  .inner{
    &:first-child{
      .resource-card{
        img{
          @media(min-width:768px){
            width:145px;
          }
        }
      }
    }
    &:last-child{
      .resource-card{
        &:first-child{
          img{
            @media(min-width:768px){
            width:120px;
                }
          }
          
        }
        &:last-child{
          img{
            @media(min-width:768px){
            width:114px;
                }
          }
        }
      }
      
    }
    .text{
      @media(min-width:768px){
        margin-top:60px;
      }
    p{
        margin-bottom:30px;
    }
  }
  }
  
`;

function Resources() {
  return (
    <Wrapper>
      <div className="inner">
        <Heading>
          Our <span>Resources</span>
        </Heading>
        <ResourceCard
          imgSrc="./images/icons1.png"
          title="For Parents"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          link="/"
        />
        <div className="text">
          <Paragraph>
            Whether you want to understand more about how you're feeling and
            find ways to feel better, or you want to support someone who's
            struggling, we can help.
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
          </Paragraph>
        </div>
      </div>
      <div className="inner">
        <ResourceCard
          imgSrc="./images/icon2.png"
          title="For Kids"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          link="/"
        />
        <ResourceCard
          imgSrc="./images/icon3.png"
          title="For Teachers"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          link="/"
        />
      </div>
    </Wrapper>
  );
}

export default Resources;
