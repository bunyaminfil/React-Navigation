import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Index extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      <div>
        <Menu attached='top'>
          <Menu.Item
            as={Link}
            to="/">
            <span> Home </span>
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/form">
            <span> Form </span>
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/list">
            <span> List </span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}