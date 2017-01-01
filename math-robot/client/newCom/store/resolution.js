/**
 * Created by Exper1ence on 2016/12/31.
 */
import {SET_RESOLUTION,} from '../actionTypes';

export default function resolution(state = -1, {type, value,}) {
    switch (type) {
        case SET_RESOLUTION: {
            return value;
        }
        default:
            return state;
    }
}