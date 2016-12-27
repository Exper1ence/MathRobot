/**
 * Created by Exper1ence on 2016/12/27.
 */
export const ADD_QUESTION = 'ADD_QUESTION';

export  function addQuestion({name}) {
    return {
        type: ADD_QUESTION,
        name,
    };
}