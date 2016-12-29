/**
 * Created by Exper1ence on 2016/12/26.
 */
const _ = require('lodash');

function isValidNumber(char) {
    return char >= '0' && char <= '9';
}
module.exports = {
    resolve(topic, name){
        const cdt = topic.conditions[name];
        if (!cdt.arrangement)return {name, done: false, msg: '未设置排列'};
        const arr = topic.conditions[cdt.arrangement].value;
        if (!_.isArrayLike(arr) || arr.length <= 1)return {name, done: false, msg: '依赖的排列的值未知'};
        arr.pop();
        let value = 0;
        for (let i = 0; i < arr.length; i++) {
            let number1 = arr[i].data;
            for (let j = 0; j < i; j++) {
                let number2 = arr[j].data;
                if ((isNaN(parseInt(number1)) || isNaN(parseInt(number2)))) {
                    return {
                        name,
                        done: false,
                        reason: '排列由元素组成'
                    }
                }
                else {
                    if (number2 > number1) {
                        value++;
                    }
                }
            }
        }
        return {name, done: true, value,}
    }
};