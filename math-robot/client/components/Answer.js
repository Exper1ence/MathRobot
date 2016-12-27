/**
 * Created by Exper1ence on 2016/12/27.
 */
import React, {PropTypes} from 'react'
import Item from './Item';
import Container from './Container';

const Answer = ({answer}) => {
    const {name, done, value, reason}=answer;
    return(
        <Container style={{
            borderBottom: '1px solid #ccc',
            padding: '.5rem 1rem',
        }}>
            {`${name}：${done ? value : reason}`}
        </Container>
    )
};

Answer.propTypes = {};

export default Answer;