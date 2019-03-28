import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Sidebar extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    return (
      <div id="sideNavBar" className="sidenav">
         <p className="closebtn category_eng" onClick={() => this.props.closeSideBar()}>X</p>
         <Link to="/about" className="category_eng">About</Link>
         <Link to="/allproducts" className="category_eng">Browse All</Link>
         <Link to="/allbytheme" className="category_eng">Browse By Theme</Link>
         {
           this.props.username !== ''
           ? <Link to="/myaccount" className="category_eng">My Account</Link>
           : <Link to="/createaccount" className="category_eng">Create an account</Link>
         }
         {
           this.props.username !== ''
           ? <Link to="/" className="category_eng" onClick={this.props.signout}>Log out</Link>
           : <Link to="/signin" className="category_eng">Log in</Link>
         }
         <Link to="/comingsoon" className="category_eng">По-Русский</Link>
      </div>
    )
  }

}

export default Sidebar;
