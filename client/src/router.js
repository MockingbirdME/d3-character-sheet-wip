import React from "react";
import {Route, Routes} from "react-router-dom";
import Characters from './pages/characters';
import CharacterSheet from "./pages/character-sheet";
import {CharacterContextProvider} from "./contexts/characters";

const Router = (props) => (
  <CharacterContextProvider>
    <Routes>
        <Route path="/" element={<Characters />} /> {/* Make a Home Page at some point */}
        <Route path="/characters" element={<Characters />} />    
        <Route path="/character/:characterId" element={<CharacterSheet />} />     
    </Routes>
  </CharacterContextProvider>
); 

export default Router;
