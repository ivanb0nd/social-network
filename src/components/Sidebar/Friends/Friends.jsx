import FriendItem from './FriendItem/FriendItem';
import classes from './Friends.module.css';


function Friends(props) {
  // only first three friends
  const friendsElement = props.friendsData.slice(0, 3).map(friend => <FriendItem key={friend.id} id={friend.id} name={friend.name.length <= 7 ? friend.name : friend.name.slice(0, 7) + '..'} image={friend.image} />);

  return (
    <div className={classes.friends}>
      <ul className={classes.friends_list}>
        {friendsElement}
      </ul>
    </div>
  )
}

export default Friends;
