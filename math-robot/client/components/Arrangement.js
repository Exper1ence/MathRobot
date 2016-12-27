/**
 * Created by Exper1ence on 2016/12/27.
 */
import React, {PropTypes} from 'react'
import Condition from './Condition';
import Item from './Item';
import Add from './Add';

const Arrangement = ({}) => (
    <Condition>
        <Item>
            排列
        </Item>
        <Item>
            值：<Add/>
        </Item>
    </Condition>
);

Arrangement.propTypes = {};

export default Arrangement;