import React from 'react';
import Radium from 'radium';
import {Motion, spring} from 'react-motion';
import './Modal.css';


const Modal = ({ title, isVisible, toggle, children }) => {
  const containerStyles = { display: isVisible ? '' : 'none' };
  const motionStyle = {
    y: spring(isVisible ? 0 : 150),
    opacity: spring(isVisible ? 1 : 0),
  };

  return (
    <Motion style={ motionStyle }>
      { ({ y, opacity }) => {
        return (
          <aside style={ containerStyles }
            className="fixed top-0 left-0 right-0 vh-100 flex items-center justify-center z-4 bg-black-60">

            <div style={ getModalStyles(y, opacity) }
              className="w-100 w-75-m w-50-ns bg-white Modal">

              <header className="bg-blue white flex items-center pv3 justify-center">
                <h3 className="w-100 ma0 bold tc truncate ttu tracked">{ title }</h3>

                <button className="bg-blue bn white pr4"
                  onClick={ toggle }>✖︎</button>
              </header>

              <div className="overflow-scroll ph4">
                { children }
              </div>
            </div>
          </aside>
        );
      }}
    </Motion>
  );
};

export default Radium(Modal);

/**
 * Utils
 */
function getModalStyles(y, opacity) {
  return {
    transform: `translate3d(0 , ${y}%, 0)`,
    opacity,
  };
}
