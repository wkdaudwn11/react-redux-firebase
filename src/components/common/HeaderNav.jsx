import React from 'react';
import { Alignment, Navbar, Button } from '@blueprintjs/core';

export default () => (
    <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>Blueprint</Navbar.Heading>
            <Navbar.Divider />
            <Button className="bp3-minimal" icon="home" text="Home" />
            <Button className="bp3-minimal" icon="document" text="Files" />
        </Navbar.Group>
    </Navbar>
);