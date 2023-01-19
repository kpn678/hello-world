import './MessageCard.css';

const MessageCard = ({ msgUsername, msgText, msgCreatedTime }) => {
  return (
    <section className='individual-card'>
      <p className='message-username'>{msgUsername}</p>
      <p className='message-text'>{msgText}</p>
      <p className='message-timestamp'>{msgCreatedTime}</p>
    </section>
  );
}

export default MessageCard;