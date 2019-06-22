import React, { Component } from 'react';
import { Grid, Container, Button, Form } from 'semantic-ui-react';

class SignUp extends Component {
    handleInputChange = event => {
        
    }

    render() {
        const username = '';
        return (
            <Container>
                <Grid centered colums={2}>
                    <Grid.Column>
                        <h3>Sign Up</h3>
                        <Form>
                            <Form.Field>
                                <label>Email</label>
                                <input placeholder="Enter Email.." />
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input placeholder="Enter Password.." />
                            </Form.Field>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default SignUp;