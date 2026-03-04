import React, { useState } from "react";

function RepetitionExercise({ name, goBack }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{name}</h2>

      <p>Reps: {count}</p>

      {/* add button */}
      <button onClick={() => setCount(prev => prev + 1)}>+1 Rep</button>

      {/* reset button */}
      <button onClick={() => setCount(0)}>Reset</button>

      {/* backk button */}
      <button onClick={goBack}>Back to Menu</button>
    </div>
  );
}

export default RepetitionExercise;