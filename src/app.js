import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'font-awesome/css/font-awesome.css';
import './app.scss';
import Navbar from './components/Navbar';
import Chat from './components/chat/Chat';
import Video from './components/video/Video';

class App extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <div className="main-content">
                    <Video/>
                    <Chat/>
                </div>
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);