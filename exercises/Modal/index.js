import React, { Component } from 'react';
import Modal from './Modal';


export default class ModalView extends Component {

  constructor(props) {
    super(props);
    this.state = { modalVisible: false };
  }

  render() {
    const { modalVisible } = this.state;

    return (
      <div>
        <div className="pa2">
          <h3 className="ttu tracked bold">Here be modals</h3>
          <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>
          <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>
          <p className="center ma3">
            <button className="f6 link dim bn ph3 pv2 mb2 dib white bg-dark-blue"
              onClick={ this.toggleModal }>Open Modal</button>
          </p>
        </div>

        <Modal isVisible={ modalVisible }
          title={ 'Modal Title' }
          toggle={ this.toggleModal }>
          <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>
          <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>
          <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>
        </Modal>
      </div>
    );
  }

  toggleModal = () => {
    const { modalVisible } = this.state;
    this.setState({ modalVisible: !modalVisible });
  }

}
