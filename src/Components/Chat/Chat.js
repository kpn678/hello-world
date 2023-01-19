import './Chat.css';
import Sidebar from '../Sidebar/Sidebar';
import MessageLog from '../MessageLog/MessageLog';
import MessageInput from '../MessageInput/MessageInput';


const Chat = ({ username, room, socket }) => {
  return (
    <section className='chat-page'>
      <Sidebar username={username} room={room} socket={socket} />
      <section className='message-view'>
        <MessageLog socket={socket} />
        <MessageInput username={username} room={room} socket={socket} />
      </section>
    </section>
  );
}

export default Chat;