

import React from 'react';

import cls from "../../../assets/styles/users/Users.module.scss";
import { Components } from '../../../components';
import NoneAvatar from "../../../assets/images/profile/NoneAvatar.jpg";
import { REQUEST } from '../../../api';
import { Link } from 'react-router-dom';
import { Providers } from '../../../providers';

export default function UsersList({base}) {
    const [avatar, setAvatar] = React.useState("");
    const { setState} = Providers.useAuth();

    React.useEffect(() => {
        if(!base?.avatar) {
            setAvatar(NoneAvatar);
        } else {
            setAvatar(base?.avatar);
        }
    }, [base]); 

    

    const followUser = async (id) => {
      setState("Recovery")
      if(id) {
        const newData = {
          to_user: parseInt(id)
        }
        const request = REQUEST.FOLLOW_TO_USER(newData);

        await request
          .then(res => {
            setState("Followed to user!");
          })
      }
    };


    function renderSubButton() {
      if(base?.is_subscriptions) {
        return <button>Отписаться</button>
      } else if(base?.is_subscriptions === undefined) {
        return <button onClick={() => followUser(base?.id)}>Подписаться</button>
      }
    }

  return (
    <div className={cls.users}>
      <Link to={`/profile/${base?.id}`}>
        <section className={cls.users_info}>
          <div className={cls.avatar}>
            <Components.Image src={avatar}/>
            <p>{base?.is_online && <div className={cls.online}/>}</p>
          </div>
          <div>
            <h4>{base?.username}</h4>
            <p>{base?.first_name} {base?.last_name}</p>
          </div>
        </section>
      </Link>
      <section>
        {renderSubButton()}
      </section>
    </div>
  )
};
