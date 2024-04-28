import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from './userSlice';
import { fetchTodos } from './todosSlice';

function Register({setSelectedTab}) {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const isRegistered = useSelector(state => state.user.isRegistered);

  const handleRegister = () => {
    dispatch(registerUser(username));
    dispatch(fetchTodos())
    setSelectedTab(0);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Enter user name"
        value={username}
        onChange={e => setUsername(e.target.value)}
        readOnly={isRegistered}
      />
      <button onClick={handleRegister} disabled={isRegistered}>Sign up</button>
    </div>
  );
}

export default Register;
