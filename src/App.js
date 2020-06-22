import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import MessagesContainer from './components/Messages/MessagesContainer';
import { Route, BrowserRouter } from 'react-router-dom';
import NewsContainer from './components/News/NewsContainer';
import CommunitiesContainer from './components/Communities/CommunitiesContainer';
import UsersContainer from './components/Users/UsersContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
          <Header />
          <NavBar />
          <div className='main-content-wrapper'>
              <Route path='/profile' render={ () => <Profile profilePage={props.appState.profilePage}
                                        dispatch={props.dispatch}  />}/>
              <Route path='/messages'render={ () => <MessagesContainer store={props.store}
                                        />} />
              <Route path='/news' render={ () => <NewsContainer store={props.store}/>} />
              <Route path='/communities' render={ () => <CommunitiesContainer />}/>
              <Route path='/users' render={ () => <UsersContainer />}/>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
