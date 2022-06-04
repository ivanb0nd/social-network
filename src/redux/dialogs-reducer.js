const ADD_DIALOG_MESSAGE = 'ADD-DIALOG-MESSAGE';
const UPDATE_DIALOG_MESSAGE = 'UPDATE-DIALOG-MESSAGE'

export const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_DIALOG_MESSAGE:
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

      state.messagesData.push(newMessage);
      state.newMessageText = '';
      return state;
    case UPDATE_DIALOG_MESSAGE:
      state.newMessageText = action.updatedText;
      return state;
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
