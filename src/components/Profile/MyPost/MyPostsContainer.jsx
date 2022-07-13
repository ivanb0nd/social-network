import { connect } from 'react-redux';
import { addPost, formingPostText } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostMessage,
    posts: state.profilePage.postsData
  }
}


const MyPostsContainer = connect(mapStateToProps, {
  addPost,
  formingPostText
})(MyPosts);

export default MyPostsContainer;
