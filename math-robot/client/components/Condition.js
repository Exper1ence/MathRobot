/**
 * Created by Exper1ence on 2016/12/26.
 */
import React, {PropTypes} from 'react'
import Container from './Container';
import Item from './Item';

const Condition = ({children,style}) => (
    <Container
        style={Object.assign({
            border: '1px solid #ccc',
            borderRadius: '.25rem',
            padding: '.5rem 1rem',
        },style)}>
        {children}
    </Container>
);

Condition.propTypes = {};

export default Condition;