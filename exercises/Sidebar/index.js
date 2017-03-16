import React from 'react';
import './Sidebar.css';


const Sidebar = () => {
  return (
    <div>
      <aside className="bg-light-blue Sidebar">
        <h3 className="ttu tracked bold navy ph3">Sidebar</h3>
        <ul className="list pl0 navy">
          <li className="ph3 pv2">List Reset</li>
          <li className="ph3 pv2">Removes bullets</li>
          <li className="ph3 pv2">Removes numbers</li>
          <li className="ph3 pv2">Removes padding</li>
        </ul>
      </aside>

      <main className="ph3 Sidebar__body">
        <h3 className="ttu tracked bold">Main Content Area</h3>
        <img src="http://placehold.it/600x400" />
        <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>

        <img src="http://placehold.it/600x400" />
        <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>

        <img src="http://placehold.it/600x400" />
        <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>

        <img src="http://placehold.it/600x400" />
        <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>

        <img src="http://placehold.it/600x400" />
        <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>
      </main>
    </div>
  );
};

export default Sidebar;
