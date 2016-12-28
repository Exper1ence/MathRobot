/**
 * Created by Exper1ence on 2016/12/28.
 */
import React, {PropTypes} from 'react'
import Button from './Button';
import {addCondition, hideModal, hideCurtain} from './actions';
import {connect} from 'react-redux';

const AddDeterminant = ({dispatch}) => (
    <Button onClick={() => {
        dispatch(hideCurtain());
        dispatch(hideModal());
        dispatch(addCondition({condition: 'Determinant',}));
    }}>
        行列式
    </Button>
);

AddDeterminant.propTypes = {};

export default connect()(AddDeterminant);