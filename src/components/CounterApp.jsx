import React, { useState } from "react";
import "./CounterApp.css";

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>🔁 Reset</button>
    </div>
  );
}

export default CounterApp;

// // import React, { useState } from "react";

// // function CounterApp() {
// //   const [count, setCount] = useState(0);

// //   return (
// //     <div style={{ textAlign: "center", marginTop: "50px" }}>
// //       <h2>Counter:{counter}</h2>
// //       <button onClick={() => setCount(count + 1)}>+ Increase</button>
// //       <button onClick={() => setCount(count - 1)}>- Decrease</button>
// //       <button onClick={() => setCount(0)}>🔁 Reset</button>
// //     </div>
// //   );
// // }

// export default CounterApp;
