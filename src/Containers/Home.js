import React from 'react'

export default function Home() {

  setTimeout(()=> {
    document.querySelector(".preloader").style.display = "none"
  }, 2000)

  
  
  return (


    <div className='body'>

        <div className="preloader">
        <h1>Chargement, veuillez patienter</h1>
        <span className="loader"></span>

    </div>
      <h2 className='h2Body'> Bienvenue ! </h2>

        <p className='pBody1'> Fraîchement reconverti dans le milieu du développement web, Après m'être souvenu que c'est une voie toute trouvée pour un geek, j'ai enchaîné deux formations dans le secteur afin d'apprendre l'art du code,
        je suis fullstack, mais plutôt orienté front-end malgré tout, curieux de nature, et tendant au perfectionnisme, je cherche constamment à m'améliorer, à level-up comme j'aime à dire.
        Côté techs, vous pourrez avoir les précisions sur la page les concernant, mais je suis majoritairement axé JS </p>

        <p className='pBody1'> De caractère assez extraverti, je sait m'adapter à une équipe et travailler à la meilleure ambiance de travail au sein de celle ci.
        Face à un problème divers, je suis pugnace, et cherche à le résoudre coûte que coûte </p>
    </div>
  )
}
