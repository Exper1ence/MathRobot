import React, {PropTypes} from 'react'
import {connect} from 'react-redux';
import {setValue, focusInput} from './actions';
import _ from 'lodash';
import Input from './Input';
import Div from './Div';

const InputArrangement = ({conditions, dispatch, name}) => {
    const cdt = conditions.find(cdt => cdt.name == name);
    cdt.value = cdt.value || [{data: ''}];
    const numbers = cdt.value.map((v, i) => (
        <Input
            name={name}
            focus={i}
            key={i}
            value={v.data}
            onChange={({value, valid}) => {
                dispatch(setValue({
                    value: _.concat(cdt.value.slice(0, i), {data: value, valid,}, cdt.value.slice(i + 1)),
                    name, dirty: false,
                }))
            }}
            onBlur={() => {
                const newValue = cdt.value.filter(v => v.data != '');
                let valid = true;
                for (let v of newValue) {
                    if (!v.valid) {
                        valid = false;
                        break;
                    }
                }
                newValue.push({data: ''});
                dispatch(setValue({
                    value: newValue,
                    name, valid, dirty: newValue.length > 1,
                }));
            }}
            type='positiveInt'
            onEnter={() => dispatch(focusInput({name, focus: cdt.value.length - 1}))}
        />
    ));
    return (
        <div style={{flexDirection:'column'}}>
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