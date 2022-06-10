import UserCard from "./UserCard/UserCard";
import classes from './User.module.css';

const Users = (props) => {
  // debugger
  if (props.users.length === 0) {
    props.setUsers([
      { id: 1, followed: false, avatar: 'https://chpic.su/_data/stickers/p/Pepefliperskaya/Pepefliperskaya_001.webp', fullName: 'Ivan Bondarev', location: { country: 'Russia', city: 'Barnaul' }, status: 'I\'m fine' },
      { id: 2, followed: true, avatar: 'https://chpic.su/_data/stickers/p/Pepefliperskaya/Pepefliperskaya_001.webp', fullName: 'Oleg Necheporenko', location: { country: 'Russia', city: 'Barnaul' }, status: 'I\'m fine' },
      { id: 3, followed: false, avatar: 'https://chpic.su/_data/stickers/p/Pepefliperskaya/Pepefliperskaya_001.webp', fullName: 'Barry Allen', location: { country: 'Russia', city: 'Barnaul' }, status: 'I\'m fine' }
    ])
  }

  let users = props.users.map(u => {

    return <UserCard
      key={u.id}
      id={u.id}
      fullName={u.fullName}
      country={u.location.country}
      city={u.location.city}
      status={u.status}
      followed={u.followed}
      avatar={u.avatar}
      follow={props.follow}
    />
  })
  return (
    <div className={classes.users}>
      {users}
      <button>SHOW MORE</button>
    </div>
  )
}

export default Users;
