/**
 * Created by Exper1ence on 2016/12/26.
 */
import React, {Component} from 'react';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this._style = {
            borderRadius: '.25rem',
            height: '35px',
            padding: '.5rem 1rem',
            cursor: 'pointer',
            backgroundColor: (() => {
                if (props.primary)return '#0275d8';
                if (props.secondary) return '#fff';
                if (props.success) return '#5cb85c';
                if (props.info) return '#5bc0de';
                if (props.warning) return '#f0ad4e';
                if (props.danger)return '#d9534f';
                return '';
            })(),
            border: (() => {
                if (props.secondary) return '1px solid #ccc';
                return '';
            })(),
            alignItems: 'center',
            color: (() => {
                if (props.secondary)return '#373a3c';
                return '#fff';
            })(),
            fontSize: '1rem',
        };
    }
    
    render() {
        return (
            <div style={Object.assign(this._style, this.props.style)} onClick={this.props.onClick}>
                {this.props.children}
            </div>
        );
    }
}