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

const Arrangement = ({name, dispatch}) => (
    <Condition>
        <Item>
            {name}
        </Item>
        <Item>
            值：<InputString onInput={(value) => {
            dispatch(setValue({target: name, value,}));
        }}/>
        </Item>
    </Condition>
);

Arrangement.propTypes = {};

export default connect()(Arrangement);