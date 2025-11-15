import React from "react";
import Child from "./Child";

function App() {
  // Parent function — data yahan receive hoga
  function handleStudentClick(studentName) {
    alert(`Data received from Student: ${studentName}`);
  }

  return (
    <div>
      <h1>Parent Component</h1>
      <Child onSelect={handleStudentClick} />
    </div>
  );
}

export default App;

