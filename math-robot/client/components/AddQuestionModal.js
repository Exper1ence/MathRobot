/**
 * Created by Exper1ence on 2016/12/27.
 */
import Modal from './Modal';
import {connect} from 'react-redux';
import React, {PropTypes} from 'react'
import Button from './Button';
import {addQuestion, hideCurtain, hideModal} from './actions';
import Vid from './Vid';
import Div from './Div';

const AddQuestionModal = ({isVisible, questions, conditions, dispatch}) => {
    const lefts = [];
    conditions.forEach((cdt, i) => {
        if (questions.indexOf(cdt.name) > -1)return;
        lefts.push(<Div key={i}><Button onClick={() => {
            dispatch(hideCurtain());
            dispatch(hideModal());
            dispatch(addQuestion({name: cdt.name}));
        }}>{cdt.name}</Button></Div>);
    });
    return (
        <Modal isVisible={isVisible} title='未知条件'>
            <Vid style={{justifyContent: 'center'}}>
                {lefts.length ? lefts : <Div>{'< 空 >'}</Div>}
            </Vid>
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