/**
 * Created by Exper1ence on 2016/12/27.
 */
export const SET_VALUE = 'SET_VALUE';

export function setValue({value, name, valid, dirty}) {
    return {
        type: SET_VALUE,
        value,
        valid,
        name,
        dirty,
    };
}