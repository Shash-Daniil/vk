let initState = {
    posts: [
        {postText: 'post namber van', likes: '32'},
        {postText: 'suck youasdfaikjsf;lkjsd;fklj sdg sfd gdf g', likes: '32'},
        {postText: ' asdas', likes: '32'},
        {postText: '5', likes: '32'},
        {postText: '1', likes: '32'},
        {postText: 'cvcxvcvx WAFENTRAGEN', likes: '32'}
      ],
    newPostText: "WRITE HERE"
  }

export const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            let postObj = { postText: action.postText, likes: '0' }
            state.posts.push(postObj);
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const updateNewPostActionCreator = (symbol) => {
    return (
        {type: 'UPDATE-NEW-POST-TEXT', newText: symbol }
    );
  }
export const addPostActionCreator = (text) => {
    return (
        {type: 'ADD-POST', postText: text }
    );
}

export default profileReducer;