import React from 'react'
import {Link} from 'react-router'
import {Navbar, MenuItem, Nav, NavItem, NavDropdown} from 'react-bootstrap'



class Header extends React.Component {
  render() {

	const navbarInstance = (
	  <ul className="nav nav-tabs">
		  <li role="presentation" className={this.props.location.pathname == '/' ? 'active' : ''}><Link to="/">Home</Link></li>
		  <li role="presentation" className={this.props.location.pathname.includes('todos') ? 'active' : ''}><Link to="/todos">Todos</Link></li>
		  <li role="presentation" className={this.props.location.pathname == '/contact-us' ? 'active' : ''}><Link to="/contact-us">Contact Us</Link></li>
		</ul>
	)

    return (
      <div className="m-header">
        <div className="w1010 m0A">
          { navbarInstance }
        </div>
      </div>
    )
  }
}
export default Header
