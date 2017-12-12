import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import './styles/styles.scss';
import 'normalize.css/normalize.css'

console.log('App.js is running!');

const ExpenseDashboardPage = () => (
    <div>
        This is from the dashboard component!!
    </div>
);
const AddExpensePage = () => (
    <div>
        This is from the Add Expense Page component!!
    </div>
);
const EditExpensePage = () => (
    <div>
        This is from the Edit Expense Page component!!
    </div>
);
const HelpPage = () => (
    <div>
        This is from the Help Page component!!
    </div>
);
const NotFound = () => (
    <div>
        404!!
    </div>
);
/*
const routes = (
        <BrowserRouter>
            <div>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
            </div>
        </BrowserRouter>
);
*/


const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route  component={NotFound} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
