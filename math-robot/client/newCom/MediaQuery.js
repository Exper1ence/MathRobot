/**
 * Created by Exper1ence on 2016/12/31.
 */
import {SET_RESOLUTION,} from './actionTypes';
import React from 'react';
import Component from './Component';
import store from './store';

function setResolution(value) {
    return {
        type: SET_RESOLUTION,
        value,
    }
}
function listenWidth() {
    const {offsetWidth,}=document.body;
    if (offsetWidth < 576) {
        store.dispatch(setResolution(0));
    }
    else if (offsetWidth >= 576 && offsetWidth < 768) {
        store.dispatch(setResolution(1));
    }
    else if (offsetWidth >= 768 && offsetWidth < 992) {
        store.dispatch(setResolution(2));
    }
    else if (offsetWidth >= 992 && offsetWidth < 1200) {
        store.dispatch(setResolution(3));
    }
    else store.dispatch(setResolution(4));
}

class MediaQuery extends Component {
    constructor(props) {
        super(props);
        listenWidth();
        window.addEventListener("resize", listenWidth);
    }
    
    render() {
        return null;
    }
}
export default MediaQuery;