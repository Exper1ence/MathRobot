/**
 * Created by Exper1ence on 2016/12/26.
 */
const Path = require('path');

module.exports = function mathRobot(router) {
    router.static(Path.resolve(__dirname, './public'));
    router.get((res, next) => {
        res.sendFile(Path.resolve(__dirname, './public/index.html'));
    });
    router.post(require('./analyzer'));
    router.post(require('./cant-resolve'));
};