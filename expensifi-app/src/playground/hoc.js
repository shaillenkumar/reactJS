// Higher Order Component (HOC) - A component that renders another Component .
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1> Info </h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    // here we are returning the higher order component
    // create a instance of the wrapped component <WrappedComponent {...props}/> (Info)
    return (props) => (
        <div>
            {props.isAdminInfo && <p>This is private info. Please donot share!!</p>}
            <p>This is a private info. Please donot share.</p>
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props}/>):(<p>Please login to the Info</p>)}
        </div>
    )
}

// wrap Info within AdminInfo name of hoc
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info = 'These are the details'/>, document.getElementById('app'));
//ReactDOM.render(<AdminInfo isAdminInfo={true} info = 'These are the details'/>, document.getElementById('app'));
//ReactDOM.render(<GeneralInfo info='These are the details'/>, document.getElementById('app'));

