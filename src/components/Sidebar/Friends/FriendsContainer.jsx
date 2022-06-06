import { connect } from "react-redux";
import Friends from "./Friends";




const mapStateToProps = (state) => {
  return {
    friendsData: state.sidebar.friends
  }
}

const mapDispatchToProps = (dispatch) => {

}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;

