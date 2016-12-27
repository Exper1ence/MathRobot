/**
 * Created by Exper1ence on 2016/12/26.
 */
import React, {PropTypes} from 'react'
import Container from './Container';
import Item from './Item';
import Div from './Div';
import {removeCondition} from './actions';
import {connect} from 'react-redux';
import Close from './Close';
import Vid from './Vid';

const Condition = ({children, style, name, dispatch}) => (
    <Vid
        style={Object.assign({
            border: '1px solid #ccc',
            borderRadius: '.25rem',
            position: 'relative',
            flexDirection: 'column',
        }, style)}>
        <Close onClick={() => dispatch(removeCondition({target: name}))}/>
        <Div style={{justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold'}}>
            {name}
        </Div>
        {children}
    </Vid>
);

Condition.propTypes = {};

export default connect()(Condition);