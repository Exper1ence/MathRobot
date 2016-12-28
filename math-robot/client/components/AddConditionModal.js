/**
 * Created by Exper1ence on 2016/12/26.
 */
import Modal from './Modal';
import {connect} from 'react-redux';
import React, {PropTypes} from 'react'
import AddInverseNumber from './AddInverseNumber';
import AddArrangement from './AddArrangement';
import Vid from './Vid';
import Div from './Div';
import AddDeterminant from './AddDeterminant';

const AddConditionModal = ({isVisible}) => (
    <Modal isVisible={isVisible} title='可选类型'>
        <Vid style={{
            justifyContent: 'center',
        }}>
            <Div><AddInverseNumber/></Div>
            <Div><AddArrangement/></Div>
            <Div><AddDeterminant/></Div>
        </Vid>
    </Modal>
);

function mapStateToProps(state) {
    return {
        isVisible: state.modal.selected == 'AddCondition',
    }
}

export default connect(mapStateToProps)(AddConditionModal);