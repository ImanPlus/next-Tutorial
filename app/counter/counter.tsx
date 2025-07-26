 "use client";

 import { useState} from "react";
import { Counter  } from "./counter"
  export const metaData = {
    title: "Counter",
 }

  export default f unction  CounterPage = () => {
    const [count, setCount] = useState      (0)
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => (setCount(count+1))}>Increment</button>
        </div>
    )
  }