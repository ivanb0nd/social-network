import { addPostActionCreator, formingPostTextActionCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';


function MyPostsContainer() {

  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState();

          function addPost() {
            store.dispatch(addPostActionCreator());
          }

          function formingPostText(text) {
            store.dispatch(formingPostTextActionCreator(text));
          }

          return (
            <MyPosts
              updateNewPostMessage={formingPostText}
              addPost={addPost}
              posts={state.profilePage.postsData}
              newPostText={state.profilePage.newPostMessage}
            />
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;
