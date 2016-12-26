/**
 * Created by Exper1ence on 2016/12/26.
 */
import React, {Component} from 'react';
import Line from './Line';
import Container from './Container';


export default class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <Container style={{
                fontSize: '50px',
                color: '#373a3c',
            }}>
                {this.props.name}
                <Line/>
            </Container>
        );
    }
}