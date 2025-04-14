// import React, { useState } from 'react';

// function App() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Username:", username);
//     console.log("Password:", password);
//   };

//   const containerStyle = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     background: '#f5f5f5',
//     fontFamily: 'Arial, sans-serif',
//   };

//   const loginBoxStyle = {
//     backgroundColor: '#fff',
//     padding: '40px',
//     borderRadius: '10px',
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//     textAlign: 'center',
//     width: '300px',
//   };

//   const titleStyle = {
//     fontSize: '24px',
//     marginBottom: '10px',
//     color: '#333',
//   };

//   const subtitleStyle = {
//     fontSize: '14px',
//     marginBottom: '20px',
//     color: '#777',
//   };

//   const inputStyle = {
//     width: '100%',
//     padding: '10px',
//     marginBottom: '15px',
//     borderRadius: '5px',
//     border: '1px solid #ccc',
//     fontSize: '14px',
//   };

//   const buttonStyle = {
//     width: '100%',
//     padding: '10px',
//     backgroundColor: '#4CAF50',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '5px',
//     fontSize: '16px',
//     cursor: 'pointer',
//   };

//   const buttonHoverStyle = {
//     backgroundColor: '#45a049',
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={loginBoxStyle}>
//         <h2 style={titleStyle}>Hello Acboss</h2>
//         <p style={subtitleStyle}>Please login to your account</p>
//         <form id="loginForm" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             id="username"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//             style={inputStyle}
//           />
//           <input
//             type="password"
//             id="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={inputStyle}
//           />
//           <button
//             type="submit"
//             style={buttonStyle}
//             onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
//             onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [students, setStudents] = useState([
    { rollNumber: 1, name: 'Akshat Chauhan', email: 'ac@gmail.com' },
    { rollNumber: 2, name: 'Akshat Chauhan', email: 'ac@gmail.com' },
    { rollNumber: 3, name: 'Akshat Chauhan', email: 'ac@gmail.com' },
    { rollNumber: 4, name: 'Akshat Chauhan', email: 'ac@gmail.com' },
  ]);

  const handleMarkOut = (rollNumber) => {
    const updatedStudents = students.filter(student => student.rollNumber !== rollNumber);
    setStudents(updatedStudents);
  };

  return (
    <div className="Container">
      <div className="header">
        <h3 style={{ flex: 0.8 }}>Roll Number</h3>
        <h3>Name</h3>
        <h3>Email</h3>
        <h3>Action</h3>
      </div>
      {students.map((student) => (
        <div key={student.rollNumber} className="row">
          <p style={{ flex: 0.5, color: "white" }}>{student.rollNumber}</p>
          <p>{student.name}</p>
          <p>{student.email}</p>
          <button
            onClick={() => handleMarkOut(student.rollNumber)}
            style={{
              backgroundColor: "#ff4d4d",
              color: "white",
              padding: "6px 12px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Mark Out
          </button>
        </div>
      ))}
    </div>
  );
}
