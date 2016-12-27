/**
 * Created by Exper1ence on 2016/12/27.
 */
export const UPDATE_ANSWERS = 'UPDATE_ANSWER';

export  function updateAnswers({answers}) {
    return {
        type: UPDATE_ANSWERS,
        answers,
    };
}