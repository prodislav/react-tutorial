import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { id } = this.props.match.params
        console.log(id)
        return (
            <div>{id}</div>
        );
    }
}

export default TodoItem;