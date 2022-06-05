import { updateDialogMessageCreator, addDialogMessageCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';




function DialogsContainer() {
  return (
    <StoreContext.Consumer>
      {
        (store) => {

          let state = store.getState();

          function sendMessage() {
            store.dispatch(addDialogMessageCreator())
          }

          function updateMessageText(text) {
            store.dispatch(updateDialogMessageCreator(text));
          }

          return <Dialogs
            dialogsData={state.dialogPage.dialogsData}
            messagesData={state.dialogPage.messagesData}
            sendMessage={sendMessage}
            updateMessageText={updateMessageText}
            newMessageText={state.dialogPage.newMessageText}
          />
        }
      }

    </StoreContext.Consumer>
  )
}

export default DialogsContainer;
