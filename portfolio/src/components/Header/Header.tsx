import React from 'react';
import './Header.css'; // Crée un fichier CSS pour les styles

export const Header: React.FC = () => {

    const menuBurger = () => {
        const menu = document.getElementById("monmenu");
        if (menu) {
        menu.classList.toggle("responsive");
        }
    };

    return (
        <header>
        <div className="menu" id="monmenu">
            <h3>CHEVALIER HELENA</h3>
            <a href="#Moi">A Propos</a>
            <a href="#Skills">Compétences</a>
            <a href="#Projets">Projets</a>
            <a href="#Formations">Formations</a>
            <a href="#Contact">Contact</a>
            <a className="MENOS" onClick={menuBurger}>☰</a>
        </div>
        </header>
    );
};
