import React from "react";
import styled from "styled-components";
// import Swiper, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Link } from "react-scroll";
import {BsArrowRight} from 'react-icons/bs';

const Wrapper = styled.section`
  padding: 5%;
  overflow:hidden;
  position:relative;
   @media(min-width:992px){
    /* height:642px; */
    padding:0;
    padding-top:10px;
    &:before{
    background:${props => props.theme.color.khakhi};
    height:100%;
    width:75%;
    content:"";
    position:absolute;
    left:0;
    top:0;
  }
  /* @media(min-width:1400px){
    width:70%;
  } */
 
  }
  /* @media(min-width:1200px){
    height:100vh;
    &:before{
      height:100vh;
    }
  } */
  img {
    width: 100%;
  }
  .swiper-pagination{
    height:max-content;
    @media(min-width:992px){
      top:0;
      width:max-content;
      left:50%;
      top:20%;
    }
  }
  .swiper-pagination-bullet{
    height:11px;
    width:11px;
    position:relative;
    margin:0 10px !important;
    @media(min-width:992px){
      background:#ffffff;
      opacity:1;
    }
    &:before{
      content:"";
      height:200%;
      width:200%;
      background:transparent;
      border:1px solid transparent;
      position:absolute;
      border-radius:50%;
      z-index:-1;
      top:50%;
      left:50%;
      transform:translate(-50%,-50%);
    }
  }
  .swiper-pagination-bullet-active{
    background:${props => props.theme.color.orange};
    &:before{
      border:1px solid ${props => props.theme.color.orange};
    }
  }
  img {
    display: none;
  }
  h1{
    display:none;

  }
  p{
    display:none;

  }
  
  .text{
    background: rgba(255, 255, 255, 0.72);
backdrop-filter: blur(15.5px);
width:60%;
padding:30px 60px 30px 60px;
margin-bottom:30px;
text-align:center;
max-width:530px;
display:none;

@media(min-width:768px){
    display:block;
  }
@media(min-width:992px){
  padding-top:130px;
  padding-bottom:100px;
  /* max-width:494px; */
  position:absolute;
  text-align:left;
  width:420px;
  left:-100%;
}
@media(min-width:1200px){
  bottom:90px;
}
    h1{
      display:block;
      font-family:${props => props.theme.fam.semibold};
      color:${props => props.theme.color.orange};
      font-size:36px;
      margin-bottom:25px;
    }
    p{
      display:block;
      line-height:30px;
      font-size:16px;
      font-family:${props => props.theme.fam.regular};
      color:#898989;
    }
  }
  img{
    @media(min-width:992px){
      display:block;
      width:80%;
      transform:translateY(16%);
    }
  }
  .swiper{
    top:15%;
  }
  .swiper-container {
  width: 100%;
}

@media screen and (min-width: 992px) {
  .swiper-container {
    width: 992px;
  }
}
.swiper-slide{
  @media(min-width:992px){
    opacity:0;
    transition:all 0.01s ease;
  }
}
.swiper-slide.swiper-slide-active{
  display:block !important;
  
  @media(min-width:992px){
    opacity:1;
    .text,.inner{
      display:none;
    }
  transform: translateX(10%);
      img{
      min-width:800px !important;
      max-width:934px !important;
      transform: translate(114%, 16%);
    }
    }
    @media(min-width:992px){
      transform:translateX(-120%);
    }
    @media(min-width:1200px){
      img{
        min-width: 815px !important;
    transform: translate(124%,16%);
      }
    }
   
    

  }
  .swiper-slide-prev{
    transform:translateY(14%);
    @media(min-width:992px){
      opacity:1;
    }
    img{
      max-width:934px;
      transform:translateX(40px);
      min-width:800px !important;
      /* @media(min-width:992px){
        min-width:834px !important;
      } */
      @media(min-width:1200px){
        transform:translateX(126px);
      }
    }
  }
  .swiper-slide-next{
    transform:translateY(14%);
    @media(min-width:992px){
      opacity:1;
    }
    @media(min-width:992px){
      transform:translateY(11%);
    }
    
    img{
      max-width:934px !important;
      transform:translateX(660px);
      min-width:800px !important;
      @media(min-width:1200px){
        min-width:815px !important;
        transform:translateX(770px);
      }
    }
/* @media(min-width:992px){
  .inner,.text{
    display:block;

  }
  .text{
    left: -59%;
    top: -5%;
  }
  .inner{
    margin: 0;
    position: absolute;
    bottom: 10%;
    right: -28%;
  }
  transform: translateX(-40%);
      img{
      min-width:800px !important;
    }
    } */
  } 
`;

