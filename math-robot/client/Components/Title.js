/**
 * Created by Exper1ence on 2016/12/26.
 */
import React, {Component} from 'react';
import Line from './Line';


export default class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <div style={{
                fontSize: '50px',
                color: 'deepskyblue',
            }}>
                {this.props.name}
                <Line/>
            </div>
        );
    }
}