

import React from 'react'
import { Components } from '../../../components';

import { REQUEST } from '../../../api';
import { Providers } from '../../../providers';
import UsersList from '../users/UsersList';

import cls from "../../../assets/styles/subs/Subs.module.scss";
import c from "../../../assets/styles/users/Users.module.scss";
import { useParams } from 'react-router-dom';

export default function Subscribers() {
    const [subs, setSubs] = React.useState(null);
    const [mySubs, setMySubs] = React.useState([]);
    const { user, users } = Providers.useAuth();
    const { mode, id } = useParams();

    React.useEffect(() => {
        if(user) {
            if(mode === "followers") {
                const request = REQUEST.GET_ALL_SUBSCRIBERS(id);

                request
                    .then(res => {
                        const data = res.data;

                        setSubs(data);
                    })
            } else {
                const request = REQUEST.GET_ALL_SUBSCRIPTIONS(id);
    
                request
                    .then(res => {
                        const data = res.data;
    
                        setSubs(data);
                    })
            }
        } 
    }, [user, mode]);


    React.useEffect(() => {
        subs?.forEach(sub => {
            users?.forEach(us => {
                if(mode === "followers") {
                    if(sub.from_user === us.id) {
                        setMySubs(prev => {
                            return [
                                ...prev,
                                {...us}
                            ]
                        })
                    }
                } else {
                    if(sub.to_user === us.id) {
                        setMySubs(prev => {
                            return [
                                ...prev,
                                {...us}
                            ]
                        })
                    }
                }
            })
        });
    }, [subs, users, mode]);

    const uniqueSubs = [...new Set(mySubs)];

  return (
    <Components.Container>
        <div className={cls.subs_wrapper}>
            <h2>
                {
                    mode === "followers" 
                        ? "Подписчики"
                        : "Подписки"
                }
            </h2>

            <div className={c.users_wrapper_content_usersInline}>
                {uniqueSubs?.map(item => <UsersList key={item.id} base={item}/>)}
            </div>
        </div>
    </Components.Container>
  )
};
