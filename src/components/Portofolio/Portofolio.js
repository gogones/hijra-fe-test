import React from "react";
import "./Portofolio.scss";
import { HiOutlineCube } from "react-icons/hi";
import { FiCommand, FiFeather } from "react-icons/fi";
import { BiLike } from "react-icons/bi";
import Button from "../Button";
import BannerText from "../BannerText";

const Portofolio = () => {
  const cardPortofolio = [
    {
      label: "Design",
      icon: <HiOutlineCube size="4em" />,
      description:
        "A full stack all around designer that may or may not include a guide for specific creative people",
    },
    {
      label: "Develop",
      icon: <FiCommand size="4em" />,
      description:
        "Tell us pharetra erat tristique erat donec dignissim etiam sed malesik enim sodales lorem ipsum",
    },
    {
      label: "Write",
      icon: <FiFeather size="4em" />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      label: "Promote",
      icon: <BiLike size="4em" />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];

  return (
    <div className="portofolio">
      <BannerText
        title="Catering service in New York"
        subtitle="We specialize in corporate and private events"
        detail="With 20 years of experience, we promise you the freshest, local ingredients, hand-crafted cooking springkled with our unique whimsical elegance and exceptional service"
      />

      <div className="portofolio-layout">
        <div className="left-column">
          <div className="label">My Portofolio</div>
        </div>

        <div className="right-column">
          <div className="card-portofolio">
            {cardPortofolio.map((card, index) => (
              <div key={index} className="card-portofolio-item">
                <div className="card-portofolio-item-icon">{card.icon}</div>

                <div className="card-portofolio-item-label">{card.label}</div>

                <div className="card-portofolio-item-description">
                  {card.description}
                </div>
              </div>
            ))}
          </div>

          <div className="detail-description">
            <div className="label-service">Services</div>

            <div className="main-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum euismod, nisi vel consectetur egestas, nisl nunc
              consectetur nisi, eget consectetur nisl nunc sed velit.
            </div>

            <div className="detail-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum euismod, nisi vel consectetur egestas, nisl nunc
              consectetur nisi, eget consectetur nisl nunc sed velit.
            </div>

            <div className="detail-description">
              Faucibus, nisi vel consectetur egestas, nisl nunc consectetur
              nisi, eget consectetur nisl nunc sed velit.
            </div>

            <div className="button-container">
              <Button variant="outlined">Download CV</Button>
              <Button variant="outlined">Check My Portofolio</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
