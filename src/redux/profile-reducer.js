const ADD_POST = 'ADD-POST';
const FORMING_POST_TEXT = 'FORMING-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
  postsData: [
    { id: 1, image: 'https://i.ytimg.com/vi/pJTGAtLH7Hw/maxresdefault.jpg', message: "I miss the part where that's my problem.", likesCount: '1337' },
    { id: 2, image: 'http://images5.fanpop.com/image/photos/26900000/Spider-Man-spider-man-26910501-1440-900.jpg', message: "See ya chump.", likesCount: '6969' },
    { id: 3, image: 'https://preview.redd.it/geod7prhp9u61.jpg?auto=webp&s=e0d2ab4a41289d6738c08485ba4eb299dce42275', message: "Hey everyone, sorry i'm late it's a jungle out there. I had to beat an old lady with a stick to get these cranberries.", likesCount: '100' }
  ],
  newPostMessage: '',
  profile: null,
  myProfileData: {
    name: "Ivan Bondarev",
    date: "12th September",
    city: "Barnaul",
    education: "none",
    webSite: "ivanb0nd.ru",
    image: "https://c.tenor.com/9qZhM0uswAYAAAAd/bully-maguire-dance.gif"
  }
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let currentNewPostText = state.newPostMessage.trim();

      if (currentNewPostText === undefined || currentNewPostText === '') {
        alert('Fill the empty field');
        return state;
      }

      let newPost = {
        id: 5,
        image: 'https://c.tenor.com/9qZhM0uswAYAAAAd/bully-maguire-dance.gif',
        message: currentNewPostText,
        likesCount: '0'
      }

      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostMessage: ''
      };
    }
    case FORMING_POST_TEXT: {
      return {
        ...state,
        newPostMessage: action.newText
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    default:
      return state;
  }
}

export const addPost = () => ({ type: ADD_POST });
export const formingPostText = (text) => ({ type: FORMING_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
