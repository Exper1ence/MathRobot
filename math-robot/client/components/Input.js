import React, {PropTypes} from 'react'
import {connect} from 'react-redux';
import {setValue} from './actions';
import _ from 'lodash';

function check(toCheck, type) {
    let value;
    let valid;
    switch (type) {
        case 'positiveInt':
            valid = toCheck.match(/^\+?\d+$/);
            value = valid ? parseInt(toCheck) : toCheck;
            break;
        default:
            break;
    }
    return {value, valid,}
}

const Input = ({onChange, onDirty, size = 1, type, value}) => (
    <input
        style={{
            borderRadius: '.25rem',
            height: '35px',
            padding: '0 .5rem',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            width: size * 50 + 'px',
        }}
        onChange={(e) => onChange(check(e.target.value.replace(/ /g, ''), type))}
        onBlur={(e) => {
            const toCheck = e.target.value.replace(/ /g, '');
            if (toCheck == '') return;
            onDirty(check(toCheck, type));
        }} value={_.isUndefined(value) ? '' : value}>
    
    </input>
);

export default Input;