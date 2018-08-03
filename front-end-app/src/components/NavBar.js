import React, {Component } from 'react'

class NavBar extends Component {

    render() { 
        return (
            < nav className = "navbar navbar-expand-lg navbarColor" >
              <a className="navbar-brand text-white" href="#">Navbar</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className = "nav-link text-white" href = "#" >Concert </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link text-white" href="#">Sports</a>
                  </li>
                  < li className = "nav-item dropdown active" >
                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item " href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
        )
    }
}

export default NavBar