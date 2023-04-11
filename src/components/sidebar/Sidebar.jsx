

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Components } from '..';

import Logo from "../../assets/images/logo/yXM3FgMdVNX.png";
import cls from "../../assets/styles/sidebar/Sidebar.module.scss";
import { SidebarList } from '../../utils/list';
import OptionModal from './OptionModal';

export default function Sidebar() {
  const [showOption, setShowOption] = React.useState(false);

  const bottomList = SidebarList[7];

  const handleOption = () => setShowOption(prev => !prev);

  return (
    <section className={cls.sidebar_wrapper}>
      <div className={cls.sidebar_wrapper_content}>
        <Components.Image src={Logo}/>

        <section className={cls.sidebar_wrapper_content_list}>
          <ul>
            {
              SidebarList.slice(0,7).map(item => (
                <li key={item.id}>
                  <NavLink 
                    className={({isActive}) => isActive ? cls.activeList : ""} 
                    to={item.route}
                  >
                    <item.icon/>
                    {item.caption}
                  </NavLink>
                </li>
              ))
            }
          </ul>
          <ul>
            <li onClick={handleOption}>
              <Link>
                <bottomList.icon/>
                {bottomList.caption}
              </Link>
            </li>
          </ul>
        </section>
      </div>

      <OptionModal isOpen={showOption}/>
    </section>
  )
};
