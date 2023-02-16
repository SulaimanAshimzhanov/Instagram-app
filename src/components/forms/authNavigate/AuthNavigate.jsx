

import React from 'react';
import { Link } from 'react-router-dom';
import { AuthPath } from '../../../services/path';

import cls from "../../../assets/styles/forms/Forms.module.scss";

export default function AuthNavigate({location}) {
  return (
    <div className={cls.auth_page_bottomCard} data-aos="zoom-in-right">
      <p>
        {
            location === "login"
                ? "У вас нет аккаунта"
                : "Есть аккаунт"
        }
        <Link to={
            location === "login"
                ? AuthPath.register
                : AuthPath.login
        }>
            {
                location === "login"
                    ? "Зарегистрироваться"
                    : "Вход"
            }
        </Link>
      </p>
    </div>
  )
};
