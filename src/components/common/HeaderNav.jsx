import React from 'react';
import { Menu } from "semantic-ui-react";
import { Link } from 'react-router-dom';

export default ({ isAuthed, activeItem }) => (
    <Menu>
        <Menu.Item name='home' active={activeItem === 'home'}>
            <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item name="signup" active={activeItem === 'signup'}>
                <Link to="/signup">Sign Up</Link>
            </Menu.Item>
            <Menu.Item name="login" active={activeItem === 'login'}>
                <Link to="/login">Sign In</Link>
            </Menu.Item>
        </Menu.Menu>
    </Menu>
);