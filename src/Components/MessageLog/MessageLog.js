import './MessageLog.css';
import { useState, useEffect } from 'react';
import MessageCard from '../MessageCard/MessageCard';

const MessageLog = ({ socket }) => {
  const [messagesReceived, setMessagesReceived] = useState([]);

  const sortMessagesByDate = (messages) => {
    messages.sort((a, b) => parseInt(a.__createdtime__) - parseInt(b.__createdtime__));
  }

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  }

  useEffect(() => {
    socket.on('receive_message', (data) => {
      console.log(data);
      setMessagesReceived((state) => [
        ...state,
        {
          message: data.message,
          username: data.username,
          __createdtime__: data.__createdtime__
        }
      ]);
    });
    return () => socket.off('receive_message');
  }, [socket]);

  const message = messagesReceived.map((msg, i) => {
    return <MessageCard
      key={i}
      msgUsername={msg.username}
      msgText={msg.message}
      msgCreatedTime={formatTimestamp(msg.__createdtime__)}
    />
  });

  return (
    <section className='messages'>
      {message}
    </section>
  );
}

export default MessageLog;

