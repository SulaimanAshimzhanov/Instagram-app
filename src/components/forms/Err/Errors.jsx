

import classNames from 'classnames';
import React from 'react';
import Icons from "../../../assets/images/icons/sprite_core_2x.png";

import cls from "../../../assets/styles/forms/Forms.module.scss";

export default function Errors({err}) {
    console.log(err);

    const errHandler = () => {
        
        if(err === undefined) {
            return cls.icons
        } else if (err === "err") {
            return classNames(cls.err_icons, cls.icons) 
        } else if (err === "success") {
            return classNames(cls.ok_icons, cls.icons)
        }
    };


  return (
    <div 
        style={{background: `url(${Icons})`}} 
        className={errHandler()}
    />
  )
};
