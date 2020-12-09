
import React from 'react';

class Navbar extends React.Component {

    render() {
        return (
            <div className="row border-bottom">
                <nav className="navbar navbar-static-top white-bg" role="navigation">
                    <div className="navbar-header">
                        <a className="navbar-minimalize minimalize-styl-2 btn btn-primary" href="./"><i className="fa fa-bars"/> </a>
                        <form role="search" className="navbar-form-custom" action="/record/search" method="POST">
                            <div className="form-group">
                                <input type="text" placeholder="Busca Cedula o Placa..." className="form-control" name="record" id="top-search" />
                            </div>
                        </form>
                    </div>
                    <ul className="nav navbar-top-links navbar-right">
                        <li>
                            <a href="/logout">
                                <i className="fa fa-sign-out" /> Log out
                    </a>
                        </li>
                    </ul>
                </nav>
            </div>);
    }
}

export default Navbar;



