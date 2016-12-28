/**
 * Created by Exper1ence on 2016/12/27.
 */
import React, {PropTypes} from 'react'
import Button from './Button';
import {addCondition, hideModal, hideCurtain} from './actions';
import {connect} from 'react-redux';
import Close from './Close';
import {removeRequirement} from './actions';

const Requirement = ({name, target, dispatch}) => (
    <div style={{
        borderRadius: '.25rem',
        height: '35px',
        padding: '.5rem 1rem',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        alignItems: 'center',
        position: 'relative',
    }}>
        <Close onClick={() => dispatch(removeRequirement({name: target, requirement: name}))}/>
        {name}
    </div>
);

Requirement.propTypes = {};

export default connect()(Requirement);