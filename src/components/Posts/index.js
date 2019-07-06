import React, { Component } from 'react';
import { connect } from 'react-redux';
import requireAuth from '../requireAuth'

class Posts extends Component {
    render() {
        return (
            <div>
                this is posts index {this.props.auth}
            </div>
        )
    }
}

export default connect(null)(requireAuth(Posts))