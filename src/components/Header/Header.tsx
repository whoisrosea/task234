import React from "react";
import rectangle from "../../images/Rectangle 726.svg";
import search from "../../images/Icon (Stroke).svg";
import profile from "../../images/Иконки-1.svg";
import favorites from "../../images/Иконки.svg";
import "./Header.scss";

const Header = () => {
  const navItems = [
    { label: "Коллекции", path: "/" },
    { label: "Куда пойти?", path: "/" },
    { label: "Заведения на карте", path: "/" },
    { label: "Мои карты лояльности", path: "/" },
    { label: "Партнерам", path: "/" },
  ];
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__button header__button-butterbroad">
          <img src={rectangle} alt="rectangle" />
          <img src={rectangle} alt="rectangle" />
        </div>

        <div className="header__nav-list">
          <a
            className="header__nav-list-item header__nav-list-item--active"
            href="/"
          >
            Коллекции
          </a>
          <a className="header__nav-list-item " href="/">
            Куда пойти?
          </a>
          <a className="header__nav-list-item " href="/">
            Заведения на карте
          </a>{" "}
          <a className="header__nav-list-item " href="/">
            Мои карты лояльности
          </a>{" "}
          <a className="header__nav-list-item " href="/">
            Партнерам
          </a>{" "}
        </div>
        <div className="header__nav-right">
          <img className="header__button" src={search} alt="search" />
          <img className="header__button" src={favorites} alt="favorites" />
          <img className="header__button" src={profile} alt="profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;
