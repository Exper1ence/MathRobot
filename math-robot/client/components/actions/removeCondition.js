/**
 * Created by Exper1ence on 2016/12/27.
 */
export const REMOVE_CONDITION = 'REMOVE_CONDITION';

export function removeCondition({name}) {
    return {
        type: REMOVE_CONDITION,
        name,
    };
}