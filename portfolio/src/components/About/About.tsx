// src/components/About.js
import React from 'react';
import './About.css'; // Create a CSS file for styles

export const About = () => {
    return (
        <div id="Moi" className="APropos">
            <h2>HELENA CHEVALIER</h2>
            <div className="Moi">
                <div className="content">
                    <div className="text">
                        <p>Bonjour, je m’appelle Héléna Chevalier, 19 ans. <b>étudiante en 2eme année en Informatique à l’IUT de Gustave-Eiffel</b>.</p>
                        {/* Add more paragraphs as needed */}
                    </div>
                    <div className="image">
                        <img src="./img/me.png" alt="moi" />
                    </div>
                </div>
                <a href="./pdf/CV_CHEVALIER_HELENA.pdf" className="btncv">Voir mon CV</a>
            </div>
        </div>
    );
};
