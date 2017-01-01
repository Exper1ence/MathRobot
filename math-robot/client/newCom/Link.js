/**
 * Created by Exper1ence on 2017/1/1.
 */
import React, {PropTypes} from 'react';
import {connect,} from 'react-redux';
import Component from './Component';
import Container from './Container';
import View from './View';
import {propTypes, defaultProps} from './types';
import {Link as A} from 'react-router';

class Link extends Component {
    init({active}) {
        return {active,}
    }
    
    run({children, style, color,}, {active,}) {
        return (
            <A {...this.props} style={{
                ...style,
                textDecoration: 'none',
                color,
                filter: `brightness(${active ? 200 : 100}%)`,
            }}/>
        );
    }
}
Link.propTypes = {
    color: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
    active: PropTypes.bool,
};
Link.defaultProps = {
    color: '#373a3c'
};
export default Link