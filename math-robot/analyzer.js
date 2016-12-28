/**
 * Created by Exper1ence on 2016/12/26.
 */
const algorithm = require('./algorithms/index');
const _ = require('lodash');

module.exports = (topic, res, next) => {
    const invalidOp = {done: false, msg: '非法操作'};
    if (!_.isPlainObject(topic.conditions) || _.isArrayLike(topic.questions))
        return res.send(invalidOp);
    const answers = [];
    for (let i = 0; i < topic.questions.length; i++) {
        const q = topic.questions[i];
        if (!_.isPlainObject(topic.conditions[q]))return res.send(invalidOp);
        const resolver = algorithm[topic.conditions[q].type];
        answers.push(resolver.resolve(topic, q));
    }
    res.send(answers);
};