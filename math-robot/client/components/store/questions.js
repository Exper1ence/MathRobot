/**
 * Created by Exper1ence on 2016/12/27.
 */
import {ADD_QUESTION,} from '../actions';

export default function questions(state = [], {name, type}) {
    switch (type) {
        case ADD_QUESTION:
        {
            return [
                ...state,
                name
            ];
        }
        default:
            return state;
    }
}