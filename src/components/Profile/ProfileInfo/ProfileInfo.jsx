import classes from './ProfileInfo.module.css';

function ProfileInfo(props) {
  return (
    <div className={classes.info}>
      <div className={classes.avatar}>
        <img src={props.image} alt="profile avatar" />
      </div>
      <div className={classes.about}>
        <h2>{props.name}</h2>

        Date of Birth: {props.date} <br />
        City: {props.city} <br />
        Education: {props.education} <br />
        Web-Site: {props.webSite} <br />
      </div>
    </div>
  )
}

export default ProfileInfo;
