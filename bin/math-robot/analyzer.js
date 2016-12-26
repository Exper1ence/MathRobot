/**
 * Created by Exper1ence on 2016/12/26.
 */
const algorithm = require('./algorithm');

module.exports = (topic, res, next) => {
    const answers = {};
    for (let i = 0; i < topic.questions.length; i++) {
        const q = topic.questions[i];
        const resolver = algorithm[topic.conditions[q].type];
        if (resolver) {
            const answer = resolver.resolve(topic, q);
            if (answer.done) {
                answers[q] = answer;
            }
        }
        else {
            return next();
        }
    }
    res.send({done: true, answers});
};