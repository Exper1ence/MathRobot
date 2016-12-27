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
import Button from './Button';
import Div from './Div';
import Caption from './Caption';
import Fill from './Fill';

const InverseNumber = ({name, datas}) => {
    const data = datas[datas.findIndex(data => data.name == name)];
    return (
        <Condition name={name}>
            <Div>
                <Caption>排列：</Caption>
                {data.requirement.length ? <Requirement name={data.requirement[0]} target={name}/> :
                    <ShowConnectConditionModal ignoreName={name} allowType={['Arrangement']}/>}
            </Div>
            <Div>
                <Caption>值：</Caption>
                <Button warning>
                    未知
                </Button>
            </Div>
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