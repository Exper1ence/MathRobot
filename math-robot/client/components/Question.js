/**
 * Created by Exper1ence on 2016/12/27.
 */
import React, {PropTypes} from 'react'
import Button from './Button';
import {removeQuestion} from './actions';
import {connect} from 'react-redux';
import Close from './Close';
import {removeRequirement} from './actions';

const Question = ({name, dispatch}) => (
    <div style={{
        borderRadius: '.25rem',
        height: '35px',
        padding: '.5rem 1rem',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        alignItems: 'center',
        position: 'relative',
        marginRight: '5px',
    }}>
        <Close onClick={() => dispatch(removeQuestion({name,}))}/>
        {name}
    </div>
);

Question.propTypes = {};

export default connect()(Question);