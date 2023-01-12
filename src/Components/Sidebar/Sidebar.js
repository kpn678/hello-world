import './Sidebar.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ username, room, socket }) => {
  const [roomUsers, setRoom] = useState([]);

  const navigate = useNavigate();
}

export default Sidebar;