import React, {Component} from 'react';

class InternalTextBanner extends Component {
     // eslint-disable-next-line
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={`topBanner_textOverlay banner_wrap ${this.props.wrapperClass}`}>
                <h1>
                    {this.props.Heading}
                </h1>
            </div>
        )
    };
}

export default InternalTextBanner;
