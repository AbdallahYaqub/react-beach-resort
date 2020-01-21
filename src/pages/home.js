import React from "react";
import Hero from "./../components/hero";
import Banner from "./../components/banner";
import { Link } from "react-router-dom";
import Services from "./../components/services";
import FeaturedRooms from "./../components/featuredRooms";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services></Services>
      <FeaturedRooms />
    </>
  );
};

export default Home;
