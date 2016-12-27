/**
 * Created by Exper1ence on 2016/12/26.
 */
import Modal from './Modal';
import {connect} from 'react-redux';
import React, {PropTypes} from 'react'
import AddInverseNumber from './AddInverseNumber';
import AddArrangement from './AddArrangement';

const AddConditionModal = ({isVisible}) => (
    <Modal isVisible={isVisible}>
        <AddInverseNumber/>
        <AddArrangement/>
    </Modal>
);

function mapStateToProps(state) {
    return {
        isVisible: state.modal.selected == 'AddCondition',
    }
}

export default connect(mapStateToProps)(AddConditionModal);