import React from 'react';
import Header from './Header';
import Social from './Social';
import Footer from './Footer';
import Aside from './Aside';


export default class Card extends React.Component {
    constructor() {
        super();
        this.state = {
            active: 'en'
        }
    }

    handleClick = (evt) => {
        let text = evt.target.innerText;
        text = text.toLowerCase()
        this.setState({active: text});
    }

    render() {
        return (
            <div className="main-card-container">
                <Header 
                    active={this.state.active}
                    method={this.handleClick}
                    />
                <main className="main-section">
                    <div className="main-container">
                        <div className="middle-part">
                            <Aside active={this.state.active}/>
                            <div className="right-side-part">
                                <img className="card-image" src="https://images.saatchiart.com/saatchi/909370/art/3439244/2509131-WLSEWNFF-7.jpg" alt="cat" />
                            </div>
                        </div>
                        <div className="bottom-part">
                            <Social />
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}
