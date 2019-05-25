import React from 'react';
import ViewComponent from './ViewComponent';
import axios from 'axios';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, users: [], value: null }

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get(`https://5ce7f7679f2c390014dba413.mockapi.io/users/`)
      .then(res => {
        console.log(res);
        this.setState(() => ({ users: res.data }));
      })
      .catch(err => console.log(err))
      .finally(() => {
        console.log('isLoading')
        this.setState((prevState) => ({
          isLoading: !prevState.isLoading,
        }))
      })
  }

  handleChange = (event) => {
    console.log('change', event.target.value)
    this.setState({ value: event.target.value })
  }

  /*  handleChange(event) {
     console.log('change', event.target.value)
     this.setState({ value: event.target.value })
   } */

  handleAdd() {
    console.log(this.state.value)
    this.setState((prevState) => ({ users: [...prevState.users, { name: prevState.value }] }))
  }

  handleClick() {
    console.log('deleted')
  }

  render() {
    const { value, users } = this.state
    return (
      this.state.isLoading ? <>Loading...</>
        : <ViewComponent
          data={users}
          onClick={this.handleClick}
          inputValue={value}
          onAdd={this.handleAdd}
          onChange={this.handleChange} />
    );
  }
}

export default Container;
