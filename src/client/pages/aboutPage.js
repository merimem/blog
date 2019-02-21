import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import InternalTextBanner from './../components/banners/internalTextBanner';
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
 // eslint-disable-next-line
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


                                    <ul className='bg-bubbles'>
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
                                      <h1 className='me'>Meriem MEMMICHE</h1>

                                        <p>
                                        Cher visiteur,
                                        Bienvenue à mon blog.
                                        Je m'appelle Meriem de nationalité Tunisienne et j'habite en France.
                                        J'ai crée ce blog afin de partager avec vous mes aventures et mes expériences.
                                        Je suis à la base informaticienne mais j'essaye de voyager le maximum possible afin
                                         de casser la routine et découvrir ce qui nous cache le monde.
                                        </p>

                                      
                                      </main>



                                </div>

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
