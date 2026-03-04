import React, { useState } from "react";

function JumpingExercise({ name, goBack }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1); // use functional update for consistency
  const reset = () => setCount(0);

  return (
    <div>
      <h2>{name}</h2>
      <p>Jumps: {count}</p>

      {/* add jump */}
      <button onClick={increment}>Add Jump</button>

      {/* reset counter */}
      <button onClick={reset}>Reset</button>

      {/* back button */}
      <button onClick={goBack}>Back to Menu</button>
    </div>
  );
}

export default JumpingExercise;