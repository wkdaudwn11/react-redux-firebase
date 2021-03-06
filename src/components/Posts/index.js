import React, { Component } from 'react';
import { connect } from 'react-redux';
import requireAuth from '../requireAuth'
import * as postsActions from '../actions/posts'
import { Container, Table, Button, Grid } from 'semantic-ui-react';
import { PostsListPlaceholder } from '../common/placeholders';
import PostRow from './PostRow';
import PostFormModal from './PostFormModal';

class Posts extends Component {

    state = {
        loading: true,
        showPostModel: false
    }

    componentWillMount(){
        this.props.fetchPosts().then(() => {
            this.setState({loading: false})
        })
    }

    handleNew = () => {
        //this.props.togglePostForm(true);
    }

    render() {
        const { posts } = this.props;
        const { list, showModal, currentPost } = posts;

        return (
            <Container>

                <Grid columns={2}>
                    <Grid.Column><h2>Posts</h2></Grid.Column>
                    <Grid.Column textAlign="right">
                        <Button primay onClick={this.handleNew}>New Post</Button>
                    </Grid.Column>
                </Grid>

                { this.state.loading ? <PostsListPlaceholder /> : (
                    <Table>
                        <Table.Header>
                            <Table.HeaderCell>Title</Table.HeaderCell>
                            <Table.HeaderCell>Body</Table.HeaderCell>
                            <Table.HeaderCell>Actions</Table.HeaderCell>
                        </Table.Header>
                        <Table.Body>
                            { list ? list.map(post => (
                                <PostRow key={post.id} post={post} />
                            )) : (
                                <Table.Row>
                                    <Table.Cell>No Posts</Table.Cell>
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table>
                )}
                <PostFormModal post={currentPost} />
            </Container>
        )
    }
}

const mapStateToProps = ({ posts }) => ({
    posts
})

export default connect(mapStateToProps, postsActions)(requireAuth(Posts))