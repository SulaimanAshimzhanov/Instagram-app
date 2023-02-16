

import React from 'react';

import cls from "../../assets/styles/container/Container.module.scss";

export default function Container({children}) {
  return (
    <div className={cls.container}>
      {children}
    </div>
  )
}
