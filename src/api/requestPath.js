

export const requestPath = {
    createUser: "/users/",
    loginUser: "/token/",
    currentUser: "/users/current_user/",
    allUsers: "/users/",
    followTo: "/follow/",
    deleteFollow: (id) => `/follow/${id}`,
    userById: (id) => `/users/${id}/`,
    createPost: "/posts/",
    createImage: "/image/",
    getAllPost: "/posts/",
    getAllSubscribers: (userId) => `/users/${userId}/subscribers/`,
    getAllSubscriptions: (userId) => `/users/${userId}/subscriptions/`,
    refreshToken: "/token/refresh/"
};