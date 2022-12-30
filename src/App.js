import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { io } from 'socket.io-client';
import Home from './Components/Home';

function App() {

  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');

  return (
    <Router>
      <main>
        <Routes>
          <Route 
            path='/' 
            element={
              <Home 
                setUsername={setUsername}
                username={username}
                setRoom={setRoom}
                room={room}
              />
            } 
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
