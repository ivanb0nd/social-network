const ADD_POST = 'ADD-POST';
const FORMING_POST_TEXT = 'FORMING-POST-TEXT';

let initialState = {
  postsData: [
    { id: 1, image: 'https://i.ytimg.com/vi/pJTGAtLH7Hw/maxresdefault.jpg', message: "I miss the part where that's my problem.", likesCount: '1337' },
    { id: 2, image: 'http://images5.fanpop.com/image/photos/26900000/Spider-Man-spider-man-26910501-1440-900.jpg', message: "See ya chump.", likesCount: '6969' },
    { id: 3, image: 'https://preview.redd.it/geod7prhp9u61.jpg?auto=webp&s=e0d2ab4a41289d6738c08485ba4eb299dce42275', message: "Hey everyone, sorry i'm late it's a jungle out there. I had to beat an old lady with a stick to get these cranberries.", likesCount: '100' }
  ],
  newPostMessage: ''
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let currentNewPostText = state.newPostMessage.trim();

      if (currentNewPostText === undefined || currentNewPostText === '') {
        alert('Fill the empty field');
        return;
      }

      let newPost = {
        id: 5,
        image: 'https://c.tenor.com/9qZhM0uswAYAAAAd/bully-maguire-dance.gif',
        message: currentNewPostText,
        likesCount: '0'
      }

      state.postsData.push(newPost);
      state.newPostMessage = '';

      return state;
    case FORMING_POST_TEXT:
      state.newPostMessage = action.newText;
      return state;
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const formingPostTextActionCreator = (text) => (
  {
    type: FORMING_POST_TEXT,
    newText: text
  }
);
