/**
 * Created by Exper1ence on 2016/12/26.
 */

const cbs = [];
let res = {
    send(msg){
        console.log({
            conditions: {
                a: {
                    type: 'inverse-number',
                    arrangement: 'b',
                },
                b: {
                    type: 'arrangement',
                    value: '41532'
                }
            },
            questions: ['a']
        });
    }
};

module.exports = {
    use(cb){
        cbs.push(cb);
    },
    send(msg){
        let next = true;
        i = 0;
        while (next) {
            next = false;
            cbs[i++](msg, res, () => next = true);
        }
    }
};