/**
 * Created by Exper1ence on 2016/12/29.
 */
const _ = require('lodash');
const util = require('./util');

function getLast(mat) {
    const rows = mat.length || 0;
    const cols = rows ? (mat[0].length || 0) : 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] != 0) {
                return {row: i, col: j, rows, cols,}
            }
        }
    }
    return {row: -1, col: -1, rows, cols,}
}

module.exports = {
    resolve(topic, name){
        const msg = {name, done: true, type: '矩阵', value: 0};
        let mat = topic.conditions[name].value;
        let rank = 0;
        let isSquare = false;
        let determinant = 1;
        const {rows, cols}=getLast(mat);
        if (rows == cols) {
            isSquare = true;
        }
        util.whileWhen(() => getLast(mat), ({row}) => row >= 0, ({row, col, rows, cols}) => {
            if (!_.isNumber(mat[row][col]))return;
            for (let r = 0; r < rows; r++) {
                if (r != row) {
                    let factor = 0;
                    if (!_.isNumber(mat[r][col]))return;
                    if (mat[r][col] == 0)continue;
                    factor = mat[r][col] / mat[row][col];
                    for (let c = col; c < cols; c++) {
                        if (!_.isNumber(mat[r][c]) || !_.isNumber(mat[row][c]))return;
                        mat[r][c] -= factor * mat[row][c];
                    }
                }
            }
            if (isSquare) {
                determinant *= mat[row][col];
            }
            mat.splice(row, 1);
            rank++;
        });
        return Object.assign(msg, {value: isSquare ? {rank, determinant: rank == rows ? determinant : 0} : {rank,},});
    }
};