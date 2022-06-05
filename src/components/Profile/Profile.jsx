import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPost/MyPostsContainer';

function Profile(props) {
  return (
    <div>
      <div className={classes.image}>
        <img src="https://media.sketchfab.com/models/9e5ef9a74ad94484b7ba5f88ef693b83/thumbnails/49b60ff6c1f54011a41c464e83f23c6c/0d980fedabfe4073bee19eb52c42b54e.jpeg" alt="Just profile decoration" />
      </div>
      <ProfileInfo name="Ivan Bondarev" date="12th September" city="Barnaul" education="none" webSite="ivanb0nd.ru" image="https://c.tenor.com/9qZhM0uswAYAAAAd/bully-maguire-dance.gif" />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;
