import React from 'react';
import Main from './../../components/organisms/Main';
import { useCookies } from "react-cookie";

function Home(props) {
    const [cookies, setCookie] = useCookies([""]);
    return (
        <Main>
            <h1>Day la home {cookies.user_name}</h1>
        </Main>
    );
}

export default Home;