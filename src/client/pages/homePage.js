import React, {Component} from 'react';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import {Link, NavLink} from 'react-router-dom';

class HomePage extends Component {

    head(){
      return (
        <Helmet bodyAttributes={{class: "homePage"}}>
          <title>{`EveStyleBlog`}</title>
        </Helmet>
      );
    }

    render() {
      return (
        <section className="homePage_wrap">
          {this.head()}
          <div className="hero">
            <div className="content_wrap">
              <h1>
                Tunisian Lady diaries
              </h1>
              <span className="msg">
                Lorem ipsum dolor si?
              </span>
              <Link to="/about">
                <span>Learn more</span>
              </Link>
            </div>
            <div className="pageScroll">
              <i className="fas fa-chevron-down"></i>
            </div>
          </div>
          <div className="main">
            <div className="spotlights">
              <div className="grid">
                <div className="column column_4_12">
                  <div className="item_wrap">
                    <div className="img">
                      <img src="http://via.placeholder.com/300x250" />
                    </div>
                  </div>
                </div>
                <div className="column column_4_12">
                  <div className="item_wrap">
                    <div className="img">
                      <img src="http://via.placeholder.com/300x250" />
                    </div>
                  </div>
                </div>
                <div className="column column_4_12">
                  <div className="item_wrap">
                    <div className="img">
                      <img src="http://via.placeholder.com/300x250" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }

export default {
  component: HomePage
};
