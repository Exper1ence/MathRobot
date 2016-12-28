import React, {PropTypes, Component} from 'react'
import {connect} from 'react-redux';
import {resetFocus} from './actions';
import _ from 'lodash';

function check(toCheck, type) {
    let value;
    let valid;
    switch (type) {
        case 'positiveInt':
            valid = !!toCheck.match(/^\+?\d+$/);
            value = valid ? parseInt(toCheck) : toCheck;
            break;
        case 'realNumber':
            valid = !!(toCheck.match(/^(\+|-)?\d+$/) || toCheck.match(/^(\+|-)?\d*\.\d+$/));
            value = valid ? parseFloat(toCheck) : toCheck;
            break;
        default:
            break;
    }
    return {value, valid,}
}
class Input extends Component {
    render() {
        const {
            conditions, onChange, onBlur, size = 1, style,
            type, value, onEnter, focus, name, dispatch,
        }=this.props;
        if (name) {
            const cdt = conditions.find(cdt => cdt.name == name);
            if (cdt.focus == focus) {
                setTimeout(() => {
                    this.refs.input.focus();
                    dispatch(resetFocus({name,}));
                })
            }
        }
        return (
            <input
                style={Object.assign({
                    borderRadius: '.25rem',
                    height: '35px',
                    padding: '0 .5rem',
                    backgroundColor: '#fff',
                    border: '1px solid #ccc',
                    width: size * 50 + 'px',
                }, style)}
                onChange={(e) => onChange && onChange(check(e.target.value.replace(/ /g, ''), type))}
                onBlur={(e) => onBlur && onBlur()}
                value={_.isUndefined(value) ? '' : value}
                onKeyUp={e => {
                    if (!e) {
                        const e = window.event;
                    }
                    e.preventDefault();
                    if (e.keyCode == 13) {
                        onBlur && onBlur(check(e.target.value.replace(/ /g, ''), type));
                        this.refs.input.blur();
                        onEnter && onEnter(e);
                    }
                }}
                ref='input'
            />
        );
    }
}

// const Input = ({onChange, onBlur, size = 1, type, value}) =>

function mapState(state) {
    return {
        conditions: state.conditions.datas,
    }
}
export default connect(mapState)(Input);