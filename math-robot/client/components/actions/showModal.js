/**
 * Created by Exper1ence on 2016/12/27.
 */
export const SHOW_MODAL = 'SHOW_MODAL';

export default function showModal({selected, allowType, ignoreName}) {
    return {
        type: SHOW_MODAL,
        selected,
        allowType,
        ignoreName,
    };
}