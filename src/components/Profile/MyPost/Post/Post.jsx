import classes from './Post.module.css';

function Post(props) {
  return (
    <div className={classes.post}>
      <div className={classes.post_info}>
        <img src={props.image} alt="post thumbnail" />
        <p>{props.message}</p>
      </div>
      <div className={classes.likes_section}>
        Likes: <span className={classes.likes_count}>{props.likes}</span>
        <button className={`primary_button ${classes.likes_button}`}>Like</button>
      </div>
    </div>
  )
}

export default Post;
