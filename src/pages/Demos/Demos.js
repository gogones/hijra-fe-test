import React from "react";
import "./Demos.scss";
import Navbar from "../../components/Navbar";
import Portofolio from "../../components/Portofolio";
import Button from "../../components/Button";
// import bannerImage from "assets/img/banner.jpg";

const Demos = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="page-content">
        <div className="banner-hero">
          <div className="banner-content-container">
            <div className="title-banner">Catering should be an experience</div>

            <div className="title-standout-banner">
              We use only the finest and freshest ingredients
            </div>

            <div className="title-detail-banner">
              At sway catering we know that food is an important part of life.
              If the meal is not perfect, your event cannot be perfect.
            </div>

            <Button>Request a Quote &gt;</Button>
          </div>

          <div className="banner-image-backdrop" />

          <div className="wave-decorator" />
        </div>

        <Portofolio />
      </div>
    </div>
  );
};

export default Demos;
