import classes from './Sidebar.module.css'
import Navigation from './Navigation/Navigation';
import FriendsContainer from './Friends/FriendsContainer';

function Sidebar() {
  return (
    <aside className={classes.sidebar}>
      <div className={classes.menu}>
        <Navigation />
        <FriendsContainer />
      </div>
    </aside>
  );
}

export default Sidebar;
