import React from 'react';

function Body() {
    const styles = {
        backgroundColor: "#F0117F",
        opacity: "0.5"
    }

    const thisIsMyContent = "Gig Nation"

    return (
        <div className="bodyBox">
            <div>
                <h3 style={styles}>{thisIsMyContent}</h3>
            </div>
            <div className="servicesBox">
                <ul style={{color: "white"}}>
                    <li>Quality Instruments</li>
                    <li>Instrument Repair</li>
                    <li>Sweet Sound Systems</li>
                    <li>Professional Boards</li>
                    <li>Lighting & Strobes</li>
                    <li>Delivery, Set-up, Tear-down</li>
                    <li>When you need it, we got it!</li>
                </ul>
            </div>
        </div>
    );
}

export default Body;
