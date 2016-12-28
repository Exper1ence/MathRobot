/**
 * Created by Exper1ence on 2016/12/27.
 */
import React, {PropTypes} from 'react'
import Item from './Item';
import Add from './Add';
import Condition from './Condition';
import ShowConnectConditionModal from './ShowConnectConditionModal';
import Close from './Close';
import {setValue} from './actions';
import {connect} from 'react-redux';
import Requirement from './Requirement';
import Button from './Button';
import Div from './Div';
import Caption from './Caption';
import Fill from './Fill';
import TipLine from './TipLine';
import Input from './Input';

const InverseNumber = ({name, datas,dispatch}) => {
    const data = datas[datas.findIndex(data => data.name == name)];
    return (
        <Condition name={name}>
            {data.dirty ? '' : (<Div><Caption>排列：</Caption>
                    {data.requirement.length ? <Requirement name={data.requirement[0]} target={name}/> :
                        <ShowConnectConditionModal ignoreName={name} allowType={['Arrangement']}/>}
                </Div>)}
            {data.requirement.length == 0 ? (
                    <Div><Caption>值：</Caption>
                        <Input
                            name={name}
                            type='positiveInt'
                            onChange={({value, valid}) => dispatch(setValue({value, name, valid, dirty: false,}))}
                            onDirty={({value, valid}) => dispatch(setValue({name, valid, value, dirty: true,}))}
                            value={data.value}
                        /></Div>) : ''}
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