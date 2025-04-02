// import React, { useState } from 'react';
// // stateless funtional component: component nhưng không sử dụng state

import { useState } from "react";

// function Toggle () {
//     return <div className='toggle'></div>
// }

// // stateful component: component có sử dụng state

// function Toggle2 () {
//     // const [isToggleOn, setIsToggleOn] = useState(false);
//     return <div className='toggle'></div>
// }


function Toggle() {
    // 1. enabling state: useState(inintialValue)
    //    - initialValue: initial value of state
    // 2. initialize state: useState(false)
    // 3. reading state: 
    // 4. updating state

    // const array = useState(false);
    // console.log(array); // [state, function]
    // console.log(array[0]); // state
    // console.log(array[1]); // function

    const [on, setOn] = useState(false);
    console.log(on); // [state, function]
    return <div className="toggle" onClick={() => setOn(true)}>Toggle</div>
}
export default Toggle;