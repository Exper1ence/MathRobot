/**
 * Created by Exper1ence on 2016/12/27.
 */
import {SHOW_CURTAIN, HIDE_CURTAIN,} from '../actions';

export default function modal(state = 'None', action) {
    switch (action.type) {
        case SHOW_CURTAIN:
            return 'flex';
            break;
        case HIDE_CURTAIN:
            return 'None';
            break;
        default:
            return state;
            break;
    }
}