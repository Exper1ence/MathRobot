/**
 * Created by Exper1ence on 2016/12/27.
 */
export const ADD_CONDITION = 'ADD_CONDITION';

export default function addCondition({condition}) {
    return {
        type: ADD_CONDITION,
        condition,
    };
}