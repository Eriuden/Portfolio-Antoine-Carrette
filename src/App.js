
import './App.css';
import Header from './Components/Header';
import { Routes, Route } from 'react-router-dom';
import Techs from './Containers/Techs';
import Creations from './Containers/Creations';
import Footer from './Components/Footer';
import Home from './Containers/Home';
import QuiSuisJe from './Containers/QuiSuisJe';

/*
Plan d'action
Une page de présentation, qui fera un peu office de CV
Tout d'abord, après le header avec titre et tof, un petit texte d'intro
Puis, une bannière des langages et tech sur lesquels je taf
Ensuite, les divers projets sur lesquels j'ai taffé, avec des liens sur une page récap pour chacun
*/

//A noter, sans l'élément home, la route / provoque des bugs, il vaut mieux limiter le code dans App en dehors des single app


function App() {

  return (
    
    <div className="App">

      <Header/>

      <div className='body-app'>

        <Routes>
          
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path='techs' element={<Techs/>}/>
          <Route exact path='creations' element={<Creations/>}/>
          <Route exact path='quiSuisJe' element={<QuiSuisJe/>}/>
        </Routes>

      </div>
      


      

        <Footer/>

    </div>
  );
}



export default App;
