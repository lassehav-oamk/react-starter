import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './Header';
import View1 from './View1';
import View2 from './View2';

export default class Home extends Component {
    render() {
        const { match } = this.props;

        const content = <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mi risus, tincidunt eget porttitor quis, interdum vel orci. Nam pellentesque nunc sed purus semper fringilla. Sed nec nisl luctus, malesuada tellus et, luctus nunc. Ut diam sem, tincidunt gravida mollis sed, suscipit in mauris. </div>;
        const homeContent = match.isExact ? content : null;

        console.log(match);

        return (
            <div>
                <Header />            
                { homeContent }
                <div>                                         
                    <Route path={`${match.url}/view1`} exact component={View1} />
                    <Route path={`${match.url}/view2`} exact component={View2} />                    
                </div>
            </div>
        )
    }
}
