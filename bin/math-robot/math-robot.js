/**
 * Created by Exper1ence on 2016/12/26.
 */
const Path = require('path');

module.exports = function mathRobot(router) {
    router.get((res, next) => {
        res.sendFile(Path.resolve(__dirname, './index.html'));
    });
    router.post(require('./analyzer'));
    router.post(require('./cant-resolve'));
};