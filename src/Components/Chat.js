import './Chat.css';
import MessageLog from './MessageLog';

const Chat = ({ socket }) => {
  return (
    <section className='chat-page'>
      <MessageLog socket={socket} />
    </section>
  );
}

export default Chat;