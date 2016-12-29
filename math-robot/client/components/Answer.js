/**
 * Created by Exper1ence on 2016/12/27.
 */
import React, {PropTypes} from 'react'
import Item from './Item';
import Container from './Container';
import Button from './Button';

const Answer = ({answer}) => {
    const {name, done, value, msg}=answer;
    return (
        <Button style={{
            borderBottom: '1px solid #ccc',
            padding: '.5rem 1rem',
            cursor:'normal',
        }} success={done} danger={!done}>
            {`${name} ：${done ? value : msg}`}
        </Button>
    )
};

Answer.propTypes = {};

export default Answer;