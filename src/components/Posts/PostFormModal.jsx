import React, { Component } from 'react';
import { Header, Image, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as postsActions from '../actions/posts';

class PostFormModal extends Component {

    handleClose = (e) => {
        this.props.togglePostForm(false);
    }

    render() {
        const { posts } = this.props;
        const { showModal } = posts;

        return (
            <Modal open={showModal} centered={false} closeIcon onClose={this.handleClose}>
                <Modal.Header>Select a Photo</Modal.Header>
                
                <Modal.Content image>
                    <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png'></Image>
                    <Modal.Description>
                        <Header>Default Profile Image</Header>
                        <p>We've found the following gravatar image associated with your e-mail address.</p>
                        <p>Is it okay to use this photo?</p>
                    </Modal.Description>
                </Modal.Content>

            </Modal>
        )
    }
}

const mapStateToProps = ({ posts }) => ({
    posts
})

export default connect(mapStateToProps, postsActions)(PostFormModal);