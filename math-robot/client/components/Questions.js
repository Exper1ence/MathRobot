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


const Questions = ({questions}) => {
    const qElems = questions.map((q, i) => (
        <Question name={q} key={i}/>
    ));
    return (
        <Container style={{marginTop: '3rem'}}>
            <Title name="求解"/>
            <Container>
                <Container>
                    {qElems}
                </Container>
                <Container>
                    <ShowAddQuestionModal/>
                    <Submit/>
                </Container>
                <AddQuestionModal/>
                <AnswerModal/>
            </Container>
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