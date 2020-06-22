import { connect } from 'react-redux';
import { followUserAC, unfollowUserAC, setUsersAC} from '../../redux/users-reducer';
import Users from './Users';

let f1 = (state) => {
    return {
        users: state.usersPage.users
    }
}

let f2 = (dispatch) => {
    return {
        follow: userId => {
            dispatch(followUserAC(userId))
        },
        unfollow: userId => {
            dispatch(unfollowUserAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}


const UsersContainer = connect(f1, f2)(Users);

export default UsersContainer;