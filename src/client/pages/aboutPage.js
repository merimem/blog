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
              <title>{`About - Tunisian Lady diaries`}</title>
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
                                    <p>Cher étranger,
                                    Je m'appelle Meriem, j'ai 25 ans et de nationalité Tunisienne.
                                    J'ai crée ce blog afin de partager avec vous mes aventures et mes expériences.
                                    Je suis une ingénieure en informatique à la base (d'ailleurs j'ai crée ce blog par moi meme)
                                    mais j'essaye de voyager le maximum afin de casser la routine et découvrir le monde.
                                    

                                    </p>




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
