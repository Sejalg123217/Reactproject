import React from "react";

function Student({ name, onSelect }) {
  return (
    <div style={{ marginBottom: "8px" }}>
      <button onClick={() => onSelect(name)}>Send {name} to Parent</button>
    </div>
  );
}

export default Student;
// import React from "react";

// function Student({ name, onSelect }) {
//   return (
//     <div style={{ marginBottom: "10px" }}>
//       <button onClick={() => onSelect(name)}>
//         Send {name} to Parent
//       </button>
//     </div>
//   );
// }

// export default Student;
// import React from "react";

// function Student({ name, age, details, onGreet, children }) {
//   return (
//     <div
//       style={{
//         border: "2px solid #4CAF50",
//         margin: "20px auto",
//         width: "300px",
//         padding: "15px",
//         borderRadius: "10px"
//       }}
//     >
//       <h2>Student Details</h2>
//       <table style={{ margin: "0 auto" }}>
//         <tbody>
//           <tr>
//             <td><b>Name:</b></td>
//             <td>{name}</td>
//           </tr>
//           <tr>
//             <td><b>Age:</b></td>
//             <td>{age}</td>
//           </tr>
//           <tr>
//             <td><b>Course:</b></td>
//             <td>{details.course}</td>
//           </tr>
//         </tbody>
//       </table>

//       <button
//         onClick={() => onGreet(name)}
//         style={{
//           marginTop: "10px",
//           backgroundColor: "#4CAF50",
//           color: "white",
//           border: "none",
//           padding: "8px 12px",
//           borderRadius: "5px",
//           cursor: "pointer"
//         }}
//       >
//         Greet Parent
//       </button>

//       <div style={{ marginTop: "10px", color: "blue" }}>{children}</div>
//     </div>
//   );
// }

// // Default props
// Student.defaultProps = {
//   name: "Unknown",
//   age: 0
// };

// export default Student;
