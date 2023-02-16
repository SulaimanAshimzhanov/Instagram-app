

import React from 'react';
import { Components } from '..';

import Logo from "../../assets/images/logo/Instagram_icon.png.webp";

export default function Loader() {
  return (
    <div className='loader'>
        <Components.Image src={Logo}/>
    </div>
  )
};
