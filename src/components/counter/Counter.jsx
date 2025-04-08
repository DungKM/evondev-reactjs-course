import React, { useState } from "react";

const Counter = () => {
    // stale state: trạng thái cũ, không được cập nhật
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setTimeout(function delay() {
            setCount((count) => count + 1);
        }, 1000)
    }
    return <div onClick={handleIncrement}>
        Increment {count}
    </div>
}
export default Counter;