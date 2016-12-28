import React, {PropTypes} from 'react'
import {connect} from 'react-redux';
import {setValue} from './actions';
import _ from 'lodash';
import Input from './Input';
import Div from './Div';

const InputArrangement = ({conditions, dispatch, name}) => {
    const cdt = conditions.find(cdt => cdt.name == name);
    cdt.value = cdt.value || [''];
    const numbers = cdt.value.map((v, i) => (
        <Input
            key={i}
            value={v}
            onChange={({value, valid}) => {
                dispatch(setValue({
                    value: _.concat(cdt.value.slice(0, i), value, cdt.value.slice(i + 1)),
                    name, valid, dirty: false,
                }))
            }}
            onDirty={({value, valid}) => dispatch(setValue({
                value: (valid && i == cdt.value.length - 1) ? [...cdt.value, ''] : [...cdt.value],
                name, valid, dirty: true,
            }))}
            type='positiveInt'
        />
    ));
    return (
        <div>
            {numbers}
        </div>
    )
};

InputArrangement.propTypes = {};
function mapState(state) {
    return {
        conditions: state.conditions.datas,
    }
}

export default connect(mapState)(InputArrangement);