// import React, { useState } from 'react';
// // stateless funtional component: component nhưng không sử dụng state

import { useState } from "react";
import "./ToggleStyle.css";


function Toggle() {
    const [on, setOn] = useState(false);
    return <div>
        <div className={`toggle ${on ? "active" : ""}`}>
            <div className={`spinner ${on ? "active" : ""}`}></div>
        </div>
        <div className="toggle-control">
            <div className="toggle-on" onClick={() => setOn(true)}>On</div>
            <div className="toggle-off" onClick={() => setOn(false)}>OFF</div>
        </div>
    </div >
}
export default Toggle;