import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/" >
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="Logo  " />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li className="mr-30">
          <img
            className="cu-p"
            onClick={props.onClickCart}
            width={18}
            height={18}
            src="/img/cart.svg"
            alt="Cart"
          />
          <span>1205 руб.</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites" >
            <img
              width={18}
              height={18}
              src="/img/heart-favorite.svg"
              alt="Favorite"
            />
          </Link>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="User" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
