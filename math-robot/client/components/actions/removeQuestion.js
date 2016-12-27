/**
 * Created by Exper1ence on 2016/12/27.
 */
export const REMOVE_QUESTION = 'REMOVE_QUESTION';

export function removeQuestion({name}) {
    return {
        type: REMOVE_QUESTION,
        name,
    };
}