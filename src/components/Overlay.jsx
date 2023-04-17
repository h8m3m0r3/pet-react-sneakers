import React from 'react';

const Overlay = () => {
    return (
        <div style={{ display: "none" }} className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30">
            Корзина
            <img className="cu-p" src="/img/btn-remove.svg" alt="Remove" />
          </h2>
          <div className="items">
            <div className="cart_item d-flex align-center mb-20">
              <div
                className="cart_item_img"
                style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="remove_btn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
            <div className="cart_item d-flex align-center mb-20">
              <div
                className="cart_item_img"
                style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="remove_btn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
            </div>
          </div>
          <div className="cart_total_block">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
            </button>
          </div>
        </div>
      </div>
    );
};

export default Overlay;