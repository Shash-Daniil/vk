let initState = {
    users: [
        
    ]
};

export const usersReducer = (state = initState, action) => {
    switch(action.type) {
        case 'FOLLOWUSER': {
            return {
                ...state,
                users: state.users.map( elem => {
                    if (action.id == elem.id) {
                        return {...elem, followed: true}
                    }
                    return elem;
                })
            }
        }
        case 'UNFOLLOWUSER': {
            return {
                ...state,
                users: state.users.map( elem => {
                    if (action.id == elem.id) {
                        return {...elem, followed: false}
                    }
                    return elem;
                })
            }
        }
        case 'SETUSERS': {
            return {...state, users: [ ...state.users, ...action.users ]}
        }
        default:
            return state;
    }
}

export const followUserAC = (userId) => {
    return {
        type: 'FOLLOWUSER',
        id: userId
    }
}

export const unfollowUserAC = (userId) => {
    return {
        type: 'UNFOLLOWUSER',
        id: userId
    }
}

export const setUsersAC = (users) => {
    return (
        {type: 'SETUSERS', users}
    );
}

export default usersReducer;