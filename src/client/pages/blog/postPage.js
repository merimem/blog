import React, {Component} from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { fetchPost,clearPostData } from './../../actions'
import { Helmet } from 'react-helmet';
import InternalTextBanner from './../../components/banners/internalTextBanner';
import RenderHTML from './../../components/renderHTML';

class Post extends Component {

    componentDidMount(){
        console.log(this.props);
        this.props.fetchPost(this.props.match.params.id);
    }
    componentWillUnmount(){
        this.props.clearPostData();
    }

    render() {

        if(!this.props.postData[0] === false){

          const post = this.props.postData[0].post;
            return(
                <div>
                    <Helmet bodyAttributes={{class: "postPage"}}>
                        <title>{`${this.props.postData[0].postTitle} - Memmicha goes global`}</title>
                    </Helmet>
                    <InternalTextBanner Heading={this.props.postData[0].postTitle} wrapperClass="post" />
                    <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
                    <div className="main anim-appear">
                        <div className="grid">
                            <div className="column column_12_12">
                                <div className="post">
                                    <div className="post_banner">
                                        <img src={this.props.postData[0].imageUrl} />
                                    </div>
                                    <RenderHTML wrapperClass="user_content" html={post} />
                                </div>
                            </div>
                        </div>
                    </div>
                    </ReactCSSTransitionGroup>
                </div>
            );
        }

        if(this.props.postData[0] == null){
            return (
                <div>
                    <Helmet bodyAttributes={{class: "postPage"}}>
                        <title>{`Memmiche goes global`}</title>
                    </Helmet>
                    <InternalTextBanner Heading="" wrapperClass="post" />
                    <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
                    <div className="main anim-appear">
                        <div className="grid">
                            <div className="column column_12_12">
                                <div className="post">

                                </div>
                            </div>
                        </div>
                    </div>
                    </ReactCSSTransitionGroup>
                </div>
            );
        }

        if(this.props.postData[0] == false){
            return (
                <div>
                    <Helmet bodyAttributes={{class: "postPage"}}>
                        <title>{`404 not found - Memmiche goes global`}</title>
                    </Helmet>
                    <InternalTextBanner Heading="404 not found" wrapperClass="post" />
                    <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
                    <div className="main anim-appear">
                        <div className="grid">
                            <div className="column column_12_12">
                                <div className="post">

                                </div>
                            </div>
                        </div>
                    </div>
                    </ReactCSSTransitionGroup>
                </div>
            );
        }



    }
  }

function mapStateToProps(state){
    return {
        postData: state.post
    };
};

function loadData(store, landingPageID){
    return store.dispatch(fetchPost(landingPageID));
}

export default {
    loadData,
    component: connect(mapStateToProps, { fetchPost, clearPostData })(Post)
};
