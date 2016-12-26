/**
 * Created by Exper1ence on 2016/12/26.
 */
import React, {Component} from 'react';
import Title from './Title';
import Add from './Add';
import Container from './Container';

export default class Condition extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <Container>
                <Title name="条件"/>
                <Container>
                    <Add/>
                </Container>
            </Container>
        );
    }
}