/**
 * Created by Exper1ence on 2016/12/27.
 */
import React, {PropTypes} from 'react'
import Button from './Button';
import {connect} from 'react-redux';
import p from 'es6-promise';
import {showCurtain, showModal, updateAnswers} from './actions';

p.polyfill();

const Submit = ({form, dispatch}) => (
    <Button primary onClick={() => {
        console.log(form.questions)
        console.log(form.questions.length)
        if (form.questions.length < 1) {
            dispatch(updateAnswers({answers: []}));
            dispatch(showCurtain());
            dispatch(showModal({
                selected: 'Answer'
            }));
            return;
        }
        fetch('/', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
            .then((res) => {
                return res.json();
            })
            .then((answers) => {
                dispatch(updateAnswers({answers}));
                dispatch(showCurtain());
                dispatch(showModal({
                    selected: 'Answer'
                }));
            });
    }}>
        提交
    </Button>
);

Submit.propTypes = {};
function mapState(state) {
    const conditions = {};
    state.conditions.datas.forEach((cdt) => {
        switch (cdt.type) {
            case 'InverseNumber': {
                conditions[cdt.name] = {
                    arrangement: cdt.requirement[0],
                    value: cdt.value,
                    type: cdt.type,
                };
                break;
            }
            case 'Arrangement': {
                conditions[cdt.name] = {
                    value: cdt.value,
                    type: cdt.type,
                };
                break;
            }
            default:
                break;
        }
    });
    return {
        form: {
            questions: state.questions,
            conditions,
        }
    }
}

export default connect(mapState)(Submit) ;