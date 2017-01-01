/**
 * Created by Exper1ence on 2016/12/31.
 */
import React, {PropTypes} from 'react';
import {connect,} from 'react-redux';
import Component from './Component';
import Container from './Container';
import Text from './Text';
import Margin from './Margin';
import {propTypes, defaultProps} from './types';

class MarginList extends Component {
    constructor(props) {
        super(props);
        
    }
    
    run({children, style, horizontal, vertical,}) {
        const elements = [];
        for (let i = 0, len = children.length - 1; i < len; i++) {
            elements.push(children[i]);
            elements.push(<Margin {...this.props} key={i + children.length}/>);
        }
        elements.push(children[children.length - 1]);
        const flexDirection = vertical || !horizontal ? 'column' : 'row';
        return (
            <Container style={{flexDirection, ...style,}}>
                {elements}
            </Container>
        );
    }
}
MarginList.propTypes = {
    ...propTypes.size,
    ...propTypes.direction,
};
MarginList.defaultProps = {
    ...defaultProps.size,
    ...defaultProps.direction,
};
export default MarginList;