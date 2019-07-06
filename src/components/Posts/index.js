import React, { Component } from 'react';
import { connect } from 'react-redux';
import requireAuth from '../requireAuth'
import * as postsActions from '../actions/posts'
import { Placeholder, Container, Table, Button } from 'semantic-ui-react';

class Posts extends Component {

    state = {
        loading: true
    }

    componentWillMount(){
        this.props.fetchPosts().then(() => {
            this.setState({loading: false})
        })
    }

    renderPosts = () => {
        const { posts } = this.props;

        return posts.map(p => (
            <Table.Row key={p.id}>
                <Table.Cell>{p.title}</Table.Cell>
                <Table.Cell>{p.body}</Table.Cell>
                <Table.Cell>
                    <Button.Group size='tiny'>
                        <Button>Edit</Button>
                        <Button icon="trash" negative />
                    </Button.Group>
                </Table.Cell>
            </Table.Row>
        ))
    }

    renderPlaceholder() {
        return (
            <Placeholder>
                <Placeholder.Paragraph>
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                </Placeholder.Paragraph>
            </Placeholder>
        )
    }

    render() {
        const { posts } = this.props;

        return (
            <Container>
                <h2>Posts</h2>
                { this.state.loading ? this.renderPlaceholder() : (
                    <Table>
                        <Table.Header>
                            <Table.HeaderCell>Title</Table.HeaderCell>
                            <Table.HeaderCell>Body</Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>
                        </Table.Header>
                        <Table.Body>
                            { posts ? this.renderPosts() : (
                                <Table.Row>
                                    <Table.Cell>No Posts</Table.Cell>
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table>
                )}
            </Container>
        )
    }
}

const mapStateToProps = ({ posts }) => ({
    posts
})

export default connect(mapStateToProps, postsActions)(requireAuth(Posts))