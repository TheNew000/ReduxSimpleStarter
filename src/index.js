import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component which produces HTML
const App = () => {
    return <div>Hi!</div>;
}

// Take this component and put it into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
