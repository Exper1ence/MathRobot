/**
 * Created by Exper1ence on 2016/12/27.
 */
import React, {PropTypes} from 'react'
import Button from './Button';
import {addCondition, hideModal, hideCurtain} from './actions';
import {connect} from 'react-redux';

const AddInverseNumber = ({dispatch}) => (
    <Button onClick={() => {
        dispatch(hideCurtain());
        dispatch(hideModal());
        dispatch(addCondition('InverseNumber'));
    }}>
        逆序数
    </Button>
);

AddInverseNumber.propTypes = {};

export default connect()(AddInverseNumber);