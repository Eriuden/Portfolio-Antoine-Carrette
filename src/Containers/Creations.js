import React from "react";
import { useState } from "react";
import "../App.css";

export default function Creations() {
  const [toggleCréations, setToggleCréations] = useState(false);
  const [toggleCréations2, setToggleCréations2] = useState(false);
  const [toggleCréations3, setToggleCréations3] = useState(false);
  return (
    <div className="creations">
      <h2 className="NomProjet">Creations/experiences</h2>

      <div className="Projet">
        <h3 className="NomProjet">Gunplaza</h3>

        <p
          className="scrollP"
          onClick={() => setToggleCréations(!toggleCréations)}
          //On inverse la valeur, donc, on la rend true, DONC, le menu s'affiche
        >
          Un Hook Usestate me cache, cliquez sur moi
          {toggleCréations && (
            //{ pour ouvrir l'action du hook
            //première condition (donc ici si le hook est true, or avec le onClick, il l'est devenu)
            //puis &&, qui signifie "tu fais ça ensuite"
            //On précise ce qui s'affiche alors, ce contenu html soumis au hook doit être entre parenthèses
            //y'a plus qu'a refermer avec la seconde }
            <>
              <p className="ProjetP">
                Projet de fin de formation pour ma première formation. Crée avec
                Symfony majoritairement (comporte du JS et CSS/bootstrap).
              </p>

              <p className="ProjetP">
                Site d'e commerce sur le thème des maquettes gunpla, comporte un
                système de communication avec la base de données, d'affichage
                des articles, tri des articles par pages, CRUD, et système
                utilisateurs sécurisé
              </p>
            </>
          )}
        </p>
      </div>

      <div className="Projet">
        <h3 className="NomProjet">Carte-Age</h3>
        <a className="linkC" href="https://github.com/Eriuden/Carte-age">
          Lien Github
        </a>

        <p
          className="scrollP"
          onClick={() => setToggleCréations2(!toggleCréations2)}
        >
          Un hook Usestate me cache, cliquez sur moi
          {toggleCréations2 && (
            <>
              <p className="ProjetP">
                Projet de fin de la seconde formation. Crée avec React et
                NodeJs.
              </p>

              <p className="ProjetP">
                Site d'e commerce à propos des cartes à jouer et collectionner,
                comporte un système d'inscription/connexion, un CRUD, un système
                d'affichage des articles, et une section utilisateurs où ces
                derniers peuvent créer des sujets de discussion. Le site m'a
                nottament permis de tester les hooks, l'intérêt principal de
                React, par exemple,tout comme ce que vous lisez en ce moment, le
                menu déroulant est géré par un Hook, de même que l'affichage des
                différents éléments.
              </p>
            </>
          )}
        </p>
      </div>

      <div className="Projet">
        <h3 className="NomProjet">Beowulf: the kaijus observator</h3>
        <a
          className="linkC"
          href="https://github.com/Eriuden/Beowulf-Kaijus-Observator"
        >
          Lien Github
        </a>

        <p
          className="scrollP"
          onClick={() => setToggleCréations3(!toggleCréations3)}
        >
          Un hook Usestate me cache, cliquez sur moi
          {toggleCréations3 && (
            <>
              <p className="ProjetP">
                Juste un projet personnel comme ça, j'avais envie de continuer
                après un gros gain de motivation suite à un hackathon triomphal.
                Crée avec React et NodeJs, BDD en mongoDB.
              </p>

              <p className="ProjetP">
                Site d'une agence secrète fictive, Beowulf, le nom vient d'un
                héros de la mythologie scandinave connu pour sa propension au
                meurtre de monstre. L'agence est chargé de la surveillance
                (voire traque dans le cas des menaces) des kaijus, au cas où
                vous ne savez pas ce qu'est un kaiju, dites vous que Godzilla
                est le plus célèbre (d'ou son surnom de roi des kaijus). Un
                formulaire de connexion rend impossible l'accès du site à
                n'importe qui, et pas de formulaire d'inscription ici, il faut
                respecter la logique, on ne va pas donner au premier quidam des
                dossiers top secrets ! Une fois connecté, la page se charge, on
                voit des cartes qui, si l'on clique dessus, affiche le profil de
                la bète, dans lequel on trouve des informations primordiales,
                notamment, si il est une menace pour l'humanité et/ou la nature.
                Un agent à la possibilité de créer un dossier, si l'on observe
                un nouveau kaiju, il peut mettre à jour les informations à son
                sujet, enfin, si l'animal est tué par l'agence où un autre
                kaiju, il est possible d'effacer le dossier.
              </p>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
