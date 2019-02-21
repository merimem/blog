import React, {Component} from 'react';

class RenderHTML extends Component {
 // eslint-disable-next-line
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div
                className={`${this.props.wrapperClass}`}
                dangerouslySetInnerHTML={{__html: this.props.html}}>
            </div>
        )
    };
}

export default RenderHTML;
