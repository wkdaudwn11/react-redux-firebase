import React from 'react';
import { Menu } from "semantic-ui-react";
import { Link } from 'react-router-dom';

export default ({ isAuthed, onLogout }) => (
    <Menu>
        <Menu.Item name='home'>
            <Link to="/">Home</Link>
        </Menu.Item>

        { isAuthed && (
            <Menu.Item name="posts">
                <Link to="posts">Posts</Link>
            </Menu.Item>
        )}

        <Menu.Menu position='right'>
            { isAuthed ? (
                <Menu.Item name="logout">
                    <Link to="#" onClick={onLogout}>Log Out</Link>
                </Menu.Item>
            ) : (
                <>
                    <Menu.Item name="signup">
                        <Link to="/signup">Sign Up</Link>
                    </Menu.Item>
                    <Menu.Item name="login">
                        <Link to="/login">Sign In</Link>
                    </Menu.Item>
                </>
            )}
        </Menu.Menu>
    </Menu>
);