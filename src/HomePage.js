import React, {Component} from 'react';
import Style from './Style.css';
import Sidebar from './Sidebar';
import LazyLoad from 'react-lazy-load';

class HomePage extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    return(

      <div id="home-page-div">
          {
            this.props.sideBar === true
            ?  <Sidebar
            signout={this.props.signout}
            closeSideBar={this.props.closeSideBar}
            sideBar={this.props.sideBar}
            username={this.props.username}
            />
            : null
          }
        <div className="bg-image" id="img1">
        </div>
        <LazyLoad
          debounce={false}
          offsetVertical={300}
          >
          <div className="bg-image" id="img2">
            <img src="https://s3.eu-west-2.amazonaws.com/zimaproducts/categoryicons/architecture2-800.jpg" className="homeImage"/>
          </div>
        </LazyLoad>
        <LazyLoad
          debounce={false}
          offsetVertical={300}
          >
          <div className="bg-image" id="img3">
            <img src="https://s3.eu-west-2.amazonaws.com/zimaproducts/categoryicons/architecture1-800.jpg" className="homeImage" />
          </div>
        </LazyLoad>
        <LazyLoad
          debounce={false}
          offsetVertical={300}
          >
        <div className="bg-image" id="img4">
          <img src="https://s3.eu-west-2.amazonaws.com/zimaproducts/categoryicons/kremlin-800.jpg" className="homeImage"/>
        </div>
        </LazyLoad>
        <div className="bg-text">
        <span onClick={() => this.props.toggleShowingSideBar()}>ZIMA (ЗИМА)
        </span>
        </div>
      </div>
    )
  }
}


export default HomePage;
