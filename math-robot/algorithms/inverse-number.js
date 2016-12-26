/**
 * Created by Exper1ence on 2016/12/26.
 */
module.exports = {
    resolve(topic, name){
        const cdt = topic.conditions[name];
        if (!cdt.arrangement)return {};
        const arr = topic.conditions[cdt.arrangement].value;
        let value = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < i; j++) {
                if (arr[j] > arr[i]) {
                    value++;
                }
            }
        }
        return {done: true, value,}
    }
};