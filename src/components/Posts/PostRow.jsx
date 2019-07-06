import React from 'react';
import { Table, Button } from 'semantic-ui-react';

class PostRow extends React.Component {
    render(){
        const { post } = this.props
        return (
            <Table.Row key={post.id}>
                <Table.Cell>{post.title}</Table.Cell>
                <Table.Cell>{post.body}</Table.Cell>
                <Table.Cell>
                    <Button.Group size='tiny'>
                        <Button>Edit</Button>
                        <Button icon="trash" negative />
                    </Button.Group>
                </Table.Cell>
            </Table.Row>
        )
    }
}

export default PostRow;