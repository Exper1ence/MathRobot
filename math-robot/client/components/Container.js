/**
 * Created by Exper1ence on 2016/12/27.
 */
import React, {PropTypes} from 'react'
import Vid from './Vid';

const Container = ({style, children}) => (
    <Vid
        style={Object.assign({
            width: '100%',
        }, style)}>
        {children}
    </Vid>
);

Container.propTypes = {};

export default Container;