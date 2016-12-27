/**
 * Created by Exper1ence on 2016/12/27.
 */
import React, {PropTypes} from 'react'
import Item from './Item';
import Add from './Add';
import Condition from './Condition';
const InverseNumber = ({}) => (
    <Condition style={{
        justifyContent: 'space-between'
    }}>
        逆序数
        <Item>
            排列：<Add/>
        </Item>
        <Item>
            值：<Add/>
        </Item>
    </Condition>
);

InverseNumber.propTypes = {};

export default InverseNumber;