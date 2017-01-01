/**
 * Created by Exper1ence on 2016/12/30.
 */
import React from 'react';
import {render} from 'react-dom';
import {
    Container, Component,
    Wrapper, Padding, Text, Responsive,
    Button, Navigator, View, Footer,
    Link,
} from './newCom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

class MathRobot extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
    }
    
    run({children,}) {
        let routes = [
            {name: 'Bootstrap', path: '/test',},
            {name: 'Documentation', path: '/doc',},
            {name: 'Examples', path: '/exa'}
        ];
        return (
            <Wrapper style={{flexDirection: 'column'}}>
                <Navigator routes={routes}/>
                <Container style={{flexGrow: 1}}>{children}</Container>
            </Wrapper>
        )
    }
}
class Content extends Component {
    run() {
        return (
            <Container style={{
                backgroundColor: '#563D7C',
                flexGrow: 1,
            }}>
                asdasdas
            </Container>
        )
    }
}
class Test extends Component {
    run() {
        return (
            <div>test</div>
        )
    }
}
class Doc extends Component {
    run() {
        return (
            <div>doc</div>
        )
    }
}

render((
    <Router history={browserHistory}>
        <Route path="/" component={MathRobot}>
            <IndexRoute component={Content}/>
            <Route path="/test" component={Test}/>
            <Route path="/doc" component={Doc}/>
        </Route>
    </Router>
), document.getElementById('math-robot'));