import * as React from 'react';
import { useState, useEffect } from 'react';

// fetching datas from mock api function
export function FetchApi({ username }) {
  const [user, setUser] = useState([]);
  const apiGet = () => {
    fetch("https://63678f29f5f549f052d7b19a.mockapi.io/users")
      .then((response) => response.json())
      .then((json) => { console.log(json); setUser(json); });
  };
  useEffect(() => (
    apiGet
  ), []);

  return (
    <div>
      <h4>Datas in api</h4>
      {user.map((userObj) => (
        <li key={userObj.id}>{userObj.name}</li>
      ))}
    </div>

  );
}
