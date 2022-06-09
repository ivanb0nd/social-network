const ADD_DIALOG_MESSAGE = 'ADD-DIALOG-MESSAGE';
const UPDATE_DIALOG_MESSAGE = 'UPDATE-DIALOG-MESSAGE'

let initialState = {
  dialogsData: [
    { id: 1, name: 'Ivan', image: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
    { id: 2, name: 'Dude', image: 'https://dailyamazingthings.com/wp-content/uploads/2021/04/Dude.jpg' },
    { id: 3, name: 'Eva', image: 'https://cdn-icons-png.flaticon.com/512/168/168734.png' },
    { id: 4, name: 'Julia', image: 'https://cdn-icons-png.flaticon.com/512/194/194938.png' },
    { id: 5, name: 'Sam', image: 'https://www.pngarts.com/files/5/User-Avatar-PNG-Free-Download.png' },
  ],
  messagesData: [
    { id: 1, sender: 'Sender', role: 'interlocutor', message: `What's up man` },
    { id: 2, sender: 'Sender', role: 'interlocutor', message: `Are you good?` },
    { id: 3, sender: 'You', role: 'you', message: `All good dude, don't worry about me.` },
  ],
  newMessageText: ''
}

export const dialogsReducer = (state = initialState, action) => {



  switch (action.type) {
    case ADD_DIALOG_MESSAGE: {
      let currentNewMessageText = state.newMessageText.trim();
      if (currentNewMessageText === '' || currentNewMessageText === undefined) {
        return;
      }
      let newMessage = {
        id: 4,
        sender: 'You',
        role: 'you',
        message: state.newMessageText
      }

      let stateCopy = { ...state };
      stateCopy.messagesData = [...state.messagesData];

      stateCopy.messagesData.push(newMessage);
      stateCopy.newMessageText = '';
      return stateCopy;
    }
    case UPDATE_DIALOG_MESSAGE: {
      let stateCopy = { ...state };

      stateCopy.newMessageText = action.updatedText;
      return stateCopy;
    }

    default:
      return state;
  }

}

export const addDialogMessageCreator = () => ({ type: ADD_DIALOG_MESSAGE, });
export const updateDialogMessageCreator = (text) => (
  {
    type: UPDATE_DIALOG_MESSAGE,
    updatedText: text
  }
);
