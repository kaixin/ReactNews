import React from 'react'
import logo from '../../images/logo.png'

class MobileHeader extends React.Component {
    render() {
        return (
            <div id="mobile">
                <header>
                    <img src={logo} alt="logo" />
                    <span>React News</span>
                </header>
            </div>
        )
    }
}

export default MobileHeader;