/**
 * Created by Exper1ence on 2016/12/27.
 */
import Modal from './Modal';
import {connect} from 'react-redux';
import React, {PropTypes} from 'react'
import AddInverseNumber from './AddInverseNumber';
import AddArrangement from './AddArrangement';
import Answer from './Answer';
import Vid from './Vid';
import Div from './Div';

const AnswerModal = ({isVisible, answers}) => {
    answers = answers.map((ans, i) => {
        return (
            <Div key={i}><Answer answer={ans}/></Div>
        )
    });
    
    return (
        <Modal isVisible={isVisible} title='解'>
            <Vid style={{justifyContent: 'center'}}>
                {answers.length ? answers : <Div>{'< 空 >'}</Div>}
            </Vid>
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