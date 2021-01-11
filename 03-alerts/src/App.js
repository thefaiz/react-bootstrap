import React, { Component } from 'react';
import { Container, Button, Alert } from 'reactstrap';

class App extends Component {
  state = {
    visible: true
  }
  toggle() {
    this.setState({
      visible: ! this.state.visible
    });
  }
  render() {
    return (
      <Container>
        <Button color="primary" active={false}>Button</Button>{' '}
        <Button color="secondary" active={true}>Button</Button>{' '}
        <Button block={true} color="info" onClick={this.toggle.bind(this)}>Button</Button>{' '}
        <Button color="warning" size="sm">Button</Button>{' '}
        <Button color="danger" size="lg" outline={true}>Button</Button>{' '}
        <Button color="link">Button</Button>{' '}
        <hr/>
        <Alert color="primary" isOpen={this.state.visible} toggle={this.toggle.bind(this)}>Hi! I am an alert.</Alert>
      </Container>
    );
  }
}

export default App;
