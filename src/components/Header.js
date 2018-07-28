import React from 'react'

import Footer from './Footer'
import logo from '../assets/images/logo.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image">
                        <img className="logo" src={logo} alt="" />
                    </a>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
