import classes from './Message.module.css';

function Message(props) {
  return (
    <div className={`${classes.message} ${props.role === 'you' ? classes.you : classes.interlocutor}`}>
      <div className={classes.message_sender}>{props.sender}</div>
      <div className={classes.message_text}>{props.message}</div>
    </div>
  )
}

export default Message;
