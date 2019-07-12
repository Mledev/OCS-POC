import React from 'react';
import video from '../../assets/video.mp4';
import socketIOClient from 'socket.io-client';

class Video extends React.Component {

    constructor(props){
        super(props);
        this.socket = null;
        this.state = {
            //username : localStorage.getItem('username') ? localStorage.getItem('username') : '',
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.socket = socketIOClient('ws://localhost:8989', {
            query : 'username='+localStorage.getItem('username')+'&uid='+localStorage.getItem('uid')
        });

        let media = document.getElementById("video");
   
        media.onplaying = (event) => {
            this.socket.emit('playVid');
        };

        media.onpause = (event) => {
            this.socket.emit('pauseVid');
        };

        this.socket.on('playVid', () => {
            media.play()
        })

        this.socket.on('pauseVid', () => {
            media.pause()
        })

        media.ontimeupdate = (event) => {
            this.socket.emit('currentTime', media.currentTime)
        }

        this.socket.on('currentTime', (time) => {
            let socket = Math.floor(time)
            let local = Math.floor(media.currentTime)
            //console.log('socket:', socket)
            //console.log('local:', local)
            
            if(socket != local && socket != (local+1) && socket != (local-1)){
                if(socket < local){
                    media.currentTime = socket
                }else{
                    media.currentTime = local
                }
            }
        })
    }

    handleClick(e) {
        let media = document.getElementById("video");
    }
    
    render() {
        return (
            <div onClick={this.handleClick} className="video">
                <video src={video} id="video" preload="auto" controls></video>            
            </div>
        )
    }

}

export default Video