/**
 * Created by Exper1ence on 2016/12/27.
 */
import React, {PropTypes} from 'react'
import Item from './Item';
import Add from './Add';
import Condition from './Condition';
import ShowConnectConditionModal from './ShowConnectConditionModal';

const InverseNumber = ({}) => (
    <Condition>
        <Item>
            逆序数
        </Item>
        <Item>
            排列：<ShowConnectConditionModal/>
        </Item>
        <Item>
            值：<Add/>
        </Item>
    </Condition>
);

InverseNumber.propTypes = {};

export default InverseNumber;