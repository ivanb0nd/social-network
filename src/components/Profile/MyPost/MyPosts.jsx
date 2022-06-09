import classes from './MyPosts.module.css';
import Post from './Post/Post';


function MyPosts(props) {
  const postsElements = props.posts.map(p => <Post key={p.id} id={p.id} image={p.image} message={p.message} likes={p.likesCount} />);


  function addPost() {
    props.addPost();
  }

  function formingPostText(e) {
    let postText = e.target.value;
    props.formingPostText(postText);
  }

  return (
    <div className={classes.posts}>
      <h2 className={classes.posts__header}>My post</h2>
      <form className={classes.form}>
        <textarea onChange={formingPostText} value={props.newPostText} placeholder='Type your post here' cols="30" rows="7"></textarea>
        <button type="button" className='primary_button' onClick={addPost}>Add post</button>
      </form>
      <div className={classes.posts__list}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
