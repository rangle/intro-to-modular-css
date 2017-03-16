import React, { Component } from 'react';
import Radium from 'radium';
import Header from './Header';


@Radium
class OffCanvasNav extends Component {

  constructor(props) {
    super(props);
    this.state = { sidebarVisible: false };
  }

  render() {
    const { sidebarVisible } = this.state;
    const offset = sidebarVisible ? '50%' : '0';
    const styles = {
      transform: '',
      transition: `transform 300ms ease-in-out`,
    };

    return (
      <div>
        <aside className="bg-navy">
        </aside>

        <main className="bg-white flex flex-column" style={ styles }>
          <Header hamburgerAction={ this.toggleSidebar } />
          <div className="pa2 flex-auto overflow-scroll">
            <img src="http://placehold.it/600" />
            <img src="http://placehold.it/600" />
            <img src="http://placehold.it/600" />
            <img src="http://placehold.it/600" />
            <img src="http://placehold.it/600" />
          </div>
        </main>

      </div>
    );
  }

  toggleSidebar = () => {
    const { sidebarVisible } = this.state;
    this.setState({ sidebarVisible: !sidebarVisible });
  }

}

export default OffCanvasNav;
