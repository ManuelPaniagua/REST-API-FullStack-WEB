import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <h1>Wellcome to Task Manager</h1>
            <p>
                Please
                <Link to={'/register'}> register</Link> or
                <Link to={'/login'}> log in</Link> to start creating and
                updating your tasks!
            </p>
        </>
    );
};
export default Home;
