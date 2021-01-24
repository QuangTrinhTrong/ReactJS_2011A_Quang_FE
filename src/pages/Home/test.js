import React, { useState, useEffect } from 'react';
import * as ApiCaller from './../../helpers/index';
import { useCookies, removeCookie } from 'react-cookie';

function Home(props) {
  const [cookies] = useCookies(['']);
  const token = cookies.access_token;
  useEffect(() => {
    getRoom();
  }, []);
  async function getRoom() {
    await ApiCaller.getList("api/room_list_available/", token)
      .then((res) => {
        console.log(res.data.data);

      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;