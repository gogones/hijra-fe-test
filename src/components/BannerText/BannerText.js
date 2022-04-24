import React from "react";
import "./BannerText.scss";
import PropTypes from "prop-types";
import clsx from "clsx";

const BannerText = ({ title, subtitle, detail, rootClassName }) => {
  return (
    <div className={clsx("banner-text-container", rootClassName)}>
      <div className="title-banner">{title}</div>
      <div className="subtitle-banner">{subtitle}</div>
      <div className="detail-banner">{detail}</div>
    </div>
  );
};

BannerText.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  detail: PropTypes.string,
  rootClassName: PropTypes.string,
};

export default BannerText;
