import React from 'react';

class Users extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            users : props.users
        }
    }

    static getDerivedStateFromProps(nextProps, prevState){
        return  {
            users : nextProps.users,
        }
    }


    render() {
        return (
            <div className="users">
                {this.state.users.length ? this.state.users.map((user, i) => {
                    return (
                        <div className="user" key={i}>
                            <i className="fa fa-user"/> {user}
                        </div>
                    )
                }) : 'No Users Online'}
            </div>
        )
    }
}

export default Users;