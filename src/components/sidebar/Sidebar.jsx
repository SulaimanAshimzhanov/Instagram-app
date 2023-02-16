

import React from 'react';
import { Components } from '..';

import Logo from "../../assets/images/logo/yXM3FgMdVNX.png";
import cls from "../../assets/styles/sidebar/Sidebar.module.scss";

export default function Sidebar() {
  return (
    <section className={cls.sidebar_wrapper}>
      <div className={cls.sidebar_wrapper_content}>
        <Components.Image src={Logo}/>
      </div>
    </section>
  )
};
