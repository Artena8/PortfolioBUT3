import React from 'react';
import './Skills.css'; // Assure-toi d'avoir un fichier CSS pour styliser cette section

export const Skills: React.FC = () => {
  return (
    <div id="Skills" className="Skills">
      <h2>Mes compétences</h2>

      <div className="container">
        <h3>Mes Langages & Outils</h3>
        <div className="cards-row-1">
          <div className="competence-card">
            <div className="card-title-container">
              <img
                src="https://assets-global.website-files.com/6544b441193708790616f888/6544d0a1401d9558a3184287_Vectors-Wrapper.svg"
                loading="lazy"
                width="48"
                height="48"
                alt=""
                className="vectors-wrapper-4"
              />
              <div className="card-text-container">
                <div className="card-title card-title-1">Planification</div>
                <div className="card-subtitle">Gérer des projets</div>
              </div>
            </div>
            <div className="bullet-points-container">
              <div className="text-lg-regular">Méthode Agile</div>
              <div className="text-lg-regular">Scrum</div>
              <div className="text-lg-regular">Suite Atlassian</div>
              <div className="text-lg-regular">Microsoft Project (en apprentissage)</div>
            </div>
          </div>

          <div className="competence-card">
            <div className="card-title-container">
              <img
                src="https://assets-global.website-files.com/6544b441193708790616f888/6544d0a255ddf6b84a8d68d0_Vectors-Wrapper.svg"
                loading="lazy"
                width="48"
                height="48"
                alt=""
                className="vectors-wrapper-5"
              />
              <div className="card-text-container">
                <div className="card-title card-title-2">FRONT END</div>
                <div className="card-subtitle">l'interaction Utilisateur</div>
              </div>
            </div>
            <div className="bullet-points-container">
              <div className="text-lg-regular">HTML5</div>
              <div className="text-lg-regular">CSS / SCSS</div>
              <div className="text-lg-regular">Javascript</div>
              <div className="text-lg-regular">Bootstrap</div>
              <div className="text-lg-regular">PowerApps / Power Automate (en apprentissage)</div>
            </div>
          </div>

          <div className="competence-card">
            <div className="card-title-container">
              <img
                src="https://assets-global.website-files.com/6544b441193708790616f888/6544d0a4f1e63daf45c9facf_Vectors-Wrapper.svg"
                loading="lazy"
                width="48"
                height="48"
                alt=""
                className="vectors-wrapper-6"
              />
              <div className="card-text-container">
                <div className="card-title card-title-3">BACK-END</div>
                <div className="card-subtitle">Fonctionnement du programme</div>
              </div>
            </div>
            <div className="bullet-points-container">
              <div className="text-lg-regular">PHP</div>
              <div className="text-lg-regular">JAVA (IntelliJ / Eclispe)</div>
              <div className="text-lg-regular">Python</div>
              <div className="text-lg-regular">C#</div>
              <div className="text-lg-regular">ASP .NET</div>
              <div className="text-lg-regular">C</div>
            </div>
          </div>

          <div className="competence-card">
            <div className="card-title-container">
              <img
                src="https://assets-global.website-files.com/6544b441193708790616f888/6544d0e755ddf6b84a8d9d65_Vectors-Wrapper.svg"
                loading="lazy"
                width="48"
                height="48"
                alt=""
                className="vectors-wrapper-4"
              />
              <div className="card-text-container">
                <div className="card-title card-title-5">GESTION DONNEES</div>
                <div className="card-subtitle">Stocker les données</div>
              </div>
            </div>
            <div className="bullet-points-container">
              <div className="text-lg-regular">SQL</div>
              <div className="text-lg-regular">PostGreSQL</div>
              <div className="text-lg-regular">MySQL</div>
              <div className="text-lg-regular">MongoDB</div>
            </div>
          </div>

          <div className="competence-card">
            <div className="card-title-container">
              <img
                src="https://assets-global.website-files.com/6544b441193708790616f888/6544d0e6770c8ab9de1f8aaa_Vectors-Wrapper.svg"
                loading="lazy"
                width="48"
                height="48"
                alt=""
                className="vectors-wrapper-4"
              />
              <div className="card-text-container">
                <div className="card-title card-title-4">DevOps</div>
                <div className="card-subtitle">Intégrer les processus dans une équipe</div>
              </div>
            </div>
            <div className="bullet-points-container">
              <div className="text-lg-regular">Linux</div>
              <div className="text-lg-regular">Windows</div>
              <div className="text-lg-regular">Visual Studio / Visual Studio Code</div>
              <div className="text-lg-regular">Github</div>
              <div className="text-lg-regular">SVN</div>
            </div>
          </div>

          <div className="competence-card">
            <div className="card-title-container">
              <img
                src="https://assets-global.website-files.com/6544b441193708790616f888/6544d0e8f1e63daf45ca48cc_Vectors-Wrapper.svg"
                loading="lazy"
                width="48"
                height="48"
                alt=""
                className="vectors-wrapper-4"
              />
              <div className="card-text-container">
                <div className="card-title card-title-6">UI UX</div>
                <div className="card-subtitle">Se créer un personal branding</div>
              </div>
            </div>
            <div className="bullet-points-container">
              <div className="text-lg-regular">Figma</div>
              <div className="text-lg-regular">SVGator</div>
              <div className="text-lg-regular">Clip Paint Studio</div>
              <div className="text-lg-regular">Design Thinking</div>
            </div>
          </div>
        </div>

        <h3>On dit de moi que je suis ...</h3>
        <div className="cards-row-1">
          <div className="competence-card">
            <div className="card-title-container-2">
              <img
                src="https://assets-global.website-files.com/6544b441193708790616f888/6544d0a1401d9558a3184287_Vectors-Wrapper.svg"
                loading="lazy"
                width="48"
                height="48"
                alt=""
                className="vectors-wrapper-4"
              />
              <div className="card-text-container-2">
                <div className="card-title card-title-1">Responsable</div>
                <div className="card-subtitle">
                  Je fais preuve de responsabilité en assumant pleinement les conséquences de mes actions, en
                  reconnaissant mes erreurs, et en m'engageant à améliorer constamment mes compétences et ma
                  performance.
                </div>
              </div>
            </div>
          </div>

          <div className="competence-card">
            <div className="card-title-container-2">
              <img
                src="https://assets-global.website-files.com/6544b441193708790616f888/6544d0a255ddf6b84a8d68d0_Vectors-Wrapper.svg"
                loading="lazy"
                width="48"
                height="48"
                alt=""
                className="vectors-wrapper-5"
              />
              <div className="card-text-container-2">
                <div className="card-title card-title-2">Créative</div>
                <div className="card-subtitle">
                  Je démontre ma créativité en générant des idées novatrices, en abordant les défis avec un esprit
                  inventif et en apportant des solutions originales aux problèmes.
                </div>
              </div>
            </div>
          </div>

          <div className="competence-card">
            <div className="card-title-container-2">
              <img
                src="https://assets-global.website-files.com/6544b441193708790616f888/6544d0a4f1e63daf45c9facf_Vectors-Wrapper.svg"
                loading="lazy"
                width="48"
                height="48"
                alt=""
                className="vectors-wrapper-6"
              />
              <div className="card-text-container-2">
                <div className="card-title card-title-3">Organisée</div>
                <div className="card-subtitle">
                  Je suis une personne organisée, planifiant méthodiquement les tâches, et assurant une gestion
                  efficiente des ressources. Je me passionne pour la méthode Agile.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

