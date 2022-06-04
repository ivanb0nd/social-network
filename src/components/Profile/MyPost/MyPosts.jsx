import React from 'react';
import { addPostActionCreator, formingPostTextActionCreator } from '../../../redux/profile-reducer';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


function MyPosts(props) {
  const postsElements = props.profilePageData.postsData.map(p => <Post id={p.id} image={p.image} message={p.message} likes={p.likesCount} />);

  // const postsElements = postsData.map(temp)

  // function temp(i) {
  //   return <Post id={i.id} image={i.image} message={i.message} likes={i.likesCount} />
  // }


  let newPostElement = React.createRef();

  function addPost() {
    props.dispatch(addPostActionCreator());
  }

  function formingPostText() {
    let postText = newPostElement.current.value;
    props.dispatch(formingPostTextActionCreator(postText));
  }

  return (
    <div className={classes.posts}>
      <h2 className={classes.posts__header}>My post</h2>
      <form className={classes.form}>
        <textarea onChange={formingPostText} ref={newPostElement} value={props.profilePageData.newPostMessage} placeholder='Type your post here' cols="30" rows="7"></textarea>
        <button type="button" className='primary_button' onClick={addPost}>Add post</button>
      </form>
      <div className={classes.posts__list}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;
