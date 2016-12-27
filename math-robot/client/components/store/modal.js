/**
 * Created by Exper1ence on 2016/12/27.
 */

import {SHOW_MODAL, HIDE_MODAL} from '../actions';

export default function modal(state = {selected: 'None', allowType: [], ignoreName: ''},
    {type, selected, allowType, ignoreName,}) {
    switch (type) {
        case SHOW_MODAL:
            return {selected, allowType, ignoreName};
        case HIDE_MODAL:
            return {selected: 'None'};
        default:
            return state;
    }
}