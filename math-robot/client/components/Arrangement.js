/**
 * Created by Exper1ence on 2016/12/27.
 */
import React, {PropTypes} from 'react'
import Condition from './Condition';
import Item from './Item';
import Add from './Add';
import InputString from './InputString';
import {setValue} from './actions';
import {connect} from 'react-redux';
import Div from './Div';
import Caption from './Caption';
import Button from './Button';

const Arrangement = ({name, dispatch}) => (
    <Condition name={name}>
        <Div>
            <Caption>值：</Caption>
            <InputString/>
        </Div>
    </Condition>
);

Arrangement.propTypes = {};

export default connect()(Arrangement);