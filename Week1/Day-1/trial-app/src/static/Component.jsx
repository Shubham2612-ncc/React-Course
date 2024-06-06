import React from 'react';

const StaticCard = ()=> {
    return (
        <div className="card">
            <div className="cardSection">
                <h2>Mobile Operating System</h2>
                <ul>
                    <li>Android</li>
                    <li>BlackBerry</li>
                    <li>iPhone</li>
                    <li>Windows Phone</li>
                </ul>
            </div>
            <div className="cardSection">
                <h2>Mobile Manufacturer</h2>
                <ul>
                    <li>Samsung</li>
                    <li>HTC</li>
                    <li>MicroMax</li>
                    <li>Apple</li>
                </ul>
            </div>
        </div>
    )
}

export default StaticCard;