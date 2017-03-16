import React from 'react';
import './VerticalCentering.css';


const VerticalCentering = () => {
  return (
    <div>
      <div className="bg-red white mb4 center VerticalCentering__container">
        Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock.
      </div>

      <div className="mb4">
        <div className="bg-red white pa3 ttu tracked bold">
          Bacon
        </div>
        <div className="bg-light-blue navy pa3">
          Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.
        </div>
      </div>

      <div className="bg-red white relative vh-50">
        <div className="translate-center">Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock.</div>
      </div>
    </div>
  );
};

export default VerticalCentering;
