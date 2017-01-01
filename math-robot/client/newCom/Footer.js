import React, {PropTypes} from 'react';
import {connect,} from 'react-redux';
import Component from './Component';
import Container from './Container';
import View from './View';
import {propTypes,defaultProps} from './types';

class Footer extends Component{
    constructor(props){
        super(props);
        
    }
    
    run({children,style,}){
        return(
            <Container style={{...style,}}>
                
            </Container>
        );
    }
}
Footer.propTypes ={
    
};
Footer.defaultProps={
    
};
export default Footer;