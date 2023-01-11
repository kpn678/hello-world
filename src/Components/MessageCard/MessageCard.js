import './MessageCard.css';

const MessageCard = ({ msgUsername, msgText, msgCreatedTime }) => {
  return (
    <section className='individual-card'>
      <p>{msgUsername}</p>
      <p>{msgText}</p>
      <p>{msgCreatedTime}</p>
    </section>
  );
}

export default MessageCard;