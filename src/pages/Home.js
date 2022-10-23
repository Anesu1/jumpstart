import React from 'react';
import About from '../components/About';
import Banner from '../components/Banner';
import FollowUs from '../components/FollowUs';
import LatestBlog from '../components/LatestBlog';
import Resources from '../components/Resources';


function Home() {
  return (
    <>
        
        <Banner />
        <Resources />
        <About />
        <LatestBlog />
        <FollowUs />
    </>
  )
}

export default Home