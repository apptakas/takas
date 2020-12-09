
import React from 'react';
import img1 from "../img/logo_takas_ico_bg_black.png";

class Panel extends React.Component {

    render() {
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav metismenu" id="side-menu">
                        <li className="nav-header">
                            <div className="dropdown profile-element">
                                <img alt="imagen" className="img-thumbnail img-fluid" src={img1} />
                                <a data-toggle="dropdown" className="dropdown-toggle" href="/">
                                    <span className="block m-t-xs font-bold">ronny</span>
                                    <span className="text-muted text-xs block">Admin<b className="caret"></b></span>
                                </a>
                                <ul className="dropdown-menu animated fadeInRight m-t-xs">

                                    <li><a className="dropdown-item" href="/">Logout</a></li>
                                </ul>
                            </div>
                            <div className="logo-element">
                                DS
                    </div>
                        </li>
                        <li>
                            <a href="/dashboard"><i className="fa fa-diamond active"></i> <span className="nav-label">Escritorio</span></a>
                        </li>
                        <li>
                            <a href="/"><i className="fa fa-bar-chart-o"></i> <span className="nav-label">Clientes</span><span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level collapse">
                                <li><a href="/">Crear Nuevo Cliente</a></li>
                                <li><a href="/">Listado de Clientes</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/"><i className="fa fa-bar-chart-o"></i> <span className="nav-label">Gestión</span><span className="fa arrow"></span></a>
                            <ul className="nav nav-second-level collapse">
                                <li><a href="/">Mis gestiones</a></li>
                                <li><a href="/">Gestiones Pendientes</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>);
    }
}

export default Panel;

