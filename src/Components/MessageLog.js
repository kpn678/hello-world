import './MessageLog.css';
import { useState, useEffect } from 'react';
import MessageCard from './MessageCard';

const MessageLog = ({ socket }) => {
  const [messagesReceived, setMessagesReceived] = useState([]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      console.log(data);
      setMessagesReceived((state) => [
        ...state,
        {
          message: data.message,
          username: data.username,
          createdTime: data.createdTime
        }
      ]);
    });
    return () => socket.off('receive_message');
  }, [socket]);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  }

  const message = messagesReceived.map((msg, i) => {
    return <MessageCard
      key={i}
      msgUsername={msg.username}
      msgText={msg.message}
      msgCreatedTime={formatTimestamp(msg.createdTime)}
    />
  });

  return (
    <section className='messages'>
      {message}
    </section>
  );
}

export default MessageLog;

