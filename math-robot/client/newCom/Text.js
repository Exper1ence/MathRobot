/**
 * Created by Exper1ence on 2016/12/31.
 */
import React from 'react';
import Component from './Component';
import Container from './Container';

export default class Text extends Component {
    constructor(props) {
        super(props);
        
    }
    
    run({children, style,}) {
        return (
            <Container style={{...style}}>
                {children}
            </Container>
        )
    }
};