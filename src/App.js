import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Routes, Route } from 'react-router-dom';

function App(props) {
  return (
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <Sidebar sidebarData={props.state.sidebar} />
        <main className='content'>
          <Routes>
            <Route path="/profile" element={<Profile
              profilePageData={props.state.profilePage}
              dispatch={props.dispatch} />} />
            <Route path="/dialogs/*" element={<Dialogs dialogsPageData={props.state.dialogPage} dispatch={props.dispatch} />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
