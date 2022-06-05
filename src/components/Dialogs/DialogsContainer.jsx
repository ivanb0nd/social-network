import { updateDialogMessageCreator, addDialogMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';




function DialogsContainer(props) {
  let state = props.store.getState();

  function sendMessage() {
    props.store.dispatch(addDialogMessageCreator())
  }

  function updateMessageText(text) {
    props.store.dispatch(updateDialogMessageCreator(text));
  }

  return <Dialogs
    dialogsData={state.dialogPage.dialogsData}
    messagesData={state.dialogPage.messagesData}
    sendMessage={sendMessage}
    updateMessageText={updateMessageText}
    newMessageText={state.dialogPage.newMessageText}
  />
}

export default DialogsContainer;
