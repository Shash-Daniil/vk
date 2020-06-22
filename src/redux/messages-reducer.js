let initState = {
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
  }

export const messageReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            let stateCopy = {...state};
            let messageData = {message: stateCopy.newMessageText};
            stateCopy.messages= [...state.messages];
            stateCopy.messages.push(messageData);
            stateCopy.newMessageText = '';
            return stateCopy;  
        }
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => {
    return (
        {type: 'ADD-MESSAGE'}
    );
  }
export const updateNewMessageActionCreator = (symbol) => {
    return (
        {type: 'UPDATE-NEW-MESSAGE-TEXT', newText: symbol }
    );
}


export default messageReducer;