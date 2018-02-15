import React from 'react';
import Navbar from './Navbar';
import Body from './Body';
import Footer from './Footer';
import "./styles.css";

function App() {
    return (
        <div className="appContainer">
            <Navbar />
            <Body />
            <Footer />
        </div>
    );
}

export default App;
