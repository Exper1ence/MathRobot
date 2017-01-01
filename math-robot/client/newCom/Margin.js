/**
 * Created by Exper1ence on 2017/1/1.
 */
import React, {PropTypes} from 'react';
import {connect,} from 'react-redux';
import Component from './Component';
import Container from './Container';
import View from './View';
import {propTypes, defaultProps} from './types';

class Margin extends Component {
    constructor(props) {
        super(props);
        
    }
    
    run({children, style, small, normal, large, horizontal, vertical,}) {
        const value = large ? '1rem' : (small ? '.25rem' : '.5rem');
        let margin;
        if (vertical || !horizontal) margin = {height: value};
        else margin = {width: value};
        return (
            <View style={margin}/>
        )
    }
}
Margin.propTypes = {
    ...propTypes.size,
    ...propTypes.direction,
};
Margin.defaultProps = {
    ...defaultProps.size,
    ...defaultProps.direction,
};
export default Margin;
