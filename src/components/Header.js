import React from 'react'

import Footer from './Footer'
import logo from '../assets/images/logo.svg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image">
                        <img className="logo" src={logo} alt="" />
                    </a>
                    <h3>
                        Facem flori in multe culori.
                    </h3>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
