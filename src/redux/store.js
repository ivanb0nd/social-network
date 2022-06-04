import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";

const store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, image: 'https://i.ytimg.com/vi/pJTGAtLH7Hw/maxresdefault.jpg', message: "I miss the part where that's my problem.", likesCount: '1337' },
        { id: 2, image: 'http://images5.fanpop.com/image/photos/26900000/Spider-Man-spider-man-26910501-1440-900.jpg', message: "See ya chump.", likesCount: '6969' },
        { id: 3, image: 'https://preview.redd.it/geod7prhp9u61.jpg?auto=webp&s=e0d2ab4a41289d6738c08485ba4eb299dce42275', message: "Hey everyone, sorry i'm late it's a jungle out there. I had to beat an old lady with a stick to get these cranberries.", likesCount: '100' }
      ],
      newPostMessage: ''
    },
    dialogPage: {
      dialogsData: [
        { id: 1, name: 'Ivan', image: 'https://cdn-icons-png.flaticon.com/512/147/147144.png' },
        { id: 2, name: 'Dude', image: 'https://dailyamazingthings.com/wp-content/uploads/2021/04/Dude.jpg' },
        { id: 3, name: 'Eva', image: 'https://cdn-icons-png.flaticon.com/512/168/168734.png' },
        { id: 4, name: 'Julia', image: 'https://cdn-icons-png.flaticon.com/512/194/194938.png' },
        { id: 5, name: 'Sam', image: 'https://www.pngarts.com/files/5/User-Avatar-PNG-Free-Download.png' },
      ],
      messagesData: [
        { id: 1, sender: 'Sender', role: 'interlocutor', message: `What's up man` },
        { id: 2, sender: 'Sender', role: 'interlocutor', message: `Are you good?` },
        { id: 3, sender: 'You', role: 'you', message: `All good dude, don't worry about me.` },
      ],
      newMessageText: ''
    },
    sidebar: {
      friends: [
        { id: 1, image: 'https://i.pinimg.com/564x/99/71/8e/99718e720268c900d8356fbed0c587c3.jpg', name: 'Maaaaaaaaaan' },
        { id: 2, image: 'https://i.pinimg.com/736x/37/c1/92/37c1923da432e9a70442621f755b60c3.jpg', name: 'Patrick' },
        { id: 3, image: 'https://i.pinimg.com/564x/a7/31/f0/a731f02004437776e0675152256f3fc5.jpg', name: 'Tailer' },
        { id: 4, image: 'https://i.pinimg.com/564x/8a/80/d0/8a80d0610916faa138c924a5233158b6.jpg', name: 'Teacher' },
      ]
    }
  },
  _callSubscriber() {
    console.log('no subscribers (observers)');
  },

  get getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
}




export default store;
window.store = store;
