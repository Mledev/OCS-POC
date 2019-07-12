import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault()

        localStorage.removeItem("username")
        //localStorage.removeItem("uid")

        location.reload(true)
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="#">OCS multi-écran</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item float-right">
                            <button onClick={this.handleClick} className="nav-link">Disconnect</button>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;