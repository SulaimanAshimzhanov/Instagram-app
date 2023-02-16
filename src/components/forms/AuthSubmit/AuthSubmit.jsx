

import React from 'react';

import cls from "../../../assets/styles/forms/Forms.module.scss";

export default function AuthSubmit({location}) {

  return (
    <button type='submit' className={cls.authSubmit}>
        {location}
    </button>
  )
}
