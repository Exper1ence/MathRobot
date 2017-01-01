/**
 * Created by Exper1ence on 2016/12/31.
 */
import React, {Component as Base} from 'react'
import _ from './util';

export default class Component extends Base {
    constructor(props) {
        super(props);
        this.state = _.toFunction(this.init)(this.props);
    }
    
    render() {
        return _.toFunction(this.run.bind(this))(_.toPlainObject(this.props), _.toPlainObject(this.state));
    }
}