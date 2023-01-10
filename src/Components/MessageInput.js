import './MessageInput.css';
import { useState } from 'react';

const MessageInput = ({ username, room, socket}) => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message !== '') {
      const __createdtime__ = Date.now();
      socket.emit('send_message', { username, room, message, __createdtime__ });
      setMessage('');
    }
  }
}

export default MessageInput;