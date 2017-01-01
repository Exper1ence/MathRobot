/**
 * Created by Exper1ence on 2016/12/31.
 */
import {connect,} from 'react-redux';
import Component from './Component';
import React from 'react';
import MediaQuery from './MediaQuery';
import View from './View';
import {Provider} from 'react-redux';
import store from './store';

class Wrapper extends Component {
    run({children, style,}) {
        return (
            <Provider store={store}>
                <View style={{
                    width: '100%',
                    color: '#373a3c',
                    ...style,
                }}>
                    <MediaQuery/>
                    {children}
                </View>
            </Provider>
        )
    }
}

export default Wrapper;