import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search';
import Repository from './components/Repository';
import Profile from './components/Profile';
import Avatar from './components/Avatar';
import './styles/main.css';

const App = () => {
    return (
        <div>
            <h1>GitHub Search App</h1>
            <Search />
            <Repository />
            <Profile />
            <Avatar />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));