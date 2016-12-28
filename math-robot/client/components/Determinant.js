/**
 * Created by Exper1ence on 2016/12/28.
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
import InputDeterminant from './InputDeterminant';
import InputRC from './InputRC';


const Determinant = ({name, datas, dispatch}) => {
    const data = datas[datas.findIndex(data => data.name == name)];
    return (
        <Condition name={name}>
            <Div style={{justifyContent: 'center'}}>
                <Caption>值：</Caption>
                <InputRC name={name}/>
            </Div>
            <Div><InputDeterminant name={name}/></Div>
        </Condition>
    );
};

Determinant.propTypes = {};

function mapProps(state) {
    return {
        datas: state.conditions.datas,
    }
}

export default connect(mapProps)(Determinant);