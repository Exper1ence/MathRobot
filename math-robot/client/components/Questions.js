/**
 * Created by Exper1ence on 2016/12/27.
 */
import Title from './Title';
import Container from './Container';
import React, {PropTypes} from 'react'
import {connect} from 'react-redux';
import _ from 'lodash';
import ShowAddQuestionModal from './ShowAddQuestionModal';
import AddQuestionModal from './AddQuestionModal';
import Question from './Question';
import Submit from './Submit';
import AnswerModal from './AnswerModal';
import Vid from './Vid';
import Div from './Div';
import Fill from './Fill';

const Questions = ({questions}) => {
    const qElems = questions.map((q, i) => (
        <Div key={i}><Question name={q}/></Div>
    ));
    return (
        <Container style={{marginTop: '3rem'}}>
            <Title name="求解"/>
            <Div/>
            <Fill width>{qElems}</Fill>
            <Div><ShowAddQuestionModal/></Div>
            <Div><Submit/></Div>
            <AddQuestionModal/>
            <AnswerModal/>
        </Container>
    )
};

Questions.propTypes = {};
function mapState(state) {
    return {
        questions: state.questions,
    }
}

export default connect(mapState)(Questions);