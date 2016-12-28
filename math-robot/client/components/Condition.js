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
import TipLine from './TipLine';

const Condition = ({children, style, name, dispatch,}) => (
    <div style={{
        border: '1px solid #ccc',
        borderRadius: '.25rem',
        position: 'relative',
        flexDirection: 'column',
    }}>
        <Close onClick={() => dispatch(removeCondition({ name}))}/>
        <Vid
            style={Object.assign({
                flexDirection: 'column',
            }, style)}>
            <Div style={{justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold'}}>
                {name}
            </Div>
            {children}
        </Vid>
        <TipLine name={name}/>
    </div>
);

Condition.propTypes = {};

export default connect()(Condition);