import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import React from 'react';




function Dialogs(props) {
  const dialogsElements = props.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id} image={d.image} />)
  const messagesElements = props.messagesData.map(m => <Message message={m.message} sender={m.sender} key={m.id} id={m.id} role={m.role} />)


  function sendMessage() {
    props.sendMessage();
  }

  function updateMessage(e) {
    let text = e.target.value;
    props.updateMessageText(text);
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
          <textarea className={`primary_textarea`} onChange={updateMessage} value={props.newMessageText} placeholder='Type message' rows="1"></textarea>
          <button onClick={sendMessage} className='primary_button'>send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
