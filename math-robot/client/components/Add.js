/**
 * Created by Exper1ence on 2016/12/26.
 */
import React, {PropTypes} from 'react';
import Button from './Button';
const Add = ({onAdd}) => (
    <Button onClick={onAdd}>
        添加
    </Button>
);

Add.propTypes = {};

export default Add;