const SwiperItem = styled.div`
  background: url("${(props) => props.bgImage}");
  background-size: cover;
  height: 70vh;
  border-radius: 8px;
  display:flex;
  align-items:center;
  justify-content:flex-end;
  flex-direction:column; 
  margin-bottom:60px;
  @media(min-width:768px){
    height:600px;
  }
  @media(min-width:992px){
    /* height:100%; */
    margin-bottom:0;
    top:100%;
    position:relative;
    background:unset;
    padding-bottom: 74px;
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
  max-width:250px;

}
@media(min-width:1200px){
  right: -40px;
  max-width:290px;
}
h5{
  font-family:${props => props.theme.fam.regular};
    font-weight:700;
    color:${props => props.theme.color.orange};
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
`;

const bannerItems = [
  {
    imageSrc: "./images/banner2.png",
    title: "OUR FOCUS IS ON SKILL BUILDING & SELF AWARENESS IN 4 KEY AREAS:",
    subtopic: "Relationship",
    text: "Empowering workshops for pre-teens, teens and young adults to learn skills, share experiences and reflect on their mental health journey and create a personal route for their road ahead",
  },
  {
    imageSrc: "./images/banner2.png",
    title:
      "Two OUR FOCUS IS ON SKILL BUILDING & SELF AWARENESS IN 4 KEY AREAS:",
    subtopic: "Relationship",
    text: "Empowering workshops for pre-teens, teens and young adults to learn skills, share experiences and reflect on their mental health journey and create a personal route for their road ahead",
  },
  {
    imageSrc: "./images/banner2.png",
    title:
      "Three OUR FOCUS IS ON SKILL BUILDING & SELF AWARENESS IN 4 KEY AREAS:",
    subtopic: "Relationship",
    text: "Empowering workshops for pre-teens, teens and young adults to learn skills, share experiences and reflect on their mental health journey and create a personal route for their road ahead",
  },
  {
    imageSrc: "./images/banner2.png",
    title:
      "Two OUR FOCUS IS ON SKILL BUILDING & SELF AWARENESS IN 4 KEY AREAS:",
    subtopic: "Relationship",
    text: "Empowering workshops for pre-teens, teens and young adults to learn skills, share experiences and reflect on their mental health journey and create a personal route for their road ahead",
  },
  {
    imageSrc: "./images/banner2.png",
    title:
      "Three OUR FOCUS IS ON SKILL BUILDING & SELF AWARENESS IN 4 KEY AREAS:",
    subtopic: "Relationship",
    text: "Empowering workshops for pre-teens, teens and young adults to learn skills, share experiences and reflect on their mental health journey and create a personal route for their road ahead",
  },
];

function Banner() {
  return (
    <Wrapper>
      <Swiper
        spaceBetween={50}
        // slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        
        breakpoints={{
          800: {
            width: 800,
            slidesPerView: 1,
            spaceBetween:100
          },
          992: {
            width: 992,
            slidesPerView: 2,
            spaceBetween:50,
          },
        }}
      >
        {bannerItems.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <SwiperItem bgImage={item.imageSrc}>
                <img src={item.imageSrc} alt={item.title} />
                <div className="text">
                  <h1>{item.title}</h1>
                  <p>{item.text}</p>
                </div>
                
                <div className="inner">
                  <h5>{item.subtopic}</h5>
                  <Link to=""><span>Find out More</span>  <BsArrowRight /></Link>
                </div>
              </SwiperItem>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
}

export default Banner;
