/**
 * Created by Exper1ence on 2016/12/27.
 */
import {UPDATE_ANSWERS,} from '../actions';

export default function answers(state = [], action) {
    switch (action.type) {
        case UPDATE_ANSWERS:
        {
            return action.answers;
        }
        default:
            return state;
    }
}