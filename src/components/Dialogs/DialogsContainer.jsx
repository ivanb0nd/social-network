import { updateDialogMessageCreator, addDialogMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogPage.dialogsData,
    messagesData: state.dialogPage.messagesData,
    newMessageText: state.dialogPage.newMessageText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(addDialogMessageCreator())
    },
    updateMessageText: (text) => {
      dispatch(updateDialogMessageCreator(text))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
