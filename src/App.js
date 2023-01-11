import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { io } from 'socket.io-client';
import Home from './Components/Home/Home';
import Chat from './Components/Chat/Chat';

const socket = io.connect('http://localhost:4000');

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
              <Home setUsername={setUsername} username={username} setRoom={setRoom} room={room} socket={socket} />
            } 
          />
          <Route 
            path='/chat'
            element={
              <Chat username={username} room={room} socket={socket} />
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
