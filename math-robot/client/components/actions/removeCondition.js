/**
 * Created by Exper1ence on 2016/12/27.
 */
export const REMOVE_CONDITION = 'REMOVE_CONDITION';

export function removeCondition({target}) {
    return {
        type: REMOVE_CONDITION,
        target,
    };
}