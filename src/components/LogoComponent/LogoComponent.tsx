import React, { CSSProperties, FC } from "react";
import logo from "../../images/Group 1.svg";
import "./LogoComponent.scss";

interface LogoComponentProps{
  style?: CSSProperties
}

const LogoComponent:FC<LogoComponentProps> = ({style}) => {
  const hashtags = [
    { label: "#десерты", path: "/" },
    { label: "#исключительная атмосфера", path: "/" },
    { label: "#панкейки", path: "/" },
    { label: "#вафли", path: "/" },
  ];


  return (
    <div className="logo-component">
      <img src={logo} alt="logo" className="logo-component__image"></img>
      <div className="logo-component__content">
        <ul className="logo-component__hashtags" style={style}>
          {hashtags.map((hashtag, index) => (
            <li key={index} className="logo-component__hashtag">
              <a href={hashtag.path} className="logo-component__hashtag-link">
                {hashtag.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LogoComponent;
