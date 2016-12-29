/**
 * Created by Exper1ence on 2016/12/29.
 */
import React, {Component as Base} from 'react'
import _ from './util';

export default class Component extends Base {
    render() {
        return _.toFunction(this.run)(_.toPlainObject(this.props.args));
    }
}