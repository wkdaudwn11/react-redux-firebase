import React from 'react';
import { Alignment, Navbar, Button } from '@blueprintjs/core';

export default () => (
    <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>Firebase App</Navbar.Heading>
            <Navbar.Divider />
            <Button className="bp3-minimal" icon="home" text="Home" />
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
            <Button className="bp3-minimal" text="Sign Up" />
            <Button className="bp3-minimal" text="Sign In" />
        </Navbar.Group>
    </Navbar>
);