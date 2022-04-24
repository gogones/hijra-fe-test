import React from "react";
import "./Demos.scss";
import Navbar from "../../components/Navbar";
import Portofolio from "../../components/Portofolio";
import Button from "../../components/Button";
import { FiChevronRight } from "react-icons/fi";
import Flex from "../../components/Flex";
import BannerText from "../../components/BannerText";

const Demos = () => {
  return (
    <div className="app-content">
      <Navbar />

      {/* Content */}
      <div className="page-content">
        <div className="banner">
          <div className="content">
            <BannerText
              rootClassName="banner-text"
              title="Catering should be an experience"
              subtitle="We use only the finest and freshest ingredients"
              detail="At sway catering we know that food is an important part of life.
                If the meal is not perfect, your event cannot be perfect."
            />

            <Button>
              <Flex container justifyContent="center" alignItems="center">
                <div>Request a Quote</div>
                <FiChevronRight />
              </Flex>
            </Button>
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
