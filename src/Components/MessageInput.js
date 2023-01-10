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

  return (
    <section className='send-container'>
      <input
        className='message-field'
        placeholder='Type message...'
        onChange={(event) => setMessage(event.target.value)}
        value={message}
      />
    </section>
  )
}

export default MessageInput;