/**
 * Created by Exper1ence on 2016/12/31.
 */
import React, {PropTypes} from 'react';
import {connect,} from 'react-redux';
import Component from './Component';
import Container from './Container';
import Text from './Text';
import Color from './color';
import {propTypes, defaultProps} from './types';

class Semantic extends Component {
    constructor(props) {
        super(props);
        
    }
    
    run({render, primary, secondary, success, info, warning, danger,}) {
        let backgroundColor = '#fff';
        if (danger) backgroundColor = '#d9534f';
        else if (warning) backgroundColor = '#f0ad4e';
        else if (info) backgroundColor = '#5bc0de';
        else if (success) backgroundColor = '#5cb85c';
        else if (primary) backgroundColor = '#0275d8';
        else if (secondary) return render(Color.hexToRgb({
            color: '#373a3c',
            backgroundColor,
            borderColor: '#ccc',
        }));
        return render(Color.hexToRgb({
            color: '#fff',
            backgroundColor,
            borderColor: backgroundColor,
        }));
    }
}
Semantic.propTypes = {
    ...propTypes.semantic,
    render: PropTypes.func,
};
Semantic.defaultProps = {
    ...defaultProps.semantic,
    render: () => null,
};
export default Semantic;