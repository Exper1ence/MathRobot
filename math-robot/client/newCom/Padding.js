/**
 * Created by Exper1ence on 2016/12/31.
 */
import React from 'react';
import Component from './Component';
import Container from './Container';
import Text from './Text';

export default class Padding extends Component {
    constructor(props) {
        super(props);
        
    }
    
    run({children, style, small, large,}) {
        return (
            <Container style={{padding: large ? '1rem' : (small ? '.25rem' : '.5rem')}}>
                {children}
            </Container>
        )
    }
};