/**
 * Created by Exper1ence on 2016/12/26.
 */
import React, {PropTypes, Component} from 'react';
import Close from './Close';
import {connect} from 'react-redux';
import {hideModal, hideCurtain} from './actions';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marginLeft: '0',
            marginTop: '0',
            display: 'flex',
            visibility: 'hidden',
        };
    }
    
    componentDidMount() {
        this.setState({
            marginLeft: `-${this.div.offsetWidth / 2}px`,
            marginTop: `-${this.div.offsetHeight / 2}px`,
            visibility: 'visible',
            display: this.props.isVisible == false ? 'none' : 'flex',
        });
        this.init = true;
    }
    
    render() {
        const {children, style, isVisible, dispatch}=this.props;
        const {marginLeft, marginTop, display, visibility}=this.state;
        return (
            <div
                style={Object.assign({
                    border: '1px solid #ccc',
                    borderRadius: '.25rem',
                    position: 'absolute',
                    padding: '1rem 1rem',
                    left: '50%',
                    marginLeft,
                    top: '50%',
                    marginTop,
                    display: this.init ? (isVisible ? 'flex' : 'none') : display,
                    visibility,
                    backgroundColor: 'white',
                    zIndex:100,
                }, style)}
                ref={div => this.div = div}>
                <Close onClick={() => {
                    dispatch(hideModal());
                    dispatch(hideCurtain());
                }}/>
                {children}
            </div>
        )
    }
}

export default connect()(Modal);
