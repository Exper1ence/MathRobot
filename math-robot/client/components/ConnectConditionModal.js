/**
 * Created by Exper1ence on 2016/12/27.
 */
import Modal from './Modal';
import {connect} from 'react-redux';
import React, {PropTypes} from 'react'

const ConnectConditionModal = ({isVisible}) => (
    <Modal isVisible={isVisible}>
        hi there!
    </Modal>
);

function mapStateToProps(state) {
    return {
        isVisible: state.modal == 'ConnectCondition',
    }
}

export default connect(mapStateToProps)(ConnectConditionModal);