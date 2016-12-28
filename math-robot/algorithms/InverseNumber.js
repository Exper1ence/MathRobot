/**
 * Created by Exper1ence on 2016/12/26.
 */
function isValidNumber(char) {
    return char >= '0' && char <= '9';
}
module.exports = {
    resolve(topic, name){
        const cdt = topic.conditions[name];
        if (!cdt.arrangement)return {name, done: false, reason: '未设置排列'};
        const arr = topic.conditions[cdt.arrangement].value;
        arr.pop();
        let value = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < i; j++) {
                if ((isNaN(arr[i]) || isNaN(arr[j]))) {
                    return {
                        name,
                        done: false,
                        reason: '排列由元素组成'
                    }
                }
                else {
                    if (arr[j] > arr[i]) {
                        value++;
                    }
                }
            }
        }
        return {name, done: true, value,}
    }
};