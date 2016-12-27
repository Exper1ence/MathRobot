/**
 * Created by Exper1ence on 2016/12/27.
 */
import React, {PropTypes} from 'react'

const Input = ({onChange}) => (
    <input
        style={{
            borderRadius: '.25rem',
            height: '35px',
            padding: '0 .5rem',
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            marginTop: '10px',
        }} onChange={onChange}>
    
    </input>
);

Input.propTypes = {};

export default Input;