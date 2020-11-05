/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import style from "./Navbar.module.css";

import  Hambuger  from '../Hambuger/Hambuger';

export default function Navbar() {
  const logo =
    "https://res.cloudinary.com/oyindacodes/image/upload/v1603404297/DashMe._qsmsy4.svg";
  return (
    <nav className={style.container}>
      <div className={style.navigation}>
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#feature">Feature</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#help">Help</a>
          </li>
        </ul>
      </div>
      <Hambuger />
    </nav>
  );
}
