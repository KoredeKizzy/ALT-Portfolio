import React from 'react';
import '../Navbar/Navbar.css'
import Github from '../../img/github.png'

const Navbar = () => {
    return (
        <div className ="n-wrapper">
            <div className="image">
                <img src={Github} alt="github logo" />
            </div>
            <div className="n-left">
                <div className="n-name">GitHub PortFolio</div>
            </div>
            <div className="n-right"></div>
              {/* <button className="button n-button">
                Contact us
              </button> */}
        </div>
    )
}

export default Navbar