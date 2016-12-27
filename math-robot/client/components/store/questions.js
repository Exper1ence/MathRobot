/**
 * Created by Exper1ence on 2016/12/27.
 */
import {ADD_QUESTION, REMOVE_QUESTION} from '../actions';
import _ from 'lodash';

export default function questions(state = [], {name, type}) {
    switch (type) {
        case ADD_QUESTION: {
            return [
                ...state,
                name
            ];
        }
        case REMOVE_QUESTION: {
            const i = state.findIndex(q => name == q);
            return _.concat(state.slice(0, i), state.slice(i + 1));
        }
        default:
            return state;
    }
}