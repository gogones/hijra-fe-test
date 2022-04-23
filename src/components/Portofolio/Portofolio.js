import React from "react";
import "./Portofolio.scss";
import { HiOutlineCube } from "react-icons/hi";
import { FiCommand, FiFeather } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import Button from "../Button";

const Portofolio = () => {
  const cardPortofolio = [
    {
      label: "Design",
      icon: <HiOutlineCube />,
      description:
        "A full stack all around designer that may or may not include a guide for specific creative people",
    },
    {
      label: "Develop",
      icon: <FiCommand />,
      description:
        "Tell us pharetra erat tristique erat donec dignissim etiam sed malesik enim sodales lorem ipsum",
    },
    {
      label: "Write",
      icon: <FiFeather />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      label: "Promote",
      icon: <BiLike />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];

  return (
    <div className="portofolio">
      <div className="banner-content-container">
        <div className="title-banner">Catering service in New York</div>
        <div className="title-standout-banner">
          We specialize in corporate and private events
        </div>
        <div className="title-detail-banner">
          With 20 years of experience, we promise you the freshest, local
          ingredients, hand-crafted cooking springkled with our unique whimsical
          elegance and exceptional service.
        </div>
      </div>

      <div className="portofolio-layout">
        <div className="left-column">My Portofolio</div>

        <div className="card-portofolio">
          {cardPortofolio.map((card, index) => (
            <div key={index} className="card-portofolio-item">
              <div className="card-portofolio-item-icon">
                <div>{card.icon}</div>
              </div>

              <div className="card-portofolio-item-label">{card.label}</div>

              <div className="card-portofolio-item-description">
                {card.description}
              </div>
            </div>
          ))}
        </div>

        <div className="right-column">
          <div>Services</div>

          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            euismod, nisi vel consectetur egestas, nisl nunc consectetur nisi,
            eget consectetur nisl nunc sed velit.
          </div>

          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            euismod, nisi vel consectetur egestas, nisl nunc consectetur nisi,
            eget consectetur nisl nunc sed velit.
          </div>

          <div>
            Faucibus, nisi vel consectetur egestas, nisl nunc consectetur nisi,
            eget consectetur nisl nunc sed velit.
          </div>

          <div>
            <Button>Download CV</Button>
            <Button>Check My Portofolio</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
