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
          </div>
        </LazyLoad>
        <LazyLoad
          debounce={false}
          offsetVertical={300}
          >
          <div className="bg-image" id="img3">
          </div>
        </LazyLoad>
        <LazyLoad
          debounce={false}
          offsetVertical={300}
          >
        <div className="bg-image" id="img4">
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
