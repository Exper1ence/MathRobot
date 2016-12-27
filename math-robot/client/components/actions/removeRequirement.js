/**
 * Created by Exper1ence on 2016/12/27.
 */
export const REMOVE_REQUIREMENT = 'REMOVE_REQUIREMENT';

export function removeRequirement({target, requirement}) {
    return {
        type: REMOVE_REQUIREMENT,
        target, requirement,
    };
}