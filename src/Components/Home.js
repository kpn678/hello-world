import './Home.css'

const Home = ({ setUsername, username, setRoom, room, socket }) => {

  return (
    <section className='login-form'>
      <h2>Welcome to the chatroom platform for all devs to communicate!</h2>
      <input 
        placeholder='Username'
        onChange={(event) => setUsername(event.target.value)}
      />
      <select onChange={(event) => setRoom(event.target.value)}>
        <option>-- Select Room --</option>
        <option value='javascript'>JavaScript</option>
        <option value='python'>Python</option>
        <option value='c++'>C++</option>
        <option value='php'>PHP</option>
      </select>
      <button className='btn btn-secondary'>Join Room</button>
    </section>
  );
}

export default Home;