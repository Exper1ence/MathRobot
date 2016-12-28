/**
 * Created by Exper1ence on 2016/12/27.
 */
import React, {PropTypes} from 'react'
import {connect} from 'react-redux';
import {setValue} from './actions';
import _ from 'lodash';

function check(toCheck, type) {
    let value;
    let valid;
    switch (type) {
        case 'int':
            valid = toCheck.match(/^\d+$/);
            value = valid ? parseInt(toCheck) : toCheck;
            break;
        default:
            break;
    }
    return {value, valid,}
}

const Input = ({onChange, size = 1, conditions, dispatch, name, type}) => {
    const cdt = conditions.find(cdt => cdt.name == name);
    return (
        <input
            style={{
                borderRadius: '.25rem',
                height: '35px',
                padding: '0 .5rem',
                backgroundColor: '#fff',
                border: '1px solid #ccc',
                width: size * 50 + 'px',
            }} onChange={(e) => {
            const {value, valid}=check(e.target.value.replace(/ /g, ''), type);
            dispatch(setValue({value, name, valid, dirty: false,}));
        }} onBlur={(e) => {
            const toCheck = e.target.value.replace(/ /g, '');
            if (toCheck == '') return dispatch(setValue({name, dirty: false,}));
            const {value, valid}=check(toCheck, type);
            dispatch(setValue({name, valid, value, dirty: true,}));
        }} value={_.isUndefined(cdt.value) ? '' : cdt.value}>
        
        </input>
    )
};

Input.propTypes = {};
function mapState(state) {
    return {
        conditions: state.conditions.datas,
    }
}

export default connect(mapState)(Input);