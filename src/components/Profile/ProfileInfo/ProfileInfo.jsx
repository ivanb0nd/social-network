import classes from './ProfileInfo.module.css';

function ProfileInfo(props) {
  return (
    <div className={classes.info}>
      <div className={classes.avatar}>
        <img src={props.image} alt="profile avatar" />
      </div>
      <div className={classes.about}>
        <h2>{props.name}</h2>
        <p className={classes.status}>{props.aboutMe}</p>
        <div className={classes.aboutContacts}>
          <p>Contacts</p>
          <ul className={classes.aboutContacts_list}>
            <li>
              VK: {props.contacts.vk ? <a target="_blank" rel="noreferrer" href={`https://${props.contacts.vk}`}>{props.contacts.vk}</a> : 'none'} <br />
            </li>
            <li>
              GitHub: {props.contacts.github ? <a rel="noreferrer" target="_blank" href={`https://${props.contacts.github}`}>{props.contacts.github}</a> : 'none'} <br />
            </li>
            <li>
              Web-Site: {props.contacts.website ? props.contacts.website : 'none'} <br />
            </li>
          </ul>
        </div>
        <div className={classes.jobInfo}>
          <p>{`Looking for a job ${props.lookingForAJob ? '✔️' : '❌'}`}</p>
          <p className={classes.jobStatus}>{props.lookingForAJobDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;
