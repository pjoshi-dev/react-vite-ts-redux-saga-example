import { useState } from 'react';

// Application
import reactLogo from './assets/react.svg';
import './App.css';
import UserScreen from './pages/users/UserComponent';
import AuthScreen from './pages/auth/AuthScreen';
import { Divider } from '@mui/material';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + TypeScript</h1>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p> */}
      <AuthScreen />
      <Divider sx={{ my: 2 }} />
      <UserScreen />
    </div>
  );
}

export default App;
