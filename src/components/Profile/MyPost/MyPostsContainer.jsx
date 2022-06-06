import { connect } from 'react-redux';
import { addPostActionCreator, formingPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostMessage,
    posts: state.profilePage.postsData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost() {
      dispatch(addPostActionCreator());
    },
    formingPostText(text) {
      dispatch(formingPostTextActionCreator(text));
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
