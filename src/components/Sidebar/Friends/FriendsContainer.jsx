import StoreContext from "../../../StoreContext";
import Friends from "./Friends";


function FriendsContainer() {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState();

          return (
            <Friends friendsData={state.sidebar.friends} />
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default FriendsContainer;

