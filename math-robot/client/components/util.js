/**
 * Created by Exper1ence on 2016/12/29.
 */
import _ from 'lodash';

export default {
    toPlainObject(obj){
        return _.isPlainObject(obj) ? obj : {};
    },
    toFunction(func){
        return _.isFunction(func)?func:()=>{};
    }
}