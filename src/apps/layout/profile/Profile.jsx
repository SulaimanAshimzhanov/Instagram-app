

import React from 'react';

import cls from "../../../assets/styles/profile/Profile.module.scss";
import { Components } from '../../../components';

import NoneAvatar from "../../../assets/images/profile/NoneAvatar.jpg";
import { Providers } from '../../../providers';
import { Link, useParams } from 'react-router-dom';


export default function Profile() {
    const { user, users } = Providers.useAuth();
    const { id } = useParams();
    const [currentUser, setCurrentUser] = React.useState(null);
    const [avatar, setAvatar] = React.useState("");

    React.useEffect(() => {
        if(id) {
            const findUser = users?.find(item => item.id === parseInt(id));

            setCurrentUser(findUser);
        } else {
            setCurrentUser(user);
        }
    }, [id, users, user]);

    
    React.useEffect(() => {
        if(!currentUser?.avatar) {
            setAvatar(NoneAvatar)
        } else {
            setAvatar(currentUser?.avatar);
        }
    }, [currentUser]);


    if(!currentUser) return <Components.Loader fullHeight={"50vh"}/>

    function renderProfileButton() {
        if(parseInt(id) === user?.id || id === undefined) {
            return <button>Редактировать профиль</button>
        }  else {
            return <button className={cls.profile_follow}>Подписаться</button>
        }
    };

    function renderLinkSubs(mode) {
        if(id) {
            if(mode === "followers") {
                return `/subs/followers/${id}`
            } else {
                return `/subs/following/${id}`
            }
        } else {
            if(mode === "followers") {
                return `/subs/followers/${user?.id}`
            } else {
                return `/subs/following/${user?.id}`
            }
        }
    }


  return (
    <Components.Container>
      <section className={cls.profile_wrapper}>
        <section className={cls.profile_wrapper_top}>
            <div>
                <label htmlFor='file'>
                    <Components.Image src={NoneAvatar}/>
                    <input type={"file"} id="file"/>
                </label>
            </div>
            <div>
                <section className={cls.profile_wrapper_top_name}>
                    <p>{currentUser?.first_name} {currentUser?.last_name}</p>
                    {renderProfileButton()}
                </section>
                <section className={cls.profile_wrapper_top_follow}>
                    <ul>
                        <li>
                            0 публикаций
                        </li>
                        <li>
                            <Link to={renderLinkSubs("followers")}>
                                {currentUser?.subscribers} подписчики
                            </Link>
                        </li>
                        <li>
                            <Link to={renderLinkSubs("following")}>
                                {currentUser?.subscriptions} подписки
                            </Link>
                        </li>
                    </ul>
                </section>
                <section className={cls.profile_wrapper_top_login}>
                    <h4>{currentUser?.username}</h4>
                </section>
                <section className={cls.profile_wrapper_top_bio}>
                    {currentUser?.bio}
                </section>
            </div>
        </section>
        <section className={cls.profile_wrapper_bottom}>

        </section>
      </section>
    </Components.Container>
  )
};
