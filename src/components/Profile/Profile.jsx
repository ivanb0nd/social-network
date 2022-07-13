import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPost/MyPostsContainer';
import Preloader from '../Preloader/Preloader';

function Profile(props) {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <ProfileInfo name={props.profile.fullName} aboutMe={props.profile.aboutMe} lookingForAJob={props.profile.lookingForAJob} lookingForAJobDescription={props.profile.lookingForAJobDescription} contacts={props.profile.contacts} image={props.profile.photos.large} />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;
