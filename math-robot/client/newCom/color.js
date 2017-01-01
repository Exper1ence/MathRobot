/**
 * Created by Exper1ence on 2017/1/1.
 */
import _ from 'lodash';

export default {
    rgbToRgba(rgb, a){
        return `rgba${rgb.slice(3, rgb.length - 1)},${a})`;
    },
    hexToRgb(hex){
        if (_.isString(hex)) {
            let start = 1;
            let getNext = () => {
                let value;
                if (hex.length == 4) {
                    const half = hex.slice(start, start += 1);
                    value = half + half;
                }
                else value = hex.slice(start, start += 2);
                return parseInt(value, 16);
            };
            return `rgb(${getNext()},${getNext()},${getNext()})`;
        }
        else if (_.isPlainObject(hex)) {
            const hexs = {};
            _.forOwn(hex, (h, k) => {
                hexs[k] = this.hexToRgb(h);
            });
            return hexs;
        }
    },
}