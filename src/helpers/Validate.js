import React from 'react';

import { useCookies, removeCookie } from 'react-cookie';
import { useHistory } from "react-router-dom";
function Validate() {
  const [cookies] = useCookies(['']);
  let history = useHistory();
  if (cookies.access_token === null || cookies.access_token == 'undefined') {
    history.push('/login');
  }
  return (
    <div></div>
  );
}
export default Validate;
