/**
 * Created by Exper1ence on 2016/12/26.
 */
import React, {Component} from 'react';

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <div style={Object.assign({width: '100%',margin:'5px'}, this.props.style)}>
                {this.props.children}
            </div>
        );
    }
}