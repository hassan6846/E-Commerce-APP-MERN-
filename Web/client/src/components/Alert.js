import React, { useState } from 'react';
import './Alert.css';
import { Link } from 'react-router-dom';

function Alertbar() {
  const [showAlert, setShowAlert] = useState(true);

  const closeAlert = () => {
    setShowAlert(false);
  };

  if (!showAlert) {
    return null; // Do not render the alert if showAlert is false
  }

  return (
    <div className={`Alert ${showAlert ? 'show' : 'hide'}`}>
      <div className='wrapper'>
        {/* 1 */}
        <div>
          <p>+1 408 666 7812</p>
        </div>
        {/* 1 */}

        {/* 2 */}
        <div>
          <p>
            Sign up today and <span>GET 20% OFF</span> on your first order{' '}
            <Link className='signup_link' to="/signup">| Sign Up Now</Link>
          </p>
        </div>
        {/* 2 */}

        {/* 3 */}
        <div className='closebtn' onClick={closeAlert}>
          <img src='/close.svg' alt='Close button' className='svg' />
        </div>
        {/* 3 */}
      </div>
    </div>
  );
}

export default Alertbar;
