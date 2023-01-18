import './Home.css'
import { useNavigate } from 'react-router-dom';

const Home = ({ setUsername, username, setRoom, room, socket }) => {

  const navigate = useNavigate();

  const joinRoom = () => {
    if (username !== '' && room !== '') {
      socket.emit('join_room', { username, room });
    }
    navigate('/chat', { replace: true });
  }

  return (
    <section className='login-form'>
      <h2>Welcome to the Chatroom Platform for All Devs to Communicate</h2>
      <section className='input-info'>
        <input 
          placeholder='Username'
          onChange={(event) => setUsername(event.target.value)}
        />
        <select onChange={(event) => setRoom(event.target.value)}>
          <option>-- Select Room --</option>
          <option value='javascript'>JavaScript</option>
          <option value='python'>Python</option>
          <option value='c++'>C++</option>
          <option value='php'>PHP</option>
        </select>
      </section>
      <button className='btn btn-secondary' onClick={joinRoom}>Join Room</button>
    </section>
  );
}

export default Home;