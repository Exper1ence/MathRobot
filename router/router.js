/**
 * Created by Exper1ence on 2016/12/26.
 */
const app = require('express')();
const router = require('express').Router();

module.exports = {
    get(cb){
        router.get('/', (req, res, next) => {
            cb(res, next);
        })
    },
    post(cb){
        router.post('/', (req, res, next) => {
            cb({
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
            }, res, next);
        });
    },
    start(port){
        app.use(router);
        app.listen(port, () => {
            console.log(`server is listening at ${port}.`);
        });
    },
};