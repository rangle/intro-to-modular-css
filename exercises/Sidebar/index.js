import React from 'react';
import './Sidebar.css';


const Sidebar = () => {
  return (
    <div>
      <aside className="bg-aqua Sidebar">
        <h3 className="caps bold navy px2">Sidebar</h3>
        <ul className="list-reset navy">
          <li className="px2 py1">List Reset</li>
          <li className="px2 py1">Removes bullets</li>
          <li className="px2 py1">Removes numbers</li>
          <li className="px2 py1">Removes padding</li>
        </ul>
      </aside>

      <main className="px2 Sidebar__body">
        <h3 className="caps bold">Main Content Area</h3>
        <img className="mx-auto" src="http://placehold.it/600x400" />
        <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>

        <img className="mx-auto" src="http://placehold.it/600x400" />
        <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>

        <img className="mx-auto" src="http://placehold.it/600x400" />
        <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>

        <img className="mx-auto" src="http://placehold.it/600x400" />
        <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>

        <img className="mx-auto" src="http://placehold.it/600x400" />
        <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>
      </main>
    </div>
  );
};

export default Sidebar;
