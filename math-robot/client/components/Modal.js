/**
 * Created by Exper1ence on 2016/12/26.
 */
import React, {PropTypes} from 'react'

const Board = ({children, style}) => (
    <div
        style={Object.assign({
            border: '1px solid #ccc',
            borderRadius: '.25rem',
            position: 'absolute',
            padding: '.5rem 1rem',
            width: '100px',
            height: '100px',
            left: '50%',
            marginLeft: '-50px',
            top: '50%',
            marginTop: '-50px',
        }, style)}>
        {children}
    </div>
);

Board.propTypes = {};

export default Board;
