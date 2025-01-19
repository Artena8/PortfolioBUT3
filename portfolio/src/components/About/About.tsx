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
                        <p>Bonjour, je m’appelle Héléna Chevalier, 19 ans. <b>étudiante en 2eme année en Informatique à l’IUT de
                            Gustave-Eiffel</b>. J'ai toujours été passionnée par les sciences et la technologie, c'est pourquoi j'ai
                        décidé de poursuivre mes études dans ce domaine.</p>
                        <p>Je suis impatiente de voir ce que l'avenir me réserve dans <b>le domaine de l'informatique</b> et
                        j'espère pouvoir contribuer à l'innovation et à l'avancement de la technologie.</p>
                        <p>En dehors de l’informatique, j’aime voyager et découvrir de nouvelles cultures. Je me passionne également
                        pour l’univers de la fantasy sous toutes ses formes (<b>Cinéma, littérature</b>) qui est un genre capable
                        de surmonter la barrière du réel pour laisser libre court à sa <b>créativité</b>.</p>
                        <p>Je suis passionnée par la <b>méthodologie Agile</b> et son approche dynamique de la gestion de projets.
                        Je cherche à me former d'avantage à ces méthodes avec <b>Altassian</b> notamment ou par d'autres moyens.
                        </p>
                        <p id="alte"><b>Je suis actuellement en alternance à la CNAV en tant que développeuse C#</b></p>
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
