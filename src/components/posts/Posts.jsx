

import React from 'react';
import { Components } from '..';
import { REQUEST } from '../../api';

import cls from "../../assets/styles/posts/Posts.module.scss";
import { Providers } from '../../providers';
import PostCard from './PostCard';

export default function Posts() {
    const [post, setPost] = React.useState(null);
    const [userPost, setUserPost] = React.useState([]);
    const { users } = Providers.useAuth();

    React.useEffect(() => {
        const request = REQUEST.GET_ALL_POST();

        request
            .then(res => {
                const data = res.data;

                setPost(data);
            })
    }, []);

    React.useEffect(() => {
        post?.forEach(p => {
            users?.forEach(user => {
                if(user.id === p.user) {
                    setUserPost(prev => {
                        return [
                            ...prev,
                            {
                                userID: user?.id,
                                avatar: user?.avatar,
                                username: user?.username,
                                post: p
                            }
                        ]
                    })
                }
            })
        });
    }, [post, users]);

    const uniquePosts = [...new Set(userPost)];

  return (
    <section className={cls.posts_wrapper}>
      <div className={cls.posts_wrapper_inline}>
        {post?.length === 0 && <p>Empty</p>}

        {!post && <Components.Loader fullHeight={"50vh"}/>}

        {uniquePosts?.map(item => <PostCard base={item}/>)}
      </div>
    </section>
  )
};
