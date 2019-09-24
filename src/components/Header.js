import React from 'react'

export default function Header(props) {
    const handleClick = props.method;

    return (
        <header className="header">
            <div className="main-header-container">
                <div className="lang-option-container" onClick={handleClick}>
                    <button className={`lang lang_1 ${props.active === 'en' ? 'active' : ''}`}>En</button>
                    <button className={`lang lang_2 ${props.active === 'fr' ? 'active' : ''}`}>Fr</button>
                    <button className={`lang lang_2 ${props.active === 'hi' ? 'active' : ''}`}>Hi</button>
                    <button className={`lang lang_2 ${props.active === 'gj' ? 'active' : ''}`}>Gj</button>
                </div>
                {/* <div className="close-option">X</div> */}
            </div>
        </header>
    )
}
