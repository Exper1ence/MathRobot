/**
 * Created by Exper1ence on 2016/12/26.
 */

const router = require('./router');

require('./bin/math-robot')(router);

router.start(3000);