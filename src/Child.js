import React from "react";
import Student from "./Student";

function Child(props) {
  // Ye student list Child ke paas hai
  const students = ["Sejal", "Rajan", "Satyam", "Sudhanshu"];

  return (
    <div>
      <h2>Child Component</h2>
      <p>Click any student to send data to Parent 👇</p>

      {students.map((name, index) => (
        <Student key={index} name={name} onSelect={props.onSelect} />
      ))}
    </div>
  );
}

export default Child;
// import React from "react";
// import Student from "./Student";

// function Child({ onSelect }) {
//   const students = ["Sejal", "Rajan", "Satyam", "Sudhanshu"];

//   return (
//     <div style={{ marginTop: "20px" }}>
//       <h2>Child Component</h2>
//       <p>Click any student to send data to Parent 👇</p>

//       {students.map((name, index) => (
//         <Student key={index} name={name} onSelect={onSelect} />
//       ))}
//     </div>
//   );
// }

// export default Child;
