import React from "react";
import "./RestaurantCard.scss";
import favorites from "../../images/Иконки.svg";
import share from "../../images/reply.svg";
import star from "../../images/star.svg";
import arrowUp from "../../images/arrowup.svg";

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <div className="restaurant-card__image">
        <div className="restaurant-card__close-time">ДО 18:00</div>
        <div className="restaurant-card__rate">
          <div className="restaurant-card__rate-stars">
            <img src={star} alt="star" />
            4,1
          </div>
          <div className="restaurant-card__rate-position">
            <img src={arrowUp} alt="arrowUp" />
            №14
          </div>
        </div>
      </div>
      <div className="restaurant-card__info">
        <div className="restaurant-card__info--inner">
          <div className="restaurant-card__header">
            <h2 className="restaurant-card__title">Conversation</h2>
            <p className="restaurant-card__address">
              Б. Никитская ул., 23 // <strong>м. Арбатская</strong>
            </p>
          </div>
          <div className="restaurant-card__average-check">₽₽₽₽</div>

          <div className="restaurant-card__actions">
            <div className="restaurant-card__favorite">
              <img src={favorites} alt="favorites"></img>
            </div>
            <div className="restaurant-card__share">
              <img src={share} alt="share"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
