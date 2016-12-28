/**
 * Created by Exper1ence on 2016/12/26.
 */
import React, {PropTypes, Component} from 'react';
import Close from './Close';
import {connect} from 'react-redux';
import {hideModal, hideCurtain} from './actions';
import Div from './Div';
import Vid from './Vid';

class Modal extends Component {
    render() {
        const {children, style, isVisible, dispatch, title,}=this.props;
        const sty = {};
        if (isVisible && this.refs.div) {
            Object.assign(sty, {
                marginLeft: `-${this.refs.div.offsetWidth / 2}px`,
                marginTop: `-${this.refs.div.offsetHeight / 2}px`,
            })
        }
        return (
            <div
                style={Object.assign({
                    borderRadius: '.25rem',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    visibility: isVisible ? 'visible' : 'hidden',
                    backgroundColor: 'white',
                    zIndex: 100,
                    flexDirection: 'column'
                }, sty, style)}
                ref='div'>
                <Close onClick={() => {
                    dispatch(hideModal());
                    dispatch(hideCurtain());
                }}/>
                <div style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    justifyContent: 'center',
                    backgroundColor: '#5bc0de',
                    color: 'white',
                    margin: '18px 0 9px',
                    padding: '2px 20px',
                }}>{title}</div>
                {children}
            </div>
        )
    }
}
export default connect()(Modal);
