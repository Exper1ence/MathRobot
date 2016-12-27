/**
 * Created by Exper1ence on 2016/12/27.
 */
import Modal from './Modal';
import {connect} from 'react-redux';
import React, {PropTypes} from 'react'
import AddInverseNumber from './AddInverseNumber';
import AddArrangement from './AddArrangement';
import Button from './Button';
import {addQuestion,hideCurtain,hideModal} from './actions';

const AddQuestionModal = ({isVisible, questions, conditions, dispatch}) => {
    const lefts = [];
    conditions.forEach((cdt, i) => {
        if (questions.indexOf(cdt.name) > -1)return;
        lefts.push(<Button key={i} onClick={() => {
            dispatch(hideCurtain());
            dispatch(hideModal());
            dispatch(addQuestion({name: cdt.name}));
        }}>{cdt.name}</Button>);
    });
    return (
        <Modal isVisible={isVisible}>
            {lefts.length?lefts:'< 空 >'}
        </Modal>
    );
};

function mapStateToProps(state) {
    return {
        isVisible: state.modal.selected == 'AddQuestion',
        questions: state.questions,
        conditions: state.conditions.datas,
    }
}

export default connect(mapStateToProps)(AddQuestionModal);