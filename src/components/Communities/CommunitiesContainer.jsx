import Communities from './Communities'
import { connect } from 'react-redux'
import { FollowAC, UnfollowAC } from '../../redux/communities-reducer'

let f1 = (state) => {
    return {
        communities: state.communitiesPage.communities
    }
}

let f2 = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(FollowAC(userId));
        },
        unfollow: (userId) => {
            dispatch(UnfollowAC(userId))
        }
    }
}

const CommunitiesContainer = connect(f1, f2)(Communities);

export default CommunitiesContainer;