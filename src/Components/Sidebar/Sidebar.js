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
      <h2 className='room-title'>{room}</h2>
      <section className='users-containter'>
        {roomUsers.length > 0 && <h3>Users:</h3>}
        <ul className='users-list'>
          {roomUsers.map(user => <li key={user.id}>{user.username}</li>)}
        </ul>
      </section>
      <button className='btn btn-outline' onClick={leaveRoom}>Leave</button>
    </nav>
  );
}

export default Sidebar;