import React from 'react';

class ViewComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { data } = this.props

        if (!data) {
            return <>No data</>
        }

        return (
            <>
                <input value={this.props.value} onChange={this.props.onChange} />
                <button onClick={this.props.onAdd}>Add</button>
                {data && data.length && data.map((el, i) => (
                    <li key={i}>{el.name}</li>
                ))}
                <button onClick={this.props.onClick}>Detele</button>
            </>
        );
    }
}

export default ViewComponent;