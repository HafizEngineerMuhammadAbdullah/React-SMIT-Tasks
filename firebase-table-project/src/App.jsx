// import React from 'react'
// import Signup from './components/authentication/Signup'
// import UserData from './components/table/UserData'

// const App = () => {
//   return (
//     <div>
//       <Signup />
//       < UserData />
//     </div>
//   )
// }

// export default App


import React from 'react';
import Signup from './components/authentication/Signup';
import UserData from './components/table/UserData';

const App = () => {
  return (
    <main style={{
      minHeight: '100vh',
      // width: '100vw',
      backgroundColor: '#0f172a',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '3rem 1rem',
      gap: '3rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <Signup />
      <UserData />
    </main>
  );
};

export default App;