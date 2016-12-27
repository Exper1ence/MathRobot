/**
 * Created by Exper1ence on 2016/12/27.
 */
import React from 'react';
import {ADD_CONDITION,} from '../actions';
import InverseNumber from '../InverseNumber';
import Arrangement from '../Arrangement';

function getCondition(condition, key) {
    switch (condition) {
        case 'InverseNumber':
            return <InverseNumber key={key}/>;
        case 'Arrangement':
            return <Arrangement key={key}/>;
        default:
            return;
    }
}

export default function conditions(state = [], action) {
    switch (action.type) {
        case ADD_CONDITION:
            return [
                ...state,
                getCondition(action.condition, state.length)
            ];
            break;
        default:
            return state;
            break;
    }
}