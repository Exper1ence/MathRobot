/**
 * Created by Exper1ence on 2016/12/26.
 */

const router = require('./router');

require('./math-robot')(router);

router.start(process.env.PORT || 3000);