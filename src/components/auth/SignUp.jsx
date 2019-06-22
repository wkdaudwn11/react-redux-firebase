import React, { Component } from 'react';
import { Grid, Container, Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';

const enhance = connect(
    ({ firebase: { auth, profile } }) => ({
        auth,
        profile
    })
)

class SignUp extends Component {
    
    handleSubmit = ({ target }) => {
        console.log('email', target.elements.email.value);
        console.log('password', target.elements.password.value);
    }

    render() {
        return (
            <Container>
                <Grid centered colums={2}>
                    <Grid.Column>
                        <h3>Sign Up</h3>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Field>
                                <label>Email</label>
                                <input name="email" placeholder="Enter Email.." />
                            </Form.Field>
                            <Form.Field>
                                <label>Password</label>
                                <input name="password" placeholder="Enter Password.." />
                            </Form.Field>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

export default enhance(SignUp);