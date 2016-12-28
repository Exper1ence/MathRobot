/**
 * Created by Exper1ence on 2016/12/28.
 */
export const RESET_FOCUS = 'RESET_FOCUS';

export  function resetFocus({name}) {
    return {
        type: RESET_FOCUS,
        name,
    };
}