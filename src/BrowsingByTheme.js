import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

class BrowsingByTheme extends Component {

  render() {
    return (
    <div className="theme">
      <Navbar
      signout={this.props.signout}
      username={this.props.username}
      />
      <h2 className="category_eng" id="theme-header">Browse by theme</h2>
        <div id="icons_container">
            <div className="theme_icon">
              <img
                src="https://s3.eu-west-2.amazonaws.com/zimaproducts/categoryicons/noun_suprematism_2209256.png"
                alt="Avatar"
                className="image"
              />
              <Link to="/bytheme/art">
                <div className="overlay_type_1"
                onClick={() => this.props.selectCategory("art")}
                >
                  <div className="text">
                    <h3 className="category_eng">Art</h3>
                    <h3 className="category_rus">изкусстбо</h3>
                  </div>
                </div>
              </Link>
            </div>

            <div className="theme_icon">
              <img
                src="https://s3.eu-west-2.amazonaws.com/zimaproducts/categoryicons/noun_theatre_1628803.png"
                alt="Avatar"
                className="image"
              />
              <Link to="/bytheme/theatre">
                <div className="overlay_type_2"
                onClick={() => this.props.selectCategory("theatre")}
                >
                  <div className="text">
                    <h3 className="category_eng">Theatre</h3>
                    <h3 className="category_rus">Театер</h3>
                  </div>
                </div>
              </Link>
            </div>

            <div className="theme_icon">
              <img
                src="https://s3.eu-west-2.amazonaws.com/zimaproducts/categoryicons/noun_literature_2042388.png"
                alt="Avatar"
                className="image"
              />
              <Link to="/bytheme/literature">
                <div className="overlay_type_1"
                onClick={() => this.props.selectCategory("literature")}
                >
                  <div className="text">
                    <h3 className="category_eng">Literature</h3>
                    <h3 className="category_rus">Литература</h3>
                  </div>
                </div>
              </Link>
            </div>

            <div className="theme_icon">
              <img
                src="https://s3.eu-west-2.amazonaws.com/zimaproducts/categoryicons/noun_accordion_330237.png"
                alt="Avatar"
                className="image"
              />
              <Link to="/bytheme/music">
                <div className="overlay_type_2"
                onClick={() => this.props.selectCategory("music")}
                >
                  <div className="text">
                    <h3 className="category_eng">Music</h3>
                    <h3 className="category_rus">Музика</h3>
                  </div>
                </div>
              </Link>
            </div>

            <div className="theme_icon">
              <img
                src="https://s3.eu-west-2.amazonaws.com/zimaproducts/categoryicons/noun_spaceman_2212791.png"
                alt="Avatar"
                className="image"
              />
                <Link to="/bytheme/space">
                  <div className="overlay_type_1"
                  onClick={() => this.props.selectCategory("space")}
                  >
                    <div className="text">
                      <h3 className="category_eng">Space</h3>
                      <h3 className="category_rus">Козмос</h3>
                    </div>
                  </div>
                </Link>
            </div>

            <div className="theme_icon">
              <img
                  src="https://s3.eu-west-2.amazonaws.com/zimaproducts/categoryicons/noun_ballerina_330245+(1).png"
                  alt="Avatar"
                  className="image" />
                <Link to="/bytheme/ballet">
                  <div className="overlay_type_2"
                  onClick={() => this.props.selectCategory("ballet")}
                  >
                    <div className="text">
                      <h3 className="category_eng">Ballet</h3>
                      <h3 className="category_rus">Балет</h3>
                    </div>
                  </div>
                </Link>
            </div>

            <div className="theme_icon">
              <img
                  src="https://s3.eu-west-2.amazonaws.com/zimaproducts/categoryicons/noun_Snowflake_1986791.png"
                  alt="Avatar"
                  className="image" />
              <Link to="/bytheme/winter">
                  <div className="overlay_type_1"
                  onClick={() => this.props.selectCategory("winter")}
                  >
                    <div className="text">
                      <h3 className="category_eng">Winter</h3>
                      <h3 className="category_rus">Зима</h3>
                    </div>
                  </div>
              </Link>
            </div>

            <div className="theme_icon">
              <img
                  src="https://s3.eu-west-2.amazonaws.com/zimaproducts/categoryicons/noun_Samovar_330246.png"
                  alt="Avatar"
                  className="image"
              />
              <Link to="/bytheme/foodanddrink">
                <div className="overlay_type_2"
                onClick={() => this.props.selectCategory("food and drink")}
                >
                  <div className="text">
                    <h3 className="category_eng">Food and Drink</h3>
                    <h3 className="category_rus">Еда и Напитки</h3>
                  </div>
                </div>
               </Link>
            </div>

            <div className="theme_icon">
              <img
                src="https://s3.eu-west-2.amazonaws.com/zimaproducts/categoryicons/noun_matrioshka_330268.png"
                alt="Avatar"
                className="image" />
              <Link to="/bytheme/toys"
              onClick={() => this.props.selectCategory("toys")}
              >
                <div className="overlay_type_1">
                  <div className="text">
                    <h3 className="category_eng">Toys</h3>
                    <h3 className="category_rus">Игрушки</h3>
                  </div>
                </div>
              </Link>
            </div>

            <div className="theme_icon">
              <img
                src="https://s3.eu-west-2.amazonaws.com/zimaproducts/categoryicons/noun_Ice_Skate_1410015.png"
                alt="Avatar"
                className="image" />
              <Link to="/bytheme/sports">
                <div className="overlay_type_2"
                onClick={() => this.props.selectCategory("sports")}
                >
                  <div className="text">
                    <h3 className="category_eng">Sports</h3>
                    <h3 className="category_rus">Спорт</h3>
                  </div>
                </div>
              </Link>
            </div>

            <div className="theme_icon">
              <img
                src="https://s3.eu-west-2.amazonaws.com/zimaproducts/categoryicons/noun_birch_330314.png"
                alt="Avatar"
                className="image" />
              <Link to="/bytheme/forest">
                <div className="overlay_type_1"
                onClick={() => this.props.selectCategory("forest")}
                >
                  <div className="text">
                    <h3 className="category_eng">Russian forest</h3>
                    <h3 className="category_rus">Русский лес</h3>
                  </div>
                </div>
              </Link>
            </div>
        </div>
    </div>

    )
  }

}

export default BrowsingByTheme;
