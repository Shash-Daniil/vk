let initState = {
    postnews: [
        {id: 1, content: "ochen stranniy post", img: "https://www.ubergizmo.com/wp-content/uploads/2020/04/ai-meme.jpg" },
        {id: 2, content: "grechka martini MI NA KARANTINE!", img: "https://sun1-14.userapi.com/PkWt6h6-x-MQfxevMj-ThryYGmoLgS3ieG4Z-A/8PB9aEDWXgQ.jpg" },
        {id: 3, content: "Tinkoff gavno eto tochno, seichas rasskaju, pochemy" },
        {id: 4, content: "ochen stranniy post #2" }
      ],
    postText: 'KUDA NESET DblblblblM'
}

export const newsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            return {
                ...state,
                postnews: [...state.postnews, {id: 5, content: state.postText}],
                postText: ''
            };
        }
        case 'UPD-POST-TEXT': {
            return {
                ...state,
                postText: action.postText
            };
        }
    }

    return state;
}

export const addPostActionCreator = () => {
    return (
      {type: 'ADD-POST'}
    );
}
export const updatePostTxtActCreator = (symb) => {
    return (
      {type: 'UPD-POST-TEXT', postText: symb}
    );
}

export default newsReducer;