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
                                    <p>Cher visiteur,
                                    Bienvenue à mon blog.
                                    Je m'appelle Meriem de nationalité Tunisienne et j'habite en France.
                                    J'ai crée ce blog afin de partager avec vous mes aventures et mes expériences.
                                    Je suis à la base informaticienne mais j'essaye de voyager
                                    le maximum possible afin de casser la routine et découvrir ce qui nous cache le monde</p>

                                    <ul class='bg-bubbles'>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                      <li></li>
                                    </ul>
                                    <main>
                                      <h1 class='me'>Jappe</h1>
                                      <div class='main'>
                                        <h1>Hi.</h1>
                                        <p>
                                          <b>I love...</b>
                                        </p>
                                        <ul>
                                          <li>MY CAT!! :o</li>
                                          <li>Coding cool stuff</li>
                                          <li>My girlfriend</li>
                                        </ul>
                                      </div>
                                      <aside>
                                        <h2>Skills</h2>
                                        <ul>
                                          <li>HTML5</li>
                                          <li>CSS3</li>
                                          <li>JavaScript</li>
                                          <li>JQuery</li>
                                          <li>PHP</li>
                                          <li>MySQL</li>
                                          <li>A bit of Java</li>
                                          <li>And a bit of C#</li>
                                        </ul>
                                      </aside>
</main>



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
