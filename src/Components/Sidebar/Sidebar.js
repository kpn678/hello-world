import './Sidebar.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ username, room, socket }) => {
  const [roomUsers, setRoomUsers] = useState([]);

  const navigate = useNavigate();

  const leaveRoom = () => {
    const __createdtime__ = Date.now();
    socket.emit('leave_room', { username, room, __createdtime__ });
    navigate('/', { replace: true });
  }

  useEffect(() => {
    socket.on('chatroom_users', (data) => {
      setRoomUsers(data);
    });
    return () => socket.off('chatroom_users');
  }, [socket]);

  return (
    <nav>
      <h3 className='room-title'>{room}</h3>
      <section className='users-container'>
        {roomUsers.length > 0 && <h3 className='users-title'>Users:</h3>}
        <ul className='users-list'>
          {roomUsers.map(user => <li key={user.id}>{user.username}</li>)}
        </ul>
      </section>
      <button className='btn btn-secondary' onClick={leaveRoom}>Leave</button>
    </nav>
  );
}

export default Sidebar;