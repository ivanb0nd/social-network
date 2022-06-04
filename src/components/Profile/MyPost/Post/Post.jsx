import s from './Post.module.css';

function Post(props) {
  return (
    <div className={s.post}>
      <div className={s.post_info}>
        <img src={props.image} alt="post thumbnail" />
        <p>{props.message}</p>
      </div>
      <div className={s.likes_section}>
        Likes: <span className={s.likes_count}>{props.likes}</span>
        <button className={s.likes_button}>Like</button>
      </div>
    </div>
  )
}

export default Post;
