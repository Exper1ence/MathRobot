/**
 * Created by Exper1ence on 2016/12/26.
 */
const fs = require('fs');

process.on('uncaughtException', (err) => {
    fs.writeSync(1, `Caught : ${err}`);
});
const router = require('./router');

require('./bin/math-robot')(router);

router.start(process.env.PORT || 3000);