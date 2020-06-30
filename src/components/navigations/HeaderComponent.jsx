import React from 'react'
import {Link} from 'react-router-dom'
import AuthenticationService from '../../services/AuthenticationService'
import {withRouter} from 'react-router'

function HeaderComponent() {
    let authenticated = AuthenticationService.isLoggedIn()
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="navbar-brand">Find a Guru</div>
                <ul className="navbar-nav">
                    {!authenticated && <li><Link to="/findaguru/home" className="nav-link">Home</Link></li>}
                    {!authenticated && <li className="nav-link">Find a guru</li>}
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    {!authenticated &&<li><Link to="/findaguru/beaguru/login" className="nav-link">Be a guru</Link></li>}
                    {authenticated && <li><Link to="/findaguru/beaguru/login" className="nav-link" onClick={AuthenticationService.unregisterUser}>Sign out</Link></li>}
                </ul>
            </nav>
        </header>
    )
}

export default withRouter(HeaderComponent)