import React, { useState } from "react";
import { Typography, Button } from "@mui/material";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Typography variant="displayLarge" color="primary.main">
        こんにちは
      </Typography>

      <Typography variant="xl" color="secondary.main" my={3}>
        Hello!!
      </Typography>

      <p className="text-lg text-orange-800 bg-yellow-200 py-2">
        This is using Tailwind classes.
      </p>

      <div className="card bg-gray-100 py-2 mt-8">
        <Button color="info" onClick={() => setCount((count) => count + 1)}>
          カウント: {count}
        </Button>
      </div>
    </div>
  );
}

export default App;
