/**
 * Created by Exper1ence on 2017/1/1.
 */
import React, {PropTypes} from 'react';
import {connect,} from 'react-redux';
import Component from './Component';
import Container from './Container';
import View from './View';
import Link from './Link';

class Navigator extends Component {
    constructor(props) {
        super(props);
        
    }
    
    run({routes, style,}) {
        routes = routes.map((route, i) => {
            return (
                <Link to={route.path} key={i} style={{
                    margin: '1rem',
                    marginLeft: '0',
                }}>{route.name}</Link>
            );
        });
        return (
            <Container style={{
                backgroundColor: '#fff',
                fontSize: '1.1rem', fontWeight: 'bold',
                justifyContent: 'center',
                ...style,
            }}>
                <Container fixed>{routes}</Container>
            </Container>
        )
    }
}
Navigator.propTypes = {
    routes: PropTypes.array.isRequired,
};
export default Navigator;