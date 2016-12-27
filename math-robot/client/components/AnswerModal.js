/**
 * Created by Exper1ence on 2016/12/27.
 */
import Modal from './Modal';
import {connect} from 'react-redux';
import React, {PropTypes} from 'react'
import AddInverseNumber from './AddInverseNumber';
import AddArrangement from './AddArrangement';
import Answer from './Answer';

const AnswerModal = ({isVisible, answers}) => {
    answers = answers.map((ans, i) => {
        return (
            <Answer answer={ans} key={i}/>
        )
    });
    
    return (
        <Modal isVisible={isVisible}>
            {answers.length ? answers : '< 空 >'}
        </Modal>
    )
};

function mapStateToProps(state) {
    return {
        isVisible: state.modal.selected == 'Answer',
        answers: state.answers,
    }
}

export default connect(mapStateToProps)(AnswerModal);