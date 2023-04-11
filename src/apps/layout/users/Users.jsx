

import React from 'react';
import { Components } from '../../../components';

import UsersList from './UsersList';
import { Providers } from '../../../providers';

import cls from "../../../assets/styles/users/Users.module.scss";
import { REQUEST } from '../../../api';


export default function Users() {
  const [subs, setSubs] = React.useState(null);
  const { users, user } = Providers.useAuth();
  const [newUsers, setNewUsers] = React.useState([]);



    React.useEffect(() => {
      if(user) {
        const request = REQUEST.GET_ALL_SUBSCRIPTIONS(user?.id);

        request
          .then(res => {
            const data = res.data;

            setSubs(data);
          });
      }
    }, [user]);


    React.useEffect(() => {
      subs?.forEach(s => {
        users?.forEach(u => {
          if(s.to_users === u.id) {
            setNewUsers(
              [
                ...users,
                {
                  ...u,
                  is_subscriptions: true
                }
              ]
            )
          }
        })
      });
    }, [users, subs]);


  return (

    <Components.Container>
      <section className={cls.users_wrapper}>
        <div className={cls.users_wrapper_content}>
            <h4>Рекомендации</h4>

            <div className={cls.users_wrapper_content_usersInline}>
                {(!users && newUsers.length === 0) && <Components.Loader fullHeight={"50vh"}/>}

                {newUsers?.map(item => <UsersList base={item}/>)}

            </div>
        </div>
      </section> 
    </Components.Container>
  )
};
