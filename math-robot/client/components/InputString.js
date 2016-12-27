/**
 * Created by Exper1ence on 2016/12/27.
 */
import React, {PropTypes} from 'react'
import Input from './Input';

const InputString = ({onInput}) => (
    <Input onChange={(e) => onInput(e.target.value)}>
    
    </Input>
);

InputString.propTypes = {};

export default InputString;