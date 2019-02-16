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
                                    <p>Salut !
                                    Je m'appelle Meriem. J'ai 25 ans et de nationalité Tunisienne.
                                    J'ai crée ce blog pour partage avec vous mes aventures et mes expériences.
                                    </p>
                                    //<p>Pellentesque consectetur massa nec nulla fermentum, at tincidunt elit volutpat. Duis vulputate placerat tortor, sit amet eleifend mauris tincidunt sit amet. Aliquam a maximus ligula. Phasellus nec sapien sed tellus tempor eleifend id a erat. Donec convallis bibendum posuere. Quisque mollis imperdiet malesuada. Suspendisse eget dictum massa.</p>
                                    //<p>Phasellus ac posuere nibh, in finibus nulla. In diam arcu, luctus sit amet condimentum sit amet, tristique et leo. Sed tincidunt justo a porttitor tristique. Nulla eu metus tincidunt, ornare magna ullamcorper, semper lacus. Quisque vitae porttitor odio, id tincidunt tellus. Fusce a suscipit eros. Proin sit amet risus fermentum, lobortis quam sed, consequat velit. Quisque sit amet ultricies lorem. Phasellus scelerisque ipsum eget ipsum posuere suscipit. Proin id molestie mauris, a venenatis ipsum. Quisque efficitur, nibh a dapibus mollis, metus tortor fermentum ante, non pellentesque mi magna non leo. Integer quis sem hendrerit, euismod dolor id, dapibus nulla. Maecenas non ultrices lorem. Pellentesque lobortis, diam eget feugiat lacinia, ante augue ullamcorper tortor, vel ornare sapien lacus pharetra quam.</p>
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
