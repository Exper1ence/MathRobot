/**
 * Created by Exper1ence on 2016/12/29.
 */
module.exports = {
    whileWhen(preProcess, predict, action) {
        let result = preProcess();
        while (predict(result)) {
            action(result);
            result = preProcess();
        }
    },
    swapRow(mat, row1, row2, cols) {
        for (let i = 0; i < cols; i++) {
            let temp = mat[row1][i];
            mat[row1][i] = mat[row2][i];
            mat[row2][i] = temp;
        }
    }
};