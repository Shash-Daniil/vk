import messageReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    newsPage: {
      postnews: [
          {id: 1, content: "ochen stranniy post", img: "https://www.ubergizmo.com/wp-content/uploads/2020/04/ai-meme.jpg" },
          {id: 2, content: "grechka martini MI NA KARANTINE!", img: "https://sun1-14.userapi.com/PkWt6h6-x-MQfxevMj-ThryYGmoLgS3ieG4Z-A/8PB9aEDWXgQ.jpg" },
          {id: 3, content: "Tinkoff gavno eto tochno, seichas rasskaju, pochemy" },
          {id: 4, content: "ochen stranniy post #2" }
        ]
    },
    messagePage: {
      dialogPerson: [
        {id: '1', name: 'Sasha', img: 'https://img.icons8.com/plasticine/100/000000/person-female.png'},
        {id: '2', name: 'Dima', img: 'https://img.icons8.com/plasticine/100/000000/person-female.png'},
        {id: '3', name: 'Anatoly', img: 'https://img.icons8.com/plasticine/100/000000/person-female.png'},
        {id: '4', name: 'Genadiy', img: 'https://img.icons8.com/plasticine/100/000000/person-female.png'}
      ],
      messages: [
        {message: 'first'},
        {message: 'second'},
        {message: 'third'}
      ],
      newMessageText: "STATE newMessageTextValue"
    },
    profilePage: {
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
  },

  getState() {
    return this._state;
  },

  updateMessageArea(newText) {
    this._state.messagePage.newMessageText = newText;
    this._ppap(this._state);
  },

  _ppap() {
    alert("hello ppap")
  },

  subscribe(renFunct) {
    this._ppap = renFunct;
  },

  dispatch(action) {
    this._state.messagePage = messageReducer(this._state.messagePage, action);
    this._state.profilePage = profileReducer(this._state.profilePage, action);

    this._ppap(this._state);
  }

}

export default store