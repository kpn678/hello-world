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
}

export default Sidebar;