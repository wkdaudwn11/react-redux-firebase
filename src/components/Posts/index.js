import React, { Component } from 'react';
import { connect } from 'react-redux';
import requireAuth from '../requireAuth'
import * as postsActions from '../actions/posts'

class Posts extends Component {

    componentWillMount(){
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                this is posts index {this.props.auth}
            </div>
        )
    }
}

const mapStateToProps = ({ posts }) => ({
    posts
})

export default connect(mapStateToProps, postsActions)(requireAuth(Posts))