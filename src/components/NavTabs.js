import React from 'react';
import '../styles/Navbar.css';


const styles = {
  navbarStyle: {
    background: '#282c34',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 25px 5px',
    alignItems: 'center',
    borderBottom: '4px solid #3bb99b',
    position: 'fixed',
    zIndex: '10',
    left: '0',
    right: '0',
    height:'40px',
  },

  navitemStyle: {
    maxWidth: '1060px',
    color:'white',
    display: 'flex',
    justifyContent: 'flex-end',
  },

  navanchorStyle:{
    color: 'green',
    textDecoration:'none',
    padding: '8px 25px',
    transition: 'all 0.5s ease',
  }
}
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav style = {styles.navbarStyle} className="navbar">
      <ul className="nav nav-tabs menu" style = {styles.navitemStyle}>
        <li className="nav-item">
          <a 
            href="#About" style = {styles.navanchorStyle}
            onClick={() => handlePageChange('About')}
            // This is a conditional (ternary) operator that checks to see if the current page is "About"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Portfolio" style = {styles.navanchorStyle} 
            onClick={() => handlePageChange('Portfolio')}
            // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Contact" style = {styles.navanchorStyle} 
            onClick={() => handlePageChange('Contact')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Resume" style = {styles.navanchorStyle} 
            onClick={() => handlePageChange('Resume')}
            // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTabs;
