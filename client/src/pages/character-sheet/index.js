import React from "react";
import "./CharacterSheet.css";
import CharacterSheetHeader from './header.js';

import CharacterSheetAttributes from './attributes';
import CharacterSheetResources from "./resources";

function CharacterSheet(params) {
  const [data, setData] = React.useState({});
  console.log(params.selectedCharacter);

  React.useEffect(() => {
    if (params.selectedCharacter) setData(params.selectedCharacter)
    else 
      fetch("/api/character")
        .then((res) => res.json())
        .then((data) => setData(data.message));
  }, []);

  const primaryTab = (
    <div className="character_sheet__primary_tab">

      <CharacterSheetAttributes characterData={data}/>
      
      <div className="character_sheet__primary_tab__main_content">
        <CharacterSheetResources characterData={data} />
        <div className="character_sheet__skills" characterData={data}/>
      </div>

    </div>
  )

  return (
    <div className="character_sheet__container">
      <CharacterSheetHeader className="character_sheet__header" characterData={data}/>
      <div className="character_sheet__content">
        <div className="character_sheet__tabs">
          {primaryTab}

        </div>

      </div>
    </div>
  );
}

export default CharacterSheet;