/**
 * Created by Exper1ence on 2016/12/27.
 */

import {SHOW_MODAL,HIDE_MODAL} from '../actions';

export default function modal(state = 'None', action) {
    switch (action.type) {
        case SHOW_MODAL:
            return action.modal;
            break;
        case HIDE_MODAL:
            return 'None';
            break;
        default:
            return state;
            break;
    }
}