import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import React from 'react';
import { updateDialogMessageCreator, addDialogMessageCreator } from '../../redux/dialogs-reducer';




function Dialogs(props) {

  const dialogsElements = props.dialogsPageData.dialogsData.map(d => <DialogItem name={d.name} id={d.id} image={d.image} />)
  const messagesElements = props.dialogsPageData.messagesData.map(m => <Message message={m.message} sender={m.sender} id={m.id} role={m.role} />)


  function sendMessage() {
    props.dispatch(addDialogMessageCreator())
  }

  function updateMessage(e) {
    let text = e.target.value;
    props.dispatch(updateDialogMessageCreator(text));
  }

  return (
    <div className={classes.dialogs}>
      <ul className={classes.dialogs_list}>
        {dialogsElements}
      </ul>
      <div className={classes.dialogs_messages}>
        <div className={classes.dialogs_items}>
          {messagesElements}
        </div>
        <div className={classes.dialogs_input}>
          <textarea onChange={updateMessage} value={props.dialogsPageData.newMessageText} placeholder='Type message' rows="1"></textarea>
          <button onClick={sendMessage} className='primary_button'>send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
