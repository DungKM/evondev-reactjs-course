import React, { useState } from 'react';
// stateless funtional component: component nhưng không sử dụng state

function Toggle () {
    return <div className='toggle'></div>
}

// stateful component: component có sử dụng state

function Toggle2 () {
    // const [isToggleOn, setIsToggleOn] = useState(false);
    return <div className='toggle'></div>
}