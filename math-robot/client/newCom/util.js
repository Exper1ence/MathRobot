/**
 * Created by Exper1ence on 2016/12/31.
 */
import _ from 'lodash';

export default Object.assign(_, {
    toPlainObject(obj){
        return _.isPlainObject(obj) ? obj : {};
    },
    toFunction(func){
        return _.isFunction(func) ? func : () => {
            };
    }
})