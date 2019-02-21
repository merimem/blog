import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import InternalTextBanner from './../components/banners/internalTextBanner';
import classNames from 'classnames';
import MeetTheTeamSlider from './../components/banners/meetTheTeam';
import { Helmet } from 'react-helmet';

class About extends Component {

    head(){
        return (
            <Helmet bodyAttributes={{class: "aboutPage"}}>
              <title>{`About - Memmicha goes global`}</title>
            </Helmet>
        );
    }

    render() {

        return (
            <div>
                {this.head()}
                <InternalTextBanner Heading="About" wrapperClass="about" />
                <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
                <div className="main anim-appear">
                    <div className="aboutPage_wrapper">
                        <div className="grid">
                            <div className="column column_12_12">
                                <div className="content_block">
                                    <h2>
                                        About me
                                    </h2>


                                    <div class="container">
                                      <div class="frame">
                                        <div class="name">Meriem MEMMICHE</div>
                                        <div class="avatar">
                                        </div>
                                        <div class="info">
                                          <ul>
                                            <li class="tab">
                                              <label>
                                                <input type="radio" name="info_type" checked /><div class="tab_name">&#10224;&nbsp;Home</div>
                                                <div class="info_content"><p>Cher visiteur,
                                                Bienvenue à mon blog.
                                                Je m'appelle Meriem de nationalité Tunisienne et j'habite en France.
                                                J'ai crée ce blog afin de partager avec vous mes aventures et mes expériences.
                                                Je suis à la base informaticienne mais j'essaye de voyager
                                                le maximum possible afin de casser la routine et découvrir ce qui nous cache le monde</p>
                                                </div>
                                              </label>
                                            </li>
                                            <li class="tab">
                                              <label>
                                                <input type="radio" name="info_type"/>
                                                <div class="tab_name">&#9993;&nbsp;Email</div>
                                                <div class="info_content">tonyooisc@gmail.com
                                                </div>
                                              </label>
                                            </li>
                                            <li class="tab">
                                              <label>
                                                <input type="radio" name="info_type"/>
                                                <div class="tab_name">&#9990;&nbsp;Phone</div>
                                                <div class="info_content">+6017-6085193
                                                </div>
                                              </label>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>


                                </div>
                                <MeetTheTeamSlider />
                            </div>
                        </div>
                    </div>
                </div>
                </ReactCSSTransitionGroup>
            </div>
        );
    }

};

export default {
  component: About
};
