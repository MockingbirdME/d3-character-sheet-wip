import React from "react";
import "./CharacterSheet.css";
import CharacterSheetHeader from './header.js';

import CharacterSheetAttributes from './attributes';
import CharacterSheetResources from "./resources";
import CharacterSheetSkills from "./skills";

function CharacterSheet(params) {
  const [characterData, setCharacterData] = React.useState({});

  React.useEffect(() => {
    if (params.selectedCharacter) setCharacterData(params.selectedCharacter)
    else 
      fetch("/api/character")
        .then((res) => res.json())
        .then((data) => setCharacterData(data.message));
  }, []);

  console.log(characterData);
  if (!characterData.name) return "";

  const primaryAttributes = [];
  const secondaryAttributes = []
  const resources = [];

  characterData.attributes.forEach(attribute => {
    if (attribute.primaryAttribute) primaryAttributes.push(attribute);
    else if (attribute.resource) resources.push(attribute);
    else secondaryAttributes.push(attribute)
  })

  const primaryTab = (
    <div className="character_sheet__primary_tab">

      <CharacterSheetAttributes primaryAttributes={primaryAttributes} secondaryAttributes={secondaryAttributes} />
      
      <div className="character_sheet__primary_tab__main_content">
        <CharacterSheetResources resources={resources} />
        <CharacterSheetSkills skills={characterData.skills} />
      </div>

    </div>
  )

  return (
    <div className="character_sheet__container">
      <CharacterSheetHeader className="character_sheet__header" characterData={characterData}/>
      <div className="character_sheet__content">
        <div className="character_sheet__tabs">
          {primaryTab}

        </div>

      </div>
    </div>
  );
}

export default CharacterSheet;