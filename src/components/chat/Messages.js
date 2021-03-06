import React from 'react';
import ChatBox from "./ChatBox";
import Message from "./Message";

class Messages extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            height : 0,
            messages : props.messages,
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        return  {
            messages : nextProps.messages,
        }
    }

    componentDidMount(){
        this.assignHeight();
        window.addEventListener("resize",this.assignHeight.bind(this));
    }

    assignHeight(){
        let chat_height = 35;
        let _docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
        this.setState({
            height : _docHeight - 65 - chat_height
        });
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.assignHeight.bind(this));
    }

    render() {
        return (
            <div className="messages" style={{height : this.state.height + 'px'}}>
                {this.state.messages.length ? (
                    this.state.messages.map((message, i) => {
                        return (
                            <Message key={i} message={message}/>
                        )
                    })
                ) : <div className="no-message">Aucun messages</div>}
                    <ChatBox
                        sendMessage={this.props.sendMessage}
                    />
            </div>
        )
    }
}

export default Messages;