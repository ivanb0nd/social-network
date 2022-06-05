import { addPostActionCreator, formingPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';


function MyPostsContainer(props) {
  let state = props.store.getState();

  function addPost() {
    props.store.dispatch(addPostActionCreator());
  }

  function formingPostText(text) {
    props.store.dispatch(formingPostTextActionCreator(text));
  }

  return <MyPosts
    updateNewPostMessage={formingPostText}
    addPost={addPost}
    posts={state.profilePage.postsData}
    newPostText={state.profilePage.newPostMessage}
  />
}

export default MyPostsContainer;
