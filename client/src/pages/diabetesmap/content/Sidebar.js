import React, { useState } from 'react';
import MKBox from 'components/MKBox';

import guidelinelIcon from 'assets/images/guideline.jpg'; // The icon for the button

const Sidebar = () => {
  const [showFrame, setShowFrame] = useState(false);

  const iconContainerStyle = {
    position: 'relative',
    top: '20%',  // Adjusted to lower the icon position
    left: '5%', 
    zIndex: 2,
    cursor: 'pointer'
  };

  const frameStyle = {
    position: 'absolute',
    top: 'calc(100% + 5px)', // Position the frame just below the icon
    left: '10px', 
    width: '90%',  // Responsive width
    maxWidth: '700px', // Maximum width to maintain usability
    minWidth: '300px', // Minimum width to ensure content visibility
    borderRadius: '10px',
    backgroundColor: 'white',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
    zIndex: 1000,
    display: showFrame ? 'block' : 'none',
  };

  return (
    <MKBox position="relative" zIndex="15" style={{ padding: '10px' }}>
      <div style={iconContainerStyle} onMouseEnter={() => setShowFrame(true)} onMouseLeave={() => setShowFrame(false)}>
        <img src={guidelinelIcon} alt="Quick Map Guide" style={{ width: '50px', height: '50px' }} />
      </div>
      <div style={frameStyle}>
        <table style={{ width: '100%' }}>  
          <tbody>
            <tr>
              <td style={{ textAlign: "left", paddingRight: "20px", paddingLeft: "20px" }}>Move Map:</td>
              <td style={{ textAlign: "left" }}>
                <strong>Click and drag with the left mouse button.</strong>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "left", paddingRight: "20px", paddingLeft: "20px" }}>See GP Info:</td>
              <td style={{ textAlign: "left" }}>
                <strong>Hover over GP icons.</strong>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "left", paddingRight: "20px", paddingLeft: "20px" }}>Zoom:</td>
              <td style={{ textAlign: "left" }}>
                <strong>Scroll mouse wheel up to zoom in, down to zoom out.</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </MKBox>
  );
};

export default Sidebar;
