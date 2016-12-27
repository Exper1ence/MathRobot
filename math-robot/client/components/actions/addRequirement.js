/**
 * Created by Exper1ence on 2016/12/27.
 */
export const ADD_REQUIREMENT = 'ADD_REQUIREMENT';

export function addRequirement({target, requirement}) {
    return {
        type: ADD_REQUIREMENT,
        target,
        requirement,
    };
}