import React, { Component } from 'react';
import { Grid, Container, Button, Message } from 'semantic-ui-react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from 'firebase/app';
import * as actions from '../actions/auth';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import * as alerts from '../../utils/alerts';

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),

    password: Yup.string()
        .min(6, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
})

/*
const enhance = connect(
    ({ firebase: { auth, profile } }) => ({
        auth,
        profile
    })
)
*/

class SignUp extends Component {
    
    handleSubmit = ({ values, actions }) => {
        actions.setSubmitting(true)
        const { email, password } = values;
        
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => {
                this.props.changeAuth(true)
                alerts.success('Successfully registered!')
                this.props.history.push("/posts")
            })
            .catch(error => {
                this.props.changeAuth(false)
                alerts.error(error.message)
            })
    }

    render() {
        return (
            <Container>
                <Grid centered colums={2}>
                    <Grid.Column>
                        <Formik 
                            initialValues={{email: '', password: ''}} // 초기화
                            onSubmit={this.handleSubmit}
                            validationSchema={SignupSchema}
                            render={({ errors, touched, isSubmitting, status }) => (
                                <>
                                    <Message
                                        attached
                                        header='Sign Up'
                                        content='Fill out the form below to sign-up for a new account'
                                    />
                                    <Form className="ui form">
                                        <div className='field'>
                                            <label>Email</label>
                                            <Field type="email" name="email" disabled={isSubmitting} />
                                            <ErrorMessage name="email" component="div" />
                                        </div>
                                        <div className='field'>
                                            <label>Password</label>
                                            <Field type="password" name="password" disabled={isSubmitting} />
                                            <ErrorMessage name="password" component="div" />
                                        </div>
                                        {status && status.msg && <div>{status.msg}</div>}
                                        <Button type='submit' disabled={isSubmitting}>Submit</Button>
                                    </Form>
                                    <Message attached='button' warning>
                                        Already signed up? <Link to="/login">Login here</Link>
                                    </Message>
                                </>
                            )}
                        />

                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

const mapStateToProps = ({auth}) => ({
    auth
})

export default connect(mapStateToProps, actions)(SignUp);