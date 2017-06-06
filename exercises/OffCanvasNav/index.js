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
      transform: `translate3d(${ offset }, 0, 0)`,
      transition: `transform 300ms ease-in-out`,
    };

    return (
      <div>
        <aside className="bg-navy absolute top-0 left-0 bottom-0 w-50 z--1">
        </aside>

        <main className="vh-100 bg-white flex flex-column" style={ styles }>
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
