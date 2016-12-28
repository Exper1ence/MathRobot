/**
 * Created by Exper1ence on 2016/12/27.
 */
import React, {PropTypes} from 'react'
import Condition from './Condition';
import {connect} from 'react-redux';
import Div from './Div';
import Caption from './Caption';
import Input from './Input';
import InputArrangement from './InputArrangement';

const Arrangement = ({name, dispatch}) => (
    <Condition name={name}>
        <Div>
            <Caption>值：</Caption>
            <InputArrangement name={name}/>
        </Div>
    </Condition>
);

Arrangement.propTypes = {};

export default connect()(Arrangement);