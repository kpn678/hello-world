import './Chat.css';
import MessageLog from './MessageLog';
import MessageInput from './MessageInput';

const Chat = ({ username, room, socket }) => {
  return (
    <section className='chat-page'>
      <MessageLog socket={socket} />
      <MessageInput username={username} room={room} socket={socket} />
    </section>
  );
}

export default Chat;