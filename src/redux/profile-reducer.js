const ADD_POST = 'ADD-POST';
const FORMING_POST_TEXT = 'FORMING-POST-TEXT';

export const profileReducer = (state, action) => {
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
