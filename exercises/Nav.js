import React from 'react';

const viewOptions = {
  OFF_CANVAS_NAV: 'Off-canvas Nav',
  MODAL: 'Responsive and Animated Modal',
  SIDEBAR: 'Sidebar (100% Height) and Scrollable Main Area',
  MEDIA_OBJECT: 'Media Object',
  FIXED_HEADER: 'Fixed Header',
  VERTICALLY_CENTER: 'Vertically Center Content',
};

const Nav = ({ goTo }) => {
  const options = Object.keys(viewOptions).map((key, idx) => {
    return (
      <li key={ idx }
        className="mb1 pv1 pointer dim"
        onClick={ () => goTo(key) }>
        { viewOptions[key] }
      </li>
    );
  });

  return (
    <div className="mw8 center pa2">
      <h3 className="blue ttu tracked">Exercises</h3>
      <ul className="list f4 pl0">
        { options }
      </ul>
    </div>
  );
};

export default Nav;
