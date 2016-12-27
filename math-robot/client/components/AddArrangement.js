/**
 * Created by Exper1ence on 2016/12/27.
 */
import React, {PropTypes} from 'react'
import Button from './Button';
import {addCondition, hideModal, hideCurtain} from './actions';
import {connect} from 'react-redux';

const AddArrangement = ({dispatch}) => (
    <Button onClick={() => {
        dispatch(hideCurtain());
        dispatch(hideModal());
        dispatch(addCondition({condition: 'Arrangement',}));
    }}>
        排列
    </Button>
);

AddArrangement.propTypes = {};

export default connect()(AddArrangement);