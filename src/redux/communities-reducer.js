let initState = {
    communities: [
        {id: 1, isFollow: false, photoUrl: 'https://static10.tgstat.ru/channels/_0/96/9664b7d047c5002f3db1ee9bdb120ba1.jpg',  groupName: 'IGM', discription: 'this group for dolbaebs', subscribers: 32444},
        {id: 2, isFollow: false, photoUrl: 'https://pbs.twimg.com/profile_images/642356979487408128/TKSgiEap_400x400.jpg', groupName: 'Intel core', discription: 'this group for genius', subscribers: 1654},
        {id: 3, isFollow: true, photoUrl: 'https://static10.tgstat.ru/channels/_0/16/167434fa6219316417cd4160c0c5e7d2.jpg', groupName: '4ch', discription: 'this group for 4ch users!!!', subscribers: 131}
    ]
}

const communityReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                communities: state.communities.map( elem => {
                    if (elem.id === action.id) {
                        return {...elem, isFollow: true}
                    }
                    return elem;
                })
            }
        }
        case 'UNFOLLOW': {
            return {
                ...state,
                communities: state.communities.map( elem => {
                    if (elem.id === action.id) {
                        return {...elem, isFollow: false}
                    }
                    return elem;
                })
            }
        }
        default:
            return state;
    }
}

export const FollowAC = (userId) => {
    return (
        {type: 'FOLLOW', id: userId}
    );
}

export const UnfollowAC = (userId) => {
    return (
        {type: 'UNFOLLOW', id: userId}
    );
}



export default communityReducer;