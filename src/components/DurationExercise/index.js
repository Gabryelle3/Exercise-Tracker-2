import React, { useState, useEffect } from "react";

function DurationExercise({ name, goBack }) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  // useEffect for timer updates
  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setSeconds(prev => prev + 1); // functional update for correct timing
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  //  time format as MM:SS
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <div>
      <h2>{name}</h2>
      <p>{minutes}:{secs}</p>

      {/* start button */}
      <button onClick={() => setRunning(true)}>Start</button>

      {/* reset button */}
      <button onClick={() => { setRunning(false); setSeconds(0); }}>Reset</button>

      {/* back button */}
      <button onClick={goBack}>Back to Menu</button>
    </div>
  );
}

export default DurationExercise;