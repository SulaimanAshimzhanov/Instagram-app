

import React from 'react';
import { Components } from '..';

import Logo from "../../assets/images/logo/Instagram_icon.png.webp";

export default function Loader({fullHeight}) {
  return (
    <div className='loader' style={{height: fullHeight }}>
        <Components.Image src={Logo}/>
    </div>
  )
};
