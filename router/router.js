/**
 * Created by Exper1ence on 2016/12/26.
 */
const Express = require('express');
const app = Express();
const router = Express.Router();

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
    static(path){
        app.use(Express.static(path));
    },
    start(port){
        app.use(router);
        app.listen(port, () => {
            console.log(`server is listening at ${port}.`);
        });
    },
};