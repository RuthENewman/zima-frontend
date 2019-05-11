import React, {Component} from 'react';
import Style from './Style.css';
import Sidebar from './Sidebar';

class HomePage extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  addExtraImages = () => {
    console.log('test if called');
    const bgImage2 = document.getElementById('img2');
    const bgImage3 = document.getElementById('img3');
    const bgImage4 = document.getElementById('img4');
    bgImage2.style.backgroundImage = "url('https://s3.eu-west-2.amazonaws.com/zimaproducts/categoryicons/architecture2.jpg')";
    bgImage3.style.backgroundImage = "url('https://s3.eu-west-2.amazonaws.com/zimaproducts/categoryicons/architecture1.jpg')";
    bgImage4.style.backgroundImage = "url('https://s3.eu-west-2.amazonaws.com/zimaproducts/categoryicons/kremlin.jpg')";
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
        <div className="bg-image" id="img1" onScroll={this.addExtraImages}>
        </div>
        <div className="bg-image" id="img2">
        </div>
        <div className="bg-image" id="img3">
        </div>
        <div className="bg-image" id="img4">
        </div>
        <div className="bg-text">
        <span onClick={() => this.props.toggleShowingSideBar()}>ZIMA (ЗИМА)
        </span>
        </div>
      </div>
    )
  }
}


export default HomePage;
