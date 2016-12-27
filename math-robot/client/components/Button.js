/**
 * Created by Exper1ence on 2016/12/26.
 */
import React, {PropTypes} from 'react'

const Button = ({style, children, onClick, primary, secondary, success, info, warning, danger,}) => (
    <div
        style={Object.assign({
            borderRadius: '.25rem',
            height: '35px',
            padding: '.5rem 1rem',
            cursor: 'pointer',
            backgroundColor: (() => {
                if (primary)return '#0275d8';
                if (success) return '#5cb85c';
                if (info) return '#5bc0de';
                if (warning) return '#f0ad4e';
                if (danger)return '#d9534f';
                secondary = true;
                return '#fff';
            })(),
            border: (() => {
                if (secondary) return '1px solid #ccc';
                return '';
            })(),
            alignItems: 'center',
            color: (() => {
                if (secondary) return '#373a3c';
                return '#fff';
            })(),
            fontSize: '1rem',
            marginRight:'5px',
        }, style)}
        onClick={onClick}>
        {children}
    </div>
);

Button.propTypes = {};

export default Button;