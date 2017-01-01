/**
 * Created by Exper1ence on 2016/12/26.
 */

const cbs = [];
const answers = [];
const util = require('util');
let res = {
    send(msg){
        answers.push(msg[0]);
    }
};

module.exports = {
    get(cb){
        
    },
    post(cb){
        cbs.push(cb);
    },
    send(msg){
        let next = true;
        i = 0;
        while (next) {
            next = false;
            cbs[i++](msg, res, () => next = true);
        }
    },
    static(){
        
    },
    display(arr){
        console.log('答案');
        for (let i = 0; i < answers.length; i++) {
            console.log(`${answers[i].type} : ${util.inspect(answers[i].value)}`);
        }
    }
};