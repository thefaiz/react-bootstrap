import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container>
        <Button color="primary" active={false}>Button</Button>{' '}
        <Button color="secondary" active={true}>Button</Button>{' '}
        <Button block={true} color="info">Button</Button>{' '}
        <Button color="warning" size="sm">Button</Button>{' '}
        <Button color="danger" size="lg" outline={true}>Button</Button>{' '}
        <Button color="link">Button</Button>{' '}
      </Container>
    );
  }
}

export default App;
