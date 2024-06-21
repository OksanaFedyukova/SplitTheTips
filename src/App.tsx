
import React from 'react';
import './App.css'; 
//import { UserProvider } from './contexts/UserContext';
import AreaComponent from './components/AreaComponent/AreaComponent';
import FirebaseAuth from './components/FirebaseAuth/FirebaseAuth'

const App: React.FC = () => {
  return (
      <div className="App">
        <header className="App-header">
          <h1>Tips</h1>
        </header>
        <main>
          <FirebaseAuth />
          <AreaComponent />

        </main>
      </div>
  );
}

export default App;
