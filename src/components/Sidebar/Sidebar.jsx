import classes from './Sidebar.module.css'
import Navigation from './Navigation/Navigation';
import Friends from './Friends/Friends'

function Sidebar(props) {
  return (
    <aside className={classes.sidebar}>
      <div className={classes.menu}>
        <Navigation />
        <Friends friendsData={props.sidebarData.friends} />
      </div>
    </aside>
  );
}

export default Sidebar;
