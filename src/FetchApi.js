import * as React from 'react';
import { useState, useEffect } from 'react';
import  Success  from './Success'
import { useNavigate } from 'react-router-dom';

// fetching datas from mock api function

export function FetchApi({ loginusername, loginuserpassword }) {
  const [user, setUser] = useState([]);
  const apiGet = () => {
    fetch("https://63678f29f5f549f052d7b19a.mockapi.io/users")
      .then((response) => response.json())
      .then((json) => { console.log(json); setUser(json); });
  };
  useEffect(() => (
    apiGet
  ), []);
  const navigate = useNavigate();
  return (
    <div>
      {/* <h4>Datas in api</h4> */}
      {user.map((userObj) => ((userObj.name===loginusername && userObj.password===loginuserpassword) ? (<Success name={userObj.name} /> , navigate("/success")) : navigate("/LoginFailed")))}
    </div>
  )}
