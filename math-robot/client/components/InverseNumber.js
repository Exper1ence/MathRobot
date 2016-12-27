/**
 * Created by Exper1ence on 2016/12/27.
 */
import React, {PropTypes} from 'react'
import Item from './Item';
import Add from './Add';
import Condition from './Condition';
import ShowConnectConditionModal from './ShowConnectConditionModal';
import Close from './Close';
import {removeCondition} from './actions';
import {connect} from 'react-redux';
import Requirement from './Requirement';
import InputRealNumber from './InputRealNumber';

const InverseNumber = ({name, dispatch, datas}) => {
    const data = datas[datas.findIndex(data => data.name == name)];
    return (
        <Condition style={{position: 'relative'}}>
            <Close onClick={() => dispatch(removeCondition({target: name}))}/>
            <Item>
                {name}
            </Item>
            <Item>
                排列：{data.requirement.length ? <Requirement name={data.requirement[0]} target={name}/> :
                <ShowConnectConditionModal ignoreName={name} allowType={['Arrangement']}/>}
            </Item>
            <Item>
                值：<InputRealNumber/>
            </Item>
        </Condition>
    );
};

InverseNumber.propTypes = {};

function mapProps(state) {
    return {
        datas: state.conditions.datas,
    }
}

export default connect(mapProps)(InverseNumber);