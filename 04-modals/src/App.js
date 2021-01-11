import React, { Component } from 'react';
import { Container, Button, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class App extends Component {
  state = {
    visible: true,
    modalIsOpen: false
  }
  toggleAlert() {
    this.setState({
      visible: ! this.state.visible
    });
  }
  toggleModal() {
    this.setState({
      modalIsOpen: ! this.state.modalIsOpen
    });
  }
  render() {
    return (
      <Container>
        <Button color="primary" active={false}>Button</Button>{' '}
        <Button color="secondary" active={true}>Button</Button>{' '}
        <Button block={true} color="info" onClick={this.toggleAlert.bind(this)}>Button</Button>{' '}
        <Button color="warning" size="sm">Button</Button>{' '}
        <Button color="danger" size="lg" outline={true}>Button</Button>{' '}
        <Button color="link">Button</Button>{' '}
        <hr/>
        <Alert color="primary" isOpen={this.state.visible} toggle={this.toggleAlert.bind(this)}>Hi! I am an alert.</Alert>
        <hr/>
        <Button color="primary" onClick={this.toggleModal.bind(this)}>Open Modal</Button>
        <Modal isOpen={this.state.modalIsOpen}>
          <ModalHeader toggle={this.toggleModal.bind(this)}>Modal Title</ModalHeader>
          <ModalBody>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rem fugiat perspiciatis sint, nostrum labore nobis quidem sed impedit quae quisquam corrupti, libero commodi a quod pariatur quo qui. Id?</ModalBody>
          <ModalFooter>
            <Button color="primary">Sign Up</Button>
            <Button color="secondary" onClick={this.toggleModal.bind(this)}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default App;
