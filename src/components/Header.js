import React from 'react'
import style from './TodoListItem.module.css';
import logo from "./Bumblebee.jpg";

export default function Header() {
  return (
    <div className={style.header}>
    <a href="/">
      <img src={logo} alt="bumble bee logo" />
    </a>
    <a href="/new"><h2>Tips</h2></a>
  </div>
  )
}
