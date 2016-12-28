/**
 * Created by Exper1ence on 2016/12/28.
 */
import React, {PropTypes} from 'react'
import Input from './Input';
import {connect} from 'react-redux';
import {focusInput, setValue} from './actions';

const InputRC = ({style, conditions, name, dispatch}) => {
    const cdt = conditions.find(cdt => cdt.name == name);
    cdt.value = cdt.value || {data: [[]], row: {}, col: {}};
    return (
        <div style={Object.assign({alignItems: 'center'}, style)}>
            行
            <Input
                name={name}
                focus={0}
                size={.3}
                value={cdt.value.row.value}
                style={{margin: '0 5px'}}
                type='positiveInt'
                onChange={({value, valid}) => {
                    dispatch(setValue(Object.assign({}, cdt, {
                        value: Object.assign({}, cdt.value, {
                            row: {value: _.isNumber(value) ? Math.min(value, 10) : value, valid,}
                        })
                    })));
                }}
                onBlur={() => {
                    const {col, row}=cdt.value;
                    const colDir = col.value != undefined && col.value != '';
                    let valid;
                    if (colDir) valid = row.valid && col.valid;
                    else valid = row.valid;
                    const dirty = row.value != undefined && row.value != '';
                    dispatch(setValue(Object.assign({}, cdt, {valid, dirty,})));
                }}
                onEnter={() => {
                    dispatch(focusInput({name, focus: 1}));
                }}
            />
            列
            <Input
                name={name}
                focus={1}
                size={.3}
                value={cdt.value.col.value}
                style={{margin: '0 5px'}}
                type='positiveInt'
                onChange={({value, valid}) => {
                    dispatch(setValue(Object.assign({}, cdt, {
                        value: Object.assign({}, cdt.value, {
                            col: {value: _.isNumber(value) ? Math.min(value, 10) : value, valid,}
                        })
                    })));
                }}
                onBlur={() => {
                    const {col, row}=cdt.value;
                    const rowDir = row.value != undefined && row.value != '';
                    let valid;
                    if (rowDir) valid = col.valid && row.valid;
                    else valid = col.valid
                    const dirty = col.value != undefined && col.value != '';
                    dispatch(setValue(Object.assign({}, cdt, {valid, dirty,})));
                }}
                onEnter={() => dispatch(focusInput({name, focus: 2}))}
            />
        </div>
    )
};

function mapState(state) {
    return {
        conditions: state.conditions.datas,
    }
}
InputRC.propTypes = {};

export default connect(mapState)(InputRC);