import React from 'react';

const Jsx = () => {
    const element = <h1 id="root">Hello, world!</h1>;
    const elementR = React.createElement(
        'h1',
        {id: 'root'},
        'Hello, world!'
    );
    const element2 = (
        <div>
            <h1>Hello!</h1>
            <h2>Good to see you here.</h2>
        </div>
    );
    const element2R = React.createElement(
        'div',
        null,
        React.createElement('h1', null, 'Hello!'),
        React.createElement('h2', null, 'Good to see you here.')
    );

    return ( 
        <div>
            <h1>JSX</h1>
        </div>
     );
}
 
export default Jsx;