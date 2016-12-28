/**
 * Created by Exper1ence on 2016/12/28.
 */
export const FOCUS_INPUT = 'FOCUS_INPUT';

export function focusInput({name, focus}) {
    return {
        type: FOCUS_INPUT,
        name,
        focus,
    };
}